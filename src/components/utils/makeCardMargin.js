import { TRAIN_OPTION } from "./Constant";

const BUS = "bus";
const TRAIN = "train";

const getTimeArriveBus = (schedule) => {
  const time = schedule.arriveTime.split(":")[0];
  const min = schedule.arriveTime.split(":")[1];

  return [time, min];
};

const getTimeDepartTrain = (schedule) => {
  const time = schedule.departTime.split(":")[0];
  const min = schedule.departTime.split(":")[1];

  return [time, min];
};

const getTimeDepartBus = (schedule) => {
  const time = schedule.departTime.split(":")[0];
  const min = schedule.departTime.split(":")[1];

  return [time, min];
};

const getTimeArriveTrain = (schedule) => {
  const time = schedule.arriveTime.split(":")[0];
  const min = schedule.arriveTime.split(":")[1];

  return [time, min];
};

const decideClassName = (time, classNames) => {
  if (time < 5) {
    classNames.push("none-margin");
  } else if (time < 10) {
    classNames.push("margin-1");
  } else if (time < 20) {
    classNames.push("margin-2");
  } else if (time < 30) {
    classNames.push("margin-3");
  } else if (time < 40) {
    classNames.push("margin-4");
  } else {
    classNames.push("margin-5");
  }
};

const departFromMilyang = (timeSchedule, classNames) => {
  for (let idx = 0; idx < timeSchedule.length - 1; idx++) {
    const nextSchedule = timeSchedule[idx + 1];
    const [currTime, currMin] =
      timeSchedule[idx].type === BUS
        ? getTimeArriveBus(timeSchedule[idx])
        : getTimeDepartTrain(timeSchedule[idx]);
    const [nextTime, nextMin] =
      nextSchedule.type === BUS
        ? getTimeArriveBus(nextSchedule)
        : getTimeDepartTrain(nextSchedule);
    const diffTime = Number(nextTime) - Number(currTime);
    const diffMin = Number(nextMin) - Number(currMin);

    if (diffTime >= 1) {
      classNames.push('none-margin');
      continue;
    }

    decideClassName(diffMin, classNames);
  }
};

const arriveToMilyang = (timeSchedule, classNames) => {
  for (let idx = 0; idx < timeSchedule.length - 1; idx++) {
    const nextSchedule = timeSchedule[idx + 1];
    const [currTime, currMin] =
      timeSchedule[idx].type === BUS
        ? getTimeDepartBus(timeSchedule[idx])
        : getTimeArriveTrain(timeSchedule[idx]);
    const [nextTime, nextMin] =
      nextSchedule.type === BUS
        ? getTimeDepartBus(nextSchedule)
        : getTimeArriveTrain(nextSchedule);
    const diffTime = Number(nextTime) - Number(currTime);
    const diffMin = Number(nextMin) - Number(currMin);

    if (diffTime >= 1) {
      classNames.push('none-margin');
      continue;
    }

    decideClassName(diffMin, classNames);
  }
};

export const makeCardClassNames = (type, timeSchedule) => {
  const classNames = [];
  if (type === TRAIN_OPTION.DEPART_ENG) {
    departFromMilyang(timeSchedule, classNames);
  } else {
    arriveToMilyang(timeSchedule, classNames);
  }

  return classNames;
};
