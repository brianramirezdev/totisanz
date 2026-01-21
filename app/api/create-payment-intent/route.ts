import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { products } from '@/lib/data/merch';

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
    }

    let totalAmount = 0;

    for (const item of items) {
      const product = products.find(p => p.priceId === item.priceId);
      if (product) {
         // Convert price string to cents (e.g. "25" -> 2500)
        const priceInCents = Math.round(parseFloat(product.price) * 100);
        totalAmount += priceInCents * item.quantity;
      }
    }

    if (totalAmount === 0) {
       return NextResponse.json({ error: 'No valid items found' }, { status: 400 });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
}
