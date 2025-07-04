import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from  '../ScreenshotButton'
interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
    onFeedbackSent: (feedback: boolean) => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest, onFeedbackSent }: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    
    const { title, image } = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log({
            screenshot,
            comment
        });

        onFeedbackSent(true);
    }

    return (
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequest}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img 
                        src={image.source} 
                        alt={image.alt} 
                        className="w-6 h-6" />
                    {title}
                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea 
                    onChange={event => setComment(event.target.value)}
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-600 bg-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..." />

                    <footer className="flex gap-2 mt-2">
                        <ScreenshotButton 
                            screenshot={screenshot} 
                            onScreenshotTaak={setScreenshot} />

                        <button
                            disabled={comment.length === 0}
                            type="submit"
                            className="p-2 bg-brand-500 rounded-sm border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:bring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        >
                            Enviar Feedback
                        </button>
                    </footer>
            </form>
        </> 
    )
}