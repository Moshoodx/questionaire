"use client"

import React from "react";
import {
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Finish() {
  const router = useRouter();

  return (
    <VStack minH={'100dvh'} minWidth={'100dvw'} gap={0} bg={'var(--fourth-color)'}>
      <VStack
        mt={24}
        maxW={"780px"}
        w={{ base: "90%", md: undefined }} mx={"auto"}
      >
        <Text fontSize={30} fontWeight={{ base: 500, sm: 600 }}>Terms and Conditions</Text>

        <Box
          color={'var(--primary-font-color)'}
          width={'100%'}
          bg={'white'}
          height={'fit-content'}
          mt={8}
          p={{ base: 8, md: 20 }}
          border={`1px solid var(--fourth-color)`}
          rounded={8}
        ></Box>
      </VStack>
    </VStack>
  );
}
