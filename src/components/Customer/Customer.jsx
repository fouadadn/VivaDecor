import man from './assets/man.png'
import lady from './assets/lady.png'
import img from './assets/Image.png'
import left from './assets/ArrowLeft.png'
import right from './assets/ArrowRight.png'



export default function Customer() {
    return (
        <>
            <div className="hidden  2xl:block" id='Contact'>
                <div className='flex w-full mt-28  relative gap-14 '>
                    <div>
                        <div className='w-[500px] absolute z-0 '>
                            <img src={img} alt="" />
                            <div className='flex gap-1 mt-3'>
                                <button className='bg-[#F1F1F1] p-6 rounded-sm'>
                                    <img src={left} alt="" />
                                </button>
                                <button className='bg-[#F1F1F1] p-6 rounded-sm'>
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='z-10 relative '>
                        <h1 className='text-6xl w-[600px] relative left-[70%]'>What Our Customers Say About Us</h1>
                        <div className='p-6 bg-white mt-5 relative left-[40%] rounded'>
                            <div className="flex gap-10 flex-col xl:flex-row ">
                                <div className="bg-[#1F1F1F] w-96 h-96 p-10 text-white rounded">
                                    <h1 className="text-9xl ">“</h1>
                                    <p className='-mt-10'>Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!</p>
                                    <div className='mt-6'>
                                        <div className='flex gap-6 items-center'>
                                            <img src={man} alt="" className='rounded-full w-14' />
                                            <h2>James Bennett <br /> <span className='text-[#929292]'>Toronto, Canada</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1F1F1F] w-96 h-96 p-10 text-white rounded">
                                    <h1 className="text-9xl ">“</h1>
                                    <p className='-mt-10'>Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!</p>
                                    <div className='mt-6'>
                                        <div className='flex gap-6 items-center'>
                                            <img src={lady} alt="" className='rounded-full w-14' />
                                            <h2>Sophie Carter <br /> <span className='text-[#929292]'>New York, USA</span></h2>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='2xl:hidden mt-10 '>
                <h1 className='text-4xl md:text-6xl w-[400px] md:w-[600px] mb-7 black'>What Our Customers Say About Us</h1>
                <div className="flex gap-10 flex-wrap justify-center black mt-0">
                    <div className="bg-[#1F1F1F] w-96 h-96 p-10 text-white rounded">
                        <h1 className="text-9xl ">“</h1>
                        <p className='-mt-10'>Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!</p>
                        <div className='mt-6'>
                            <div className='flex gap-6 items-center'>
                                <img src={man} alt="" className='rounded-full w-14' />
                                <h2>James Bennett <br /> <span className='text-[#929292]'>Toronto, Canada</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1F1F1F] w-96 h-96 p-10 text-white rounded">
                        <h1 className="text-9xl ">“</h1>
                        <p className='-mt-10'>Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!</p>
                        <div className='mt-6'>
                            <div className='flex gap-6 items-center'>
                                <img src={lady} alt="" className='rounded-full w-14' />
                                <h2>Sophie Carter <br /> <span className='text-[#929292]'>New York, USA</span></h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className='mt-32 flex flex-col items-center gap-14'>
                <h1 className='text-center text-3xl   md:text-6xl'>Subscribe to Our Newsletter <br /> for Design Insights</h1>

                <h2 className='text-[#545454] text-sm text-center'>Be the first to discover trends, inspirations, and special offers as <br /> we bring the world of design directly to your inbox</h2>
            </div>
        </>
    )
}