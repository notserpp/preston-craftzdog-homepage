import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'
import NoSsr from '../no-ssr.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-widthn initial-sacle=1" />
                <title> Preston Segura - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelDog />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main