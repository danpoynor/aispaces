import { Code } from "lucide-react"
import * as z from 'zod';

export const pageData = {
  heading: "Code",
  description: "Generate code using descriptive text.",
  icon: Code,
  iconColor: "text-green-700",
  bgColor: "bg-green-700/10",
  promptPlaceholder: "Simple toggle button using React hooks",
  emptyLabel: "No conversation started.",
  emptyDescription: "Start by typing a message in the prompt field above."
}

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required',
  })
});
