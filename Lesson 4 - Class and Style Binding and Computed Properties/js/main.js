/*
 File created: Janaury 07, 2021
 Puprose: Create a new Vue instance and initiate data with optional properties to communicate with elements in the DOM
          Condtional and List Rendering
          v-if
          v-else
          v-if-else
          v-show
 Author: Azza Bruce
*/

let app = new Vue({
    el: "#app",
    data: {
        // option titles
        title1: 'Workouts',
        title2: 'My Progress',
        title3: 'My nutrition',
        title4: 'My Sleep',
        title5: 'My Heart Rate',
        title6: 'Help',

        //Images and Atributes 
        //Purple Gym Mat data
        brand: 'Hybrid',
        product: 'Gym Mat',
        // inventory: 100,
        // inStock:false,
        onSale: false,
        descriptions: ["Made from thick Studio-quality NBR rubber", "Non-slip and non-stretch", "Mats include either a carry strap or a carry bag"],
        //Blue Gym mat data
        // image:'./images/purpleGymMat.jpg',
        selectedVariant: 0,
        
        variants: [
            {
                variantId: 1229,
                variantColor: 'Purple',
                variantImg: "./images/purpleGymMat.jpg",
                variantAlt: "an image of purple gym mat",
                variantQuantity: 30,
               
            },
            {
                variantId: 1230,
                variantColor: 'Blue',
                variantImg: './images/blueGymMat.jpg',
                variantAlt: 'an image of a blue gym mat',
                variantQuantity: 0,
               
            }
        ],
        cart: 0,
       
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () { //
            this.cart -= 1 // the button removes items, How do we stop it from going below 0
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log (index)
        }

    },
    computed:{
        productTitle () {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImg
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
      
    }
})
/*
Note: There are two ways to write a methods, either use addToCart ()

or using an annamous function
addToCart: function(){}

*/