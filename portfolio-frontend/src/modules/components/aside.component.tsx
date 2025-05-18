import Image from 'next/image'
import React, { useEffect } from 'react'
import Info from '../profile/components/info.componet'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useprofileStore } from '@/stores/profile.store';


export default function Aside() {
 const getProfile = useprofileStore(state => state.getProfile);
    const profile = useprofileStore(state => state.profile);
   useEffect(()=>{
     getProfile()
     
   })
  return (
    <aside className="flex flex-col w-1/4 px-4 py-5 bg-neutral-900 my-14 rounded-lg justify-between">
        <div className="flex flex-col gap-5 items-center mt-5">
          <div className="bg-gradient-to-br from-neutral-800 to-[#1a1a1a] p-5 rounded-[30px]">
             <Image src="/profile.jpg" width={500} height={500} alt="logo" className='rounded-full w-full max-h-[110px]'/>
          </div>
          <h1 className="text-white font-bold text-2xl text-center">{profile?.name || ''}</h1>
          <span className="bg-neutral-700 px-4 py-3 rounded-lg text-white">
            <h2>{profile?.specialty || ''}</h2>
          </span>
        </div>
        <div className='w-full border border-neutral-600'></div>
        <div className="flex flex-col items-center gap-5">
        <Info type='email' content={profile?.email || ''} />
        <Info type='phone' content={profile?.phone || ''} />
        <Info type='location' content={profile?.location || ''} />
        <Info type='birthday' content={profile?.birthDay || ''} />
        </div>
        <div className='flex justify-center gap-5'>
            <GitHubIcon sx={{color:"#fef08a"}}/>
            <LinkedInIcon sx={{color:"#fef08a"}}/>
            <YouTubeIcon sx={{color:"#fef08a"}}/>
        </div>
      </aside>
  )
}
