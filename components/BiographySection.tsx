import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mic2 } from 'lucide-react';

const interview = [
    {
        question: '¿Quién es Toti Sanz cuando no está encima de un escenario?',
        answer: 'Soy un chaval normal de Lanzarote que disfruta de la playa, de estar con mi gente y de las cosas simples de la vida. Me encanta pasear, pensar en nuevas canciones y sobre todo, vivir sin presiones.',
    },
    {
        question: '¿Si tu música fuera un plato típico canario cuál sería y por qué?',
        answer: 'Definitivamente papas arrugadas con mojo picón. Es auténtico, con raíces pero con ese toque que pica y te deja con ganas de más. Así es mi música: genuina y con punch.',
    },
    {
        question: '¿En un concierto tuyo, qué es lo más raro o divertido que te ha pasado?',
        answer: 'Una vez se me olvidó la letra en medio de una canción y el público la cantó por mí. Fue surrealista pero hermoso, me di cuenta de que ya no era solo mi canción, era de todos.',
    },
    {
        question: '¿Qué te gustaría que sintiera alguien cuando escucha una canción tuya por primera vez?',
        answer: 'Que se sienta identificado, que piense "joder, esto me ha pasado a mí". Quiero que mi música sea ese amigo que te entiende sin necesidad de explicaciones.',
    },
    {
        question: '¿Qué superpoder te vendría mejor para tus conciertos?',
        answer: 'Teletransportación, sin duda. Poder estar en varios sitios a la vez y llegar a más gente, compartir mi música con todos los que quieran escucharla sin las limitaciones del tiempo y espacio.',
    },
    {
        question: 'Dime una manía tuya antes de subir a un escenario.',
        answer: 'Siempre, siempre tengo que estar solo cinco minutos antes de salir. Necesito ese momento de conexión conmigo mismo, respirar y recordar por qué hago esto.',
    },
    {
        question: 'Describe tu música en 3 palabras.',
        answer: 'Honesta, cercana, intensa.',
    },
];

export default function BiographySection() {
    return (
        <section id="biografia" className="bg-black px-6 py-20 text-white md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <h2 className="mb-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">BIOGRAFÍA</h2>
                    <p className="flex items-center gap-2 text-xl text-gray-400 md:text-2xl">
                        <Mic2 className="h-6 w-6" />
                        Entrevista con Toti
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {interview.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 transition-colors hover:border-orange-500">
                            <AccordionTrigger className="group py-6 text-left text-lg font-semibold hover:text-orange-500 hover:no-underline md:text-xl [&[data-state=open]]:text-orange-500">
                                <span className="pr-4">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 pt-2 text-base leading-relaxed text-gray-300 md:text-lg">
                                <div className=" border-orange-500 pl-4">{item.answer}</div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Quote final */}
                <div className="mt-20 border-l-4 border-orange-500 pl-6">
                    <blockquote className="text-2xl font-light italic text-gray-300 md:text-3xl">"Escribo sobre lo que siento, sobre mis vivencias."</blockquote>
                    <p className="mt-4 text-sm font-medium uppercase tracking-wider text-gray-500">— Toti Sanz</p>
                </div>
            </div>
        </section>
    );
}
