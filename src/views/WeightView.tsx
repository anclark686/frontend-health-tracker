import BMICalculator from "../components/weight/BMICalculator";
import WeightTracker from "../components/weight/WeightTracker";
import DateModal from "../components/layout/DateModal";
import "../assets/css/Weight.css";

const WeightView = () => {
  return (
    <div className="weight-view">
      <h1>Hello WeightView</h1>
      <DateModal ChildComponent={WeightTracker} />
      <BMICalculator />
    </div>
  );
};

export default WeightView;
