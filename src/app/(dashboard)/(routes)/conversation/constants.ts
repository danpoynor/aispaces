import { MessageSquare } from "lucide-react"
import * as z from 'zod';

export const pageData = {
  heading: "Conversation",
  description: "Our most advanced converstion model.",
  icon: MessageSquare,
  iconColor: "text-violet-500",
  bgColor: "bg-violet-500/10",
  promptPlaceholder: "How do I calculate the radius of a circle?",
  emptyLabel: "No conversation started.",
  emptyDescription: "Start by typing a message in the prompt field above."
}

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required',
  })
});
