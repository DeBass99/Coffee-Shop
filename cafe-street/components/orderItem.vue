<template>
    <div class="app">
        <b-container>
            <div class="item">

        <img :src="`${order.image}`">

        <div class="texts">
        <h3 class="name"> {{order.name}} </h3>
        
        <h3> {{order.details}} </h3>

        <h3 class="price"> {{order.price}} </h3>
    </div>

    </div>
    </b-container>
    </div>
</template>

<script>
    export default {
        props:[ 'order']
    }
</script>

<style scoped>
.item{ 
    display: flex;
    justify-content: flex-start;
    margin: 25px 0px;
}

.texts{ 
    display: flex;
    justify-content: space-between;
    width: 100%;
    
}

img{ 
    width: 160px;
    height: 110px;
}

h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
}

h3.name{ 
    margin-left: 150px
}

@media only screen and (max-width: 600px){ 
    .texts{ 
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    h3.name{ 
        margin-left: 0px;
        font-size: 24px;
    }

    h3{ 
        font-size:16px;
    }

    h3.price{
        color: #ff912b;
    }
}
</style>