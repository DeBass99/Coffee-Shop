<template>
<div class="app">
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
        tl.from('.first-text', {y: -100, duration: 1, ease: Back.easeOut, opacity: 0})
    }
}
</script>

<style scoped>

    .app{ 
        font-family: 'Poppins';
        overflow-x: hidden;
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
    }

    .coffee-2{ 
      position: absolute;
      left: 0;
      top: 620px;
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
