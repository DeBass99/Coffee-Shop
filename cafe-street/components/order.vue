<template>
    <div>
        <div>
        <b-button v-b-modal.modal-center  class="submit"> Order </b-button>

        <b-modal id="modal-center" hide-footer>
            <b-row>

            <b-col md="12" class="calender-box">

                <vc-date-picker mode="dateTime" v-model="date" 
                :value="null"
                color="orange" />

            </b-col>
        </b-row>

        <b-row>
            <b-col md="12" class="click">
                <button @click="()=> {
                    addOrder(product.id),
                    goToCheckOut()
                    }"
                   
                  type="submit" class="checkout"> Place Order </button>
                  
            </b-col>
        </b-row>

        </b-modal>
        </div>
    </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {

    props:['product'],

    data(){
        return{ 
            date: new Date(),
        }
    },

    methods:{ 
        ...mapMutations(['addOrder']),

        goToCheckOut(){ 
            this.$router.push('/orders');
        }}
  
}
  </script>

<style scoped>
button.submit{ 
    font-family: 'poppins';
    display: flex;
    align-items: center;
    justify-content: center;
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

button.submit:focus{
    background: #2F2105!important;
    box-shadow: none;
 }

.modal-body{ 
    padding: 15px;
}

.click{ 
    display: flex;
    justify-content: center;
}

button.checkout{ 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 253.83px;
    height: 33.73px;
    background: #2F2105;
    font-family: 'poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #fff;
    margin-top: 30px;
}

.active{ 
    background: #2F2105!important;
    color: #fff!important;
}



.calender-box{ 
    display: flex;
    justify-content: center;
}

</style>