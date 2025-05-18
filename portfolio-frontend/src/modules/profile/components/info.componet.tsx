import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';


interface Props{
  type: string;
  content:string;
}

export default function Info({type, content}:Props) {
   const icon = () =>{
    switch(type){
    case 'email': return <MailOutlineIcon sx={{color:"#fef08a"}}/>
    case 'phone': return <PhoneAndroidIcon sx={{color:"#fef08a"}}/>
    case 'birthday': return <CalendarMonthIcon sx={{color:"#fef08a"}}/>
    case 'location': return <LocationOnIcon sx={{color:"#fef08a"}}/>
    default:
      break;
    }
  }
  return (
    <div className="flex gap-2 w-full">
      <div className="bg-gradient-to-br from bg-neutral-800 to-[#1a1a1a] rounded-lg p-3">
        {icon()}
      </div>
      <div>
        <h1 className="text-neutral-400 text-sm uppercase">{type}</h1>
        <p className="text-white text-sm">{content}</p>
      </div>
    </div>
  );
}
