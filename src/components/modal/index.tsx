// ** React Import
import { FC } from 'react'


// ** Style Import
import 'assets/css/modal.css'

interface ComponentProps {
  title: string
  isOpen: boolean,
  children: React.ReactNode,
  footer: React.ReactNode
}

const Modal: FC<ComponentProps> = (props) => {
  const {
    isOpen,
    children, 
    title,
    footer
  } = props

  return (
    <div className={`modal ${isOpen ? 'opened' : 'closed'}`}>
      <div className='modal-content'>
        <div className='modal-header'>
          {title}
        </div>
        <div className='modal-body'>
          {children}
        </div>
        <div className='modal-footer'>
          {footer}
        </div>
      </div>
    </div>
  )
}

export default Modal