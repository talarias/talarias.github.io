import React from 'react'
import { Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

export const SiteSettings = {
  logo: 'https://avatars.githubusercontent.com/u/53948891?v=4',
  githubLogo: 'https://avatars.githubusercontent.com/u/53948891?v=4',
  personalLogo: '/homeBg.jpeg',
  siteTitle: 'Max Mustermann',
  siteSubTitle: 'githubname',
  job: 'Job',
  githubUrl: 'https://github.com/talarias',
  sites: [
    <Route key={1} path="Contact" element={<Contact />} />,
    <Route key={2} path="Portfolio" element={<Portfolio />} />
  ]
}
