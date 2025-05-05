import {FoodListProvider,useFoodListContext,} from "../../Context/FoodListContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDiplay = ({ category }) => {
  const { foodList } = useFoodListContext();

  return (
    <FoodListProvider>
      <div className="FoodDiplay" id="FoodDiplay">
        <h2>Deliciousness Is Just A Tap Away. Order Your Meal Now!</h2>
        <div className="FoodItem">
        {foodList?.map((item, index) => (
          <FoodItem key={index}id={item._id}name={item.name}description={item.description}price={item.price}image={item.image}/>
          ))}
</div>
</div>
      
    </FoodListProvider>
  )
}

export default FoodDiplay;
