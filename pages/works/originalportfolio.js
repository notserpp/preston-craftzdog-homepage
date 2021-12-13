import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Original React Portfolio">
            <Container>
                <Title>
                    Original React Portfolio <Badge>2021</Badge> 
                </Title>
                <P>
                    My first attempt at a react portfolio with responsive background and &quot;gameplay&quot; like feel.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://react-portolio.herokuapp.com/'>
                    https://react-portolio.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML, CSS, Javascript, React, Heroku</span>
                </ListItem>
                <ListItem>
                    <Meta>Compatibility</Meta>
                    <span>Windows, Mac, iPhone, Android</span>
                </ListItem>
                </List>
                <WorkImage src="/images/works/reactportfolio_01.png" alt="reactportfolio1"></WorkImage>
                <WorkImage src="/images/works/reactportfolio_02.png" alt="reactportfolio2"></WorkImage>
                <WorkImage src="/images/works/reactportfolio_03.png" alt="reactportfolio3"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work