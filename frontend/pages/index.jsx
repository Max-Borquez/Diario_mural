import { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, FormLabel, Button,Container,Heading,HStack,Input,Stack,Table,Thead,Tr,Td,Th,Tbody } from "@chakra-ui/react";
import { getPublicaciones } from '../data/publicaciones';
import { useRouter } from 'next/router'
import { login } from  '../data/user'

const index = () => {
  const [rut, setRUT] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setRUT(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const response = await login(rut)
    if(response.status === 200) {
      localStorage.setItem('token', rut)
      router.push('./publicaciones')
    }
  }

  return (
    <>
      <Container maxW="container.xl" centerContent>
        <Heading as="h1" size="2xl" textAlign="center" mt="10">Login</Heading>
        <Stack my={5}>
          <FormControl>
            <FormLabel>Rut del usuario</FormLabel>
            <Input onChange={handleChange} />
          </FormControl>
          <Button onClick={onSubmit}>Ingresar</Button>
        </Stack>
      </Container>
    </>
  );
};
export default index;
