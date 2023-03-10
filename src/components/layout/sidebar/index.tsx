// ** React Import
import { FC, MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'

// ** FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCheckCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from 'hooks/useLocalStorage';

const Sidebar: FC = () => {

  // States
  const [collapsed, setCollapsed] = useLocalStorage<boolean>("collapsed", true)

  const handleChangeCollapse: MouseEventHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={`sidebar ${collapsed && 'collapsed'}`}>
      <div className='sidebar-item'>
        <NavLink to="/" title='Page1'><FontAwesomeIcon icon={faBullseye} /><span>Page1</span></NavLink>
      </div>
      <div className='sidebar-item'>
        <NavLink to="/page2" title='Page2'><FontAwesomeIcon icon={faCheckCircle} /><span>Page2</span></NavLink>
      </div>
      <div className='collapse-action' onClick={handleChangeCollapse}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  )
}

export default Sidebar