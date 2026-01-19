import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
})

// Define tus productos aquí (precios en centavos: 25€ = 2500)
const localProducts: Record<string, { name: string; price: number }> = {
  'price_album_oficial': { name: 'Álbum Oficial', price: 2500 },
  'price_gorra_oficial': { name: 'Gorra Oficial', price: 2000 },
  'price_sudadera_oficial': { name: 'Sudadera Oficial', price: 4000 },
  'price_poster_limitada': { name: 'Póster Edición Limitada', price: 1500 },
  'price_llaveros_oficiales': { name: 'Llaveros Oficiales', price: 1000 },
}

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json()

    if (!priceId) {
      return NextResponse.json({ error: 'Price ID requerido' }, { status: 400 })
    }

    // Busca el producto en tu catálogo local
    const productData = localProducts[priceId]

    if (!productData) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 })
    }

    // Crea la sesión de checkout con precio dinámico
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: productData.name,
          },
          unit_amount: productData.price, // Precio en centavos
        },
        quantity: 1,
      }],
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