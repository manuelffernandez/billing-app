'use client'
import { Skeleton, Stack } from '@chakra-ui/react'

const LoginLoading = () => {
  return (
    <Stack>
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
    </Stack>
  )
}

export default LoginLoading
