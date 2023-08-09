import React from 'react'

export default function Functions(prop:{message: string}) {
  return (
    <>
        <h1>Functions</h1>
        <p>
          {prop.message}
        </p>
    </>
  )
}
