import React, { FC } from 'react'

import './footer.scss'
import PageRow from '../Layout/PageRow/PageRow'
import { FooterData } from '../Layout/Footer/types'

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
