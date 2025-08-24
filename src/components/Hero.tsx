import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const MotionBox = motion(Box);

export const Hero = () => {

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageContainerVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="space-between"
      minH="calc(100vh - 80px)"
      py={8}
      px={{ base: 4, md: 8, lg: 16 }}
    >
      <Box flex={1} maxW={{ lg: '50%' }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // @ts-ignore - Framer Motion types issue with Chakra UI
          transition={{ duration: 0.8 }}
        >
          <Text color="brand.400" fontSize="lg" mb={2}>
            Hi, my name is
          </Text>
          <Heading as="h1" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} mb={4}>
            Praseen Chilla
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            color="gray.400"
            mb={6}
          >
            I build things for the web.
          </Heading>
          <Text fontSize="lg" color="gray.300" mb={8} maxW="2xl">
            I'm a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused on
            building accessible, human-centered products.
          </Text>
          <Flex gap={4} mb={{ base: 8, lg: 0 }}>
            <Button
              as="a"
              href="#contact"
              colorScheme="brand"
              size="lg"
              rightIcon={<FaFileDownload />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.2s"
            >
              Get In Touch
            </Button>
            <Button
              as="a"
              href="#projects"
              variant="outline"
              size="lg"
              _hover={{ bg: 'whiteAlpha.100' }}
            >
              View My Work
            </Button>
          </Flex>
        </MotionBox>
      </Box>

      <MotionBox
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        // @ts-ignore - Framer Motion types issue with Chakra UI
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          as={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          // @ts-ignore - Framer Motion types issue with Chakra UI
          transition={{ duration: 0.5, delay: 0.2 }}
          w={{ base: '250px', md: '350px' }}
          h={{ base: '250px', md: '350px' }}
          borderRadius="full"
          overflow="hidden"
          borderWidth={4}
          borderColor="brand.500"
        >
          <Image
            src="/src/assets/image.jpg"
            alt="Praseen Chilla"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      </MotionBox>
    </Flex>
  );
};
