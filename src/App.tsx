import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Box bg="gray.900" color="white" minH="100vh">
      <Header />
      <Box as="main" maxW="7xl" mx="auto" px={4}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
