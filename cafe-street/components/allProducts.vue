<template>
    <b-container>
    <div class="products">
    <h2> {{title}} </h2>
    <b-card-group deck class="spread-out">
    <Card v-for="product in products"
    :key="product.id"
    :name="product.name"
    :pic="product.image"
    :price="product.price"
    :details="product.details" />
    </b-card-group>
    </div>
</b-container>
</template>

<script>
import Card from './card.vue';
import json from '~/js/all.json'
    export default {
    props: ['title'],

    data(){
        return{ 
            products: json
        }
    },
    components: { Card }
}
</script>

<style  scoped>
h2{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 32px;
    }

    .spread-out{ 
        justify-content: space-around;
    }
</style>