import landingImage from '@/asserts/landingImage.webp'
import star from '@/asserts/star.svg'
import wavingBot from '@/asserts/robo_wave.gif'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect'
import { home } from './data';

function Home(){
    return(
        <div className='flex flex-col items-center justify-around h-full md:flex-row relative' id='home' aria-label='Home Section'>
            <div className='my-5'>
                <h1 className='text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl'>Hello 👋, I&apos;m <span className='font-bold text-indigo-500'>{home.name}</span></h1>
                <h2 className='text-base font-medium my-5 md:text-lg lg:text-xl xl:text-2xl'>
                    I&apos;m a <ReactTypingEffect 
                            text={home.roles}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            />
                </h2>
                <div className='flex h-[50px] items-center space-x-5'>
                    <a href='https://github.com/Naveenkumarkohli' target='_blank' rel='noopener noreferrer' aria-label='GitHub Profile' className='hover:opacity-80 transition-opacity'>
                        <FaGithub className='text-3xl'/>
                    </a>
                    <a href='https://www.linkedin.com/in/koyyana-naveen-kumar-220b68255' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn Profile' className='hover:opacity-80 transition-opacity'>
                        <FaLinkedinIn className='text-3xl text-blue-600'/>
                    </a>
                </div>
            </div>
            <div className='w-4/5 sm:w-2/3 md:w-2/5'>
                <img src={landingImage} alt="Landing Image" className='w-full h-full object-contain'/>
            </div>
            <div className='hidden absolute w-full h-full -z-10 md:flex'>
                <img src={star} alt="Star Decoration 1" className='w-10 h-10 star1'/>
                <img src={star} alt="Star Decoration 2" className='w-10 h-10 star2'/>
                <img src={star} alt="Star Decoration 3" className='w-10 h-10 star3'/>
                <img src={wavingBot} alt="Waving Robot Animation" className='wavingBot'/>
            </div>
        </div>
    )
}

export default Home;