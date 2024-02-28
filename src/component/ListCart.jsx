import { useDispatch, useSelector } from "react-redux"
import { DelItems, DelQuantity, DelToCart, addQuantity } from "../Store/AppReducer";

export default function ListCart(){
  const listCart = useSelector(state =>state.menu.Cart)
  const dispatch = useDispatch()
  const compteur = listCart.length;
  const Total = listCart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
  const plusQ =(event)=>{
    dispatch(addQuantity(event))
  }
  const delQ =(event)=>{
    dispatch(DelQuantity(event))
  }



 return(
  <>
  <div className="cart">
<div className="part">
  <div className="titleCart m-4">
      <h2>Shopping Cart ({compteur})</h2>
      <a href="" onClick={()=>dispatch(DelItems(listCart))}>Delete items</a>
    </div>
    <div className="m-4 total text-center">
      <h5>Summary Of Your Order</h5>
      <div className="d-flex  justify-content-around m-4 w-100">
       <h4>Total:</h4>
      <h3>{Total}$</h3> 
      </div>
      
      <button className="btn btn-primary ">Checkout</button>
    </div>
  
</div>
    
    {
      listCart.map((lc,index)=><div className="cartFils" key={index}>
        <div className="d-flex justify-content-between">
          <h5>{lc.name}</h5>
          <span style={{fontSize:"22px", color : 'red'}} onClick={()=>dispatch(DelToCart(lc.name))}>
          <ion-icon name="close-outline" ></ion-icon>

          </span>
        </div>
    
    <p> {lc.description} </p>
    
    <div className="clas">
      <span> {lc.price} $</span>
      <div className="btn3">
       <button onClick={()=>plusQ(lc.name)}>+</button>
       {lc.quantity} 
       <button onClick={()=>delQ(lc.name)}>-</button>  
      </div>
      
      </div>
    </div>)
    }
   
   
  </div>
  </>
 )
}