"use client";

import Bar from '@/components/Bar'
import { languages, tools } from '@/data'
import React from 'react'
import { motion } from "framer-motion";
import { fadeInUp } from '@/animations';

const resume = () => {
  return (
    <div className="px-6 py-2 min-h-[480px] max-h-[480px] overflow-y-scroll">
      {/*Education & Experience*/}
      <div className="grid gap-6 md:grid-cols-2">

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Information Technology</h5>
            <p className="font-semibold">Kabarak University(2021-2025)</p>
            <p className="my-3">
              I am currently pursuing Bachelor of Science (Third Year) in Information Technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Web Developer</h5>
            <p className="font-semibold">Freelancing(2020- on)</p>
            <p className="my-3">
              I really like freelancing. It pays just as well as any nice job and helps connect with people around the world.
            </p>
          </div>
        </motion.div>

      </div>

      {/*Languages & Tools*/}
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <h5 className="my-3 text-2xl font-bold">
            Languages & Frameworks
          </h5>
          <div className="my-2">
            {languages.map(language =>
              <Bar data={language} key={language.name} />
            )}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {tools.map(tool =>
              <Bar data={tool} key={tool.name} />
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default resume