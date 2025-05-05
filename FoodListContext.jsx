// FoodListContext.js
import React, { createContext, useContext} from 'react';
import {food_list} from '../assets/assets'


// Create a Context with a default value



const data = food_list;

 const FoodListContext = createContext({
   foodList: data,
 


//   const [CartItems,setCartItem] = useState({});


// const addToCart = (itemId) => {
//   if(!CartItems[itemId]) {
//     setCartItem((prev)=>({...prev,[itemId]:1}))
//   }
//   else{
//     setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//   }

// }

// const removeFormCart=(itemId)=>{
//   setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

// }

//  useEffect(()=>{
//   console.log(CartItems);
//  },[CartItems]) 

//  const FoodListContext = createContext({
//   foodList: data,
//  setCartItem:data,
//  CartItems:data,
//  addToCart:data,
//  removeFormCart:data,

});

// A custom hook for easy access to the context
export const useFoodListContext = () => useContext(FoodListContext);

// Create a Provider component
export const FoodListProvider = ({ children }) => {

  return (
    <FoodListContext.Provider value={data}>
      {children}
    </FoodListContext.Provider> 
  );
};
