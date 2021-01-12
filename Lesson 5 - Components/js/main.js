/*
 File created: Janaury 12, 2021
 Puprose: Create components 
 Author: Azza Bruce
*/
//create the home page component 
Vue.component('home',{
    template: 
    `<div class="home">
    <!-- Sections container -->
    <div class="options-container">
        <div class="option option1">
            <i class="fas fa-running fa-3x"></i>
            <h3>{{title1}}</h3>
        </div>
        <div class="option option2">
            <i class="far fa-chart-bar fa-3x"></i>
            <h3>{{title2}}</h3>
        </div>

        <div class="option option3">
            <i class="fas fa-apple-alt fa-3x"></i>
            <h3>{{title3}}</h3>
        </div>

        <div class="option option4">

            <i class="fas fa-bed fa-3x"></i>
            <h3>{{title4}}</h3>
        </div>
        <div class="option option5">
            <i class="fas fa-heartbeat fa-3x"></i>
            <h3>{{title5}}</h3>
        </div>
        <div class="option option6">
            <i class="fas fa-question fa-3x"></i>
            <h3>{{title6}}</h3>
        </div>
    </div>
    </div>`,

    data(){
        return {
             // option titles
            title1: 'Workouts',
            title2: 'My Progress',
            title3: 'My nutrition',
            title4: 'My Sleep',
            title5: 'My Heart Rate',
            title6: 'Help',
        }
    }
})
//create a vue component for our product
Vue.component('product', {
    template:
        `<div class= "product">
            <!-- Mat collections store container -->
            <div class="store-container">
                <div class="matsCollection">
                    <!-- using the Vue v-binded  directive-->
                    <!-- for the prurpose of practice, I am using the short and long v-binded directive, however for future use, it is best to use the shortned directive -->
                    <img  v-bind:src="image">
                </div>
                <!-- product description and status -->
                <div>
                    <!-- <h1 v-for="variant in variants">{{purpleMat}}</h1> -->
                    <h1>{{productTitle}}</h1>
                    <p v-if="onSale">On Sale!</p>
                    <p v-if="inStock">In stock</p>
                    <!-- <p v-else-if="inventory <=10 && purpleMatInventory >0">Almost out of stock</p> -->
                    <p v-else="!inStock"
                        >Out of Stock</p>
                    <!-- product decription starts -->
                    <ul>
                        <li v-for="description in descriptions">{{description}}</li>
                    </ul>
                    <!-- product decription ends-->
                    <!-- product color starts -->
                    <div v-for = "(variant,index) in variants"
                        :key = "variant.variantId"                     
                        class ="colorBox"
                        :style = "{backgroundColor: variant.variantColor}"
                        @mouseover = "updateProduct(index)">
                        <!-- <p class="colors"  >{{variant.variantColor}}</p> -->
                    </div>                
                    <!-- product color ends -->
                </div>
                <!-- product description and status ends-->
                <!-- Add to cart button starts -->
                <div class="cart">
                    <p class="qty"> Qty ({{ cart }})</p>
                    <button v-on:click="addToCart" :disabled = "!Stock">Add to cart</button>
                    <button v-on:click="removeFromCart" :disabled= "cart <= 0">Remove From Cart</button>
                </div>
                <!-- Add to cart button ends -->
            </div>
        </div>`,

    date() {
        //data goes here
        return {            
            //product title and description 
            brand: 'Hybrid',
            product: 'Gym Mat',
            onSale: false,
            descriptions: ["Made from thick Studio-quality NBR rubber", "Non-slip and non-stretch", "Mats include either a carry strap or a carry bag"],
            selectedVariant: 0,
            variants: [
                {
                     //Purple Gym Mat data
                    variantId: 1229,
                    variantColor: 'Purple',
                    variantImg: "./images/purpleGymMat.jpg",
                    variantAlt: "an image of purple gym mat",
                    variantQuantity: 30,
                },
                {
                    //Blue Gym mat data
                    variantId: 1230,
                    variantColor: 'Blue',
                    variantImg: './images/blueGymMat.jpg',
                    variantAlt: 'an image of a blue gym mat',
                    variantQuantity: 0,
                }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () { //
            this.cart -= 1 // the button removes items, How do we stop it from going below 0
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        //computed values go here
        productTitle() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImg
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})

//create a new vue instance
let app = new Vue({
    el: "#app",
})
/*
Note: There are two ways to write a methods, either use addToCart ()

or using an annamous function
addToCart: function(){}

*/

/*
componenatns are re-usable block of code that have function and structure, it allows for more modular and stuctured pieces that are easier to use

*/