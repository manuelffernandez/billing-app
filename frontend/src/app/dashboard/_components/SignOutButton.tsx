'use client'
import { Button } from '@chakra-ui/react'

const SignOutButton = () => {
  return (
    <Button
      colorScheme='red'
      onClick={async () => {
        console.log('sign out')
      }}
    >
      Log out
    </Button>
  )
}

export default SignOutButton
