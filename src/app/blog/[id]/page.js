import React from 'react'
export default async function Page1({params}) {

  //data fetch
const {id} = await params
  return (
    <div>
      <h2>Blog {id}</h2>
    </div>
  )
}