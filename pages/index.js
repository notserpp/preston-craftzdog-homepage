import { Container, Box, Heading, Image, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article.js'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I&apos;m a developer based in San Diego!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Preston Segura
                    </Heading>
                    <p>Surfer - Gamer - Sports Enthusiast </p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/prestonsegura.png"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I&apos;m a Technical Support Software Engineer at Brain Corp
                    who has a passion for coding. Currently working in the AI industry
                    with autonomous floor scrubbers, shelf scanners, and
                    TUG machines. I support global customers to solve challenges
                    with our product. I am hoping to move into a full time
                    coding career in Web Development.{' '}
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="works">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1994</BioYear>
                    Born in Las Vegas, NV.
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Completed my Bachelor&apos;s Degree in Computer Science at
                    San Francisco State University
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Worked at CodePath as a Technical Program Manager at School
                    teaching Students how to code in Swift.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Worked at Inside Real Estate as a Support Engineer.
                </BioSection>
                <BioSection>
                    <BioYear>2019 - Current</BioYear>
                    Works at Brain Corporation.
                </BioSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">Passions</Heading>
                <Paragraph>
                    {' '} <Link href="https://imgur.com/TAnhc" target="_blank">Surfing</Link>, Video Games, Music, NFTs, Machine Learning, and Food!
                </Paragraph>
            </Section>
        </Container>
        <Box align="center" my={4}>
                    <NextLink href="contact">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            Contact
                        </Button>
                    </NextLink>
                </Box>
        </Layout>
    )
}

export default Page
