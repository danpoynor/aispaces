import { useUser } from '@clerk/nextjs'

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar'

export default function UserAvatar() {
  const { user } = useUser()

  return (
    <Avatar className='w-12 h-12'>
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}
