import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Marktfee">
      <Container>
        <Title>
          Marktfee <Badge>2021</Badge>
        </Title>
        <P>
          A white-label marketplace solution. You can create your own
          marketplace and let providers create their own shops on your
          marketplace.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://shops.marktfee.app">
              https://shops.marktfee.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>express.js, React (Next.js), Node.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/marktfee-page.png" alt="Marktfee" />
      </Container>
    </Layout>
  )
}

export default Work
