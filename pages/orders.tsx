
import { getSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'
import  db  from '../firebase'
import moment from 'moment'
import { collection, doc, getDoc, getDocs, collectionGroup, orderBy, query, where } from 'firebase/firestore'

type OrdersProps = {
  orders: any
}

export default function orders({ orders }: OrdersProps) {

  console.log(orders)
  return (
    <div>
      <Header />
      <p>Your Orders</p>
      <div  className='flex flex-col'>
        <div className='flex'>
          <div className='flex flex-col'>
            <p>ORDER PLACED</p>
            <p>date</p>
          </div>
          <div className='flex flex-col'>
            <p>TOTAL</p>
            <p>price</p>
          </div>

          <div>
            <p>ORDER number</p>
            <p>items</p>
          </div>
        </div>

        <div>
          images
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const session = await getSession(context)

  if (!session) {
    return {
      props: {}
    }
  }

  

  // const stripeOrders = await collection(db, 'users').doc(session?.user?.email).collection('orders').orderBy('timestamp', 'desc').get()

//   const stripeOrders = doc(db, `users/${session?.user?.email}/`)

//  const stripeSnap = await getDocs(collectionGroup(db, 'orders'), where('users', '==', session?.user?.email))

 const docRef = doc(db, 'users', session?.user?.email)
  const docSnap = await getDocs(collection(docRef, 'orders'))

 

 

  const orders = await Promise.all(
    docSnap.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().images,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100
        })
      ).data,
    }))
  )

  return {
    props: {
      orders,
    }
  }
}
