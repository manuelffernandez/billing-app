'use client'
import { type ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import AuthSessionProvider from './AuthSessionProvider'

interface Props {
  children: ReactNode
}

const Providers = (props: Props) => {
  const { children } = props
  return (
    <>
      <ChakraProvider>
        {/* <AuthSessionProvider> */}
        {children}
        {/* </AuthSessionProvider> */}
      </ChakraProvider>
    </>
  )
}

export default Providers
