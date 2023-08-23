'use client';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';

const Profiles = () => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });
  return <div className="flex items-center h-full justify-center ">
    <div className='flex flex-col'>
      <div className='text-3xl md:text-6xl text-white text-center'>Who is Watching?</div>
      <div className='flex items-center justify-center gap-8 mt-10'>
        <div onClick={() => router.push('/')}>
          <div className='group flex-row w-44 mx-auto'>
            <div className="
              w-44 h-44 rounded-md
              flex items-center justify-center
              border-2 border-transparent
              group-hover:cursor-pointer
              group-hover:border-white
              overflow-hidden

            ">
              <img src="/images/default-blue.png" alt="profile" />
            </div>
            <div className='
              mt-4
              text-gray-400
              text-2xl
              text-center
              group-hover:text-white
            '>
            {session?.user?.name}
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Profiles;
