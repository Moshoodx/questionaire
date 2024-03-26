import React from "react";
import { Flex, List, ListItem, VStack, Button, Box, Text, Tooltip, HStack, Divider, Progress, IconButton, Spacer } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import { QUESTIONS } from "@/data/questions";

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

export function QuizFormComponent({ questionNo = 1, numberOfQuestions = 5, question, ...props }: Props) {
  const [optionChosen, setOptionChosen] = React.useState<undefined | { label: string; score: number; pos: number; }>(undefined);
  const optionChosenInvalid = optionChosen === undefined;

  const progressValue = (questionNo / numberOfQuestions) * 100;

  const hasImageOptions = React.useMemo(() => question?.options.some((opt) => opt.displayType === "img"), [question]);

  return <VStack
    my={24}
    mx={'auto'}
    w={"100%"}
  >
    <Box
      maxW={'600px'}

      border={`1px solid var(--fourth-color)`}
      color={'var(--primary-font-color)'}
      width={'100%'}
      bg={'white'}
      pt={5}
      pb={7}
      px={{ base: 8, md: 20 }}
      rounded={8}
    >
      <HStack w={"100%"}>
        <Text fontSize={{ base: 16, md: 20 }} fontWeight={500}>Question {questionNo} of {numberOfQuestions}</Text>
        <Spacer />
        <HStack>
          <IconButton onClick={() => props.goPrev?.()} icon={<ArrowLeftIcon stroke="0.5" height={10} />} size={'xs'} aria-label="prev" />
          <IconButton onClick={() => props.goNext?.()} icon={<ArrowRightIcon stroke="0.5" height={10} />} size={'xs'} aria-label="next" />
        </HStack>
      </HStack>
      <Progress color={"var(--primary-color)"} hasStripe value={progressValue} rounded={4} mt={2} />
    </Box>

    <Box
      maxW={'1440px'}
      color={'var(--primary-font-color)'}
      width={'100%'}
      bg={'white'}
      height={'fit-content'}
      mt={8}
      // p={20}
      p={{ base: 8, md: 20 }}
      border={`1px solid var(--fourth-color)`}
      rounded={8}
    >
      <Flex flexDirection={'column'} textAlign={'center'}>
        <Text fontSize={24} fontWeight={{ base: 500, sm: 600 }}>
          {question?.question}
        </Text>
        {/* <Text fontSize={18} fontWeight={300} maxW={800}>
          {question?.scenario}
        </Text> */}
      </Flex>

      <List mb={8} mt={16} fontSize={18} spacing={!hasImageOptions ? 3 : undefined} display={hasImageOptions ? "flex" : undefined} gap={10} alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
        {question?.options.map((opt, index) => <ListItem key={index}>
          {opt.displayType === "button" ? <Button
            bg={opt.label === optionChosen?.label ? `var(--fourth-color)` : undefined}
            color={opt.label === optionChosen?.label ? `var(--fourth-color)` : `var(--secondary-color)`}
            onClick={() => setOptionChosen({ label: opt.label, score: opt.grade, pos: index })}
            _hover={{
              bg: undefined
            }}
          >{opt.label}</Button> : <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => setOptionChosen({ label: opt.label, score: opt.grade, pos: index })} rounded={8} height={300} width={300} p={4} objectFit={"fill"} overflow={"hidden"} border={opt.label === optionChosen?.label ? `2px solid var(--primary-color)` : `2px solid var(--fourth-color)`} cursor={"pointer"}>
            <img src={opt.display as string} alt="Finish work" width={'auto'} height={'auto'} />
          </Box>}
        </ListItem>)}
      </List>

      <Divider />

      <HStack mt={8} w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} spacing={3}>
        <Tooltip hasArrow label={optionChosenInvalid ? 'Select an option to proceed' : undefined} borderRadius={4} pt={2}>
          <Button
            isLoading={props.isLoading}
            fontSize={'lg'}
            fontWeight={500}
            color={'white'}
            bg={optionChosen ? 'var(--primary-color)' : 'grey'}
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
      </HStack>
    </Box>
  </VStack>
}