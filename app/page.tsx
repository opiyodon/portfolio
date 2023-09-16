"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";
import ServiceCard from "@/components/ServiceCard"
import { services } from "@/data"

const about = () => {
  return (
    <div className="p-4 min-h-[480px] max-h-[480px] overflow-y-scroll">
      <div className="flex flex-col px-6 pt-1">
        <h5 className="my-3 font-medium">
          I am currently pursuing Bachelor of Science (Third Year) in Information Technology. I have 3+ years of experience in Web Development.
        </h5>
        <div className="py-4 pb-10 px-10 my-5 bg-light_black" style={{ marginLeft: '-2.5rem', marginRight: '-2.5rem' }}>
          <h6 className="my-6 text-xl font-bold tracking-wide">What I Offer</h6>
          <motion.div 
            className="grid gap-6 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map(service => (
              <motion.div
                className="bg-light_bg_bright rounded-lg col-span-2 md:col-span-1 p-2"
                key={service.title}
                variants={fadeInUp}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default about