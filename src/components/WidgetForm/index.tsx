import { useState } from "react";

import BugImageUrl from '../../assets/bug.svg'
import IdeaImageUrl from '../../assets/idea.svg'
import ToughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleResetFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequest={handleResetFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                            onFeedbackSent={setFeedbackSent}
                            onFeedbackRestartRequest={handleResetFeedback}    
                            feedbackType={feedbackType} />
                    )}
                </>
            )}
            
            <footer>
                Feito com ❤️ pela <a className="underline underline-offset-1" href="https://www.rocketseat.com.br/"> Rocketseat </a>
            </footer>
        </div>
    )
}