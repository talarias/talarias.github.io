import React, { FC } from 'react'
import PageRow from '../Layout/PageRow/PageRow'
import { FooterData } from './types'

import './footer.scss'

const Footer: FC<FooterData> = ({
  children = undefined
}) => {
  return (
    <>
      <div className='footer'>
      <PageRow
          variant='fill'
          showBorder='top'
        >
          {children}
        </PageRow>
      </div>
    </>
  )
}

export default Footer
