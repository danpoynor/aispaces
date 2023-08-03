"use client"

import axios from "axios"
import * as z from "zod"
import { Code } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { ChatCompletionRequestMessage } from "openai"
import ReactMarkdown from "react-markdown"

import { Heading } from "@/components/heading"
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/empty"
import { Loader } from "@/components/loader"
import UserAvatar from "@/components/user-avatar"
import BotAvatar from "@/components/bot-avatar"

import { cn } from "@/lib/utils"
import { formSchema } from "./constants"
import { useState } from "react"

export default function CodePage() {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/code", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data])

      // Clear the form
      form.reset()

    } catch (error: any) {
      // TODO: Open Pro Modal
      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title='Code'
        description='Generate code using descriptive text.'
        icon={Code}
        iconColor='text-green-700'
        bgColor='bg-green-700/10'
      />
      <div className="px-4 lg:px-8">
        <div className="">

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg
                border
                w-full
                p-4
                px-3
                md:px-6
                focus-within:shadow-md
                grid
                grid-cols-12
                gap-2
                bg-white
              "
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem
                    label='Prompt'
                    className='col-span-12 lg:col-span-10'
                    error={form.formState.errors.prompt?.message}
                  >
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Simple toggle button using React hooks."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>

        </div>

        <div className="space-y-4 mt-4">

          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {messages.length === 0 && !isLoading && (
            <div className="text-center text-gray-500">
              <Empty
                title="No conversation started."
                description="Start by typing a message in the prompt field above."
              />
            </div>
          )}

          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex iterms start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user"
                  ? <UserAvatar />
                  : <BotAvatar />
                }
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 p-2 bg-black/10 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    )
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ''}
                </ReactMarkdown>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
