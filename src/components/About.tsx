import { Box, Heading, Text, SimpleGrid, Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const About = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker',
    'Firebase',
  ];

  return (
    <Box as="section" py={20} id="about">
      <MotionVStack
        spacing={4}
        align="stretch"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Flex align="center" mb={12}>
          <Heading as="h2" size="xl" fontWeight="bold" whiteSpace="nowrap" mr={4}>
            About Me
          </Heading>
          <Box flex={1} h="1px" bg="gray.600" />
        </Flex>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <Box>
            <Text mb={4} color="gray.300">
              Hello! My name is Praseen and I enjoy creating things that live on the internet.
              My interest in web development started back in 2022 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a
              lot about HTML & CSS!
            </Text>
            <Text mb={4} color="gray.300">
              Fast-forward to today, and I've had the privilege of working at an advertising
              agency, a start-up, and a huge corporation. My main focus these days is building
              accessible, inclusive products and digital experiences at Upstatement for a variety of
              clients.
            </Text>
            <Text color="gray.300">
              I also recently launched a course that covers everything you need to build a web app
              with the Spotify API using Node & React.
            </Text>
          </Box>

          <Box>
            <Text mb={4} color="gray.300">
              Here are a few technologies I've been working with recently:
            </Text>
            <SimpleGrid columns={2} spacing={2} mt={4}>
              {skills.map((skill, index) => (
                <Flex key={index} align="center">
                  <Box
                    w={2}
                    h={2}
                    bg="brand.500"
                    borderRadius="full"
                    mr={2}
                    flexShrink={0}
                  />
                  <Text color="gray.300">{skill}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </MotionVStack>
    </Box>
  );
};
