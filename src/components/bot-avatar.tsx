import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function BotAvatar() {
  return (
    <Avatar className='w-8 h-8'>
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  )
}
