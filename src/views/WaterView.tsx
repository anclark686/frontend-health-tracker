import WaterCalculator from "../components/water/WaterCalculator";
import WaterTracker from "../components/water/WaterTracker";
import DateModal from "../components/layout/DateModal";
import "../assets/css/Water.css";

const WaterView = () => {
  return (
    <div className="water-view">
      <h1>Hello WaterView</h1>
      <DateModal ChildComponent={WaterTracker} />
      <WaterCalculator />
    </div>
  );
};

export default WaterView;
