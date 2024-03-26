import React from "react";
import { Flex, List, ListItem, VStack, Button, Box, Text, Tooltip, HStack, Divider } from "@chakra-ui/react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const options = [
  { name: 'Strongly Disagree', value: 1 },
  { name: 'Disagree', value: 2 },
  { name: 'Neutral', value: 3 },
  { name: 'Agree', value: 4 },
  { name: 'Strongly Agree', value: 5 },
];

interface Props {
  proceedWithQuiz: (data: typeof options[0]) => void;
  isLoading?: boolean;
}

export function WelcomeSampleQuizComponent(props: Props) {
  const [optionChosen, setOptionChosen] = React.useState<undefined | typeof options[0]>(undefined);
  const optionChosenInvalid = optionChosen === undefined;

  return <VStack
      mt={24}
      maxW={'1440px'}
      mx={'auto'}
  >
    <Text fontSize={{ sm: 16, base: 24, md: 30 }} fontWeight={{ base: 500, sm: 600 }} textAlign={"center"}>Quick Pre-Quiz Check-In</Text>
    <Box
      color={'var(--primary-font-color)'}
      width={'100%'}
      bg={'white'}
      height={'fit-content'}
      mt={{ base: 4, md: 8 }}
      p={{ base: 8, md: 20 }}
      border={`1px solid var(--fourth-color)`}
      rounded={8}
    >
      <Flex flexDirection={'column'} textAlign={'left'}>
        <Text fontSize={{ base: 18, md: 24 }} fontWeight={{ base: 500, sm: 600 }}>
          How confident are you in your ability to select effective data visualizations?
        </Text>
      </Flex>

      <Text mt={8} fontSize={{ base: 14, md: 20 }} fontWeight={{ base: 400, md: 500 }}>
        Choose from the options below:
      </Text>

      <Flex gap={{ sm: 2, base: 2, md: 8, lg: 10 }} my={8} height={{ base: 20, md: 40 }} width={"100%"}>
        {options.map((option, index) => <Box w={"100%"} key={index}>
          <Button
            bg={option.name === optionChosen?.name ? `var(--fourth-color)` : `gray.100`}
            border={option.name === optionChosen?.name ? `2px solid var(--fourth-color)` : `2px solid #EDF2F7`}
            color={option.name === optionChosen?.name ? `var(--primary-color)` : `gray.600`}
            onClick={() => setOptionChosen(option)}
            _hover={{
              bg: undefined
            }}
            fontSize={{ base: 14, md: 28 }}
            height={"100%"}
            w={{ sm: "80%", base: "95%", md: "100%" }}
            borderRadius={{ sm: 8, base: 8, md: 36 }}
          >{option.value}</Button>
        </Box>)}
      </Flex>

      <Divider />

      <HStack mt={8} w={'100%'} h={'100%'} justifyContent={'start'} alignItems={'start'} spacing={3}>
        <Tooltip hasArrow label={optionChosenInvalid ? 'Select an option to proceed' : undefined} borderRadius={4} pt={2}>
          <Button
            isLoading={props.isLoading}
            display={{ md: 'inline-flex' }}
            fontSize={{ base: 14, md: 20 }}
            fontWeight={{ base: 500, md: 600 }}
            color={'white'}
            bg={optionChosen ? 'var(--primary-color)' : 'grey'}
            disabled={optionChosenInvalid}
            cursor={optionChosenInvalid ? 'not-allowed' : 'pointer'}
            _hover={{
              color: optionChosenInvalid ? `white` : undefined
            }}
            onClick={optionChosenInvalid ? undefined : (e) => {
              e.preventDefault();
              props?.proceedWithQuiz(optionChosen);
            }}
          >
            Continue
          </Button>
        </Tooltip>
        {!optionChosenInvalid && <Button
          fontSize={{ base: 14, md: 20 }}
          fontWeight={{ base: 500, md: 600 }}
          variant="ghost"
          color={`red.600`}
          bg={`red.100`}
          _hover={{
          }}
          borderRadius={8}
          onClick={() => setOptionChosen(undefined)}
        >
          Reset 
        </Button>}
      </HStack>
    </Box>
  </VStack>
}