import {Container, Heading, SimpleGrid} from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import pywebby from '../public/images/works/pywebby.png'
import wip from '../public/images/works/wip.jpg'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="pywebby" title="PyWebby Framework" thumbnail={pywebby}>
                        An open source python web framework!
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="stash" title="Stash!" thumbnail={wip}>
                        A user-friendly interface to keep track of objects stored.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="mercalli-network" title="Mercalli Network" thumbnail={wip}>
                        Mecalli Network is an internal social network of my HighSchool with multiple functionality
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works