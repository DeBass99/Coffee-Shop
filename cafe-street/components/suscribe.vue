<template>
    <div class="cta">
        <b-container>
            <div class="row">
                <div class="col-md">
                    <div class="suscribe">
                <div class="text">
        <h2> Subscribe to get 50% discount price </h2>
    </div>
        <div class="wrap">
            <input type="email" placeholder="Email address">
            <button> Order now </button>
        </div>
    </div>
                </div>
            </div>
</b-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .suscribe{ 
        background-image: url("~/assets/suscribe image.png");
        background-repeat:no-repeat;
        background-size:contain;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 130px 0px;
    }

h2{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 32px;
    color: #fff; 
    }

    .wrap{ 
    width: 486px;
    height: 54px;

    background: #FFFFFF;
    border-radius: 42px;
    padding: 0px 7px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .wrap input{ 
        background: none;
        border: none;
        outline: none;
        width: 320px;
        padding-left: 20px;
    }

    .wrap input:focus{ 
    box-shadow: none;
    }

    .wrap button{ 
    width: 138px;
    height: 44px;
    background: #2F2105;
    box-shadow: 0px 4px 32px rgba(223, 195, 124, 0.25);
    border-radius: 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    }

    @media only screen and (max-width:600px) { 

    .suscribe{ 
        background-size: contain;
    }

    h2{ 

        color: #000;
        margin-top: -250px;
    }
    .wrap{ 
        margin-top: -95px;
        display: flex;
        flex-direction: column;
        height: auto;
        background:none;
    }

    .wrap input{ 
        background-color: #fff;
        width: 60%;
        height: 50px;
        border-radius: 10px;
    }

    .wrap button{ 
        margin-top: 60px;
    }
    

    }

</style>