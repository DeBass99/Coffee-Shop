<template>
    <b-container>
    <div class="products">
    <h2> {{title}} </h2>
     <Card />
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

</style>