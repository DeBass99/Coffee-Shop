<template>
    <div class="app">

        <NavBar />

        <h1> About Us </h1>

        <div class="head">
            <b-container>
            <div class="row">
                <div class="col-md-6 first-col">
                    <h2> You guessed it right, we are changing the coffee game </h2>

                    <hr class="vertical">

                </div>
                <div class="col-md-6">
                    <p>Since 2010 we have been the leading roaster for premium online gourmet coffee beans! We’re a team of coffee drinking enthusiasts proudly serving freshly roasted beans to fellow coffee-addicts. All of our gourmet coffee beans are freshly roasted and shipped the same day you order.</p>
                </div>
            </div>
        </b-container>
        </div>

        <div class="other">
            <b-container>
                <div class="row">
                    <div class="col-md-6">
                    <img src="~/assets/about coffee.png" alt="">
                    </div>
                    <div class="col-md-6">
                        <h2> About Our Coffee </h2>
                        <p> Our team is a collection of highly caffeinated and passionate individuals looking to provide the highest grade product and service. We launched in 2010 with a brewing desire to transform the online coffee market by providing small batch bean roasting and same day shipments. Fast forward a decade; the concept has drastically revolutionized the industry and allowed for coffee-lovers to brew a fresh pot with 100% gourmet Arabica beans.<br> <br>

Whether you’re a coffee drinker, coffee shop owner, or wholesale buyer looking for the best product possible – we have you covered! Our fan base is constantly growing and has become incredible advocates for our brand. With more and more orders and testimonials from customers pouring in every month we continue to double down on the product line, quality, and service. </p>
                    </div>
                </div>
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
import Testimonials from '../components/testimonials.vue';
import Suscribe from '../components/suscribe.vue';
    export default {
    components: { NavBar, Testimonials, Suscribe }
}
</script>

<style  scoped>

    .app{ 
        overflow-x: hidden;
    }

h1{ 
        font-family: 'poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
        color: #2F2105;
        margin-top: 140px;
        text-align: center;
    }

    h2{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 32px;
    color: #000;  
    }

    p{ 
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #7E7D7A;                  
    }

.head{ 
    background-image: url("~/assets/about bg.png");
    background-size: contain;
    padding: 120px 0px;
    margin-top: 40px;
}

.first-col{ 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.vertical{ 
    width: 75%;
    border: 3px solid #FF912B;
    transform: rotate(90deg);
}

.other{ 
    margin-top: 200px;
}

.other img{ 
        border: 10px solid #FAF4EB;
        border-radius: 12px;
        box-shadow: 0 10px 24px rgba(0,0,0,0.24);
        width: 100%;
}

.testimonials{ 
    margin-top: 150px;
}

.suscribe{ 
    margin: 150px 0px;
}

@media only screen and (max-width:600px){ 
.other h2{ 
    margin-top: 80px;
}

.suscribe{ 
    margin-bottom: 0px;
}
}
</style>