"use client"

import React from "react";
import { VStack, Text, Flex, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore"; 
import { ModalComponent } from "@/components";
import { Navbar } from "@/components/Navbar";
import { FormInputComponent } from "@/components/form/Input";
import { FirestoreDB } from "@/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [showRegisterationModal, toggleRegisterationModal] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data: any) {
    await setDoc(doc(FirestoreDB, "users", data.email), data);
    localStorage.setItem('QUESTIONAIRE_USER', data.email);
    router.push('/welcome');
  }

  return (
    <>
      <VStack minHeight={'100dvh'} minWidth={'100dvw'} gap={0}>
        <VStack color={'var(--primary-color)'} width={'100%'} bg={'var(--fourth-color)'} height={'100dvh'}>
          <Flex mt={48} flexDirection={'column'} maxW={'1160px'} textAlign={'center'}>
            <Text fontSize={{ base: 38, sm: 60 }} fontWeight={{ base: 500, sm: 600 }}>
              Improve Your Data Visualization Skills<br />Take the Quiz!
            </Text>
            <Text fontSize={{ base: 18, sm: 24 }} fontWeight={100} mt={8}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatum sapiente consequatur cupiditate excepturi placeat harum fuga quia molestias vitae!
            </Text>

            <Button
              w={'fit-content'}
              mx="auto"
              mt={24}
              fontSize={24}
              px={16}
              py={8}
              borderRadius={16}
              id="start-quiz-btn"
              onClick={() => toggleRegisterationModal(true)}
            >
              Start Quiz
            </Button>
          </Flex>
        </VStack>
      </VStack>

      <ModalComponent
        size={"lg"}
        isOpen={showRegisterationModal}
        title="Start Quiz"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus incidunt velit quis quidem natus."
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
                mb: 0
              }}
            />
            <FormInputComponent
              error={errors.email}
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
              inputProps={{
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
                mb: 0
              }}
            />
          </VStack>
        </form>
      </ModalComponent>
    </>
  );
}
