import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box as="header" position="fixed" w="100%" bg={bg} zIndex={10} boxShadow="sm">
      <Flex maxW="7xl" mx="auto" px={4} h={16} alignItems="center" justifyContent="space-between">
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          fontWeight="bold"
          fontSize="xl"
          color="brand.500"
        >
          Praseen
        </MotionBox>
        
        <Flex alignItems="center" gap={4}>
          <Flex as="nav" display={{ base: 'none', md: 'flex' }} gap={6}>
            {['About', 'Projects'].map((item) => (
              <Button
                key={item}
                as="a"
                href={`#${item.toLowerCase()}`}
                variant="ghost"
                _hover={{ color: 'brand.500', bg: 'transparent' }}
              >
                {item}
              </Button>
            ))}
          </Flex>
          <Button
            as="a"
            href="#contact"
            colorScheme="brand"
            size="sm"
            display={{ base: 'none', sm: 'inline-flex' }}
          >
            Get in Touch
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
