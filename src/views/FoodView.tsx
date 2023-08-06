import FoodTracker from "../components/food/FoodTracker";
import RecipeGenerator from "../components/food/RecipeGenerator";
import DateModal from "../components/layout/DateModal";
import "../assets/css/Food.css";

const FoodView = () => {
  return (
    <div className="food-view">
      <h1>Hello FoodView</h1>
      <DateModal ChildComponent={FoodTracker} />
      <RecipeGenerator />
    </div>
  );
};

export default FoodView;
