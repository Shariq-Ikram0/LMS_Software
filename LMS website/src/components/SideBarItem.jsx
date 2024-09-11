import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link} from 'react-router-dom';

const SideBarItem = ({DrowName,list,add, PropForList,PropForAdd}) => {
    const [open, setOpen] = useState(false);
   

    return (
        <>
        <div className={`sidebar-item  block  text-xl  hover:bg-slate-200 text-green hover:text-lgreen  ${open ? 'open' : ''} `}>

        <div className="sidebar-title cursor-pointer py-3">
        <div onClick={() => setOpen(!open)} className="flex items-center justify-between">
        <div className="flex items-center">
        <EmailIcon sx={{ cursor: 'pointer', mr: "15px", mb: 0.6, ml: 2 }} />
        <span className='font-semibold'>{DrowName}</span>
        </div>
        <KeyboardArrowDownIcon
           sx={{cursor: 'pointer',transform: open ? 'rotate(180deg)' : 'rotate(0deg)',transition: 'transform 0.3s',mr:2}}
           />
          </div>
         </div>


            <div className={`sidebar-Content pl-14 hover:bg-[#3c8fb0] hover:text-white hover:rounded-e-2xl 
            overflow-hidden transition-[height] duration-300 ${open ? 'h-auto' : 'h-0'
                }`}>
                <div className='h-14 items-center flex '><Link to={PropForAdd}>{add}</Link></div>
            </div>

            <div className={`sidebar-Content pl-14 hover:bg-[#3c8fb0] hover:text-white hover:rounded-e-2xl  overflow-hidden transition-[height] duration-300 ${open ? 'h-auto' : 'h-0'
                }`}>
                <div className='h-14 items-center flex '><Link to={PropForList}>{list}</Link></div>
                
            </div>

            





        </div>


        
       
        </>  )
}

export default SideBarItem

