import React from 'react'
import { useParams } from 'react-router'

function Product() {
  let { userid } =useParams()
  return (
    <div>Product
      <br />
      Id :{userid}
    </div>
  )
}

export default Product