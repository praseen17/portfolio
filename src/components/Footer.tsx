import { Box, Text, Link, Flex, Icon, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/praseen17', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/chilla-praseen-811428291/', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FaEnvelope, url: 'mailto:praseenchilla@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <Box as="footer" py={8} mt={12} borderTopWidth={1} borderColor="gray.700">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        px={4}
      >
        <Text color="gray.400" mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} Praseen. All rights reserved.
        </Text>
        
        <HStack spacing={6}>
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.url}
              isExternal
              aria-label={social.label}
              color="gray.400"
              _hover={{ color: 'brand.500', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              <Icon as={social.icon} boxSize={5} />
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};
