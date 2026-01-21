'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { totalPrice } = useCart();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
        return_url: `${window.location.origin}/success`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message ?? 'An unexpected error occurred.');
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />

      {message && (
        <div className="text-red-500 text-sm font-medium" id="payment-message">
          {message}
        </div>
      )}

      <Button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-full bg-accent-orange hover:bg-orange-600 text-lg py-6"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Procesando...
          </>
        ) : (
          `Pagar ${totalPrice.toFixed(2)} €`
        )}
      </Button>
    </form>
  );
}
