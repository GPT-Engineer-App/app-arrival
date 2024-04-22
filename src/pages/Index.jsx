import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaLock, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" minH="100vh" p={10}>
        <VStack align="start" spacing={5} w={{ base: "full", md: "50%" }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Simplify Your Workflow with CloudSaaS
          </Heading>
          <Text fontSize="xl" color="gray.600">
            CloudSaaS is the ultimate solution for managing your business operations seamlessly in the cloud. Enhance productivity, improve collaboration, and secure your data all in one platform.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3MTM3OTc5OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="500px" objectFit="cover" w={{ base: "full", md: "50%" }} mt={{ base: 10, md: 0 }} />
      </Flex>
      <Flex direction="column" align="center" justify="center" py={10}>
        <Heading as="h2" size="xl" mb={5}>
          Why Choose CloudSaaS?
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} spacing={10} w="full">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <FaRocket size="3em" />
            <Heading as="h3" size="lg" mt={4}>
              Fast Deployment
            </Heading>
            <Text mt={2}>Deploy applications and services at the speed of light with our automated systems.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <FaLock size="3em" />
            <Heading as="h3" size="lg" mt={4}>
              Secure Data
            </Heading>
            <Text mt={2}>Your data's security is our top priority with end-to-end encryption and compliance standards.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <FaCloud size="3em" />
            <Heading as="h3" size="lg" mt={4}>
              Cloud Integration
            </Heading>
            <Text mt={2}>Seamlessly integrate with other cloud services to enhance your business capabilities.</Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
