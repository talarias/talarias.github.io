import React, { FC } from 'react'
import { PageRowData } from './types'

import './pageRow.scss'

const PageRow: FC<PageRowData> = ({
  variant = 'dark',
  showBorder = '',
  showPadding = true,
  setFontColor = 'white',
  children
}) => {
  return (
    <>
        <div
          className={'page-row ' + variant + ' row-border-' + showBorder + ' show-padding-' + showPadding}
          style={{ color: setFontColor }}
        >
          {children}
        </div>
    </>
  )
}

export default PageRow
