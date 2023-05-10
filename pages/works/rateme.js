import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="RateMe">
      <Container>
        <Title>
          RateMe <Badge>2023</Badge>
        </Title>
        <P>
          Infrastructure for test drives of cars at the customer Mercedes-Benz,
          consisting of backend, frontend and iOS app. This can be used to
          create test drives, generate reports, and view analytics on user
          ratings.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              TypeScript, Next.js, Material-UI, Zustand, Java, Spring, Spring
              Boot, PostgreSQL, SwaggerUI, Git, Jenkins, Docker, Docker-Compose,
              Kubernetes
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/no-image.jpg" alt="RateMe picture" />
      </Container>
    </Layout>
  )
}

export default Work
