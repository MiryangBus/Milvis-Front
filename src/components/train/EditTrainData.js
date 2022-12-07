const BUS = "bus";
const TRAIN = "train";
const DEPART_ENG = "depart";
const ARRIVE_ENG = "arrive";

// * 받아온 데이터를 타임 테이블에 출력할 수 있도록 편집하는 함수
// 1. 시간을 TT:MM 형태로 편집
// 2. 프로퍼티 변경
// 3. 타임 테이블에 사용할 수 있도록 정렬

const data = {
  type: "depart",
  date: "2022-11-01",
  time: "06",
  departure_station: "밀양",
  destination_station: "부산",
  time_schedules: [
    {
      "type": "bus",
      "name": "아리랑 7",
      "depart_time": "2022-11-01T13:30:00",
      "arrive_time": "2022-11-01T13:40:00"
    },
    {
      "type": "bus",
      "name": "1",
      "depart_time": "2022-11-01T14:30:00",
      "arrive_time": "2022-11-01T14:50:00"
    },
    {
      "type": "bus",
      "name": "2 부산대",
      "depart_time": "2022-11-01T16:20:00",
      "arrive_time": "2022-11-01T17:00:00"
    },
    {
      "type": "bus",
      "name": "부산대 2",
      "depart_time": "2022-11-01T17:10:00",
      "arrive_time": "2022-11-01T20:00:00"
    },
    {
      "type": "train",
      "name": "KTX 1197",
      "depart_time": "2022-11-01T01:00:00",
      "arrive_time": "2022-11-01T01:10:00"
    },
    {
      "type": "train",
      "name": "무궁화 2",
      "depart_time": "2022-11-01T03:20:00",
      "arrive_time": "2022-11-01T03:55:00"
    },
    {
      "type": "train",
      "name": "새마을-ITX 33",
      "depart_time": "2022-11-01T08:50:00",
      "arrive_time": "2022-11-01T08:59:00"
    },
    {
      "type": "train",
      "name": "무궁화 4",
      "depart_time": "2022-11-01T13:00:00",
      "arrive_time": "2022-11-01T13:20:00"
    }
  ]
};

export const EditTrainData = (data) => {
  const newData = {};
  const timeSchedules = data.time_schedules;
  // 1. 시간을 TT:MM 형태로 편집하여 버스와 기차로 나눔
  const bus = editBusTimeSchedule(timeSchedules);
  const train = editTrainTimeSchedule(timeSchedules);
  // 2. 프로퍼티 변경
  resetDataProperty(newData, data, bus, train);
  // 3. 정렬
  sortNewData(newData);

  return newData;
};

const editBusTimeSchedule = (timeSchedules) => {
  const bus = [];

  for (let schedule of timeSchedules) {
    if (schedule.type === BUS) {
      schedule = editTimeForm(schedule);
      bus.push(schedule);
    }
  }

  return bus;
}

const editTrainTimeSchedule = (timeSchedules) => {
  const train = [];

  for (let schedule of timeSchedules) {
    if (schedule.type === TRAIN) {
      schedule = editTimeForm(schedule);
      train.push(schedule);
    }
  }

  return train;
}

const splitTime = (time) => {
  time = time.split("T")[1];
  time = time.slice(0, 5);

  return time;
}

const editTimeForm = (schedule) => {
  const newTimeForm = {};
  const newDepartTime = splitTime(schedule.depart_time);
  const newArriveTime = splitTime(schedule.arrive_time);

  newTimeForm.type = schedule.type;
  newTimeForm.name = schedule.name;
  newTimeForm.departTime = newDepartTime;
  newTimeForm.arriveTime = newArriveTime;

  return newTimeForm;
}

const resetDataProperty = (newData, data, bus, train) => {
  newData.type = data.type;
  newData.date = data.date.split("-");
  newData.time = data.time;
  newData.departStation = data.departure_station;
  newData.arriveStation = data.destination_station;
  newData.bus = bus;
  newData.train = train;
}

const sortNewData = (newData) => {
  const sortTimeSchedules = [];

  if (newData.type === DEPART_ENG) {
    sortDepartType(newData, sortTimeSchedules);
  }

  if (newData.type === ARRIVE_ENG) {
    sortArriveType(newData, sortTimeSchedules);
  }
}

const sortDepartType = (newData, sortTimeSchedules) => {
  const {bus} = newData;
  const {train} = newData;
  let busPointer = 0;
  let trainPointer = 0;

  while (busPointer < bus.length || trainPointer < train.length) {
    const busTime = bus[busPointer];
    const trainTime = train[trainPointer];

    if (busTime === undefined) {
      sortTimeSchedules.push(trainTime);
      trainPointer++;
      continue;
    }

    if (trainTime === undefined) {
      sortTimeSchedules.push(busTime);
      busPointer++;
      continue;
    }

    const [busDepart, trainArrive] = makeTimeToNumber(busTime.arriveTime, trainTime.departTime);

    if (busDepart < trainArrive) {
      sortTimeSchedules.push(busTime);
      busPointer++;
    }

    if (trainArrive < busDepart) {
      sortTimeSchedules.push(trainTime);
      trainPointer++;
    }
  }

  newData.sortTimeSchedules = sortTimeSchedules;
}


const sortArriveType = (newData, sortTimeSchedules) => {
  const {bus} = newData;
  const {train} = newData;
  let busPointer = 0;
  let trainPointer = 0;

  while (busPointer < bus.length || trainPointer < train.length) {
    const busTime = bus[busPointer];
    const trainTime = train[trainPointer];

    if (busTime === undefined) {
      sortTimeSchedules.push(trainTime);
      trainPointer++;
      continue;
    }

    if (trainTime === undefined) {
      sortTimeSchedules.push(busTime);
      busPointer++;
      continue;
    }

    const [busDepart, trainArrive] = makeTimeToNumber(busTime.departTime, trainTime.arriveTime);

    if (busDepart < trainArrive) {
      sortTimeSchedules.push(busTime);
      busPointer++;
    }

    if (trainArrive < busDepart) {
      sortTimeSchedules.push(trainTime);
      trainPointer++;
    }
  }

  newData.sortTimeSchedules = sortTimeSchedules;
}

const makeTimeToNumber = (busTime, trainTime) => {
  if (busTime !== undefined) {
    busTime = busTime.split(":").join("");
    Number(busTime);
  }

  if (trainTime !== undefined) {
    trainTime = trainTime.split(":").join("");
    Number(trainTime);
  }
  
  return [busTime, trainTime];
}