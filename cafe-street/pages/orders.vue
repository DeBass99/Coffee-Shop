<template>
    <div class="app">
    <b-container>
    <NavBar />

    <h2> Shopping Cart </h2>

    <hr>

    <div class="heading">

        <div class="head"> <p>Meal</p> </div>
        <div class="head"> <p>Name</p> </div>
        <div class="head">  <p>Description</p> </div>
        <div class="head">  <p>Price</p> </div>

    </div>

    <div class="order-list">
    <OrderItem v-for = 'order in orders'
        :key = order.id
        :order = 'order'  
        />
    </div>

    <hr>

        <div class="btn">
            <Checkout />
    </div>


    </b-container>
    </div>
</template>

<script>
import NavBar from '../components/navBar.vue';
import { mapState } from 'vuex'
import OrderItem from '../components/orderItem.vue'
import Checkout from '../components/checkout.vue';

    export default {
    components: { NavBar, OrderItem, Checkout },

    computed: {
        ...mapState([
            'orders'
        ])
    }
}
</script>

<style scoped>


h2{ 
    margin-top: 165px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
}

hr{ 
    border: 1px solid #000000;
    margin: 30px 0px;
}

.heading{ 
    display: flex;
    justify-content: space-between;
}

.head{ 
    display: flex;
    justify-content: flex-start;
}

.heading p{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
}

.order-list{ 
    margin: 50px 0px;
}

.btn{ 
    display: flex;
    justify-content: center;
    margin: 170px 0px;
}

@media only screen and (max-width:600px){ 
    .heading{ 
        display: none;
    }
}
</style>