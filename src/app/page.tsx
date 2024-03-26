"use client"

import React from "react";
import { VStack, Text, Flex, Button, Link, HStack, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore"; 
import { ModalComponent } from "@/components";
import { Navbar } from "@/components/Navbar";
import { FormInputComponent } from "@/components/form/Input";
import { FirestoreDB } from "@/config";
import { useRouter } from "next/navigation";
import { Image } from "@chakra-ui/next-js";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <VStack minHeight={'100dvh'} minWidth={'100dvw'} bg={'var(--fourth-color)'} gap={0}>
        <VStack color={'var(--primary-color)'} width={'100%'} minHeight={'100%'}>
          <Flex mt={48} maxW={'1440px'} gap={{ base: 4, sm: 8 }}>
            <Flex w={{ base: "100%", sm: "50%" }} flexDirection={'column'} justifyContent={"center"} textAlign={'left'} px={{ md: 0, base: 2 }}>
              <Text className="inter-bold" color={"var(--primary-font-color)"} fontSize={{ base: 24, sm: 30 }} fontWeight={700}>
                Improve Your Data Visualization Skills<br />Take the Quiz!
              </Text>
              <Text className="comic-neue-regular" color={"var(--primary-font-color)"} fontSize={{ base: 16, sm: 20 }} fontWeight={400} mt={4}>
                Empower your decision making with interactive quiz.
              </Text>

              <Button
                w={'fit-content'}
                mt={16}
                fontSize={{ base: 14, sm: 16 }}
                px={{ base: 8, sm: 12 }}
                py={{ sm: 8, base: 4 }}
                borderRadius={8}
                id="start-quiz-btn"
                className="inter-bold"
                onClick={() => router.push('/welcome')}
              >
                Start Quiz
              </Button>
            </Flex>

            <Box height={400} w={{ base: "100%", sm: "fit-content" }} objectFit={"contain"} display={{ sm: "flex", base: "none" }} borderRadius={16} overflow={"hidden"}>
              <img src={"/img/welcome.jpeg"} alt={"VizQ"} />
            </Box>
          </Flex>

          <HStack my={64} flex={1} flexBasis={1} flexGrow={"1"} color={"var(--primary-font-color)"} maxW={'1440px'} gap={{ base: 4, sm: 8 }} flexDirection={{ sm: "row", base: "column" }} px={{ sm: 0, base: 4 }} alignItems={"start"}>
            <Box flex={1}>
              <img src={"/img/w-1.png"} alt={"VizQ"} />
              <Text mt={2} fontWeight={600}>Download Viz guidelines</Text>
              <Text mt={4} fontWeight={400} fontSize={14}>
                Create effective data visualizations by following evidence-based guidelines, considering data type, goals, and audience preferences. Combine data-driven insights with compelling design elements for informative and visually appealing visuals.
                Download the guideline for impactful visualizations.
              </Text>
              <Link
                href="/"
                target="_blank"
                display={"block"}
                w={'fit-content'}
                bg={"var(--primary-color)"}
                color={"white"}
                mt={4}
                fontSize={{ base: 12, sm: 14 }}
                px={{ base: 4, sm: 8 }}
                py={{ md: 2, base: 4 }}
                borderRadius={4}
                className="inter-bold"
                onClick={() => router.push('/welcome')}
              >
                Download
              </Link>
            </Box>
            <Box flex={1}>
              <img src={"/img/w-2.png"} alt={"VizQ"} />
              <Text mt={2} fontWeight={600}>Let AI review your Viz</Text>
              <Text mt={4} fontWeight={400} fontSize={14}>Creating effective data visualizations is crucial. Al tools can offer feedback on clarity, coherence, color choices, and overall impact, improving communication and presentation effectiveness.</Text>
              <Link
                href="/welcome"
                display={"block"}
                w={'fit-content'}
                bg={"var(--primary-color)"}
                color={"white"}
                mt={4}
                fontSize={{ base: 12, sm: 14 }}
                px={{ base: 4, sm: 8 }}
                py={{ md: 2, base: 4 }}
                borderRadius={4}
                className="inter-bold"
                onClick={() => router.push('/welcome')}
              >
                Review
              </Link>
            </Box>
            <Box flex={1}>
              <img src={"/img/w-3.png"} alt={"VizQ"} />
              <Text mt={2} fontWeight={600}>Use Rubric to assess your Viz effectiveness</Text>
              <Text mt={4} fontWeight={400} fontSize={14}>
                Use a rubric to assess visualization effectiveness by evaluating data accuracy, visual design, and user experience. This structured approach ensures the visualization meets goals, effectively communicates information, and is supported by research for reliability.
              </Text>
              <Link
                href="/"
                target="_blank"
                display={"block"}
                w={'fit-content'}
                bg={"var(--primary-color)"}
                color={"white"}
                mt={4}
                fontSize={{ base: 12, sm: 14 }}
                px={{ base: 4, sm: 8 }}
                py={{ md: 2, base: 4 }}
                borderRadius={4}
                className="inter-bold"
                onClick={() => router.push('/welcome')}
              >
                Download
              </Link>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
