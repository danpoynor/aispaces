import { ImageIcon } from "lucide-react"
import * as z from 'zod';

export const pageData = {
  heading: "Image Generation",
  description: "Turn your prompt into an image.",
  icon: ImageIcon,
  iconColor: "text-pink-700",
  bgColor: "bg-pink-700/10",
  promptPlaceholder: "A picture of a horse in the Swiss alps",
  emptyLabel: "No images generated.",
  emptyDescription: "Start by filling out the form above."
}

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Image prompt is required',
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  {
    value: "3",
    label: "3 Photos",
  },
  {
    value: "4",
    label: "4 Photos",
  },
  {
    value: "5",
    label: "5 Photos",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
