import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Selztalschule">
      <Container>
        <Title>
          Selztalschule <Badge>2022</Badge>
        </Title>
        <P>
          Development of a website for a school, as well as a headless CRM in
          Wordpress. Here, the API of Wordpress, with each entry in Wordpress,
          the entry is mirrored on the homepage. Thus Wordpress can be used as a
          CRM and the website can be designed freely.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.selztalschule.de">
              https://www.selztalschule.de
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Tailwind CSS, Wordpress (headless CRM), Docker</span>
          </ListItem>
        </List>
        <WorkImage src="/images/no-image.jpg" alt="Selztalschule picture" />
      </Container>
    </Layout>
  )
}

export default Work
