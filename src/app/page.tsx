"use client"

import React from "react";
import { VStack, Text, Flex, Button, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore"; 
import { ModalComponent } from "@/components";
import { Navbar } from "@/components/Navbar";
import { FormInputComponent } from "@/components/form/Input";
import { FirestoreDB } from "@/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <VStack minHeight={'100dvh'} minWidth={'100dvw'} gap={0}>
        <VStack color={'var(--primary-color)'} width={'100%'} bg={'var(--fourth-color)'} height={'100dvh'}>
          <Flex mt={48} flexDirection={'column'} maxW={'1160px'} textAlign={'center'} px={{ md: 0, base: 2}}>
            <Text className="inter-bold" color={"var(--primary-font-color)"} fontSize={{ base: 24, sm: 60 }} fontWeight={{ base: 500, sm: 600 }}>
              Improve Your Data Visualization Skills<br />Take the Quiz!
            </Text>
            <Text className="comic-neue-regular" color={"var(--primary-font-color)"} fontSize={{ base: 18, sm: 24 }} fontWeight={300} mt={8}>
             Empower your decision making with interactive quiz
            </Text>

            <Button
              w={'fit-content'}
              mx="auto"
              mt={24}
              fontSize={{ base: 16, sm: 24}}
              px={{ base: 8, sm: 16 }}
              py={{ md: 8, base: 8 }}
              borderRadius={16}
              id="start-quiz-btn"
              className="inter-bold"
              onClick={() => router.push('/welcome')}
              // onClick={() => toggleRegisterationModal(true)}
            >
              Start Quiz
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </>
  );
}
