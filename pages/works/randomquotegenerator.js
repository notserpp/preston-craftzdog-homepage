import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Random Quote Generator">
            <Container>
                <Title>
                    Random Quote Generator <Badge>2018</Badge>
                </Title>
                <P>
                    Random Quote Generator that accesses the Quote API to give you all the needed knowledge in the world.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://random-quote-generator-preston.herokuapp.com/'>
                        https://random-quote-generator-preston.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript, Heroku</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Compatibility</Meta>
                        <span>Windows, Mac, iPhone, Android</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/randomquotegenerator_01.png" alt="randomquotegenerator"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work