'use client'

import { env } from '@/env'
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormValuesSchema = z.object({
  email: z.string().email(),
  loginToken: z.string().regex(/^\d{6}$/, 'Must be a number of 6 digits')
})

type FormValues = z.infer<typeof FormValuesSchema>

const LoginForm = () => {
  const [isLoadingToken, setIsLoadingToken] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
    getValues
  } = useForm<FormValues>({
    resolver: zodResolver(FormValuesSchema)
  })

  const onSubmit = async (values: FormValues) => {
    const { email, loginToken } = values
    try {
      const res = await axios.post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login/${email}`, { loginToken })
      console.log(res)
    } catch (error) {
      console.log('login submit error', error)
    }
  }
  console.log(errors)
  return (
    <Container marginTop={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginBottom={5} isInvalid={!!errors?.email}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' autoComplete='off' placeholder='your@email.com' {...register('email')} />
          {errors.email ? (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          ) : (
            <FormHelperText>We'll never share your email.</FormHelperText>
          )}
        </FormControl>
        <FormControl marginBottom={5} isInvalid={!!errors?.loginToken}>
          <FormLabel>Token</FormLabel>
          <Input type='text' autoComplete='off' {...register('loginToken')} />
          <FormErrorMessage>{errors.loginToken?.message}</FormErrorMessage>
        </FormControl>
        <ButtonGroup>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Login'}
          </Button>
          <Button
            type='button'
            disabled={isLoadingToken}
            onClick={async () => {
              const email = getValues('email')
              setIsLoadingToken(true)
              try {
                const res = await axios.post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login/${email}/code`)
                console.log(res)
              } catch (error) {
                console.log('generate token error', error)
              } finally {
                setIsLoadingToken(false)
              }
            }}
          >
            {isLoadingToken ? 'Requesting token' : 'Send login token'}
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  )
}

export default LoginForm
