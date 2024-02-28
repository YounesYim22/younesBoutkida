import { useSelector } from 'react-redux';
import { Link,  } from 'react-router-dom'


export default function Header() {
 const listCart = useSelector(state =>state.menu.Cart)
  const compteur = listCart.length;
 return (
  <>
   <div className="header">
    <div className="logo d-flex">
     <p>Del<span>ici</span>osa <ion-icon name="restaurant-outline" className='icon'></ion-icon></p>
    </div>
    <div className="nav">
    
     <Link to={'/home'} className='link'>Home</Link>
     <Link to={'/menu'} className='link'>Menu</Link>
     <Link to={'/followers'} className='link'>Followers</Link>
    
    </div>
    <div className="sing-on d-flex">
     <Link to={'/form'} className='icon1'><ion-icon name="person-add-outline" ></ion-icon></Link>
     <Link to={'/listCart'} className='icon1'><ion-icon name="cart-outline" ></ion-icon></Link>
<span className='compteur'>{compteur}</span>
 
    </div>
   </div>
  
  </>
 )
}