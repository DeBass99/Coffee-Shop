<template>
    <div>
        {{product.name}}
        {{product.price}}
    </div>
</template>

<script>
    import json from '~/js/all.json'
    export default {
        data(){ 
            return{ 
                products: json
            }
        },

        computed:{ 
            product(){ 
                return this.products.find(v => v.id == this.$route.params.id)
            }
        }
    }
</script>

<style scoped>

</style>