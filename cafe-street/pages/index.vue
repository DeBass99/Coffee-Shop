<template>
<div class="app">
    <div class="loading">

        <span>
        <svg class="drink coffee" width="266" height="171" viewBox="0 0 266 171" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M265.951 15.3719C265.951 56.5842 251.98 96.1082 227.11 125.25C202.241 154.391 168.511 170.763 133.341 170.763C98.1708 170.763 64.4405 154.391 39.5714 125.25C14.7023 96.1082 0.730835 56.5842 0.730835 15.3719C0.730835 15.3719 76.508 49.3639 133.341 15.3719C190.174 -18.6202 265.951 15.3719 265.951 15.3719Z" fill="#FF912B"/>
        </svg>
        </span>


        <svg class="cup coffee" width="466" height="285" viewBox="0 0 466 285" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="cup-body" d="M389.256 14.4725C389.256 70.9963 370.312 128.138 341.895 165.173C304.007 203.915 304.007 227.596 195.287 227.596C86.5678 227.596 86.1473 209.742 44.5865 165.173C3.02568 120.605 0.897949 75.7323 0.897949 19.2085H38.7865C38.7865 99.7218 71.3593 138.4 71.3593 138.4C71.3593 138.4 100.566 189.733 195.287 189.733C290.009 189.733 313.479 138.4 313.479 138.4C313.479 138.4 345.988 80.7775 345.988 14.4725H389.256Z" fill="#2F2105"/>
        <path class="cup-body" d="M346.249 90.5083C350.094 103.102 357.898 114.12 368.503 121.926C379.107 129.732 391.947 133.911 405.114 133.841C418.281 133.77 431.075 129.456 441.597 121.538C452.118 113.62 459.805 102.52 463.518 89.8864C467.23 77.2526 466.768 63.7586 462.203 51.4077C457.637 39.0568 449.211 28.5073 438.173 21.3257C427.136 14.1441 414.078 10.7131 400.936 11.542C387.794 12.371 375.27 17.4157 365.223 25.9274L385.605 49.9858C390.477 45.8587 396.549 43.4127 402.921 43.0107C409.293 42.6088 415.624 44.2724 420.976 47.7546C426.328 51.2367 430.414 56.3518 432.628 62.3404C434.842 68.329 435.065 74.8718 433.265 80.9975C431.465 87.1233 427.737 92.5053 422.637 96.3441C417.535 100.184 411.332 102.276 404.947 102.31C398.562 102.344 392.337 100.318 387.196 96.5326C382.053 92.7475 378.269 87.4054 376.405 81.2991L346.249 90.5083Z" fill="#2F2105"/>
         <path class="cup-base" d="M367.994 256.012H22.1599C15.6486 256.012 10.3701 262.373 10.3701 270.22C10.3701 278.067 15.6486 284.429 22.1599 284.429H367.994C374.505 284.429 379.784 278.067 379.784 270.22C379.784 262.373 374.505 256.012 367.994 256.012Z" fill="#2F2105"/>
        </svg>


        <div class="background bg1"></div>
        <div class="background bg2"></div>

    </div>

  <NavBar />
  <div class="hero">
    <img src="~/assets/coffee 1.png" alt="" class="coffee-1 hide-mobile object" data-value="2" v-on:mousemove="parallax">
      <img src="~/assets/coffee 2.png" alt="" class="coffee-2 hide-mobile object" data-value="3" v-on:mousemove="parallax">
    <b-container>
    <div class="row hero-row">
        <div class="col-md-6 hero-texts">
            <h1 class="effect-underline first-text"> Enjoy your <mark>coffee</mark> before your activity </h1>
            <p class="head"> Boost your productivity and build your mood with a glass of coffee in the morning </p>

            <div class="order">
                <button> Order now <img src="~/assets/order cart.png" alt="cart icon"></button>
                <nuxt-link to="#"> <p class="more"> More menu </p></nuxt-link>
            </div>
        </div>
        <div class="col-md-6 coffee-head">
            <button class="Cappuccino-btn hide-mobile"> <span> Cappuccino  </span> </button>
            <button class="rating-btn hide-mobile"> <span> 4.8 </span> <img src="~/assets/star.png" alt=""></button>
            <button class="price-btn hide-mobile"> <span> 12k </span> </button>
            <div class="smoke-wrap"><img class="smoke" src="~/assets/smoke.png" alt=""></div>
            <div class="smoke-wrap"><img class="smoke-2" src="~/assets/smoke.png" alt=""></div>
            <div class="smoke-wrap"><img class="smoke-3" src="~/assets/smoke.png" alt=""></div>
            <img src="~assets/coffee hero.png" alt="">
        </div>
    </div>
    </b-container>
    </div>

    <section class="load-hide">
    <div class="popular">
    <Products 
    title="Popular"  />
    <div class="back-drop hide-mobile"></div>
</div>

<div class="delivery">
    <b-container>
        <div class="row">
            <div class="col-md">
        <h2 class="effect-underline"> How to use delivery service </h2>

        <div class="service">
            <div class="one"> 
                <img src="~/assets/one.png" alt="">
                <h4> choose your coffee </h4>
                <p> there are 20+ coffees for you </p>
            </div>

            <div class="one"> 
                <img src="~/assets/two.png" alt="">
                <h4> we delivery it to you </h4>
                <p> Choose delivery service </p>
            </div>

            <div class="one"> 
                <img src="~/assets/three.png" alt="">
                <h4> Enjoy your coffee </h4>
                <p> Choose delivery service </p>
            </div>
        </div>
               
    </div>
        </div>
    </b-container>
</div>

<div class="about">
    <b-container>
        <div class="row">
            <div class="col-md-6"> <img src="~/assets/about coffee.png" alt=""> </div>
            <div class="col-md-6 about-texts">
                <h2> About us </h2>
                <h3> We provide quality coffee, and ready to deliver. </h3>
                <p> We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide. </p>
                <button> <nuxt-link to="/about"> Read More </nuxt-link> </button>
            </div>
        </div>
    </b-container>
</div>

<div class="all-products">
    <b-container>
        <AllProducts 
        title="Special menu for you"  />
    </b-container>
</div>

<div class="testimonials">
    <Testimonials />
</div>

<div class="suscribe">
    <Suscribe />
</div>
</section>

</div>
</template>

<script>
import NavBar from '../components/navBar.vue';
import Products from '../components/products.vue';
import AllProducts from '../components/allProducts.vue';
import Testimonials from '../components/testimonials.vue';
import Suscribe from '../components/suscribe.vue';

export default {
    name: "IndexPage",
    components: { NavBar, Products, AllProducts, Testimonials, Suscribe },

    data(){
        return{ 
          
        }
    },

    methods:{ 
        parallax(e) {
      document.querySelectorAll(".object").forEach(function (move) {
        var moving = move.getAttribute("data-value");
        var X = (e.clientX * moving) / 300;
        var Y = (e.clientY * moving) / 300;
        move.style.transform = " translateY(" + Y + "px)";
      })
    }
    },

    //gsap mounted animation
    mounted(){
        var tl = gsap.timeline({defaults:{duration: 1}});

        tl.from('.cup-body', {scale:0, opacity:0,ease: "back.inOut(1.7)", duration:.5})
        .from('.cup-base', {scaleX:0, opacity:0,ease: "back.inOut(1.7)", duration:.6}) 
        .from('.drink', {scale: 0, duration: 1.5, ease: 'bounce.out'}) 
        .to('.background', {scaleY:0, ease: 'back.out', duration:  .5, stagger: .3})
        .to('.coffee', {y: -50, opacity: 0, ease:'power.out', duration: .3}, '= -1');

        //Show content after load
        setTimeout(function() { 
        document.querySelector('.load-hide').className = "";
        }, 2500)

        
    }
}
</script>

<style scoped>

    .app{ 
        font-family: 'Poppins';
        overflow-x: hidden;
    }

    .loading{ 
        position: absolute;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .load-hide{ 
        display: none;
    }

    .bg1{ 
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 9;
        background-color: #F7EBDA;
    }

    .bg2{ 
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 8;
        background-color: #2F2105;
    }

    .cup{ 
        position: absolute;
        z-index: 14;
    }

    .cup-base{ 
        transform-origin: left;
    }

    .drink{ 
        position: relative;
        z-index: 12;
        left: -40px;
        top: -55px
    }

    .background{
        transform-origin: top;
    }




.hero{ 
        background: #F7EBDA;
    }

    .hero-row{ 
        padding-top: 140px;
    }

     h1{ 
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
        color: #2F2105;
        margin-top: 80px;
    }

    h2{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 32px;
    color: #000;  
    }

    mark{ 
        color: #FF912B;
        background: none!important;
    }


    h3{ 
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #000;
    }

    p{ 
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #7E7D7A;                  
    }

    p.head{ 
        margin-top: 24px;
    }

    .order{ 
        margin-top: 32px;
        display: flex;
        align-items: center;
        padding-bottom: 452px;
    }

    .order button{ 
        width: 170px;
        height: 46px;
        background: #2F2105;
        border-radius: 33px;
        color: #fff;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        margin: 0px;
        transition: all .5s ease-in-out;
    }

    .order a{ 
        margin: 10px 0px 0px 0px;
        padding: 0px;
    }

    .order button:hover{ 
        transform: scale(103%);
    }

    p.more{ 
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #F4AE26;
        margin-left: 32px;
    }



    .coffee-head img{ 
        width: 100%;
        z-index: -1;
    }

    .Cappuccino-btn{ 
        position: absolute;
        z-index: 1;
        width: 271px;
        height: 57px;
        background: #FFFFFF;
        border-radius: 42px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #2F2105;
        border: 10px solid #FAF4EB;
        top: 50px;
        left: -50px;
    }

    .rating-btn{ 
        position: absolute;
        z-index: 2;
        width: 133.48px;
        height: 57px;
        background: #FFFFFF;
        border-radius: 42px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #2F2105;
        border: 10px solid #FAF4EB;
        display: flex;
        align-items: center;
        justify-content: space-around;
        top: 140px;
        left: 400px;
    }

    .rating-btn img{ 
        width: 20px;
        height: 20px;
    }

    .price-btn{ 
        position: absolute;
        z-index: 3;
        width: 141px;
        height: 57px;
        background: #FFFFFF;
        border-radius: 42px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #2F2105;
        border: 10px solid #FAF4EB;
        top: 420px;
        left: 80px;
    }

    .coffee-head button:hover { 
        background: #2F2105;
        color: #fff;
        transition: all .5s ease-in-out;
        animation: rotate 0.7s ease-in-out both;
        border: 10px solid #433416;
    }

    .coffee-head button span:hover{ 
        animation: storm 0.7s ease-in-out both;
          animation-delay: 0.06s;  
    }

    @keyframes rotate{
    0%
       { transform: rotate(0deg) translate3d(0, 0, 0)}
    25%
       { transform: rotate(3deg) translate3d(0, 0, 0)}
    50%
    {transform: rotate(-3deg) translate3d(0, 0, 0)}
    75%
    {  transform: rotate(1deg) translate3d(0, 0, 0)}
    100%
    {  transform: rotate(0deg) translate3d(0, 0, 0)}
    }
  
@keyframes storm {
    0%
    {  transform: translate3d( 0, 0, 0) translateZ(0)}
    25%
    {  transform: translate3d( 4px, 0, 0) translateZ(0)}
    50%
    { transform: translate3d( -3px, 0, 0) translateZ(0)}
    75%
    {  transform: translate3d( 2px, 0, 0) translateZ(0)}
    100%
    { transform: translate3d( 0, 0, 0) translateZ(0)}
}

.smoke-wrap{ 
    position: absolute;
    left: 75px;
    top: -120px;
}

.smoke,
.smoke-2,
.smoke-3 { 
    filter: blur(5px);
    transform-origin: 50% 50%;
}

.smoke{ 
    animation: smoke1 3s infinite linear;
}

.smoke-2{ 
    animation: smoke2 3s infinite linear;
    animation-delay: .5s;
}

.smoke-3{ 
    width: 500px;
    animation: smoke3 3s infinite linear;
    animation-delay: 2.5s;
}

@keyframes smoke1{ 
    0%{ 
        filter: blur(0px);
        transform: translateY(0px) scale(-1, 1);
        opacity: 0;
    }

    25%{ 
        filter: blur(3px);
        transform: translateY(-0px) scale(-1, 1.05);
        opacity: 0.5;
    }

    50%{ 
        filter: blur(5px);
        transform: translateY(-20px) scale(-1, 1.1);
        opacity: 1;
    }

    75%{ 
        filter: blur(5px);
        transform: translateY(-30px) scale(-1, 1.15);
        opacity: 0.5;
    }

    100%{ 
        filter: blur(7px);
        transform: translateY(-40px) scale(-1, 1.2);
        opacity: 0;
    }


    
}

@keyframes smoke2{ 
    0%{ 
        filter: blur(0px);
        transform: translateY(0px) scale(1);
        opacity: 0;
    }

    25%{ 
        filter: blur(3px);
        transform: translateY(-0px) scale(1.05);
        opacity: 0.5;
    }

    50%{ 
        filter: blur(5px);
        transform: translateY(-20px) scale(1.1);
        opacity: 1;
    }

    75%{ 
        filter: blur(5px);
        transform: translateY(-30px) scale(1.15);
        opacity: 0.5;
    }

    100%{ 
        filter: blur(7px);
        transform: translateY(-40px) scale(1.2);
        opacity: 0;
    }


    
}

@keyframes smoke3{ 
    0%{ 
        filter: blur(0px);
        transform: translateY(0px) scale(1);
        opacity: 0;
    }

    25%{ 
        filter: blur(3px);
        transform: translateY(-0px) scale(1.05);
        opacity: 0.5;
    }

    50%{ 
        filter: blur(5px);
        transform: translateY(-40px) scale(1.1);
        opacity: 1;
    }

    75%{ 
        filter: blur(5px);
        transform: translateY(-60px) scale(1.15);
        opacity: 0.5;
    }

    100%{ 
        filter: blur(7px);
        transform: translateY(-80px) scale(1.2);
        opacity: 0;
    }


    
}
   
    a{ 
        text-decoration: none!important;
    }

    .coffee-1{ 
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }

    .coffee-2{ 
      position: absolute;
      left: 0;
      top: 620px;
      z-index: 16;
    }


    .popular{ 
        margin-top: -370px;
    }

    .back-drop{ 
        width: 63%;
        height: 367px;
        background: #F9D9AA;
        border-radius: 64px;
        margin: auto;
        margin-top: -280px;
        
    }

.delivery{ 
    margin-top: 118px;
}    

.service{ 
    display: flex;
    justify-content: space-around;
}

.one{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.one img{ 
    width: 159px;
    height: 159px;
}

.one h4{ 
    margin-top: 15px;
}

.about{ 
    margin-top: 208px;
    padding: 80px 0px;
    background-image: url("~/assets/about image.png");
    background-size:cover;
}

.about p{
    margin-top: 15px;
}

.about button{ 
    width: 142px;
    height: 38px;
    background: #2F2105;
    border-radius: 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #F4AE26;

    margin-top: 40px;
    }

    .about a{ 
        text-decoration: none;
        color: #F4AE26;
    }

    .about img{ 
        border: 10px solid #FAF4EB;
        border-radius: 12px;
        box-shadow: 0 10px 24px rgba(0,0,0,0.24);
        margin-top: -160px;
        width: 100%;

    }

    .all-products{ 
        margin-top: 120px;
    }

    .testimonials{ 
        margin-top: 120px;
    }

    .suscribe{ 
        margin: 120px 0px;
    }

    /*effect-underline*/
.effect-underline:after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1.2em;
  width: 45%;
  border-bottom: 4px solid #FF912B;
  margin-top: 10px;
  opacity: 0;
	-webkit-transition: opacity 0.5s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
    transform-origin: left;
}

.effect-underline:hover:after {
  opacity: 1;
	-webkit-transform: scale(0);
	transform: scale(1);
}

    @media only screen and (max-width: 600px) { 
        .app{ 
            overflow-x: hidden;
        }

        .loading{ 
            display: none;
        }

        .hide-mobile{ 
            display: none;
        }

        .hero-texts{ 
            z-index: 2;
        }

        .coffee-head{ 
            margin-top: -350px;
            z-index: 1;
        }

        .popular{ 
            margin-top: 50px;
            padding: 0px;
            margin-right: 0px;
        }

        .service{ 
            display: flex;
            flex-direction: column;
        }

        .about-texts{ 
            margin-top: 40px;
        }

        .smoke-wrap{ 
        left: 0px;
        top: -200px;
        }

        .suscribe{ 
            margin-bottom: 0px;
        }
    }
</style>
