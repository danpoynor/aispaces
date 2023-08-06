import { VideoIcon } from "lucide-react"
import * as z from 'zod';

export const pageData = {
  heading: "Video Generation",
  description: "Turn your prompt into video.",
  icon: VideoIcon,
  iconColor: "text-orange-700",
  bgColor: "bg-orange-700/10",
  promptPlaceholder: "Clown fish swimming around a coral reef",
  emptyLabel: "No video generated.",
  emptyDescription: "Start by typing a message in the prompt field above."
}

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required',
  })
});
