<template>
    <div class="app">

        <div class="header">

    <NavBar />

    <b-container>
        <div class="row details">
            <div class="col-md-7">
                <img :src="`${product.image}`" alt="">
            </div>
            <div class="col-md-5 texts">
            <h3> {{product.name}} </h3>
            <p> {{product.details}}</p>
            <p class="price"> {{product.price}} </p>

            <b-form-input type="number" class="quantity" ></b-form-input>

            <button type="submit" class="submit"> Add to Cart </button>

            </div>
        </div>
    </b-container>
    </div>

    <div class="popular">
    <b-container>
        <Products 
        title= 'Popular Takes' />
    </b-container>
    <div class="back-drop hide-mobile"></div>
    </div>

    <div class="suscribe">
        <b-container>
            <Suscribe />
        </b-container>
    </div>

    </div>
    </template>

<script>
    import json from '~/js/all.json'
import NavBar from '../components/navBar.vue';
import Products from '../components/products.vue';
import Suscribe from '../components/suscribe.vue';
    export default {
    data() {
        return {
            products: json
        };
    },

    computed: {
        product() {
            return this.products.find(v => v.id == this.$route.params.id);
        }
    },
    components: { NavBar, Products, Suscribe }
}
</script>

<style scoped>

    .app{
        font-family: 'Poppins';
        overflow-x: hidden;
    }

.header{ 
    width: 100%;
    height: auto;
    background: #F7EBDA;
}

.details{ 
    padding: 265px 0px;
}

.details img{ 
    width: 640px;
    height: 500px;
    border-radius: 60px;
    border: 20px solid #2F2105;;
}

.texts{ 
    padding-left: 108px;
    padding-top: 80px;
}

h3{ 
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #2F2105;
}

p{ 
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #7E7D7A;
    width: 161.45px;
}

p.price{ 
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #2F2105;
    margin-top: 60px;
}

input{ 
    width: 114.66px;
    height: 26.69px;
    border: 1px solid #52734D;
    margin-top: 35px;
}

input:focus{ 
    box-shadow: none;
    outline: none;
    border: 1px solid #52734D;
}


input[type=number]::-webkit-inner-spin-button {
  opacity: 1;
}

button.submit{ 
    width: 253.83px;
    height: 33.73px;
    background: #2F2105;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #fff;
    margin-top: 30px;
}

.popular{ 
    margin-top: 160px;
}

.suscribe{ 
    margin: 160px 0px;
}

.back-drop{ 
        width: 63%;
        height: 367px;
        background: #F9D9AA;
        border-radius: 64px;
        margin: auto;
        margin-top: -280px;
        
    }

    @media only screen and (max-width:600px){ 
        .hide-mobile{ 
            display: none;
        }

        .details{ 
            padding-bottom: 80px;
        }

        .details img{ 
            width: 100%;
            height: auto;
        }

        .texts{ 
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 0px;
        }

        .suscribe{ 
            margin: 200px 0px -80px 0px;
        }
    }

</style>