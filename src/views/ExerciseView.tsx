import ExerciseGenerator from "../components/exercise/ExerciseGenerator";
import ExerciseTracker from "../components/exercise/ExerciseTracker";
import DateModal from "../components/layout/DateModal";
import "../assets/css/Exercise.css";

const ExerciseView = () => {
  return (
    <div className="exercise-view">
      <h1>Hello ExerciseView</h1>
      <DateModal ChildComponent={ExerciseTracker} />
      <ExerciseGenerator />
    </div>
  );
};

export default ExerciseView;
