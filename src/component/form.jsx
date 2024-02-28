import { useDispatch } from "react-redux";
import { AddFollow } from "../Store/AppReducer";
import { useRef } from "react";

export default function Form(){
  const name = useRef();
  const email = useRef();
  const comment = useRef();
  const dispatch = useDispatch();

  const displaySubmit=()=>{
    
    dispatch(AddFollow(
      {
        fullName : name.current.value,
        email : email.current.value,
        comment : comment.current.value,
        likes : 0,
        dislikes : 0
      }
    ))
  }
 return(
  <>
  <div class="form-box">
<form class="form">
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span>
    <div class="form-container">
      <input type="text" class="input" placeholder="Full Name" ref={name}/>
			<input type="email" class="input" placeholder="Email" ref={email}/>
			<input type="text" class="input" placeholder="Comment" ref={comment}/>
    </div>
    
    <button type="button" onClick={()=>displaySubmit()}>Sign up</button>
</form>
<div class="form-section">
  <p>Have an account? <a href="">Log in</a> </p>
</div>
</div>
  </>
 )
}