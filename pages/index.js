import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'

import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon, EmailIcon, Icon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Mannheim, Germany
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ali Örgey
            </Heading>
            <p>Digital Nomad ( Developer / Gamer / Musician )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              alt=""
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ali.jpeg"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Freelancing Full Stack Developer & Software Engineer with over 2
            years experience focusing on scalable solutions for front and
            backend development. Passionate about creating high quality products
            and improving user experience in engaging and challenging projects.
            Currently working for{' '}
            <NextLink href="/works/marktfee">
              <Link>ciconia Software GmbH </Link>
            </NextLink>
            as a working student - Lead Software Developer.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              <u>2021 to present</u>
            </BioYear>
            <Paragraph>
              Working at ciconia Software GmbH in Mannheim, Germany as working
              student (Lead Software Developer)
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2020 to present</u>
            </BioYear>
            <Paragraph>Working freelance as a Software Developer</Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2018 to present</u>
            </BioYear>
            <Paragraph>
              Studying business informatics at University of Mannheim
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2020 to 2021</u>
            </BioYear>
            <Paragraph>
              Worked at Leaf Systems GmbH in Mannheim, Germany as working
              student (Software Developer)
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2019 to 2020</u>
            </BioYear>
            <Paragraph>
              Worked at Heidelberger Druckmaschinen AG in Walldorf, Germany as
              working student (IT project manager)
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2018 to 2019</u>
            </BioYear>
            <Paragraph>
              Worked at DATAGROUP SE (Remote) as working student (Service Desk
              Agent)
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2017 to 2018</u>
            </BioYear>
            <Paragraph>
              Worked at DATAGROUP SE in Stuttgart, Germany as Service Desk Agent
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2015</u>
            </BioYear>
            <Paragraph>
              Worked at ASZ GmbH & Co. KG in Heilbronn, Germany as IT system
              administrator
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>2012</u>
            </BioYear>
            <Paragraph>
              Completed High School in Friedrich-von-Alberti Gymnasium, Germany
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>
              <u>1993</u>
            </BioYear>
            <Paragraph>Born in Bad Friedrichshall, Germany</Paragraph>
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Things I ♥
          </Heading>
          <Paragraph>
            {' '}
            <Link href="https://www.youtube.com/watch?v=wl9NzroU_ZQ">
              Making music
            </Link>
            , Gaming, Movies
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/aleyeeey" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @aleyeeey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ali-örgey/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Ali Örgey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:ali@oergey.de" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={EmailIcon} />}
                >
                  Contact me!
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
