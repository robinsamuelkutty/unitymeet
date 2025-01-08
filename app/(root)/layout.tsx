import React, { ReactNode } from 'react'

const RouteLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        Navbar
        {children}
        Footer
    </main>
  )
}

export default RouteLayout