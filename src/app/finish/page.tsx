"use client"

import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  List,
  ListItem,
  Tooltip,
  VStack,
  useToast,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { WelcomeTermsAndConditionsComponent } from "@/components/pages/WelcomeTermsAndConditions";
import { WelcomeSampleQuizComponent } from "@/components/pages/WelcomeSampleQuiz";
import { FirestoreDB } from "@/config";
import { FormInputComponent } from "@/components/form/Input";

export default function Finish() {
  const router = useRouter();
  const search = useSearchParams();

  const resultId = search.get("id");
  const feedbackKey = search.get("groupKey");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const toast = useToast();

  const data = React.useMemo(() => {
    const item = localStorage.getItem("feedback-" + feedbackKey);
    if (item) {
      return JSON.parse(item);
    }

    return null;
  }, [feedbackKey]);


  async function onSubmit({ comment = null }: any) {
    if (!resultId) {
      toast({
        title: 'Error',
        description: 'Your response could not be recorded',
        status: 'error',
        duration: 2000,
      })
      return;
    }

    await setDoc(doc(FirestoreDB, "feedback", resultId), { comment });
    localStorage.clear();
    router.push('/');

    toast({
      title: 'Success 🙂',
      description: 'Your response has been recorded, thank you.',
      status: 'success',
      duration: 5000,
    });
  }

  return (

    <VStack minH={'100dvh'} minWidth={'100dvw'} gap={0} bg={'var(--primary-color)'}>
      <VStack
        mt={24}
        maxW={"780px"}
        w={{ base: "90%", md: 0 }} mx={"auto"}
      >
        <Text fontSize={30} fontWeight={{ base: 500, sm: 600 }}>Feedback</Text>
        <Box
          color={'var(--primary-font-color)'}
          width={'100%'}
          bg={'white'}
          height={'fit-content'}
          mt={8}
          p={{ base: 8, md: 20 }}
          border={`1px solid var(--third-color)`}
          rounded={8}
        >
          <Flex flexDirection={'column'} textAlign={'left'}>
            <Text textAlign={{ base: "left", md: "center" }} fontSize={{ base: 16, md: 24 }} fontWeight={{ base: 500, sm: 600 }}>
              {data?.feedback || "No comment"}
            </Text>
          </Flex>

          <Text mt={8} fontSize={14} fontWeight={{ base: 500 }}>
            Enter your comment below:
          </Text>

          <HStack w={'100%'} h={'100%'} justifyContent={'start'} alignItems={'start'} spacing={3} width={"100%"}>
            <form style={{ width: "100%" }}>
              <VStack width={"100%"}>
                <FormInputComponent hideLabel label="feedback" inputType="textarea" error={errors.comment}
                  textareaProps={{
                    fontSize: {
                      base: 14,
                      md: 16,
                    },
                    resize: "none",
                    placeholder: "You can leave comments on what we can do to improve your expereince while using this quiz board.",
                    ...register('comment', {
                      minLength: { value: 4, message: 'Minimum length should be 4' },
                    }),
                    borderRadius: 8,
                    _focusVisible: {
                      boxShadow: `0 0 0 1px var(--fourth-color)`,
                      borderColor: `var(--fourth-color)`
                    },
                  }}
                />
                <Text fontSize={12}>Your answers are anonymous and help us improve the quiz.</Text>

                <Button
                  isLoading={isSubmitting}
                  fontSize={'md'}
                  fontWeight={500}
                  color={'white'}
                  bg={'var(--secondary-color)'}
                  cursor={'pointer'}
                  mt={4}
                  _hover={{
                    bg: undefined,
                  }}
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit your feedback
                </Button>
              </VStack>
            </form>
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
}
