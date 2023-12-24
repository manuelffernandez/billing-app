'use client'

import { Button, ButtonGroup, Container, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

const LoginForm = () => {
  return (
    <Container marginTop={10}>
      <form>
        <FormControl marginBottom={5}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='your@email.com' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl marginBottom={5}>
          <FormLabel>Token</FormLabel>
          <Input type='text' />
        </FormControl>
        <ButtonGroup>
          <Button
            onClick={() => {
              console.log('login')
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              console.log('token')
            }}
          >
            Send login token
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  )
}

export default LoginForm
