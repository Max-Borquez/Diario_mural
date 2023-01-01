import { useState } from 'react'
import { getPublicacion, updatePublicacion } from '../../../data/publicaciones'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getPublicacion(context.query.publication)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {

    const [publicacion, setPublicacion] = useState(data)
    const router = useRouter()
    const { publication } = router.query

    const handleChange = (e) => {
        setPublicacion({
        ...publicacion,
        [e.target.name]: e.target.value
        })
    }

    const submitPublicacion = async (e) => {
        e.preventDefault()
        const response = await updatePublicacion(publication, publicacion)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Producto actualizado',
                showConfirmButton: true,
                text: 'La publicacion se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la publicacion'
            })
        }
    }

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar publicacion</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Titulo" handleChange={handleChange} name="titulo" placeholder="Titulo" type="text" value={publicacion.titulo}/>
                <InputForm label="Autor" handleChange={handleChange} name="autor" placeholder="Autor" type="text" value={publicacion.autor}/>
                <TextareaInput label="Descripcion" handleChange={handleChange} name="descripcion" placeholder="Descripcion" type="text" value={publicacion.descripcion}/>
                <InputForm label="Correo" handleChange={handleChange} name="correo" placeholder="Correo" type="text" value={publicacion.correo}/>
                <InputForm label="Domicilio" handleChange={handleChange} name="domicilio" placeholder="domicilio" type="text" value={publicacion.domicilio}/>
            </Stack>
            <HStack>
                <Button colorScheme="cyan" mt="10" mb="10" onClick={submitPublicacion}>Actualizar</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
            
        </Container>
    )
}

export default editar