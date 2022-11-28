import ExplainTrainOption from "./ExplainTrainOption";
import { timeCalculator } from "./TimeCalculator";
import { TRAIN_OPTION_TITLE, TRAIN_OPTION_EXPLAIN } from '../utils/Constant';

function SelectTime() {
  const times = timeCalculator.makeTimeOptions();

  return (
    <div className="time-input-container">
      <ExplainTrainOption
      title={TRAIN_OPTION_TITLE.TIME}
      explain={TRAIN_OPTION_EXPLAIN.TIME}
      />
      <select id="time">
        <optgroup className="time-options">
          {times.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </optgroup>
      </select>
    </div>
  );
}

export default SelectTime;
