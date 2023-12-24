'use client'
import { type ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const Providers = (props: Props) => {
  const { children } = props
  return (
    <>
      <ChakraProvider>{children}</ChakraProvider>
    </>
  )
}

export default Providers
