import { Container, Box, Heading, SimpleGrid, Divider, Button } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import beachCitySmoothies from '../public/images/works/beach_city_smoothies.png'
import randomQuoteGenerator from '../public/images/works/randomquotegenerator_01.png'
import unoGame from '../public/images/works/uno_game.png'
import reactPortfolio from '../public/images/works/react_portfolio.png'
import Layout from '../components/layouts/article.js'
import NextLink from 'next/link'


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading align="center" as="h1" mb={4}>
                    Works
                </Heading>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section>
                            <WorkGridItem id="beachcitysmoothies" title="Beach City Smoothies" thumbnail={beachCitySmoothies}>
                                For-fun web development project for a great smoothie shop in Carlsbad.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="originalportfolio" title="Original React Portfolio" thumbnail={reactPortfolio}>
                                Giving my hand at a &quot;game&quot; based react portfolio.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="unogame" title="Online Uno Multiplatyer Game" thumbnail={unoGame}>
                                A project done at San Francisco University that allows up to 6 players to play Uno Online.
                            </WorkGridItem>
                        </Section>
                        <Section>
                            <WorkGridItem id="randomquotegenerator" title="Random Quote Generator" thumbnail={randomQuoteGenerator}>
                                A Quote generator that can give you all of the secrets of life.
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                    <Divider my={6} />
                    <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
            </Container>
        </Layout>
    )
}

export default Works