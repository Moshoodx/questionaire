import { Navbar } from "@/components/Navbar";
import { VStack, Box, Center, Text, Flex, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack minHeight={'100dvh'} minWidth={'100dvw'} gap={0}>
      <Navbar />
      <VStack color={'var(--primary-font-color)'} width={'100%'} bg={'var(--primary-color)'} height={'100dvh'}>
        <Flex mt={48} flexDirection={'column'} maxW={'1160px'} textAlign={'center'}>
          <Text fontSize={{ base: 38, sm: 60 }} fontWeight={{ base: 500, sm: 600 }}>
            Improve Your Data Visualization Skills<br />Take the Quiz!
          </Text>
          <Text fontSize={{ base: 18, sm: 24 }} fontWeight={100} mt={8}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatum sapiente consequatur cupiditate excepturi placeat harum fuga quia molestias vitae!
          </Text>

          <Button w={'fit-content'} mx="auto" mt={24} fontSize={24} px={16} py={8} pt={10} borderRadius={16} id="start-quiz-btn">
            Start Quiz
          </Button>
        </Flex>
      </VStack>
    </VStack>
  );
}
