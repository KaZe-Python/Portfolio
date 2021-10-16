import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Stash">
            <Container>
                <Title>
                    Stash <Badge>2021 - Work In Progress</Badge>
                </Title>
                <P>
                    Stash is an mobile phone app meant to help people remind expiration dates for their medicine, food, ecc.
                    You can even add the &quot;location&quot; of the phisical place where you stored it. It will be synchronized
                    with all your devices and completely encrypted. ( for Privacy ).
                    And when you&apos;ll be approaching the expiration date of a product, you&apos;ll be notified with a mail and a system notification.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#"> No Link - Needs to be made <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platforms </Meta>
                        <span>iOS / Android / WebApp </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack </Meta>
                        <span> Flutter, Firebase, Rust(w/Rocket) or Python(w/Django)</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/stash.jpg" alt="PyWebby"/>
            </Container>
        </Layout>
    )
}

export default Work