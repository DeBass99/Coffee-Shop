
<template>
    <div>

        <div>
     <button  v-b-modal.modal-center @click="()=>{ removeOrder()}"> Checkout </button>

  <b-modal id="modal-center" centered title=""  hide-footer>
    
    <div class="gif">
        <img src="~/assets/checkout.gif" alt="">
    </div>

    <div class="text">
    <h3> Order Complete </h3>
    <p> You will receive your order details via mail </p>
    </div>

  </b-modal>
</div>

    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {

        methods:{ 
        ...mapMutations(['removeOrder']),
        }
    }
</script>

<style scoped>

button{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 254px;
    height: 58px;
    background: #2F2105;
    color: #fff;
}

.gif{ 
    display: flex;
    justify-content: center;
    align-items: center;
}

img{ 
    width: 250px;
    height: 250px;
}

.text{ 
    display: flex;
    flex-direction: column;
    text-align: center;
}

h3{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
}

p{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
}

/deep/.modal-content {
  background: #fbfbfb!important;
}

</style>