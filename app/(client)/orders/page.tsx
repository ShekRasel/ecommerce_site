import { redirectUser } from '@/hooks/redirectUser'
import React from 'react'

async function orders() {
    await redirectUser();
  return (
    <div>orders</div>
  )
}

export default orders