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
    border={`1px solid var(--third-color)`}
    rounded={8}
  >
    <Flex flexDirection={'column'} textAlign={'left'}>
      <Text fontSize={{ base: 20, md: 24 }} fontWeight={{ base: 500, sm: 600 }}>
        Read the instructions
      </Text>
      <Text fontSize={{ base: 16, md: 18 }} fontWeight={300} maxW={800}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatum sapiente consequatur cupiditate excepturi placeat harum fuga quia molestias vitae!
      </Text>
    </Flex>

    <List spacing={3} my={8} fontWeight={{ base: 400, md: 500 }}>
      <ListItem fontSize={{ base: 14, md: 18 }}>
        <ListIcon minHeight={{ base: 4, md: 6 }} width={{ base: 4, md: 6 }} as={ExclamationCircleIcon} color={'var(--third-color)'} />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem fontSize={{ base: 14, md: 18 }}>
        <ListIcon minHeight={{ base: 4, md: 6 }} width={{ base: 4, md: 6 }} as={ExclamationCircleIcon} color={'var(--third-color)'} />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem fontSize={{ base: 14, md: 18 }}>
        <ListIcon minHeight={{ base: 4, md: 6 }} width={{ base: 4, md: 6 }} as={ExclamationCircleIcon} color={'var(--third-color)'} />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem fontSize={{ base: 14, md: 18 }}>
        <ListIcon minHeight={{ base: 4, md: 6 }} width={{ base: 4, md: 6 }} as={ExclamationCircleIcon} color={'var(--third-color)'} />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>

    <VStack mt={8} w={'100%'} h={'100%'} justifyContent={'start'} alignItems={'start'} spacing={3}>
      <Text fontSize={14} fontWeight={300} opacity={0.7}>By the button below, you agree to the terms and conditions in filling out the questions present.</Text>
      <Button
        as={'a'}
        fontSize={'md'}
        fontWeight={600}
        color={'white'}
        bg={'var(--secondary-color)'}
        href={'#'}
        _hover={{
          bg: 'var(--secondary-color)'
        }}
        onClick={props.proceedWithQuiz}
      >
        Begin Quiz
      </Button>

    </VStack>
  </Box>
}