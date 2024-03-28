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
          <Flex mt={4} maxW={'1366px'} gap={{ base: 4, sm: 8 }}>
            <Flex w={{ base: "100%", sm: "50%" }} flexDirection={'column'} justifyContent={"center"} textAlign={'left'} px={{ md: 0, base: 2 }}>
              <Box maxWidth={530}>
                <Text mt={-5} textAlign={"center"} className="inter-bold" color={"var(--primary-font-color)"} fontSize={{ base: 30, sm: "53px" }} fontWeight={700}>
                  Test Your
                </Text>
                <Text mt={-5} textAlign={"center"} className="inter-bold" color={"var(--primary-font-color)"} fontSize={{ base: 30, sm: "53px" }} fontWeight={700}>
                  Data Visualisation
                </Text>
                <Text mt={-5} textAlign={"center"} className="inter-bold" color={"var(--primary-font-color)"} fontSize={{ base: 30, sm: "53px" }} fontWeight={700}>
                  Literacy
                </Text>
                <Text textAlign={"center"} className="comic-neue-regular" color={"var(--primary-font-color)"} fontSize={{ base: 16, sm: 30 }} fontWeight={300} mt={4}>
                  Empower Your Decision Making with Interactive Quiz
                </Text>
              </Box>

              <HStack justifyContent={"center"}>
                <Button
                  w={'fit-content'}
                  mt={16}
                  fontSize={{ base: 14, sm: 18 }}
                  px={{ base: 8, sm: 12 }}
                  py={{ sm: 8, base: 4 }}
                  id="start-quiz-btn"
                  className="inter-bold"
                  onClick={() => router.push('/welcome')}
                  borderRadius={0}
                >
                  Start Quiz
                </Button>
                <Button
                  w={'fit-content'}
                  mt={16}
                  fontSize={{ base: 14, sm: 24 }}
                  px={{ base: 8, sm: 12 }}
                  py={{ sm: 8, base: 4 }}
                  className="inter-bold"
                  onClick={() => router.push('/welcome')}
                  borderRadius={0}
                  bg={"transparent"}
                  color={"#000000"}
                >
                  Learn More -
                </Button>
              </HStack>
            </Flex>

            <Box h={"fit-content"} w={{ base: "100%", sm: "fit-content" }} objectFit={"contain"} display={{ sm: "flex", base: "none" }} borderRadius={16} overflow={"hidden"}>
              <Image width={603} height={614} src={"/img/welcome-1.png"} alt={"VizQ"} />
            </Box>
          </Flex>

          <HStack my={40} flex={1} flexBasis={1} flexGrow={"1"} color={"var(--primary-font-color)"} maxW={'1366px'} gap={{ base: 2 }} flexDirection={{ sm: "row", base: "column" }} px={{ sm: 0, base: 4 }} alignItems={"start"}>
            <Box flex={1}>
              <Image width={405} height={207} src={"/img/w-1.jpeg"} alt={"VizQ"} />
              <Text mt={2} fontWeight={600} fontSize={{ base: 16, sm: 24 }}>Download Viz guidelines</Text>
              <Text fontWeight={400} fontSize={{ base: 14, sm: 20 }}                              >Effective Data Visualisation</Text>
              <Text mt={4} fontWeight={400} fontSize={{ base: 12, sm: 17 }} fontStyle={"italic"}>
                Create effective data visualizations by following evidence-based guidelines, considering data type, goals, and audience preferences. Combine data-driven insights with compelling design elements for informative and visually appealing visuals.
                Download the guideline for impactful visualizations.
              </Text>
              <Link
                href="https://drive.google.com/drive/folders/1xXPnPyq_I57HVngBJaY3l9458WK9BiTm?usp=sharing"
                target="_blank"
                display={"block"}
                w={'fit-content'}
                bg={"var(--primary-color)"}
                color={"white"}
                mt={8}
                fontSize={{ base: 14, sm: 18 }}
                px={{ base: 4, sm: 8 }}
                py={{ sm: 4, base: 2 }}
                className="inter-bold"
              >
                Download
              </Link>
            </Box>
            <Box flex={1}>
              <Image width={405} height={207} src={"/img/w-2.jpeg"} alt={"VizQ"} />
              <Text mt={2} fontWeight={600} fontSize={{ base: 16, sm: 24 }}>Viz Review App</Text>
              <Text fontWeight={400} fontSize={{ base: 14, sm: 20 }}>
                Let AI review your Viz
              </Text>
              <Text mt={4} fontWeight={400} fontSize={{ base: 12, sm: 17 }} fontStyle={"italic"}>Creating effective data visualizations is crucial. Al tools can offer feedback on clarity, coherence, color choices, and overall impact, improving communication and presentation effectiveness.</Text>
              <Link
                href="https://chat.openai.com/g/g-WCvnPr1wW-vizcritique-pro"
                display={"block"}
                w={'fit-content'}
                bg={"var(--primary-color)"}
                color={"white"}
                mt={8}
                fontSize={{ base: 14, sm: 18 }}
                px={{ base: 4, sm: 8 }}
                py={{ sm: 4, base: 2 }}
                className="inter-bold"
                onClick={() => router.push('/welcome')}
              >
                Review
              </Link>
            </Box>
            <Box flex={1}>
              <Image width={405} height={207} src={"/img/w-3.jpeg"} alt={"VizQ"} />
              <Text mt={2} fontWeight={600} fontSize={{ base: 16, sm: 24 }}>Download Viz guidelines</Text>
              <Text fontWeight={400} fontSize={{ base: 14, sm: 20 }}                              >Use Rubric to Assess your Viz Effectivenessn</Text>
              <Text mt={4} fontWeight={400} fontSize={{ base: 12, sm: 17 }} fontStyle={"italic"}>
                Use a rubric to assess visualization effectiveness by evaluating data accuracy, visual design, and user experience. This structured approach ensures the visualization meets goals, effectively communicates information, and is supported by research for reliability.
              </Text>
              <Link
                href="https://drive.google.com/drive/folders/1xXPnPyq_I57HVngBJaY3l9458WK9BiTm?usp=sharing"
                target="_blank"
                display={"block"}
                w={'fit-content'}
                bg={"var(--primary-color)"}
                color={"white"}
                mt={8}
                fontSize={{ base: 14, sm: 18 }}
                px={{ base: 4, sm: 8 }}
                py={{ sm: 4, base: 2 }}
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
