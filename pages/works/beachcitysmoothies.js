import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Beach City Smoothies">
            <Container>
                <Title>
                    Beach City Smoothies <Badge>2019</Badge> 
                </Title>
                <P>
                    A for fun Project I did for a smoothie shop in Carlsbad. The best acai smoothies ever!
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://beachcitysmoothies.herokuapp.com/'>
                        https://beachcitysmoothies.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML, CSS, Javascript, PHP, Heroku</span>
                </ListItem>
                <ListItem>
                    <Meta>Compatibility</Meta>
                    <span>Windows, Mac, iPhone, Android</span>
                </ListItem>
                </List>

                <WorkImage src="/images/works/beachcitysmoothies_01.png" alt="beachcitysmoothies"></WorkImage>
                <WorkImage src="/images/works/beachcitysmoothies_02.png" alt="beachcitysmoothies"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work