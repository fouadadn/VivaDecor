import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import image4 from './assets/Image4.png'
import Image5 from './assets/Image5.png'
import step1 from './assets/iconSteps/Step1.png'
import step2 from './assets/iconSteps/step2.png'
import step3 from './assets/iconSteps/Step3.png'

export default function Service() {
    return (
        <div id='sercive' >
            <div className={`flex items-center gap-6 font-[500] justify-start md:justify-center xl:justify-start`}>
                <div className='w-14 h-[1px] border border-black'></div>
                <h1 className='text-5xl ' >Our Services</h1>
            </div>

            <div className='flex gap-28 flex-wrap justify-center mt-16'>
                <div>
                    <div>
                        <div className='flex gap-5 font-bold'>
                            <img src={icon1} alt="" className='w-14' />
                            <h3>Lighting Design</h3>
                        </div>
                        <span className='w-[260px] block ml-[76px] text-[#545454]'>Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere</span>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='flex gap-5 font-bold'>
                            <img src={icon2} alt="" className='w-14' />
                            <h3>Interior Design</h3>
                        </div>
                        <span className='w-[260px] block ml-[76px] text-[#545454]'>From concept to completion, we oversee every detail to bring your vision to life efficiently</span>
                    </div>

                </div>
                <div>
                    <div>
                        <div className='flex gap-5 font-bold'>
                            <img src={icon3} alt="" className='w-14' />
                            <h3>Outdoor Design</h3>
                        </div>
                        <span className='w-[260px] block ml-[76px] text-[#545454]'>Celebrate the changing seasons with our seasonal outdoor decor services</span>
                    </div>
                </div>
            </div>



            <div className='flex mt-32 gap-20'>
                <div className='hidden lg:block'>
                    <img src={image4} alt="" />
                </div>
                <div>
                    <h1 className='text-7xl'>
                        Designing Your Dream With Brilliance
                    </h1>

                    <p className='mt-7 w-[450px] text-[#545454]'>
                        Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience
                    </p>

                    <div className='mt-6 flex justify-between items-center font-bold '>
                        <h4 >Living Room Interior Design</h4>
                        <span className='text-[35px] font-thin'>+</span>
                    </div>

                    <hr className='w-20'/>

                    <div className='mt-3 flex justify-between items-center font-bold '>
                        <h4 >Commercial Office Room Interior Design</h4>
                        <span className='text-[35px] font-thin'>+</span>
                    </div>
                    <hr className='w-20'/>
                    <div className='flex justify-center lg:justify-start'>
                        <button className=' bg-black text-white py-2 px-6 rounded-md hover:bg-white duration-500 hover:text-black border hover:border-black mt-5 shadow-md'>Learn More</button>
                    </div>
                </div>
            </div>



            <div className='flex mt-32'>

                <div className=''>
                    <h1 className='text-6xl '>Designing Your Dream in Three Simple Steps</h1>
                    <div className='mt-10'>
                        <div className='my-3' >
                            <div className='flex items-center gap-5 '>
                                <div className='rounded-full bg-black p-3'><img className='w-[20px]' src={step1} alt="" /></div>
                                <h3 className='font-bold text-lg'>Start Project</h3>
                            </div>
                            <span className='text-[#545454] w-[400px] inline-block border-l-[1px] border-black pl-11 ml-5 mt-2'>Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</span>
                        </div>

                        <div className='my-3' >
                            <div className='flex items-center gap-5'>
                                <div className='rounded-full bg-black p-3'><img className='w-[20px]' src={step2} alt="" /></div>
                                <h3 className='font-bold text-lg'>Craft</h3>
                            </div>
                            <span className='text-[#545454] w-[400px] inline-block border-l-[1px] border-black pl-11 ml-5 mt-2'>Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space</span>
                        </div>
                        <div >
                            <div className='flex items-center gap-5'>
                                <div className='rounded-full bg-black p-3'><img className='w-[20px] relative top-[2px]' src={step3} alt="" /></div>
                                <h3 className='font-bold text-lg'>Execute</h3>
                            </div>
                            <span className='text-[#545454] w-[390px] inline-block pl-16' >Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</span>
                        </div>
                    </div>
                </div>


                <div className='hidden lg:block'>
                    <img src={Image5} alt="" />
                </div>
            </div>


        </div>
    )
}