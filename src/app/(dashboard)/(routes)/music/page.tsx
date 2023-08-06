"use client"

import axios from "axios"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

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

import { pageData } from "./constants"
import { formSchema } from "./constants"
import { useState } from "react"

export default function MusicPage() {
  const router = useRouter()
  const [music, setMusic] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined)

      const response = await axios.post("/api/music", values)
      console.log(response)

      setMusic(response.data.audio)

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
        title={pageData.heading}
        description={pageData.description}
        icon={pageData.icon}
        iconColor={pageData.iconColor}
        bgColor={pageData.bgColor}
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
                        placeholder={pageData.promptPlaceholder}
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

          {!music && !isLoading && (
            <div className="text-center text-gray-500">
              <Empty
                title={pageData.emptyLabel}
                description={pageData.emptyDescription}
              />
            </div>
          )}

          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}

        </div>
      </div>
    </div>
  )
}
