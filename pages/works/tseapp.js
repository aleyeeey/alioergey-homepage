import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="TSE Belegcheck">
      <Container>
        <Title>
          TSE Belegcheck <Badge>2021</Badge>
        </Title>
        <P>
          This app checks receipts on their validity by scanning the qr code at
          the bottom of receipts.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://play.google.com/store/apps/details?id=com.leaf.tsecheck">
              https://play.google.com/store/apps/details?id=com.leaf.tsecheck{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React-Native, Node.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/tse_app.png" alt="TSE app picture 1" />
        <WorkImage src="/images/tse_app_2.png" alt="TSE app picture 2" />
      </Container>
    </Layout>
  )
}

export default Work
