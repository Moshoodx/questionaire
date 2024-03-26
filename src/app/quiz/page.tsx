"use client"

import React from "react";
import { nanoid } from "nanoid";
import {
  Box,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FirestoreDB } from "@/config";
import { QuizFormComponent } from "@/components/pages/QuizForm";
import { QUESTIONS as $QUESTIONS } from "@/data/questions";
import { ModalComponent } from "@/components";
import { CLASSES } from "@/data/class";
import { shuffleArray } from "@/utils/array";

type Answer = { label: string; score: number, pos: number };

export default function Quiz() {
  const router = useRouter();
  const toast = useToast();

  const QUESTIONS = React.useMemo(() => {
    return shuffleArray($QUESTIONS).slice(0, 10)
  }, []);

  const [processing, setProcessing] = React.useState(false);
  const [feedbackModal, setShowFeedbackModal] = React.useState(false);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState<Array<Answer | undefined>>(Array.from({ length: QUESTIONS.length }).map(() => undefined));
  const [feedBackStatus, setFeedbackStatus] = React.useState<{ feedback: string | undefined; isCorrect: boolean; }>();

  function collectResponse(data: Answer) {
    if (!score[questionIndex]) {
      setFeedbackStatus(() => {
        const question = QUESTIONS[questionIndex];
        const { feedback } = question?.options?.[data.pos] || {};

        return { isCorrect: question.score === data.score, feedback };
      })

      setScore((state) => {
        const newState = [...state];
        newState[questionIndex] = data;

        return newState;
      });
    }

    setShowFeedbackModal(true);
  }

  async function proceedFromFeedbackModal(data: any) {
    const newIndex = questionIndex + 1;
    if (typeof QUESTIONS[newIndex] !== "undefined") {
      setQuestionIndex(newIndex);
    }

    const isLastQuestion = QUESTIONS[questionIndex + 1] === undefined

    // Check all responses
    const allFilledResponses = score.every((d) => typeof d !== "undefined");
    if (!allFilledResponses && isLastQuestion) {
      setShowFeedbackModal(false);
      const index = score.findIndex((d) => d === undefined);
      goNext(index);

      toast({
        title: 'Missing response',
        description: 'Please fill out missing response',
        status: 'error',
        duration: 2000,
      });

      return;
    }

    const email = localStorage.getItem("QUESTIONAIRE_USER");

    if (!email) {
      window.location.href = "/";
      return;
    }

    if (isLastQuestion) {
      setProcessing(true);
      const totalExpectedScore = QUESTIONS.map((opt) => opt.score).reduce((a, b) => a + b, 0);
      const actualScore = score.map((opt) => opt?.score || 0).reduce((a, b) => a + b, 0);

      const totalScore = Math.round(actualScore / totalExpectedScore * 10);
      const userGroup = getUserGroup(totalScore);

      const id = nanoid();
      const userClass = CLASSES.find((cl) => cl.term === userGroup);

      if (!userClass) {
        alert("Please restart quiz");
        localStorage.clear();
        window.location.href = "/";

        return;
      }

      await setDoc(doc(FirestoreDB, "results", id), { score, group: userGroup, key: email, actualScore, totalScore });

      if (userClass?.key) {
        localStorage.setItem("feedback-" + userClass?.key, JSON.stringify({ ...userClass, score, totalScore }));
      }

      router.replace(`/finish?id=${id}&groupKey=${userClass?.key}`);
      return;
    }

    setProcessing(false);
    setShowFeedbackModal(false);

  }

  function getUserGroup(score: number) {
    if (score <= 3) {
      return "newbie";
    }
    if (score <= 6) {
      return "voyager";
    }
    if (score === 7) {
      return "hero";
    }
    if (score <= 8) {
      return "legend";
    }
    if (score === 10) {
      return "grandmaster";
    }

    return "newbie";
  }

  function goNext(index?: number) {
    if (typeof index === "number") {
      setQuestionIndex(index);
      return;
    }

    const newIndex = questionIndex + 1;
    if (typeof QUESTIONS[newIndex] !== "undefined") {
      setQuestionIndex(newIndex);
    }
  }

  function goPrev() {
    const newIndex = questionIndex - 1;
    if (typeof QUESTIONS[newIndex] !== "undefined") {
      setQuestionIndex(newIndex);
    }
  }

  const quizIsValid = typeof QUESTIONS[questionIndex] !== "undefined"

  return (
    <>
      <VStack minH={'100dvh'} minWidth={'100dvw'} gap={0} px={{ base: 4, md: 0 }} bg={'var(--fourth-color)'}>
        {quizIsValid && <QuizFormComponent
          collectResponse={collectResponse}
          isLoading={processing}
          numberOfQuestions={QUESTIONS.length}
          question={QUESTIONS[questionIndex]}
          questionNo={questionIndex + 1}
          goNext={goNext}
          goPrev={goPrev}
        />}
      </VStack>

      <ModalComponent
        size={"lg"}
        isOpen={feedbackModal}
        title={feedBackStatus?.isCorrect ? "Correct Answer" : "Wrong Answer"}
        onClose={() => setShowFeedbackModal(false)}
        proceed={proceedFromFeedbackModal}
        proceedButtonText={QUESTIONS[questionIndex + 1] ? "Next Question" : "Finish Quiz"}
        cancelButton={null}
        hideModalHeader
        isProcessing={processing}
        isCentered
      >
        <VStack spacing={4}>
          <Box>
            {feedBackStatus?.isCorrect && <Text fontSize={12} bg={'green.50'} color={'green.500'} px={3} py={1.5} fontWeight={600} rounded={12} borderWidth={2} borderColor={'green.200'}>Correct answer</Text>}
            {!feedBackStatus?.isCorrect && <Text fontSize={12} bg={'red.50'} color={'red.500'} px={3} py={1.5} fontWeight={600} rounded={12} borderWidth={2} borderColor={'red.200'}>Wrong answer</Text>}
          </Box>
          {feedBackStatus?.isCorrect ? <Text fontSize={60}>😊</Text> : <Text fontSize={60}>🫤</Text>}
          <Text fontWeight={600} fontSize={20} textAlign={'center'}>
            {feedBackStatus?.feedback}
          </Text>
        </VStack>
      </ModalComponent>
    </>
  );
}
