import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function BotAvatar() {
  return (
    <Avatar className='w-12 h-12 bg-[#112233] p-1.5'>
      <AvatarImage className="p-1" src="/ai-spaces-logomark-white.svg" />
    </Avatar>
  )
}
