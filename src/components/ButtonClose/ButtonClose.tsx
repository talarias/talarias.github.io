import React, { FC } from 'react'
import { ButtonCloseData } from './types'

import './buttonClose.scss'

const ButtonClose: FC<ButtonCloseData> = ({
  onClick = () => {}
}) => {
  return (
    <>
      <div className={'close-btn action'} onClick={onClick()}>
        <span></span>
      </div>
    </>
  )
}

export default ButtonClose
