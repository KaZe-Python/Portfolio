import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="PyWebby">
            <Container>
                <Title>
                    PyWebby <Badge>2021</Badge>
                </Title>
                <P>
                    PyWebby is an open source, ultra-light, web app framework. It was a project initially developed with a guy found online but now almost discontinued.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/TomekPulkiewicz/pywebby">https://github.com/TomekPulkiewicz/pywebby <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platforms </Meta>
                        <span>Every hardware and software that can run Python!</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/pywebby.png" alt="PyWebby"/>
            </Container>
        </Layout>
    )
}

export default Work