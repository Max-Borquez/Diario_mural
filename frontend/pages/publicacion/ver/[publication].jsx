import { useState } from 'react'
import { getPublicacion, updatePublicacion } from '../../../data/publicaciones'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Box, Text} from '@chakra-ui/react'
import { useRouter } from 'next/router'

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
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Card>
            <CardHeader>
                <Heading size='md'>{publicacion.titulo}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Anuncio
                    </Heading>
                    <Text pt='2' fontSize='xl'>{publicacion.descripcion}</Text>
                </Box>
                <HStack>
                    <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Autor
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {publicacion.autor}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Correo
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {publicacion.correo}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Domicilio
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {publicacion.domicilio}
                    </Text>
                </Box></HStack>
                </Stack>
            </CardBody>
            </Card>
            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/publicaciones')}>Volver</Button>
        </Container>
    )
}

export default ver