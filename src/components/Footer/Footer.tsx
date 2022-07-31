import React, { FC } from 'react'
import PageRow from '../PageParallax/PageRow'
import { FooterData } from './types'

import './footer.scss'

const Footer: FC<FooterData> = ({
  children = undefined
}) => {
  return (
    <>
        <PageRow
          variant='fill'
          showBorder='top'
        >
          {children}
        </PageRow>
    </>
  )
}

export default Footer
