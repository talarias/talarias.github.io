import { useState } from 'react'
import {FC} from "react";
import {TogglerData} from './types'

import './toggler.scss'

const BurgerMenuToggler: FC<TogglerData> = ({
  toggleFunc,
  start,
  isState
}) => {
  const [active, setActive] = useState(start);

  const handleClick = () => {
    setActive(!active)
    toggleFunc()
  }
  const isActive = () => {
    if (isState === null) return active
    return isState
  }


  return (
    <>
      <div className={'burger-menu-toggler'}>
        <button className={'ud_menu_icon ud_menu_icon-X ' + (isActive() ? 'is-active': '')} onClick={handleClick}>
          <span></span>
        </button>
      </div>
    </>
  )
}

export default BurgerMenuToggler