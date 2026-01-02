import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mic2 } from 'lucide-react';
import Quote from '../ui/quote';
import { div } from 'motion/react-client';

// const interview = [
//     {
//         question: '¿Quién es Toti Sanz cuando no está encima de un escenario?',
//         answer: 'Soy un chaval normal de Lanzarote que disfruta de la playa, de estar con mi gente y de las cosas simples de la vida. Me encanta pasear, pensar en nuevas canciones y sobre todo, vivir sin presiones.',
//     },
//     {
//         question: '¿Si tu música fuera un plato típico canario cuál sería y por qué?',
//         answer: 'Definitivamente papas arrugadas con mojo picón. Es auténtico, con raíces pero con ese toque que pica y te deja con ganas de más. Así es mi música: genuina y con punch.',
//     },
//     {
//         question: '¿En un concierto tuyo, qué es lo más raro o divertido que te ha pasado?',
//         answer: 'Una vez se me olvidó la letra en medio de una canción y el público la cantó por mí. Fue surrealista pero hermoso, me di cuenta de que ya no era solo mi canción, era de todos.',
//     },
//     {
//         question: '¿Qué te gustaría que sintiera alguien cuando escucha una canción tuya por primera vez?',
//         answer: 'Que se sienta identificado, que piense "joder, esto me ha pasado a mí". Quiero que mi música sea ese amigo que te entiende sin necesidad de explicaciones.',
//     },
//     {
//         question: '¿Qué superpoder te vendría mejor para tus conciertos?',
//         answer: 'Teletransportación, sin duda. Poder estar en varios sitios a la vez y llegar a más gente, compartir mi música con todos los que quieran escucharla sin las limitaciones del tiempo y espacio.',
//     },
//     {
//         question: 'Dime una manía tuya antes de subir a un escenario.',
//         answer: 'Siempre, siempre tengo que estar solo cinco minutos antes de salir. Necesito ese momento de conexión conmigo mismo, respirar y recordar por qué hago esto.',
//     },
//     {
//         question: 'Describe tu música en 3 palabras.',
//         answer: 'Honesta, cercana, intensa.',
//     },
// ];

const texts = [
    'No cambiaria a mi perro por llenar un estadio',
    'No me he enamorado nunca',
    'No dejaré de leer Samuel 16:7',
    'No se hacer trucos pero siempre tengo un AS bajo la manga',
];

export default function BiographySection() {
    return (
        <section id="biografia" className="bg-background-soft px-6 py-20 text-black md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h2 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">EL "NO" DE TOTI</h2>
                    {/* <p className="flex items-center gap-2 text-xl text-gray-500 md:text-2xl">
                        <Mic2 className="h-6 w-6" />
                        Entrevista con Toti
                    </p> */}
                </div>

                <div className="space-y-6 md:space-y-8">
                    {texts.map((text, index) => (
                        <div key={index} className="flex items-start gap-4 font-bold tracking-tight">
                            <span className="text-base md:text-xl lg:text-2xl">{index + 1}.</span>
                            <Quote title={text} className="text-lg md:text-2xl lg:text-3xl" />
                        </div>
                    ))}
                </div>

                {/* <Accordion type="single" collapsible className="space-y-4">
                    {interview.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 transition-colors hover:border-accent-orange">
                            <AccordionTrigger className="group py-6 text-left text-lg font-semibold text-gray-900 hover:text-accent-orange hover:no-underline md:text-xl [&[data-state=open]]:text-accent-orange">
                                <span className="pr-4">{item.question}</span>
                            </AccordionTrigger>

                            <AccordionContent className="pb-6 pt-2 text-base leading-relaxed text-gray-600 md:text-lg">
                                <div className="pl-4 border-l-2 border-accent-orange">{item.answer}</div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion> */}
            </div>
        </section>
    );
}
