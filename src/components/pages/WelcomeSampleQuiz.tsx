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
      maxW={'780px'}
      mx={'auto'}
  >
    <Text fontSize={30} fontWeight={{ base: 500, sm: 600 }}>Quick Pre-Quiz Check-In</Text>
    <Box
      color={'var(--primary-font-color)'}
      width={'100%'}
      bg={'white'}
      height={'fit-content'}
      mt={{ base: 4, md: 8 }}
      p={{ base: 8, md: 20 }}
      border={`1px solid var(--third-color)`}
      rounded={8}
    >
      <Flex flexDirection={'column'} textAlign={'left'}>
        <Text fontSize={{ base: 18, md: 24 }} fontWeight={{ base: 500, sm: 600 }}>
          How confident are you in your ability to select effective data visualizations?
        </Text>
        <Text fontSize={{ base: 16, md: 20 }} fontWeight={300} maxW={800}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatum sapiente consequatur cupiditate excepturi placeat harum fuga quia molestias vitae!
        </Text>
      </Flex>

      <Text mt={8} fontSize={{ base: 16, md: 20 }} fontWeight={{ base: 500, sm: 600 }}>
        Choose from the options below:
      </Text>

      <List spacing={3} my={8} fontSize={18}>
        {options.map((option, index) => <ListItem key={index}>
          <Button
            bg={option.name === optionChosen?.name ? `var(--fourth-color)` : undefined}
            color={option.name === optionChosen?.name ? `var(--third-color)` : `var(--secondary-color)`}
            onClick={() => setOptionChosen(option)}
            _hover={{
              bg: undefined
            }}
            fontSize={{ base: 14, md: 16 }}
          >{option.name}</Button>
        </ListItem>)}
      </List>

      <Divider />

      <HStack mt={8} w={'100%'} h={'100%'} justifyContent={'start'} alignItems={'start'} spacing={3}>
        <Tooltip hasArrow label={optionChosenInvalid ? 'Select an option to proceed' : undefined} borderRadius={4} pt={2}>
          <Button
            isLoading={props.isLoading}
            display={{ md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={600}
            color={'white'}
            bg={optionChosen ? 'var(--secondary-color)' : 'grey'}
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
          display={{ base: 'none', md: 'inline-flex' }}
          variant="ghost"
          fontSize={'md'}
          fontWeight={600}
          color={`var(--primary-font-color)`}
          bg={`var(--primary-color)`}
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