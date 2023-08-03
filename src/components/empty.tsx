import Image from 'next/image';

interface EmptyProps {
  title: string;
  description: string;
}

export const Empty = ({
  title,
  description,
  ...props
}: EmptyProps) => {
  return (
    <div {...props}>
      <div className='h-full p-10 pt-0 flex flex-col items-center justify-center'>
        <div className='relative h-72 w-72'>
          <Image
            src='/empty.png'
            fill
            alt='Empty'
          />
        </div>
        <p className='text-lg text-gray-900'>{title}</p>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  );
}
