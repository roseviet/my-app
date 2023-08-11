import { Center, Heading, Text, VStack } from "@chakra-ui/react";

import { Seo } from "@/components/seo";

const LandingPage = () => {
  return (
    <>
      <Seo title="UZ App" />
      <Center flexDirection="column" h="full">
        <VStack maxW="3xl" spacing="8">
          <Heading size="3xl">UZ APP</Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" color="muted">
            The custom app for UZ
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default LandingPage;
