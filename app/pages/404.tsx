import { Box, Heading, Text, Button } from '@chakra-ui/react';
import NextLink from '../src/components/Contracts/NextLink/NextLink';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, purple.400, cyan.500, pink.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página não encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        Aparentemente a página não existe.
      </Text>
<NextLink href='/' text={
      <Button
        bgGradient="linear(to-r, purple.400, cyan.500, pink.600)"
        color="white"
        _hover={{bgGradient:"linear(to-r, pink.400, purple.500, cyan.600)", opacity:0.6}}
        _focus={{outline:'none'}}
        variant="solid">
       Voltar para início
      </Button>
    }
    target={null}/>
    </Box>
  );
}