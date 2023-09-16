import { FunctionComponent } from "react"
import Link from "next/link"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
  }> = ({ activeItem, setActiveItem, name, route }) => {
    return (
      activeItem !== name && (
        <Link 
          href={route}
          /*className={className}*/
        >
          <span 
            onClick={() => setActiveItem(name)}
            className="hover:text-primary font-medium transition-all duration-1000 ease-in-out"
          >
            {name}
          </span>
        </Link>
      )
    )
  }

export default NavItem