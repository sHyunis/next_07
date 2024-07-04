import React from 'react'
 
import Link from 'next/link'
const NavLink = ({item}) => {
  return (
    <Link href={item.path}>{item.title}</Link>
  )
}

export default NavLink