import React from 'react'
import { Link } from 'gatsby'
import { Transition, Trail } from 'react-spring'

const Header = ({ siteTitle }) => (

  <div
    style={{
      background: 'transparent',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '-10px auto',
        marginLeft: '5%',
        maxWidth: '361px',
        padding: '1rem 1.0875rem',
        backgroundColor: 'white',
        borderRadius: '6px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'steelblue',
            textDecoration: 'none',
            position: 'relative',
            top: '8px',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
