import { FunctionComponent } from "react"
import ProjectsNavItem from "./ProjectsNavItem"

const ProjectsNavBar: FunctionComponent<{handlerFilterCategory: Function, active: string}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto items-center">
        <ProjectsNavItem value="all" {...props}/>
        <ProjectsNavItem value="react" {...props}/>
        <ProjectsNavItem value="mongo" {...props}/>
        <ProjectsNavItem value="django" {...props}/>
        <ProjectsNavItem value="node" {...props}/>
    </div>
  )
}

export default ProjectsNavBar