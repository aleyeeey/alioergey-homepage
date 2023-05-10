import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Microservices">
      <Container>
        <Title>
          Microservices <Badge>2023</Badge>
        </Title>
        <P>
          Build a microservices infrastructure using nestJS to connect Zoho to
          the customer&apos;s unique requirements and automate processes with it
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Typescript, nestJS, Zoho API, Next.js, TailwindCSS, Git, Azure,
              Docker, Docker-Compose, Postman
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/no-image.jpg" alt="Microservices picture" />
      </Container>
    </Layout>
  )
}

export default Work
