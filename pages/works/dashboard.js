import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Admin Dashboard">
      <Container>
        <Title>
          Admin Dashboard <Badge>2022</Badge>
        </Title>
        <P>
          An Admin dashboard to manage users and subscriptions of users with
          REST
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React (Next.js), Tailwind CSS, Spring</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/dashboard.png"
          alt="Admin dashboard picture 1"
        />
      </Container>
    </Layout>
  )
}

export default Work
