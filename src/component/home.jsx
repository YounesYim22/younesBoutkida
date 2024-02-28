import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";


export default function Home() {



  return (
    <>

      <div className="parent">
        <div className="son">
          <div className="text">
            <h4>~ Restaurant Italy ~</h4>
            <p>
              Italian cuisine is a traditional cuisine based on local products from Italy, declined by a great regional diversity. It is based essentially on the Mediterranean diet made of fresh products, but is also renowned for its production of olive oil, cheeses, cold meats, wines, pasta, fruits and desserts which are part of the more than 5,300 traditional regional products. Its spread around the world represents a turnover of more than € 200 billion worldwide in 2018.

            </p>
            <div class="card9">
              <a class="social-link1">
                <ion-icon className='iconmedia' name="logo-instagram"></ion-icon>
              </a>
              <a class="social-link2">
                <ion-icon className='iconmedia' name="logo-twitter"></ion-icon>
              </a>
              <a class="social-link3">
                <ion-icon className='iconmedia' name="logo-discord"></ion-icon>
              </a>
              <a class="social-link4">
                <ion-icon className='iconmedia' name="logo-whatsapp"></ion-icon>
              </a>
            </div>

          </div>
        </div>
        <div className="son1">
          <h5>How is works</h5>
          <h3>What it serve</h3>
          <p>Savor the essence of culinary excellence with our mouthwatering main
            courses. Whether you're a fan of classic comfort food.
          </p>
        </div>
        <div className="son2">
          <div className="box">
            <img src="/images/easy.jpg" alt="" />
            <h5>Easy To Order</h5>
            <p>You only order through the app</p>
          </div>
          <div className="box">
            <img src="/images/delivery.jpg" alt="" />
            <h5>Fastest Delivery</h5>
            <p>Delivery will be on time</p>
          </div>
          <div className="box">
            <img src="/images/bestQ.jpg" alt="" />
            <h5>Best Quality</h5>
            <p>The best quality of food dor you</p>
          </div>
        </div>
        <hr />


      </div>






    </>

  )
}