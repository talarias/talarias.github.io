import React, { FC } from 'react'
import { PageRowData } from './types'

import './pageRow.scss'

const PageRow: FC<PageRowData> = ({
  variant = 'dark',
  showBorder = '',
  showPadding = true,
  children
}) => {
  return (
    <>
        <div className={'page-row ' + variant + ' row-border-' + showBorder + ' show-padding-' + showPadding}>
          {children}
        </div>
    </>
  )
}

export default PageRow
