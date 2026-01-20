export interface Product {
    id: number;
    name: string;
    price: string;
    priceId: string;
    image: string;
    available: boolean;
    date: string;
}

export const products: Product[] = [
    { id: 1, name: 'Álbum Oficial', price: '25', priceId: 'price_album_oficial', image: '/images/album.webp', available: true, date: '14.02' },
    { id: 2, name: 'Gorra Oficial', price: '20', priceId: 'price_gorra_oficial', image: '/images/album.webp', available: false, date: '21.03' },
    { id: 3, name: 'Sudadera Oficial', price: '40', priceId: 'price_sudadera_oficial', image: '/images/album.webp', available: false, date: '05.05' },
    { id: 4, name: 'Póster Edición Limitada', price: '15', priceId: 'price_poster_limitada', image: '/images/album.webp', available: false, date: '18.07' },
    { id: 5, name: 'Llaveros Oficiales', price: '10', priceId: 'price_llaveros_oficiales', image: '/images/album.webp', available: false, date: '30.08' },
];
