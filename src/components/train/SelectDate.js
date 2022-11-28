import React from 'react'
import ExplainTrainOption from './ExplainTrainOption';

import { dateCaculator } from './TimeCalculator';
import { TRAIN_OPTION_TITLE, TRAIN_OPTION_EXPLAIN } from '../utils/Constant';

function SelectDate() {
  return (
    <div className="date-input-container">
      <ExplainTrainOption 
      title={TRAIN_OPTION_TITLE.DATE}
      explain={TRAIN_OPTION_EXPLAIN.DATE}
      />
      <input
      className='date-input-container'
      required
      min={dateCaculator.today}
      max={dateCaculator.calAfter1MonthDate()}
      id="date"
      type="date" />
    </div>
  );
}

export default SelectDate;