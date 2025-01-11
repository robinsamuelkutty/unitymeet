import React, { ReactNode } from 'react'

const RouteLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
       
        {children}
       
    </main>
  )
}

export default RouteLayout