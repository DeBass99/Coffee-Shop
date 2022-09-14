<template>
    <div class="testimonials">
    <div class="row"> 
        <div class="col-md-5">
            <b-container class="align">
            <h2> What they say <br class="hide-desktop"> about us </h2>
            <p> We always provide the best service and always maintain the quality of coffee </p>
        </b-container>
        </div>

        <div class="col-md-7">
            <carousel paginationActiveColor="#FF912B" paginationColor="#F8E9D2" paginationSize="10" easing="linear" speed="500"  :perPageCustom="[[400, 1], [768, 3]]">
            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 1.png" alt="">

                 <div class="text">
                    <h4> Naura </h4>
                    <p> I really love the cappucino, the coffee was very smooth </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 2.png" alt="">

                 <div class="text">
                    <h4> John </h4>
                    <p> this coffee shop is very convenient </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 3.png" alt="">

                 <div class="text">
                    <h4> Azura </h4>
                    <p> the coffee menu here is very much </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 1.png" alt="">

                 <div class="text">
                    <h4> Naura </h4>
                    <p> I really love the cappucino, the coffee was very smooth </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 2.png" alt="">

                 <div class="text">
                    <h4> John </h4>
                    <p> this coffee shop is very convenient </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 3.png" alt="">

                 <div class="text">
                    <h4> Azura </h4>
                    <p> the coffee menu here is very much </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 1.png" alt="">

                 <div class="text">
                    <h4> Naura </h4>
                    <p> I really love the cappucino, the coffee was very smooth </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 2.png" alt="">

                 <div class="text">
                    <h4> John </h4>
                    <p> this coffee shop is very convenient </p>
                 </div>

                </div>
            </slide>

            <slide>
                <div class="card-bg">
                 <img src="~/assets/tes 3.png" alt="">

                 <div class="text">
                    <h4> Azura </h4>
                    <p> the coffee menu here is very much </p>
                 </div>

                </div>
            </slide>
            </carousel>
        </div>

    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

h2{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 32px;
    color: #000;
    padding-top: 50px;  
    }

p{ 
     font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #7E7D7A;                  
    }

.testimonials{ 
    background-image: url("~/assets/testimonials bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding: 120px 0px 80px 0px;
}

.bg{ 
    display: flex;
    flex-direction: row;
}

.card-bg{ 
    padding: 6px;
    width: 100%;
    height: 286px;
}

.text{ 
    position: relative;
    z-index: 2;
    top: 180px;
    left: 30px;
    width: 226.5px;
    height: 86.23px;
    padding: 6px;
    background: #FFCB7C;
    border: 6px solid #FAF4EB;
    border-radius: 8px;
}

img{ 
    position: absolute;
    z-index: 1;
}

.text h4{ 
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #2F2105;
}

.text p{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #2F2105;
    line-height: 18px;
}

.align{ 
    padding-left: 35%;
}

.hide-desktop{ 
    display: none;
}

@media only screen and (max-width:600px) { 
    .hide-desktop{ 
        display: block;
    }

    .align{ 
        padding: 0%;
    }

    h2{ 
        padding: 0px;
        margin-top: -25px;
    }

    .text{ 
        left: 0px;
    }
}

</style>