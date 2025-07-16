import HeroImg from'../assets/hero.png';
import { FaLinkedin , FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero () {
    return <section className='flex flex-col md:flex-row items-center px-3 py-14 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col font-hero-font bg-pink-200 px-4 py-5 rounded'>
            <h1 className='text-6xl'>Hi, <br/> I'm <span className='font-bold italic'>Bhavani Ambrose</span>
            </h1>
            <p className='text-2xl py-2'>I'm a Front-end developer</p>
            <div className='flex space-x-5 py-8'>
                <a href= '#' className='hover:text-blue-500 transition'><FaLinkedin size={35}/></a>
                <a href= '#' className='hover:text-white transition'><FaGithub size={35}/></a>
                <a href= '#' className='hover:text-red-500 transition'><SiGmail size={35}/></a>
            </div>
        </div>
        <img className='md:w-1/3 ' src={HeroImg} />
    </section>
}