import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
  return (
    <Card className='my-3 py-3 rounded' >
      <a href={`/product/${Product._id}`}>
        <Card.Img src={props.product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${Product._id}`}>
          <Card.Title as='div'>
            {props.product.name}
            {props.product.rating}
            {props.product.numReviews}
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating value={props.product.rating} text={`${props.product.numReviews} review`} />
        </Card.Text>
        <Card.Text as='h3'>₹{props.product.price * 80}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product