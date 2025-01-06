import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-11/12 mx-auto z-[999] fixed top-0 glass rounded-md flex justify-between items-center px-12 text-white py-6'>
        <h2 className='bebas-neue-regular text-xl'>Priyanshu</h2>
        <div className='w-1/3'>
            <ul className='flex uppercase oswald justify-around'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Work</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>      
        </div>
    </nav>
  )
}

export default Navbar;