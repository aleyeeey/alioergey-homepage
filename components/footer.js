import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Ali Örgey. All Rights reserved.
    </Box>
  )
}

export default Footer
