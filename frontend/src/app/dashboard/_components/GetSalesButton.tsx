'use client'

import { env } from '@/env'
import { routes } from '@/utils/constants/routes'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const GetSalesButton = () => {
  return (
    <Button
      onClick={async () => {
        try {
          const res = await axios.get(`${env.NEXT_PUBLIC_BASE_URL}${routes.api.getSales}`)
          console.log('get sales response', res.data)
        } catch (error) {
          console.log('get sales error', error)
        }
      }}
    >
      Get sales
    </Button>
  )
}

export default GetSalesButton
