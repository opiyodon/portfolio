"use client";

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-center items-center py-5 overflow-hidden font-medium">
            <img
                src="/images/bg.jpg"
                alt="user avatar"
                className="flex flex-col justify-center items-center object-cover p-2 rounded-full w-32 h-32 border-2 border-primary"
            />
            <h3 className="flex gap-3 my-4 px-7 text-3xl font-medium tracking-wider">
                Don<span className="text-primary">Artkins</span>
            </h3>
            <p className="px-8 mx-7 py-2 my-2 bg-light_bg_dim rounded-full">
                Web Developer
            </p>
            <a
                href="/assets/Opiyo_Don_CV.pdf"
                className="flex items-center justify-center px-8 mx-7 py-2 my-2 bg-light_bg_dim rounded-full"
                download="Opiyo_Don_CV.pdf"
            >
                <GiTie className="w-6 h-6" />
                Download Resume
            </a>
            {/** social icons */}
            <div className="flex justify-around w-9/12 my-1 px-7 text-secondary lg:w-full">
                <a
                    href="tel:+254714230692"
                    target="_blank"
                    className="hover:text-primary transition-all duration-1000 ease-in-out"
                    aria-label="phone"
                >
                    <BiSolidPhoneCall className="w-8 h-8" />
                </a>
                <a
                    href="https://github.com/opiyodon"
                    target="_blank"
                    className="hover:text-primary transition-all duration-1000 ease-in-out"
                    aria-label="github"
                >
                    <AiFillGithub className="w-8 h-8" />
                </a>
                <a
                    href="https://www.linkedin.com/in/opiyo-don-20536a224/"
                    target="_blank"
                    className="hover:text-primary transition-all duration-1000 ease-in-out"
                    aria-label="linkedin"
                >
                    <AiFillLinkedin className="w-8 h-8" />
                </a>
            </div>
            {/** address */}
            <div className="flex flex-col items-center justify-center my-2 lg:my-1 py-5 w-full bg-light_black">
                <div>
                    <div className="flex xs:flex-col md:flex-row lg:flex-col md:items-center md:justify-center xs:gap-2 md:gap-10 lg:gap-3 mb-3">
                        <div className="flex items-center justify-center space-x-2">
                            <GoLocation />
                            <span>Nakuru, Kenya</span>
                        </div>
                        <p>donartkins@gmail.com</p>
                        <p>+254714230692</p>
                    </div>
                    {/** Buttons */}
                    <button
                        className="bg-gradient-to-b from-primary to-secondary w-8/12 rounded-full py-2 px-5 my-2 text-black font-semibold"
                        onClick={() => window.open('mailto: donartkins@gmail.com')}
                    >
                        Email Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar