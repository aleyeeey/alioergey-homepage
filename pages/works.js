import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbMarktfee from '../public/images/marktfee-page.png'
import thumbBelegcheck from '../public/images/tse_google_play.png'
import thumbDirPersonal from '../public/images/dir_personal.png'
import thumbNoImage from '../public/images/no-image.jpg'
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
            <WorkGridItem id="rateme" title="RateMe" thumbnail={thumbNoImage}>
              Infrastructure for test drives of cars at the customer
              Mercedes-Benz, consisting of backend, frontend and iOS app. This
              can be used to create test drives, generate reports, and view
              analytics on user ratings.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="microservices"
              title="Microservice Infrastructure"
              thumbnail={thumbNoImage}
            >
              Build a microservices infrastructure using nestJS to connect Zoho
              to the customer&apos;s unique requirements and automate processes
              with it
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="selztalschule"
              title="Selztalschule"
              thumbnail={thumbNoImage}
            >
              Development of a website for a school, as well as a headless CRM
              in Wordpress. Here, the API of Wordpress, with each entry in
              Wordpress, the entry is mirrored on the homepage. Thus Wordpress
              can be used as a CRM and the website can be designed freely.
            </WorkGridItem>
          </Section>
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
