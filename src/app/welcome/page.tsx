"use client"

import React from "react";
import {
  Box,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { WelcomeTermsAndConditionsComponent } from "@/components/pages/WelcomeTermsAndConditions";
import { WelcomeSampleQuizComponent } from "@/components/pages/WelcomeSampleQuiz";
import { FirestoreDB } from "@/config";
import { FormInputComponent } from "@/components/form/Input";
import { useForm } from "react-hook-form";
import { ModalComponent } from "@/components";
import { Link } from "@chakra-ui/next-js";

export default function Welcome() {
  const router = useRouter();
  const toast = useToast();

  const [showRegisterationModal, toggleRegisterationModal] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data: any) {
    try {
      await setDoc(doc(FirestoreDB, "users", data.email), data);
      localStorage.setItem('QUESTIONAIRE_USER', data.email);
      toast({
        title: 'Success 🙂',
        description: 'Your request was successfully recorded',
        status: 'success',
        duration: 2000,
      });
      setView(1);
      toggleRegisterationModal(false);
    } catch (error) {
      toast({
        title: 'Error 😡',
        description: 'Your request was not successful, please retry.',
        status: 'error',
        duration: 2000,
      });
    }
  }

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
      <VStack minH={'100dvh'} minWidth={'100dvw'} gap={0} bg={'var(--fourth-color)'}>
        <Box w={{ base: "90%", md: undefined }} mx={"auto"}>
          {view === 0 && <WelcomeTermsAndConditionsComponent
            proceedWithQuiz={() => {
              if (typeof localStorage.getItem("QUESTIONAIRE_USER") === "string") {
                return router.push("/quiz");
              }

              toggleRegisterationModal(true);
            }}
          />}
          {view === 1 && <WelcomeSampleQuizComponent
            proceedWithQuiz={beginQuiz}
            isLoading={processing}
          />}
        </Box>
      </VStack>

      <ModalComponent
        isCentered
        size={"lg"}
        isOpen={showRegisterationModal}
        title="Start Quiz"
        description="Welcome to VizIQ, the quiz test your chart selection knowledge."
        onClose={() => toggleRegisterationModal(!showRegisterationModal)}
        proceed={handleSubmit(onSubmit)}
        proceedButtonText="Start Quiz"
        isProcessing={isSubmitting}
      >
        <form>
          <VStack spacing={4}>
            <FormInputComponent
              error={errors.name}
              label="Name"
              placeholder="Enter your name"
              required
              inputProps={{
                fontWeight: 400,
                ...register('name', {
                  required: 'This is required',
                  minLength: { value: 4, message: 'Minimum length should be 4' },
                }),
                borderRadius: 8,
                _focusVisible: {
                  boxShadow: `0 0 0 1px var(--fourth-color)`,
                  borderColor: `var(--fourth-color)`
                },
              }}
              labelProps={{
                mb: 0,
                fontSize: "sm",
              }}
            />
            <FormInputComponent
              error={errors.email}
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
              inputProps={{
                fontWeight: 400,
                ...register('email', {
                  required: 'This is required',
                }),
                borderRadius: 8,
                _focusVisible: {
                  boxShadow: `0 0 0 1px var(--fourth-color)`,
                  borderColor: `var(--fourth-color)`
                },
              }}
              labelProps={{
                mb: 0,
                fontSize: "sm",
              }}
            />
          </VStack>
        </form>
        {/* <Text fontSize={12} fontWeight={300} opacity={0.8} mt={4}>By the button below, you agree to the <Link textDecoration={"underline"} target="_blank" href="/terms">terms and conditions</Link> in filling out the questions present.</Text> */}
        <Text fontSize={12} fontWeight={300} opacity={0.8} mt={4}>By the button below, you agree to the <Link textDecoration={"underline"} target="_blank" href="https://docs.google.com/document/d/1wgxOkgj791wMUgFVzrlszDnSNbHGCU85-KKZ81MBLI8/edit">terms and conditions</Link> in filling out the questions present.</Text>
      </ModalComponent>
    </>
  );
}
