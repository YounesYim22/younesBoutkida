import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  Menu: [
    {
      image: '/images/p1.jpg',
      name: 'Beef Tex-Mex',
      description: 'Pizza Sauce, Mozzarella, Onions, Green Peppers, Beef, Jalapeno and Tomatoes',
      price: 12.22,
      category: 'pizza'
    },
    {
      image: '/images/p2.jpg',
      name: 'Chicken Tex-Mex',
      description: ' Pizza Sauce, Mozzarella, Onions, Green Peppers, Black Olives, Grilled Chicken Breast, Jalapeno & Oregano',
      price: 11.30,
      category: 'pizza'

    },
    {
      image: '/images/p3.jpg',
      name: 'American',
      description: 'Pizza Sauce, Mozzarella,Beef Pepperoni, Beef, Mushrooms and Second layer of Mozzarella. ',
      price: 13.22,
      category: 'pizza'

    },
    {
      image: '/images/p4.jpg',
      name: 'Veggie',
      description: ' Pizza Sauce, Mozzarella, Onions, Green Peppers, Mushrooms & Black Olives',
      price: 12.90,
      category: 'pizza'

    },
    {
      image: '/images/p5.jpg',
      name: 'Deluxe',
      description: 'Pizza Sauce, Mozzarella, Beef Pepperoni, Onions, Green Peppers, Mushrooms & Italian Sausage',
      price: 15,
      category: 'pizza'

    },
    {
      image: '/images/p6.jpg',
      name: 'Seafood',
      description: 'Pizza Sauce, Mozzarella, Onions, Black Olives, Shrimp, Tuna, Calamari & Mozzarella',
      price: 10.23,
      category: 'pizza'

    },
    {
      image: '/images/p7.jpg',
      name: 'Extravaganzza',
      description: 'Pizza Sauce, Mozzarella, Beef Pepperoni, Onions, Green Peppers, Mushrooms, Black Olives, Beef, Italian Sausage & Extra layer of Mozzarella',
      price: 11,
      category: 'pizza'

    }, {
      image: '/images/p8.jpg',
      name: 'Hawaiian',
      description: 'Pizza Sauce, Mozzarella, Beef Pepperoni & Hawaiian Pineapple',
      price: 12,
      category: 'pizza'

    }, {
      image: '/images/p9.jpg',
      name: 'Four Cheese',
      description: 'Pizza Sauce, American Cheese, 2 Layers of Mozzarella, Feta Cheese & Oregano',
      price: 11.50,
      category: 'pizza'

    }, {
      image: '/images/p10.jpg',
      name: 'Fisherman',
      description: 'Pizza Sauce, Mozzarella, Onions, Tomato, Black Olives, Tuna, Jalapeno & Cream',
      price: 12.50,
      category: 'pizza'

    },
    {
      image: '/images/p12.jpg',
      name: 'Chicken BBQ',
      description: 'BBQ Sauce, Mozzarella, Grilled Chicken Breast & Onions',
      price: 12.99,
      category: 'pizza'

    }, {
      image: '/images/p11.jpg',
      name: 'Chicken Alfredo',
      description: 'Fresh Cream base, Grilled Chicken Breast Pieces, Mozzarella Cheese, Slices of Fresh Mushroom.',
      price: 12,
      category: 'pizza'

    },
    {
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
      price: 12.99,
      image: "/images/ps1.jpg",
      category: 'pasta'

    },
    {
      name: "Penne Arrabbiata",
      description: "Penne pasta tossed in a spicy tomato sauce with garlic, chili flakes, and fresh basil.",
      price: 10.99,
      image: "/images/ps2.jpg",
      category: 'pasta'

    },
    {
      name: "Fettuccine Alfredo",
      description: "Creamy Alfredo sauce served over fettuccine pasta, topped with Parmesan cheese.",
      price: 11.99,
      image: "/images/ps3.jpg",
      category: 'pasta'

    },
    {
      name: "Ravioli al Pomodoro",
      description: "Homemade ravioli stuffed with ricotta cheese, served with a fresh tomato sauce.",
      price: 13.99,
      image: "/images/ps4.jpg",
      category: 'pasta'

    },
    {
      name: "Linguine with Clams",
      description: "Linguine pasta tossed with fresh clams, garlic, white wine, and parsley.",
      price: 14.99,
      image: "/images/ps5.jpg",
      category: 'pasta'

    },
    {
      name: "Pappardelle Bolognese",
      description: "Wide ribbon pasta served with a hearty meat sauce made with beef, pork, and tomatoes.",
      price: 15.99,
      image: "/images/ps6.jpg",
      category: 'pasta'

    },
    {
      name: "Tortellini Primavera",
      description: "Tortellini pasta served with a medley of fresh vegetables in a light cream sauce.",
      price: 13.49,
      image: "/images/ps7.jpg",
      category: 'pasta'

    },
    {
      name: "Gnocchi Gorgonzola",
      description: "Potato dumplings served in a creamy Gorgonzola sauce with walnuts and spinach.",
      price: 12.99,
      image: "/images/ps8.jpg",
      category: 'pasta'

    },
    {
      name: "Lasagna",
      description: "Layers of pasta sheets baked with ground beef, marinara sauce, and creamy cheese.",
      price: 16.99,
      image: "/images/ps9.jpg",
      category: 'pasta'

    },
    {
      name: "Cacio e Pepe",
      description: "Simple yet delicious Roman pasta dish made with Pecorino Romano cheese and black pepper.",
      price: 11.49,
      image: "/images/ps10.jpg",
      category: 'pasta'

    },
    {
      name: "Rigatoni alla Vodka",
      description: "Tube-shaped pasta served in a creamy tomato sauce with vodka, bacon, and onions.",
      price: 13.99,
      image: "/images/ps11.jpg",
      category: 'pasta'
    },
    {
      name: "Capellini Pomodoro",
      description: "Angel hair pasta tossed with fresh tomatoes, garlic, basil, and olive oil.",
      price: 9.99,
      image: "/images/ps12.jpg",
      category: 'pasta'
    },
    {
      name: "Farfalle with Pesto",
      description: "Bowtie pasta served with homemade basil pesto, cherry tomatoes, and pine nuts.",
      price: 12.49,
      image: "/images/ps13.jpg",
      category: 'pasta'
    },
    {
      name: "Pasta Primavera",
      description: "Mixed vegetables sautéed and tossed with spaghetti in a light garlic sauce.",
      price: 10.99,
      image: "/images/ps14.jpg",
      category: 'pasta'
    },
    {
      "name": "Classic Caprese Salad",
      "description": "Fresh mozzarella cheese, ripe tomatoes, and basil leaves drizzled with balsamic glaze and extra virgin olive oil.",
      "image": "https://media.istockphoto.com/id/1871684087/photo/caprese-salad-cherry-tomatoes-mozzarella-arugula-and-pesto-sauce-isolated-image.jpg?s=612x612&w=0&k=20&c=ze1Ug8GLM0vTNol_yQq9BI-WuaboL-UIFE0kpTzXmZU=",
      "price": 12.99,
      category: 'salad'

    },
    {
      "name": "Mediterranean Greek Salad",
      "description": "Crisp romaine lettuce, feta cheese, kalamata olives, cherry tomatoes, cucumbers, and red onions tossed in Greek dressing.",
      "image": "https://media.istockphoto.com/id/1210516971/photo/healthy-greek-salad-of-green-lettuce-cherry-tomato-onion-pepper-feta-cheese-black-olives.jpg?s=612x612&w=0&k=20&c=TykYhjAg30wFu9Oe1AHXyQfJqPxdqWK1EwcXnGjkf_U=",
      "price": 11.99,
      category: 'salad'
    },
    {
      "name": "Antipasto Salad",
      "description": "A hearty mix of mixed greens, Italian meats (such as salami and prosciutto), marinated artichoke hearts, roasted red peppers, and provolone cheese, served with Italian vinaigrette.",
      "image": "https://media.istockphoto.com/id/472572850/photo/healthy-eating-ham-and-vegetables.jpg?s=612x612&w=0&k=20&c=o0Lw8dFSbQqNDpLHX6mhD1i3x82toML7k8_8OdKun-8=",
      "price": 13.99,
      category: 'salad'
    },
    {
      "name": "Panzanella Salad",
      "description": "Traditional Tuscan salad made with stale bread cubes, tomatoes, cucumbers, red onions, and basil, dressed in a tangy vinaigrette.",
      "image": "https://media.istockphoto.com/id/1325937873/photo/italian-salad-in-a-white-plate-on-a-gray-concrete-background.jpg?s=612x612&w=0&k=20&c=Vw_sLrEHNKXEL3TdMdwvOIkb7r9YvP5_rxVQb6Fr1CQ=",
      "price": 10.99,
      category: 'salad'
    },
    {
      "name": "Classic Caprese Salad",
      "description": "Fresh mozzarella cheese, ripe tomatoes, and basil leaves drizzled with balsamic glaze and olive oil.",
      "image": "https://media.istockphoto.com/id/1167460458/photo/caprese-salad-with-mozzarella-and-tomato.jpg?s=612x612&w=0&k=20&c=Lq80EJ3bxXNNQZehVR0IKKW2IvnK2IqME8uzt7kNe0E=",
      "price": 9.99,
      category: 'salad'
    },
    {
      "name": "Mediterranean Salad",
      "description": "A colorful mix of romaine lettuce, feta cheese, kalamata olives, red onions, cucumbers, and cherry tomatoes tossed in a Greek dressing.",
      "image": "https://media.istockphoto.com/id/1349072516/photo/vegetarian-greek-salad-with-vinaigrette-dressing.jpg?s=1024x1024&w=is&k=20&c=eskzKhG57t8_LTeZqdHIsTHumZdpgal8bHwb_iLK5b4=",
      "price": 11.49,
      category: 'salad'
    },
    {
      "name": "Antipasto Salad",
      "description": "Sliced salami, pepperoni, ham, provolone cheese, black olives, pepperoncini peppers, cherry tomatoes, and red onions served over a bed of mixed greens with Italian dressing.",
      "image": "https://media.istockphoto.com/id/1083109510/photo/greek-salad-traditional-recipe-restaurant-menu.jpg?s=612x612&w=0&k=20&c=63Gi3et638a7AMqFa3AY7jeai5eSiQicRuj3cTFM63k=",
      "price": 12.99,
      category: 'salad'
    },
    {
      "name": "Grilled Chicken Caesar Salad",
      "description": "Grilled chicken breast, crisp romaine lettuce, croutons, and Parmesan cheese tossed in creamy Caesar dressing.",
      "image": "https://media.istockphoto.com/id/154954255/photo/chicken-meal.jpg?s=1024x1024&w=is&k=20&c=isnZIxPuGYcI-BM__09zsNb4JjFyOSvx873RegWDYRs=",
      "price": 10.99,
      category: 'salad'
    }


  ],
  Cart: [],
  category: ['pizza', 'pasta', 'salad'],
  Followers: [
    {
      "fullName": "John Doe",
      "email": "john.doe@example.com",
      "comment": "Lorem ipsum dolor sit amet.",
      "likes": 10,
      "dislikes": 2
    },
    {
      "fullName": "Jane Smith",
      "email": "jane.smith@example.com",
      "comment": "Consectetur adipiscing elit.",
      "likes": 15,
      "dislikes": 5
    },
    {
      "fullName": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "comment": "Sed do eiusmod tempor incididunt.",
      "likes": 8,
      "dislikes": 1
    }
  ]

}
const UseReduce = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    AddToCard(state, action) {
      const indexOF = state.Cart.findIndex(p => p.name == action.payload.name);
      if (indexOF == -1) {
        state.Cart.push({ ...action.payload, quantity: 1 });
      } else {
        alert("already exist ! ")
      }
    },
    addQuantity(state, action) {
      const { payload: itemName } = action;
      const itemToUpdate = state.Cart.find(item => item.name === itemName);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }

    },
    DelQuantity(state, action) {

      const { payload: itemName } = action;
      const itemToUpdate = state.Cart.find(item => item.name === itemName);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    },
    DelItems(state) {
      state.Cart = [];
    },
    DelToCart(state, action) {
      const index = state.Cart.findIndex(item => item.name === action.payload);
      if (index !== -1) {
        state.Cart.splice(index, 1); // Mutating but generates immutable update
      }
    },
    AddFollow(state, action){
      console.log(action.payload)
      state.Followers.push(action.payload)
    },
    addLikes(state,action){
      const { payload: itemName } = action;
      const itemToUpdate = state.Followers.find(item => item.fullName === itemName);
      if (itemToUpdate) {
        itemToUpdate.likes += 1;
      }
    },
    delComment(state,action){
      const index = state.Followers.findIndex(item => item.fullName === action.payload);
      if (index !== -1) {
        state.Followers.splice(index, 1); 
      }
    }
  }

})
export const { AddToCard, DelItems, addQuantity, DelQuantity, DelToCart,AddFollow,addLikes,delComment} = UseReduce.actions
export default UseReduce.reducer