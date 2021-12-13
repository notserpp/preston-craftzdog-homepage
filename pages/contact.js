import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord,
    IoMail,
    IoLogoLinkedin
} from 'react-icons/io5'
import { Container, Heading, List, ListItem, Button, Link, Icon, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article.js'
import Section from '../components/section'
import NextLink from 'next/link'

const Contact = () => {
    return (
        <Layout>
            <Container>

                <Section delay={0.3}>
                    <Heading align="center" as="h1" mb={4}>
                        On the web
                    </Heading>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        <List align="center">
                            <ListItem>
                                <Link href="mailto: prestonsegura@gmail.com" target="_blank">
                                    <Button size="lg" variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />} >
                                        prestonsegura@gmail.com
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/prestonsegura/" target="_blank">
                                    <Button size="lg" variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />} >
                                        prestonsegura
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/notserpp" target="_blank">
                                    <Button size="lg" variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />} >
                                        @notserpp
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://twitter.com/PrestonSegura" target="_blank">
                                    <Button size="lg" variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />} >
                                        @PrestonSegura
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://discord.com/users/267059822057226254" target="_blank">
                                    <Button size="lg" variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />} >
                                        notserpp#0001
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.instagram.com/prestigepreston/" target="_blank">
                                    <Button size="lg" variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />} >
                                        @prestigepreston
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Section>

                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Return to home</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Contact