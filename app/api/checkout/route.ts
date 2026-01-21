import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { products } from '@/lib/data/merch'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { items } = body // items: { priceId: string, quantity: number }[]

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 })
    }

    const line_items = []

    for (const item of items) {
      const product = products.find(p => p.priceId === item.priceId)
      if (product) {
        const priceInCents = Math.round(parseFloat(product.price) * 100)
        line_items.push({
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
            },
            unit_amount: priceInCents,
          },
          quantity: item.quantity,
        })
      }
    }

    if (line_items.length === 0) {
        return NextResponse.json({ error: 'No valid items found' }, { status: 400 })
    }

    // Crea la sesión de checkout con múltiples items
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: line_items,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error en checkout:', error)
    return NextResponse.json(
      { error: 'Error al crear sesión de checkout' },
      { status: 500 }
    )
  }
}