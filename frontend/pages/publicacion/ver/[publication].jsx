import { useState } from 'react'
import { getPublicacion, updatePublicacion } from '../../../data/publicaciones'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'

export const getServerSideProps = async (context) => {
    const response = await getPublicacion(context.query.publication)
    return {
        props: {
            data: response.data
        }
    }
}

const ver = ({ data }) => {

    const [publicacion] = useState(data)

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Producto: {publicacion.titulo}</Heading>
        </Container>
    )
}

export default ver