import { Box, Heading, SimpleGrid, Text, Flex, Badge, Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A web application that does something amazing with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1a202c/4a5568',
  },
  {
    title: 'Project 2',
    description: 'A mobile app built with React Native for tracking daily activities.',
    tags: ['React Native', 'Firebase', 'Redux'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/2d3748/718096',
  },
  {
    title: 'Project 3',
    description: 'An e-commerce platform with payment integration and user authentication.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/2c5282/bee3f8',
  },
];

export const Projects = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const MotionBox = motion(Box);

  return (
    <Box as="section" py={20} id="projects">
      <Flex align="center" mb={12}>
        <Heading as="h2" size="xl" fontWeight="bold" whiteSpace="nowrap" mr={4}>
          My Projects
        </Heading>
        <Box flex={1} h="1px" bg="gray.600" />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <MotionBox
            key={project.title}
            bg={cardBg}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Box h={48} bg={`url('${project.image}')`} bgSize="cover" bgPosition="center" />
            <Box p={6}>
              <Flex justify="space-between" align="center" mb={3}>
                <Heading as="h3" size="md" color="brand.500">
                  {project.title}
                </Heading>
                <Flex>
                  {project.github && (
                    <Link href={project.github} isExternal mr={3}>
                      <Box as="span" fontSize="lg">
                        <ExternalLinkIcon />
                      </Box>
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} isExternal>
                      <Box as="span" fontSize="lg">
                        <ExternalLinkIcon />
                      </Box>
                    </Link>
                  )}
                </Flex>
              </Flex>
              <Text color="gray.400" mb={4} fontSize="sm">
                {project.description}
              </Text>
              <Flex wrap="wrap" gap={2} mt={4}>
                {project.tags.map((tag) => (
                  <Badge key={tag} colorScheme="brand" variant="subtle" px={2} py={1}>
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
