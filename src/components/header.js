import logo from '../assets/images/logo.svg'
import arrowdown from '../assets/images/icon-arrow-down.svg'
import arrowUp from '../assets/images/icon-arrow-up.svg'
import todo from '../assets/images/icon-todo.svg'
import planning from '../assets/images/icon-planning.svg'
import reminder from '../assets/images/icon-reminders.svg'
import calendar from '../assets/images/icon-calendar.svg'
import open_menu from '../assets/images/icon-menu.svg'
import close_menu from '../assets/images/icon-close-menu.svg'

import { useEffect, useState } from 'react'

const Header = () => {

    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)
    const [menu, setMenu] = useState(false)

    const [windowDimension, setWindowDimension] = useState()

    const detectSize = () => {
        setWindowDimension(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    if(windowDimension < 700){
        return (
            <>
                <div className="px-5 flex justify-between items-center text-slate-500 font-semibold">
                    <img src={logo} alt='logo' />
                    <div>
                        <img src={open_menu} alt='' className='relative' onClick={() => setMenu(true)}/>
                        {menu ? <div className=" absolute inset-0 bg-transparent flex justify-end fixed menu">
                            <div className='bg-white w-3/5'>
                                <div className='flex justify-end font-bold pt-5 mx-5'>
                                    <img src={close_menu} alt='' className='' onClick={() => setMenu(false)}/>
                                </div>
                                <div className="pt-5 ">
                                    <div className='mx-7 mb-4 flex items-center cursor-pointer' onClick={() => setFeatures(!features)}><p>Features</p><img src={features ? arrowUp : arrowdown} alt='arrowDown' className='ml-1 mt-2' /><br></br>
                                    </div>
                                        {features ? 
                                            <div className='flex flex-col text-slate-500 mb-4'>
                                                <span className='flex items-center my-2 pl-16 cursor-pointer'><img src={todo} alt='' className='mr-3 w-4 h-4'/><p className=''>Todo List</p></span>
                                                <span className='flex items-center my-2 pl-16 cursor-pointer'><img src={calendar} alt='' className='mr-3 w-4  h-4'/><p className=''>Calendar</p></span> 
                                                <span className='flex items-center my-2 pl-16 cursor-pointer'><img src={reminder} alt='' className='mr-3 w-4  h-4'/><p className=''>Reminders</p></span>
                                                <span className='flex items-center my-2 pl-16 cursor-pointer'><img src={planning} alt='' className='mr-3 w-4 h-4'/><p className=''>Planning</p></span>
                                            </div>
                                            : 
                                        ''}
                                        
                                    
                                    <div className='mx-7 mb-4 flex items-center cursor-pointer' onClick={() => setCompany(!company)}><p>Company</p><img src={company ? arrowUp : arrowdown} alt='arrowDown' className='ml-1 mt-2' />
                                    </div>
                                        {company ? <div className='flex flex-col text-slate-500 mb-4'>
                                            <span className='my-2 pl-16 cursor-pointer'>History</span>
                                            <span className='my-2 pl-16 cursor-pointer'>Our Team</span>
                                            <span className='my-2 pl-16 cursor-pointer'> Blog</span>
                                        </div> : ''}
                                    
                                    <p className='mx-7 mb-4 cursor-pointer'>Careers</p>
                                    <p className='mx-7 mb-4 cursor-pointer'>About</p>
                                    <p className='mx-7 mb-4 cursor-pointer'>Login</p>
                                    <p className='mx-7 mb-4 bg-black text-white border-2 rounded-xl px-3 py-1 cursor-pointer hover:text-black text-center'>Register</p>
                                </div>
                            </div>
                        </div>: ''}
                    </div>
                </div>
            </>

        )
    }
    return(
        <>
            <div className="flex justify-between items-center text-slate-500 font-bold">
                <div className="flex items-center">

                    <img src={logo} alt='logo' />

                    <div className="flex ml-20 items-center">
                        <div className='flex items-center cursor-pointer hover:text-black relative' onMouseLeave={() => setFeatures(false)} onMouseEnter={() => setFeatures(true)}><p>Features</p><img src={features ? arrowUp : arrowdown} alt='arrowDown' className='ml-1 mt-2' />
                            {features ? <div className='flex flex-col absolute right-0 top-10 bg-white px-7 pt-3 shadow-2xl rounded-xl py-2 text-sm font-bold text-slate-500'>
                                <span className='flex my-2 mx-1 cursor-pointer'><img src={todo} alt='' className='mr-3 w-4 h-4'/><p className=''>TodoList</p></span>
                                <span className='flex my-2 mx-1 cursor-pointer'><img src={calendar} alt='' className='mr-3 w-4  h-4'/><p className=''>Calendar</p></span> 
                                <span className='flex my-2 mx-1 cursor-pointer'><img src={reminder} alt='' className='mr-3 w-4  h-4'/><p className=''>Reminders</p></span>
                                <span className='flex my-2 mx-1 cursor-pointer'><img src={planning} alt='' className='mr-3 w-4 h-4'/><p className=''>Planning</p></span>
                            </div> : ''}
                        </div>
                        <div className='ml-10 flex items-center cursor-pointer hover:text-black relative' onMouseOut={() => setCompany(false)} onMouseOver={() => setCompany(true)}><p>Company</p><img src={company ? arrowUp : arrowdown} alt='arrowDown' className='ml-1 mt-2' />
                            {company ? <div className='flex flex-col absolute left-0 top-10 bg-white w-54 pt-3 shadow-2xl px-7 rounded-xl py-2 text-sm font-bold text-slate-500'>
                                <span className='my-2 mx-1 cursor-pointer'>History</span>
                                <span className='my-2 mx-1 cursor-pointer'>OurTeam</span>
                                <span className='my-2 mx-1 cursor-pointer'> Blog</span>
                            </div> : ''}
                        </div>
                        <p className='ml-10 cursor-pointer hover:text-black'>Careers</p>
                        <p className='ml-10 cursor-pointer hover:text-black'>About</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className='cursor-pointer hover:text-black'>Login</p>
                    <p className='ml-10 border-2 hover:border-black rounded-xl px-3 py-1 cursor-pointer hover:text-black'>Register</p>
                </div>
            </div>
        </>
    )
}

export default Header