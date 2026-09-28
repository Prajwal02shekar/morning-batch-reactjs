import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    let [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div className='productContainer'>
      {
        products.map((prod)=>{
            console.log(prod)
            return(
                <aside key={prod.id}>
                    <h2>{prod.title}</h2>
                    <img src={prod.image} height={100} width={100} alt="" />
                    <h3>Price: $ {prod.price}</h3>
                    <button>Add to cart</button>
                </aside>
            )
        })
      }
    </div>
  )
}

export default Products
