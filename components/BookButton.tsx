// components/BookButton.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BookButton() {
    return (
        <div className="fixed -right-5 bottom-20 z-50">
            <Button
                asChild
                variant="default"
                className="
                    rotate-90
                    bg-black
                    px-4 py-2
                    rounded
                    text-lg uppercase
                    hover:bg-orange-500
                    active:scale-95
                "
            >
                <Link href="#contacto">resérvame</Link>
            </Button>
        </div>
    );
}
