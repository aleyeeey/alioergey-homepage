import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="WSDL Caching">
      <Container>
        <Title>
          WSDL Caching <Badge>2020</Badge>
        </Title>
        <P>
          A WSDL Cacher to store SOAP request from the database and display them
          on front-end without losing performance
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.dir-personal.com">
              https://www.dir-personal.com
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, PHP, MySQL</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/dir_personal.png"
          alt="DIR Personal picture 1"
        />
        <WorkImage
          src="/images/dir_personal_2.png"
          alt="DIR Personal picture 2"
        />
      </Container>
    </Layout>
  )
}

export default Work
