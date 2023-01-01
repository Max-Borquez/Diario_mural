import { useState } from 'react'
import { Button,Container,Heading,HStack,Input,Stack,FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { createPublicacion } from '../data/publicaciones'
import InputForm from '/components/InputForm'
import TextareaInput from '../components/TextareaInput'
import { useRouter } from 'next/router'

const publicaciones = () => {
    const router = useRouter()
    const [publicacion, setPublicacion] = useState({
        titulo: "",
        autor: "",
        descripcion: "",
        correo: "",
        domicilio: ""
    })

    const handleChange = (e) => {
        setPublicacion({
            ...publicacion,
            [e.target.name]: e.target.value
        })
    }

    const submitPublicacion = (e) => {
        e.preventDefault()
        createPublicacion(publicacion).then(res => {
            console.log(res)
        })
    }

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Publicacion</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Titulo" handleChange={handleChange} name="titulo" placeholder="Titulo" type="text" value={publicacion.titulo}/>
                <InputForm label="Autor" handleChange={handleChange} name="autor" placeholder="Autor" type="text" value={publicacion.autor}/>
                <TextareaInput label="Descripcion" handleChange={handleChange} name="descripcion" placeholder="Descripcion" type="text" value={publicacion.descripcion}/>
                <InputForm label="Correo" handleChange={handleChange} name="correo" placeholder="Correo" type="text" value={publicacion.correo}/>
                <InputForm label="Domicilio" handleChange={handleChange} name="domicilio" placeholder="domicilio" type="text" value={publicacion.domicilio}/>
            </Stack>
            <HStack>
                <Button colorScheme="cyan" mt="10" mb="10" onClick={submitPublicacion} >Crear</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}



export default publicaciones