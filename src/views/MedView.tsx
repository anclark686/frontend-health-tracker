import MedInteractions from "../components/med/MedInteractions";
import MedTracker from "../components/med/MedTracker";
import DateModal from "../components/layout/DateModal";
import "../assets/css/Med.css";

const MedView = () => {
  return (
    <div className="med-view">
      <h1>Hello MedView</h1>
      <DateModal ChildComponent={MedTracker} />
      <MedInteractions />
    </div>
  );
};

export default MedView;
