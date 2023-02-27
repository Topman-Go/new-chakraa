import React from 'react';
import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';
import Navbar from './component/Navbar';
import Herosplit from './component/Herosplit'
import GridListWithCTA from './component/GridListWithCTA';
import Testimonial from './component/Testimonial'
import Forms from './component/Forms'
import Footer from './component/Footer'
import Contact from './component/Contact'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Herosplit />
      <GridListWithCTA />
      <Testimonial />
      <Forms />
      <Contact />
      <Footer />
      
    </ChakraProvider>
    
  );
}

export default App;
