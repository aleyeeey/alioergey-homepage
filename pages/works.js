import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbMarktfee from '../public/images/marktfee-page.png'
import thumbBelegcheck from '../public/images/tse_google_play.png'
import thumbDirPersonal from '../public/images/dir_personal.png'
import thumbNoImage from '../public/images/No-Image-Placeholder.svg.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="serviceplatform"
              title="Service Platform"
              thumbnail={thumbNoImage}
            >
              Service platform for renter of a housing association
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="marktfee"
              title="Marktfee"
              thumbnail={thumbMarktfee}
            >
              A white-label marketplace solution
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="tseapp"
              title="TSE Belegcheck"
              thumbnail={thumbBelegcheck}
            >
              A validation application to check via qr code if receipts are
              valid
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="dirpersonal"
              title="WSDL Caching"
              thumbnail={thumbDirPersonal}
            >
              A WSDL Cacher to store SOAP request from the database and display
              them on front-end without losing performance
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
