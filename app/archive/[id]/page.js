import React from 'react'

export default function Page({ params }) {
  return (
    <div>
        <h1>ID number: {params.id}</h1>
    </div>
  )
}
