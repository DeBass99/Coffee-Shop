<template>
    <b-container>
    <div class="products">
    <h2> {{title}} </h2>
    <div class="card">
     <Card />
    </div>
    </div>
</b-container>
</template>

<script>
import Card from './card.vue';
    export default {
    props: ['title'],

    
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

.card{ 
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    margin: 0px;
    padding: 0px;
}
</style>