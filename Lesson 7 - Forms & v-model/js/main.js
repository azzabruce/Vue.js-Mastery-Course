/*
 File created: Janaury 13, 2021
 Puprose: Forms & v-model
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
//data function to render section tiles on the html home page
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
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
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
                    <p v-else="!inStock">Out of Stock</p>
                    <p>Shipping: {{shippingCost}}</p>
                    <!-- product decription starts -->
                    <ul>
                        <li v-for="description in descriptions">{{description}}</li>
                    </ul>
                    <!-- product decription ends-->
                    <!-- product color starts -->
                    <div v-for="(variant,index) in variants"
                        :key="variant.variantId"                     
                        class="colorBox"
                        :style="{backgroundColor: variant.variantColor}"
                        @mouseover="updateProduct(index)">
                        <!-- <p class="colors"  >{{variant.variantColor}}</p> -->
                    </div>                
                    <!-- product color ends -->
                    <div class="cart">
                        <button v-on:click="addToCart" :disabled="!inStock">Add to cart</button>
                        <button v-on:click="removeFromCart" :disabled="cart<=0">Remove from cart</button>
                    </div>
                <!-- Add to cart button ends -->
                </div>
                <!-- product description and status ends-->
                <!-- Add to cart button starts -->
                
            </div>
        </div>`,
    //data function that returns data object
    data() {
        //data goes here
        return {            
            //product title and description 
            brand: 'Hybrid',
            product: 'Gym Mat',
            onSale: false,
            descriptions: ['Made from thick Studio-quality NBR rubber', 'Non-slip and non-stretch', 'Mats include either a carry strap or a carry bag'],
            selectedVariant: 0,
            variants: [
                {
                     //Purple Gym Mat data
                    variantId: 1229,
                    variantColor: 'Purple',
                    variantImg: './images/purpleGymMat.jpg',
                    variantAlt: 'an image of purple gym mat',
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
            ]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
       removeFromCart(){
           this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
       },
       
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        //computed values go here
        productTitle() {
            return  `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVariant].variantImg
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shippingCost(){
           if(this.premium){
               return "Free"
           }else{
               return 10.99
           }
        }
    }
})
//Contact us form component 

Vue.component('contact-us-form',{
    template: `
        <div class="container">
        <form class="contact-us-form" @submit.prevent="onSubmit" >
            <label for="fname">First Name</label>
            <input v-model="fname" type="text" id="fname" name="firstname" placeholder="Your name..">        
            <label for="lname">Last Name</label>
            <input v-model="lname" type="text" id="lname" name="lastname" placeholder="Your last name..">       
            <label for="message">Message</label>
            <textarea v-model="message" id="message" name="message" placeholder="Write your message.. We care!" style="height:200px"></textarea>       
            <input type="submit" value="Submit">
        </form>
        </div>`,
    data(){
        return {
            //data goes here
            fname: null,
            lname: null,
            message: null
        }
    },
    methods:{
        //methods go here
        onSubmit(){
            let formInputs = {
                fname = this.fname,
                lname = this.lname,
                message = thismessage
            }
        //we can send a custom event, 
        this.$emit('submitedForm', formInputs)
        //we want to set the input values to null so whenever we submit the form input values reset
        this.fname = null
        this.lname = null
        this.message = null
        }
    },
    computed:{
        //computed values go here
    }
})
//create a new vue instance
let app = new Vue({
    el: "#app",
    data:{
        premium: true,
        cart: [],
        formData:[]
    },
    methods:{
        addToCart(id){
            this.cart.push(id)
        },
        removeFromCart(id){ //
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                 this.cart.splice(i, 1);
                }
               }
        },
        addFormData(formInputs){
            this.formData.push(formInputs)
        }
    }
})
/*
Note: There are two ways to write a methods, either use addToCart ()

or using an annamous function
addToCart: function(){}

*/

/*
componenatns are re-usable block of code that have function and structure, it allows for more modular and stuctured pieces that are easier to use

*/