import { Flex, List, ListItem, ListIcon, VStack, Checkbox, Button, Box, Text } from "@chakra-ui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  proceedWithQuiz: () => void;
}

export function WelcomeTermsAndConditionsComponent(props: Props) {
  return <Box
    maxW={'1160px'}
    mx={'auto'}
    color={'var(--primary-font-color)'}
    width={'100%'}
    bg={'white'}
    height={'fit-content'}
    mt={24}
    p={{ base: 8, md: 20 }}
    border={`1px solid var(--fourth-color)`}
    rounded={8}
  >
    <Flex flexDirection={'column'} textAlign={'center'} mx={"auto"} w="fit-content">
      <Text className="font-inter" fontSize={{ base: 20, md: 24 }} fontWeight={{ base: 500, sm: 600 }}>
        Read the instructions
      </Text>
      <Text fontSize={{ base: 16, }} fontWeight={300} maxW={800} mt={4}>
        This Quiz test your knowledge on s selecting chart, and get feedback as  guidelines insight into how to choose one chart over another.
      </Text>
    </Flex>

    <VStack mt={16} w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} spacing={3}>
      <Button
        className="font-inter"
        as={'a'}
        fontSize={'md'}
        fontWeight={600}
        color={'white'}
        bg={'var(--primary-color)'}
        href={'#'}
        _hover={{
          bg: 'var(--primary-color)'
        }}
        onClick={props.proceedWithQuiz}
        px={16}
        py={8}
      >
        Begin Quiz
      </Button>

    </VStack>
  </Box>
}