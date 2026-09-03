import React from 'react'

const Task3 = () => {
     let foods = [
        {
            id: 1,
            foodName: "Masala Dosa",
            foodImage: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
            foodDescription: "Masala dosa is a dish of South India, consisting of a savoury dosa crepe stuffed with a spiced potato stir fry. It is a popular breakfast item in South India, though it can be served at all times of the day and found in many other parts of the country and overseas."
        },
        {
            id: 2,
            foodName: "Chicken Biryani",
            foodImage: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-biryani-awadhi-01.jpg",
            foodDescription: "Biryani is a mixed rice dish traditionally made with rice, meat, seafood, or vegetables, and spices. It was present in Mughal-era India, though whether it was created there is debated. It is thought to derive from a Persian rice dish, either pilau or birinj biryan. "
        },
        {
            id: 3,
            foodName: "Lemon Chicken",
            foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYGHyzJ9XfLCxiBL7Vj6pHABlTZNswGZIKb4EnaA6gpjo4AeFTgLZ6l7f&s=10",
            foodDescription: ""
        },
        {
            id: 4,
            foodName: "Roti Curry",
            foodImage: "https://i0.wp.com/smithakalluraya.com/wp-content/uploads/2015/06/kadai-paneer-recipe-1.jpg?resize=720%2C854&ssl=1",
            foodDescription: "Curry and roti is a classic, comforting meal of spiced savory gravy paired with soft flatbread. You can enjoy it as a traditional Indian-style plate or as a Caribbean-style wrap. "
        },

        {
            id: 5,
            foodName: "Chicken Ghee Roast",
            foodImage: "https://myfoodstory.com/wp-content/uploads/2023/02/chicken-ghee-roast-square-2-1.jpg",
            foodDescription: "Chicken Ghee Roast is a popular Tuluva Mangalorean chicken recipe whose origins go back to the town, Kundapur, close to Udupi. Chicken ghee roast is fiery red in colour, and has a tangy and spicy flavor with ghee and roasted spices. "
        },
    ]
    console.log(foods)

    let randomFood=foods[Math.floor(Math.random()*foods.length)]
    console.log(randomFood)
  return (
    <div>
      <h2>{randomFood.foodName}</h2>
      <img src={randomFood.foodImage} height={150} width={150} alt="" />
      <p>{randomFood.foodDescription}</p>
    </div>
  )
}

export default Task3
