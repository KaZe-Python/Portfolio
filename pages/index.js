import NextLink from 'next/link'
import {Button, Container, Box, Link, Icon, Heading, Image,  List, ListItem, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section';
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

import {
    IoLogoTwitch,
    IoLogoInstagram,
    IoLogoGithub,
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Italy!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Bruno Pio Cosentini
                    </Heading>
                    <p>KaZe-Python (Python - Rust - JS/TS Programmer)</p>   
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/kaze.jpg" alt="profile image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Bruno is a quite young freelance developer, he&apos;s 16, and he&apos;s been programming since 2016/17ish when
                    he decided to undertake the coding journey. He&apos;s grandad was a Mechanical Engineer, the father&apos;s a lawyer, and
                    he trasferred the passion of engineering in general. He than decided to work hard in the hope of becoming an Electical Engineer, and 
                    a Computer Science Doctor.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Portfolio</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">Bio </Heading>
                <BioSection>
                    <BioYear>2005</BioYear>
                    Born in Naples, Italy.
                </BioSection>
                <BioSection>
                    <BioYear>2019 - current</BioYear>
                    Started G. Mercalli High School in Naples
                </BioSection>
                <BioSection>
                    <BioYear>2022 - 2024 (future)</BioYear>
                    In the hope of finishing High School cycle in Boston, Massachusetts, USA.
                    With the International Bachellourate. 
                </BioSection>
                <BioSection>
                    <BioYear>2025 - far future</BioYear>
                    Going to M.I.T in Boston, Massachusetts.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Social
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://instagram.com/brunopiocosentini__" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>@brunopiocosentini__</Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://github.com/KaZe-Python" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>KaZe-Python</Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://www.twitch.tv/kaze1943" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitch}/>}>kaze1943</Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page