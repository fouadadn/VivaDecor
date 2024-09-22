export default function Nav() {
    
    return(

    <nav className='flex justify-between py-3' >
        <div>
            <div className='w-6 h-7 border-2 border-black border-r-0 rounded inline-block '></div>
            <h1 className='inline-block text-2xl relative bottom-1.5 right-5 font-semibold '>VivaDecor</h1>
        </div>

        <div className='hidden gap-8  lg:flex'>
            <a className='' href="">Home</a>
            <a className='' href="#sercive">Services</a>
            <a className='' href="">Contact</a>
            <a className='' href="">Support</a>

        </div>

        <div >
            <button className='bg-black text-white py-2 px-6 rounded hover:bg-white duration-500 hover:text-black border hover:border-black'>Sign Up</button>
        </div>

    </nav>
    
    )
}