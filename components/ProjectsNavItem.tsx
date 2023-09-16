import { Category } from '@/type'
import { FunctionComponent } from 'react'

const ProjectsNavItem: FunctionComponent<{
    value: Category | "all",
    handlerFilterCategory: Function,
    active: string
}> = ({ value, handlerFilterCategory, active }) => {

    let className = "capitalize font-medium cursor-pointer hover:text-secondary transition-all duration-1000 ease-in-out";
    if (active === value) className += " text-secondary";

    return (
        <ul>
            <li
                className={className}
                onClick={() => handlerFilterCategory(value)}
            >
                {value}
            </li>
        </ul>
    )
}

export default ProjectsNavItem