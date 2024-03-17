"use client"

import React from "react";
import {
  Box,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { WelcomeTermsAndConditionsComponent } from "@/components/pages/WelcomeTermsAndConditions";
import { WelcomeSampleQuizComponent } from "@/components/pages/WelcomeSampleQuiz";
import { FirestoreDB } from "@/config";

export default function Welcome() {
  const router = useRouter();
  const toast = useToast();

  const [view, setView] = React.useState(0);
  const [processing, setProcessing] = React.useState(false);

  async function beginQuiz(data: { name: string; value: number; }) {
    if (!data) {
      toast({
        title: 'Error',
        description: 'Invalid option selected, please select the right value.',
        status: 'error'
      });
      return;
    }

    setProcessing(true);

    const userEmail = localStorage.getItem('QUESTIONAIRE_USER');
    if (!userEmail) {
      window.location.href = "/";
      return;
    }

    const usersRef = collection(FirestoreDB, "users");
    const q = query(usersRef, where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      localStorage.removeItem('QUESTIONAIRE_USER');
      window.location.href = "/";
      return;
    }

    const user = querySnapshot.docs[0].data();
    if (!user) {
      localStorage.removeItem('QUESTIONAIRE_USER');
      window.location.href = "/";
      return;
    }
    await setDoc(doc(FirestoreDB, "users", userEmail), { ...user, sample: data });
    toast({
      title: 'Success 🙂',
      description: 'Your response has been recorded',
      status: 'success',
      duration: 2000,
    });
    setProcessing(false);
    router.push('/quiz');
  }

  return (
    <>
      <VStack minH={'100dvh'} minWidth={'100dvw'} gap={0} bg={'var(--primary-color)'}>
        <Box w={{ base: "90%", md: 0 }} mx={"auto"}>
          {view === 0 && <WelcomeTermsAndConditionsComponent
            proceedWithQuiz={() => setView(1)}
          />}
          {view === 1 && <WelcomeSampleQuizComponent
            proceedWithQuiz={beginQuiz}
            isLoading={processing}
          />}
        </Box>
      </VStack>
    </>
  );
}
