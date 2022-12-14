export const state = () => ({
  orders:[
  
  ],



  products:  [
        {
            "id": 1,
            "name": "Sandwich",
            "price": "21k",
            "details": "bread with meat and vegetables",
            "image": "product images/Sandwich.png"
        },
        {
            "id": 2,
            "name": "Hot Milk",
            "details": "Hot Milk with less sugar",
            "price": "21k",
            "image": "/product images/Hot Milk.png"
        },
        {
            "id": 3,
            "name": "Coffe Ice",
            "details": "Espresso and milk flavor",
            "price": "21k",
            "image": "/product images/Coffe Ice Cream.png"
        },
        {
            "id": 4,
            "name": "Cappucino",
            "details": "Hot Cappucino",
            "price": "21k",
            "image": "/product images/Cappucino.png"
        },
        {
            "id": 5,
            "name": "Moccacinno",
            "details": "Hot Moccacino",
            "price": "21k",
            "image": "/product images/Moccacinno.png"
        },
        {
            "id": 6,
            "name": "Waffle Ice Crem",
            "details": "Wafle with Ice cream",
            "price": "21k",
            "image": "/product images/Waffle Ice Crem.png"
        },
    
        {
            "id": 7,
            "name": "Vanilla Latte",
            "price": "21k",
            "details": "espresso and steamed milk",
            "image": "product images/Vanilla Latte.png"
        },
        {
            "id": 8,
            "name": "Espresso",
            "details": "hot water and beans",
            "price": "21k",
            "image": "/product images/Espresso.png"
        },
        {
            "id": 9,
            "name": "Hazelnut Latte",
            "details": "Espresso and milk flavor",
            "price": "21k",
            "image": "/product images/Hazelnut Latte.png"
        }
        ]
})

export const mutations = { 
    addOrder(state, id){ 
        let order = state.products.find(product => product.id==id)
        state.orders.push(order)
    },

    removeOrder(state){ 
        let order = state.products
        state.orders.splice(order)
    }
}