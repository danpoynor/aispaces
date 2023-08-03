import Image from "next/image"

export const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className='animate-spin h-24 w-24 relative'>
        <Image
          src='/logo.png'
          fill
          alt='Logo'
        />
      </div>
      <p className='text-sm text-muted-foreground'>
        Thinking...
      </p>
    </div>
  )
}
