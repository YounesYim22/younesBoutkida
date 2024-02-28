import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AddToCard } from "../Store/AppReducer";

export default function Menu(){
 const listMenu = useSelector(stat => stat.menu.Menu)
 const  Category= useSelector(stat => stat.menu.category)
 const [currentCategory, setCurrentCategory] = useState();
 const [Menu, setMenu] = useState([])
 const dispatch = useDispatch();

 const handleSend =(event) =>{
dispatch(AddToCard(event))

 }
 const displayCategories = () => {
  return Category.map((category, key) => (
    <button
      key={key}
      className='btn'
      onClick={(e) => {
        e.preventDefault();
        setCurrentCategory(category);
      }}
    >
      {category}
    </button>
  ));
};
useEffect(()=>{
  const listItems = listMenu.filter(plat => plat.category===currentCategory);
  setMenu(listItems)
 },[currentCategory])
 
 
 
 return(
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-5" >
  <a class="navbar-brand" href="#">Menu</a>
 
  <div class="d-flex justify-content-between" id="navbarNav">
    <ul class="navbar-nav navbar-end">
      {
      displayCategories()
      }
    </ul>
  </div>
</nav>
<div className="row">

  {

    Menu.map((p,index)=><div className="commend" key={index}>
          <img src={p.image} alt="" />
          <h5>{p.name} </h5>
          <p className='discription'> {p.description} </p>
          <span> {p.price} $</span>
          <button className='btn' onClick={()=>handleSend(p)}>add to cart</button>
  
  
        </div>
      )
     
    
  
  }
</div>

  </>
 )
}