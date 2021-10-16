import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Mercalli Network">
            <Container>
                <Title>Mercalli Network <Badge>2021 - Work In Progress </Badge></Title>
                <P>
                    Mercalli Network is an High School internal social-network meant to provide the students a forum for questions about the school,
                    an internal shop to <b>buy/sell</b> school books, a merch shop with the school logo.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#"> No Link - Needs to be made <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platforms </Meta>
                        <span>Web App</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> Angular, Firebase Auth, Django, Stripe</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/wip.jpg" alt="Mercalli Network" />
            </Container>
        </Layout>
    )
}

export default Work