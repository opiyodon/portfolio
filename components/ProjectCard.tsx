"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";
import { IProject } from "@/type"
import { FunctionComponent, useState } from "react"
import { AiFillGithub } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";


const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetail: null | number;
    setShowDetail: (id: null | number) => void;
}> = ({
    project: {
        id,
        name,
        category,
        description,
        github_url,
        deployed_url,
        image_path,
        key_techs,
    },
    showDetail,
    setShowDetail,
}) => {

        return (
            <div className="bg-light_bg_dim rounded-xl p-3 overflow-hidden">

                <div onClick={() => setShowDetail(id)}>
                    <div className="w-60 h-48cursor-pointer rounded-lg object-cover">
                        <Image
                            src={image_path}
                            alt={name}
                            className="cursor-pointer rounded-lg object-cover"
                            layout="responsive"
                            height="0"
                            width="0"
                        />
                    </div>
                    <p className="my-2 pt-1 text-center font-bold cursor-pointer hover:text-secondary transition-all duration-1000 ease-in-out">{name}</p>
                </div>

                {showDetail === id && (
                    <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 bg-light_black p-2 md:p-5 mx-2 rounded-xl">

                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.div
                                variants={fadeInUp}
                            >
                                <Image
                                    src={image_path}
                                    alt={name}
                                    layout="responsive"
                                    height="150"
                                    width="300"
                                    className="rounded-xl"
                                />
                            </motion.div>
                            <motion.div
                                className="flex justify-center my-4 space-x-3"
                                variants={fadeInUp}
                            >

                                <a
                                    href={github_url}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-light_bg_bright rounded-lg"
                                >
                                    <AiFillGithub />
                                    <span>Github</span>
                                </a>

                                <a
                                    href={deployed_url}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-light_bg_bright rounded-lg"
                                >
                                    <AiFillProject />
                                    <span>Project</span>
                                </a>

                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >

                            <motion.h2
                                className="mb-3 text-xl font-medium md:text-2xl"
                                variants={fadeInUp}
                            >
                                {name}
                            </motion.h2>
                            <motion.h3
                                className="mb-3 font-medium"
                                variants={fadeInUp}
                            >
                                {description}
                            </motion.h3>
                            <motion.div
                                className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
                                variants={fadeInUp}
                            >
                                {key_techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 my-1 bg-light_bg_bright rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                        </motion.div>

                        <button
                            className="absolute p-1 rounded-full bg-light_bg_bright top-3 right-3 focus:outline-none hover:text-secondary transition-all duration-1000 ease-in-out"
                            onClick={() => setShowDetail(null)}
                        >
                            <IoMdCloseCircle size={30} />
                        </button>

                    </div>
                )}

            </div>
        );
    };

export default ProjectCard