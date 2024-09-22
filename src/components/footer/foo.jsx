import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {

    
    return (


        <div className='bg-[#1F1F1F] h-fit py-6 mt-20'>
            <div className='flex justify-center  '>
                <div className='bg-white flex gap-4 p-2  rounded -mt-16 shadow-inner  w-[400px] md:w-[580px]'>
                    <div className='flex items-center gap-3 pl-3 w-[70%]'>
                        <Mail color='gray' size={20} />
                        <input className='focus:outline-none w-80' type="text" name="" id="" placeholder='Enter your email address' />
                    </div>
                    <button className='bg-black text-white px-3 rounded-md hover:bg-white duration-500 hover:text-black border hover:border-black w-[28%]'>Subscribe</button>
                </div>
            </div>

            <div className='text-white grid grid-cols-2 md:grid-cols-4 mt-6 gap-y-9  px-5 justify-items-start md:justify-items-center '>
                <div className='flex flex-col gap-10'>
                    <div>
                        <div className='w-6 h-7 border-2 border-white border-r-0 rounded inline-block '></div>
                        <h1 className='inline-block text-2xl relative bottom-1.5 right-5 font-semibold '>VivaDecor</h1>
                    </div>
                    <div>
                        <p className='w-48'>VivaDecor your premier destination for luxury and modern interior design</p>
                    </div>
                    <div className='flex gap-2'>
                        <button className='bg-[#313131] p-[1px] rounded-sm'>
                            <Facebook size={16} />
                        </button>
                        <button className='bg-[#313131] p-[1px] rounded-sm'>
                            <Twitter size={16} />
                        </button>
                        <button className='bg-[#313131] p-[1px] rounded-sm'>
                            <Instagram size={16} />
                        </button>
                        <button className='bg-[#313131] p-[1px] rounded-sm'>
                            <Linkedin size={16} />
                        </button>
                    </div>
                </div>


                <div className='flex flex-col gap-5 text-[#D1D1D1]'>
                    <h1 className='text-white font-bold'>Our Services</h1>
                    <span>Interior design</span>
                    <span>Outdoor design</span>
                    <span>Lightning design</span>
                    <span>Office design</span>
                </div>

                

                <div className='flex flex-col gap-5 text-[#D1D1D1]'>
                    <h1 className='text-white font-bold'>Our Services</h1>
                    <span>Reviews</span>
                    <span>Careers</span>
                    <span>Pricing</span>
                    <span>Press inquires</span>
                </div>



                <div className='flex flex-col gap-5 text-[#D1D1D1]'>
                    <h1 className='text-white font-bold'>Our Services</h1>
                    <span>info@vivadecor.com</span>
                    <span>Design Avenue Cityville, <br /> CA 90210 United States</span>

                </div>

            </div>
        </div>)
}