import {TRAIN_OPTION} from "./Constant";

const BUS = "bus";
const TRAIN = "train";

export const makeStandardTimes = (type, timeSchedule) => {
  const standardTimes = [];

  if (type === TRAIN_OPTION.DEPART_ENG) {
    makeDepartStandardTimes(timeSchedule[0], standardTimes);
  }

  if (type === TRAIN_OPTION.ARRIVE_ENG) {
    makeArriveStandardTimes(timeSchedule[0], standardTimes);
  }

  return standardTimes;
}

const makeDepartStandardTimes = (time, standardTimes) => {
  let standardTime = undefined;

  if (time.type === BUS) {
    standardTime = Number(time.arriveTime.split(":")[0]);
  }
  if (time.type === TRAIN) {
    standardTime = Number(time.departTime.split(":")[0]);
  }

  for (let time = standardTime; time <= 24; time++) {
    standardTimes.push(time);
  }
}

const makeArriveStandardTimes = (time, standardTimes) => {
  let standardTime = undefined;

  if (time.type === BUS) {
    standardTime = Number(time.departTime.split(":")[0]);
  }
  if (time.type === TRAIN) {
    standardTime = Number(time.arriveTime.split(":")[0]);
  }

  for (let time = standardTime; time <= 24; time++) {
    standardTimes.push(time);
  }
}
