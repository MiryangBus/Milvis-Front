import { makeStandardTimes } from "./MakeNoticeTimes";
import {TRAIN_OPTION} from "../utils/Constant";

const BUS = "bus";
const TRAIN = "train";

function TimeTable({type, timeSchedule}) {
  const standardTimes = makeStandardTimes(type, timeSchedule);
  console.log(standardTimes);
  
  // * components
  const TimeTableHeader = () => {
    return (
      <>
        <div>{type === TRAIN_OPTION.DEPART_ENG ? TRAIN_OPTION.BUS : TRAIN_OPTION.TRAIN}</div>
        <div>{type === TRAIN_OPTION.DEPART_ENG ? TRAIN_OPTION.TRAIN : TRAIN_OPTION.BUS}</div>
      </>
    )
  }

  const TimeSection = () => {
    return (
      standardTimes.map((noticeTime, key) => {
        return (
          <div key={key}>
            <NoticeTime noticeTime={noticeTime}/>
            <Cards noticeTime={noticeTime}/>
          </div>
        )
      })
    )
  }

  const NoticeTime = ({noticeTime}) => {
    return (
      <div className="circle-time">
        {Number(noticeTime)}
      </div>
    )
  }

  const Cards = ({noticeTime}) => {
    if (type === TRAIN_OPTION.DEPART_ENG) {
      return <DepartTypeCards noticeTime={noticeTime}/>
    }

    if (type === TRAIN_OPTION.ARRIVE_ENG) {
      return <ArriveTypeCards noticeTime={noticeTime}/>
    }
  }

  const DepartTypeCards = ({noticeTime}) => {
    return (
      timeSchedule.map(schedule => {
        let time = undefined;
        if (schedule.type === BUS) {
          time = Number(schedule.arriveTime.split(":")[0]);

          if (time === noticeTime) {
            return (
              <Card 
                type={"depart-card"}
                name={schedule.name}
                departTime={schedule.departTime}
                arriveTime={schedule.arriveTime}
              /> 
            )
          }
        }
        if (schedule.type === TRAIN) {
          time = Number(schedule.departTime.split(":")[0]);

          if (time === noticeTime) {
            return (
              <Card 
                type={"arrive-card"}
                name={schedule.name}
                departTime={schedule.departTime}
                arriveTime={schedule.arriveTime}
              /> 
            )
          }
        }
      })
    )
  }

  const ArriveTypeCards = ({noticeTime}) => {
    return (
      timeSchedule.map(schedule => {
        let time = undefined;
        if (schedule.type === BUS) {
          time = Number(schedule.departTime.split(":")[0]);

          if (time === noticeTime) {
            return (
              <Card 
                type={"arrive-card"}
                name={schedule.name}
                departTime={schedule.departTime}
                arriveTime={schedule.arriveTime}
              /> 
            )
          }
        }

        if (schedule.type === TRAIN) {
          time = Number(schedule.arriveTime.split(":")[0]);

          if (time === noticeTime) {
            return (
              <Card 
                type={"depart-card"}
                name={schedule.name}
                departTime={schedule.departTime}
                arriveTime={schedule.arriveTime}
              /> 
            )
          }
        }
      })
    )
  }

  // TODO: 버스, 기차 시간 강조, onClick 메소드 구현
  const Card = ({type, name, departTime, arriveTime}) => {
    return (
      <div className={`card ${type}`}>
        <div>{name}</div>
        <div>{departTime} - {arriveTime}</div>
      </div>
    )
  }

  return (
    <div>
      <TimeTableHeader />
      <TimeSection />
    </div>
  )
}

export default TimeTable