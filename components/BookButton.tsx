// components/BookButton.tsx
import { Button } from '@/components/ui/button';

export default function BookButton() {
    return (
        <div className="fixed -right-5 bottom-20 z-50">
            <Button
                variant="default"
                className="
                    rotate-90
                    bg-black
                    px-4 py-2
                    text-lg uppercase
                    border-2 border-white
                    hover:bg-orange-500
                    active:scale-95
                "
            >
                resérvame
            </Button>
        </div>
    );
}
