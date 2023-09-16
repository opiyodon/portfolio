"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";
import ProjectCard from '@/components/ProjectCard'
import ProjectsNavBar from '@/components/ProjectsNavBar'
import { projects as projectsData } from '@/data'
import { Category } from '@/type';
import { useState } from 'react'

const Projects = () => {

  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter(project =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="p-4 min-h-[480px] max-h-[480px] overflow-y-scroll">

      <div className="px-5 py-2">
        <ProjectsNavBar handlerFilterCategory={handlerFilterCategory} active={active} />

        <motion.div 
          className="grid grid-cols-12 gap-4 my-3 relative"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div 
              className="p-2 col-span-12 sm:col-span-6 lg:col-span-4 bg-light_bg_bright rounded-lg"
              key={project.id}
              variants={fadeInUp}
            >
              <ProjectCard 
                project={project} 
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default Projects
