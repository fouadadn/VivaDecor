import Image1 from './assets/Image1.png'

export default function InterDesign() {
    return (
        <>
            <div>
                <div className='flex gap-[60px] mt-14' >
                    <div className=''>
                        <div>      
                                <h1 className='text-8xl  lg:text-9xl '>
                                    Interior Design
                                </h1>
                            <p className='text-[#545454] w-[460px] mt-6' >
                                Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge
                                modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication
                            </p>
                        </div>
                    </div>
                    <div className='w-96 hidden lg:block'>
                        <img className=' shadow-lg' src={Image1} alt="decor" />
                    </div>
                </div>

                <div>
                    <div>
                    <button className='bg-black shadow-lg text-white py-3 px-10 rounded-md hover:bg-white duration-500 hover:text-black border hover:border-black  lg:mt-5 mt-10'>
                            Start Project
                        </button>
                        <div className='flex items-center   gap-32  h-[30vh] md:h-[50vh] lg:mt-0  '>
                            <div className='h-full items-center flex  gap-14  justify-start '>
                                <div>
                                    <span className='text-[#545454] text-4xl lg:text-6xl'>400+</span><br /><span className='text-[#545454]'>Project Complete</span>
                                </div>
                                <div>
                                    <span className='text-[#545454] text-4xl lg:text-6xl'>600+</span><br /><span className='text-[#545454]'>Satisfied Clients</span>
                                </div>
                                <div>
                                    <span className='text-[#545454] text-4xl lg:text-6xl'>100+</span><br /><span className='text-[#545454]'>Unique Styles</span>
                                </div>
                            </div>

                            <div className='w-[500px] h-[340px] relative hidden xl:block'>

                                <div className='w-[150px] h-[150px] z-10 border border-black inline-block float-start relative -top-5 -left-5'>

                                </div>
                                <div className='w-[500px] h-[340px]  bg-image absolute z-20 shadow-lg'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>)
}