import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
    <div>
<Link to="/">
Home
</Link>
        <Link to="/about">
        About</Link>
        <Link to="/dash">
        Dashboard
        </Link>
    </div>
  )
}

export default Nav