import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Service Platform">
      <Container>
        <Title>
          Service Platform <Badge>2022</Badge>
        </Title>
        <P>
          A platform for renter of a housing association. Several different
          services by connecting external providers - from interannual
          consumption information to grocery orders, to delivering to an own
          packing station.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React (Next.js), Axios, React Redux, Tailwind CSS, Spring, Git,
              Jenkins, Docker
            </span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/No-Image-Placeholder.svg.png"
          alt="Service platform picture"
        />
      </Container>
    </Layout>
  )
}

export default Work
