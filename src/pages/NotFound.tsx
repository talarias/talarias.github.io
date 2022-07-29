import React from 'react'
import MenuItem from '../components/Navigation/MenuItem'

function NotFound () {
  return (
    <>
        <h1>404 - Error</h1>
        <MenuItem
            key={1}
            title={'Back Home'}
            url={'/'}
            logo={false}
            logoAlt={''}
        />
        <img src={'/404.jpg'} alt={'404'} style={{ width: '100%' }}></img>
    </>
  )
}

export default NotFound
