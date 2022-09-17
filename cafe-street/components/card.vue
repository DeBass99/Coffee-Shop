<template>
 <div>
  <b-card
    :img-src="pic"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >

    <div class="rating"> <p>4.8</p> <img src="~/assets/star.png" alt=""> </div>

    <div class="name-price">
        <h4> {{name}} </h4>
        <p> {{price}} </p>
    </div>

    <div class="details">
        <p> {{details}} </p>
        <button class="card-cart" > <nuxt-link :to= "`/${products.id}`" > <img src="~/assets/card cart.png" alt="" > </nuxt-link></button>
    </div>
  </b-card>
</div>
</template>

<script>
    import json from '~/js/all.json'
    export default {
        data(){
        return{ 
            products: json,
        }
    },
        props: [ 'name', 'price', 'pic', 'details', 'link' ],
    }
</script>

<style scoped>

.card{ 
    font-family: 'Poppins';
    padding: 18px;
    border: 10px solid #FAF4EB;
    border-radius: 16px;
    width: 100%;
    height: 385px;
    margin: 10px 0px;
    box-shadow: 0 10px 24px rgba(0,0,0,0.24);
    transition: all 0.5s ease-in-out;
}

.card:hover{ 
    transform: scale(102%);
}

.name-price{ 
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.name-price h4{ 
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #2F2105;
    padding: 0px;
    margin: 0px;
}

.name-price p{ 
    font-style: normal;
    font-weight: 700;
    font-size: 24px; 
    color: #2F2105; 
    padding: 0px;
    margin: 0px;

}

.details{ 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.details p{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #7E7D7A;
}

.card-cart{ 
    border: none;
    background: none;
}

.card-cart img{ 
    width: 43px;
    height: 43px;
}




.hot-cold button{ 
    width: 64px;
    height: 32px;
    border: 2px solid #FFD28F;
    border-radius: 8px;
    background: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #FFD28F;

}

.rating{ 
    position: absolute;
    top: 35px;
    width: 62px;
    height: 26px;
    background: #FFFFFF;
    border: 5px solid #FAF4EB;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
}

.rating p{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding: 0px;
    margin: 0px;
} 

.rating img{ 
    width: 11.5px;
    height: 11.5px;
    padding: 0px;
    margin: 0px;
}

img{ 
    width: 100%;
    height: auto;
    border-radius: 12px;
}

a{ 
    text-decoration: none;
    color: #000;
}
</style>