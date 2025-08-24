import { Box, Button, VStack, Heading, Text, Input, Textarea, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, FormEvent, ChangeEvent } from 'react';

const MotionVStack = motion(VStack);

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '104d35a2-44e2-4f64-a085-a00d771ef0b6',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        toast({
          title: 'Message sent!',
          description: 'I\'ll get back to you soon!',
          status: 'success',
          duration: 5000,
          isClosable: true
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="section" id="contact" py={20} px={4}>
      <MotionVStack
        spacing={8}
        maxW="2xl"
        mx="auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <VStack textAlign="center" spacing={4} mb={8}>
          <Text color="brand.500" fontWeight="semibold">04. What's Next?</Text>
          <Heading as="h2" size="2xl" fontWeight="bold">
            Get In Touch
          </Heading>
          <Text color="gray.400" maxW="md">
            I'm currently looking for new opportunities. Whether you have a question or just want to
            say hi, I'll get back to you as soon as possible!
          </Text>
        </VStack>

        <Box as="form" w="100%" onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              bg="gray.700"
              borderColor="gray.600"
              _hover={{ borderColor: 'brand.500' }}
              _focus={{
                borderColor: 'brand.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
              }}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              bg="gray.700"
              borderColor="gray.600"
              _hover={{ borderColor: 'brand.500' }}
              _focus={{
                borderColor: 'brand.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
              }}
            />
            <Textarea
              name="message"
              placeholder="Your message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              bg="gray.700"
              borderColor="gray.600"
              _hover={{ borderColor: 'brand.500' }}
              _focus={{
                borderColor: 'brand.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
              }}
            />
            <Button
              type="submit"
              colorScheme="brand"
              size="lg"
              isLoading={isSubmitting}
              loadingText="Sending..."
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
              transition="all 0.2s"
              disabled={isSubmitting}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </MotionVStack>
    </Box>
  );
};
