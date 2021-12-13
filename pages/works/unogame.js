import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Online Multiplayer Uno Game">
            <Container>
                <Title>
                    Online Multiplayer Uno Game (Currently not playable) <Badge>2018</Badge>
                </Title>
                <P>
                    Project that spanned over six months creating all Uno Objects, corresponding HTML, CSS, Javascript, and backend database for storing player information, deck, game state, etc.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://github.com/notserpp/Uno'>
                        https://github.com/notserpp/Uno <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript, Heroku</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Compatibility</Meta>
                        <span>Windows, Mac</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/uno_game.png" alt="uno1"></WorkImage>
                <WorkImage src="/images/works/uno_game_01.png" alt="uno2"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work