import { Music } from "lucide-react"
import * as z from 'zod';

export const pageData = {
  heading: "Music Generation",
  description: "Our most advanced converstion model.",
  icon: Music,
  iconColor: "text-emerald-500",
  bgColor: "bg-emerald-500/10",
  promptPlaceholder: "Piano solo",
  emptyLabel: "No music generated.",
  emptyDescription: "Start by typing a message in the prompt field above."
}

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required',
  })
});
