import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import VoxelPokemonLoader from '../voxel-pokemon-loader'

const LazyVoxelPokemon = dynamic(() => import('../voxel-pokemon'), {
  ssr: false,
  loading: () => <VoxelPokemonLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Ali Örgey - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelPokemon />
        {children}
      </Container>
    </Box>
  )
}

export default Main
