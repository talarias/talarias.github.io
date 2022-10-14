import React, { FC, useState } from 'react'
import { ButtonCloseData } from './types'

import './buttonClose.scss'
import { Spinner } from 'react-bootstrap'

const ButtonClose: FC<ButtonCloseData> = ({
  onClick = () => {},
  spinning = false
}) => {
  const [clicked, setClicked] = useState(spinning)

  const isClicked = () => { setClicked(!clicked) }

  return (
    <>
      <div className={'close-btn action clicked-' + clicked} onClick={() => { isClicked(); onClick() }}>
        {
          !clicked ? <span></span> : <Spinner animation="border" />
        }
      </div>
    </>
  )
}

export default ButtonClose
