import {Box, Button, Container, FormControl, FormHelperText, FormLabel, Input, Square, Textarea, useColorModeValue } from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";

export default function Form() {
    return(
        <Container position={'absolute'} mt={10} p={5} background={useColorModeValue('white','gray.900')} boxShadow={"dark-lg"} w={'full'}>
            <CustomHeading text={'Fale com nós'} />
            <FormControl isRequired onSubmit={() => console.log('SUBMIT')}>
                <FormLabel htmlFor='name' mb={1} mt={1}>Nome</FormLabel>
                <Input id='name' placeholder='Seu nome' />
                <FormLabel htmlFor='e-mail'mb={1} mt={1}>E-mail</FormLabel>
                <Input type='email' id='e-mail' placeholder='Seu melhor e-emaii' />
                <FormLabel htmlFor='celular'mb={1} mt={1}>Celular</FormLabel>
                <Input id='celular' placeholder='Seu celular' />
                <FormLabel htmlFor='celular'mb={1} mt={1}>Mensagem</FormLabel>
                <Textarea resize='none' placeholder='Sua mensagem...'></Textarea>
                <Button colorScheme={'green'} mt={5} type='submit'>Enviar</Button>
            </FormControl>
        </Container>
    )
}