<template>
    <div class="app">

    <NavBar />

    <div class="menu-1">
        <AllProducts 
        title="Regular menu for you" />
    </div>

    <div class="menu-2">
        <AllProducts 
        title="Special menu for you" />
    </div>
    
    <div class="suscribe">
        <Suscribe />
    </div>

    </div>
</template>

<script>
import NavBar from '../components/navBar.vue';
import AllProducts from '../components/allProducts.vue';
import Suscribe from '../components/suscribe.vue';
    export default {
    components: { NavBar, AllProducts, Suscribe }
}
</script>

<style scoped>
.menu-1{ 
    margin-top: 240px;
}

.menu-2{ 
    margin-top: 77px;
}

.suscribe{ 
    margin: 120px 0px;
}

@media only screen and (max-width:600px) { 
    .app{ 
    overflow-x: hidden;
    }

    .suscribe{ 
        margin-top: 180px;
        margin-bottom: 0px;
    }
}
</style>