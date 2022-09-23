<template>
    <b-container>
    <div class="products">
    <h2> {{title}} </h2>
    <CardAll />
    </div>
</b-container>
</template>

<script>
import CardAll from './cardAll.vue';
    export default {
    props: ['title'],

    components: { CardAll }
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