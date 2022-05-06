import { useState } from "react";

import { CloseButton } from "./CloseButton";

import BugImageUrl from '../assets/bug.svg'
import IdeaImageUrl from '../assets/idea.svg'
import ToughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },  
    IDEA: {
        title: 'Ideia',
        image: {
            source: IdeaImageUrl,
            alt: 'Imagem de uma Lâmpada'
        }
    },  
    OTHER: {
        title: 'Outro',
        image: {
            source: ToughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },  
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>

            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                type="button"
                                onClick={() => setFeedbackType(key)}
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{ value.title }</span>
                            </button>
                        )
                    }) }
                </div>
            ) : (
                <p>Hello World</p>
            )}
            
            <footer>
                Feito com ❤️ pela <a className="underline underline-offset-1" href="https://www.rocketseat.com.br/"> Rocketseat </a>
            </footer>
        </div>
    )
}