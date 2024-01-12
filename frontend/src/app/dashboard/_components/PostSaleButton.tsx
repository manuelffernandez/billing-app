'use client'

import { env } from '@/env'
import { endpoints } from '@/utils/constants/endpoints'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const PostSalesButton = () => {
  return (
    <Button
      onClick={async () => {
        try {
          const res = await axios.post(
            `${env.NEXT_PUBLIC_BACKEND_BASE_URL}${endpoints.createSale}`,
            { totalAmount: 5000 },
            { withCredentials: true }
          )
          console.log('post sale response', res.data)
        } catch (error) {
          console.log('post sale error', error)
        }
      }}
    >
      Post sale
    </Button>
  )
}

export default PostSalesButton
