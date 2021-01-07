/*
 File created: Janaury 06, 2021
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
        purpleMat: 'Gym Mat',
        purpleGymMatImg: "./images/purpleGymMat.jpg",
        purpleGymMatAlt: "an image of purple gym mat",
        purpleMatInventory: 100,
        onSale: true,
        descriptions: ["Made from thick Studio-quality NBR rubber", "Non-slip and non-stretch" ,"Mats include either a carry strap or a carry bag"],
        //Blue Gym mat data
        blueGymMat: './images/blueGymMat.jpg',
        blueGymMatAlt: 'an image of purple gym mat',
        variants: [
            {
                variantId: 100,
                variantColor: 'Purple'
            },
            {
                variantId: 100,
                variantColor: 'Blue'
            }
        ]
    }

})