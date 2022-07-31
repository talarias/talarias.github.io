import React, { FC } from 'react'
import { PageRowData } from './types'

import './pageRow.scss'

const PageRow: FC<PageRowData> = ({
  variant = 'dark',
  showBorder = '',
  children
}) => {
  return (
    <>
        <div className={'page-row ' + variant + ' row-border-' + showBorder}>
          {children}
        </div>
    </>
  )
}

export default PageRow
