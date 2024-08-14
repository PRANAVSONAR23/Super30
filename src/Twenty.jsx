import React, { useState } from 'react'
import { useCart } from './CartContext';

const Twenty = () => {

    const items= [
        {id:1,name:'Product A'},
        {id:2,name:'Product B'},
        {id:3,name:'Product C'}
      ];
  
  const{cartState,CartDispatch}=useCart();

function addToCart(item){
    const existing=cartState.cartItems.find((it)=>it.id===item.id);

    if(existing){
        CartDispatch({type:'Update_Quantity',payload:{id:item.id,quantity:existing.quantity+1}})
    }
    else{

        CartDispatch({type:'Add_To_Cart',payload:{...item,quantity:1}})
    }
}
  
  
    return (
    <>
   <div>
    <h1>Show Cart</h1>
    <ul>
        {
            cartState.cartItems.map((p)=>(
                <div key={p.id}>
                    <li>{p.name}-{p.quantity}</li>
                </div>
            ))
        }
    </ul>
   </div>
   <div>
    <h1 className='bg-red-500'>Product List</h1>
   <ul>
    {
        items.map((item)=>(
         <div key={item.id} className='flex gap-2 m-3'>
            <li>{item.name}</li>
            <button className='bg-blue-600 ' onClick={()=>addToCart(item)}>Add to Cart</button>
         </div>
        ))
    }
    </ul>
   </div>


    </>
  )
}

export default Twenty