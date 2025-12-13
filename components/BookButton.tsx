// components/BookButton.tsx
import { Button } from '@/components/ui/button';

export default function BookButton() {
    return (
        <div className="fixed -right-5 bottom-20 h-fit w-fit z-50">
            <Button variant="default" className="rotate-90 bg-black px-4 py-2 text-lg uppercase hover:bg-orange-500 active:scale-95">
                resérvame
            </Button>
        </div>
    );
}
