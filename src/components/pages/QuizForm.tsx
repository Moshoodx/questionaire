import React from "react";
import { Flex, List, ListItem, VStack, Button, Box, Text, Tooltip, HStack, Divider, Progress, IconButton, Spacer } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import { QUESTIONS } from "@/data/questions";

const options = [
  { name: 'Strongly Disagree', value: 1 },
  { name: 'Disagree', value: 2 },
  { name: 'Neutral', value: 3 },
  { name: 'Agree', value: 4 },
  { name: 'Strongly Agree', value: 5 },
];

interface Props {
  collectResponse: (data: { label: string; score: number; pos: number }) => void;
  goPrev?: () => void;
  goNext?: () => void;
  isLoading?: boolean;

  // 
  questionNo?: number;
  numberOfQuestions?: number;
  question?: typeof QUESTIONS[0]
}

export function QuizFormComponent({ questionNo = 1, numberOfQuestions = 5, question, ...props}: Props) {
    const [optionChosen, setOptionChosen] = React.useState<undefined | { label: string; score: number; pos: number; }>(undefined);
  const optionChosenInvalid = optionChosen === undefined;

  const progressValue = (questionNo / numberOfQuestions) * 100;

  const hasImageOptions = React.useMemo(() => question?.options.some((opt) => opt.displayType === "img"), [question]);

  return <VStack
      mt={24}
      maxW={'600px'}
      mx={'auto'}
      w={"100%"}
  >
    <Box
      border={`1px solid var(--third-color)`}
      color={'var(--primary-font-color)'}
      width={'100%'}
      bg={'white'}
      pt={5}
      pb={7}
      px={20}
      rounded={8}
    >
      <HStack>
        <Text fontSize={20} fontWeight={500}>Question {questionNo} of {numberOfQuestions}</Text>
        <Spacer />
        <HStack>
          <IconButton onClick={() => props.goPrev?.()} icon={<ArrowLeftIcon stroke="0.5" height={10} />} size={'xs'} aria-label="prev" />
          <IconButton onClick={() => props.goNext?.()} icon={<ArrowRightIcon stroke="0.5" height={10} />} size={'xs'} aria-label="next" />
        </HStack>
      </HStack>
      <Progress hasStripe value={progressValue} rounded={4} colorScheme="green" mt={2} />
    </Box>
    <Box
      color={'var(--primary-font-color)'}
      width={'100%'}
      bg={'white'}
      height={'fit-content'}
      mt={8}
      p={20}
      border={`1px solid var(--third-color)`}
      rounded={8}
    >
      <Flex flexDirection={'column'} textAlign={'left'}>
        <Text fontSize={24} fontWeight={{ base: 500, sm: 600 }}>
          {question?.question}
        </Text>
        <Text fontSize={18} fontWeight={300} maxW={800}>
          {question?.scenario}
        </Text>
      </Flex>

      <Text mt={8} fontSize={20} fontWeight={{ base: 500, sm: 600 }}>
        Choose from the options below:
      </Text>

      <List my={8} fontSize={18} spacing={!hasImageOptions ? 3 : undefined} display={hasImageOptions ? "flex" : undefined} gap={10} alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
        {question?.options.map((opt, index) => <ListItem key={index}>
          {opt.displayType === "button" ? <Button
            bg={opt.label === optionChosen?.label ? `var(--fourth-color)` : undefined}
            color={opt.label === optionChosen?.label ? `var(--third-color)` : `var(--secondary-color)`}
            onClick={() => setOptionChosen({ label: opt.label, score: opt.grade, pos: index })}
            _hover={{
              bg: undefined
            }}
          >{opt.label} {!hasImageOptions && <>:&nbsp;<Text fontWeight={400} ml={2}>{opt.description}</Text></>}</Button> : <Box
            onClick={() => setOptionChosen({ label: opt.label, score: opt.grade, pos: index })} rounded={8} height={150} width={150} p={4} border={opt.label === optionChosen?.label ? `2px solid var(--fourth-color)` : `2px solid var(--third-color)`} cursor={"pointer"}>
            <img src={opt.display as string} alt="Finish work" width={'auto'} height={'auto'} />
          </Box>}
        </ListItem>)}
      </List>

      <Divider />

      <HStack mt={8} w={'100%'} h={'100%'} justifyContent={'start'} alignItems={'start'} spacing={3}>
        <Tooltip hasArrow label={optionChosenInvalid ? 'Select an option to proceed' : undefined} borderRadius={4} pt={2}>
          <Button
            isLoading={props.isLoading}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={600}
            color={'white'}
            bg={optionChosen ? 'var(--secondary-color)' : 'grey'}
            rightIcon={<ArrowRightIcon color="white" height={15} width={15} style={{ marginTop: '4px' }} />}
            disabled={optionChosenInvalid}
            cursor={optionChosenInvalid ? 'not-allowed' : 'pointer'}
            _hover={{
              color: optionChosenInvalid ? `white` : undefined
            }}
            onClick={optionChosenInvalid ? undefined : (e) => {
              e.preventDefault();
              props?.collectResponse({ ...optionChosen });
              setOptionChosen(undefined);
            }}
          >
            Continue
          </Button>
        </Tooltip>
        {/* {!optionChosenInvalid && <Button
          display={{ base: 'none', md: 'inline-flex' }}
          variant="ghost"
          fontSize={'md'}
          fontWeight={600}
          color={`var(--primary-font-color)`}
          bg={`var(--primary-color)`}
          _hover={{
          }}
          borderRadius={8}
          paddingTop={1}
          onClick={() => setOptionChosen(undefined)}
        >
          Reset 
        </Button>} */}
      </HStack>
    </Box>
  </VStack>
}