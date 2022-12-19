import { makeStandardTimes } from "../utils/MakeNoticeTimes";
import { TRAIN_OPTION } from "../utils/Constant";
import { makeCardClassNames } from "../utils/makeCardMargin";

const BUS = "bus";
const TRAIN = "train";

function TimeTable({type, timeSchedule}) {
  const standardTimes = makeStandardTimes(type, timeSchedule);
  const cardClassNames = makeCardClassNames(type, timeSchedule);
  
  // * components
  const TimeTableHeader = () => {
    return (
      <div id='time-table-header'>
        <div>{type === TRAIN_OPTION.DEPART_ENG ? TRAIN_OPTION.BUS : TRAIN_OPTION.TRAIN}</div>
        <div>{type === TRAIN_OPTION.DEPART_ENG ? TRAIN_OPTION.TRAIN : TRAIN_OPTION.BUS}</div>
      </div>
    )
  }

  const TimeSection = () => {
    return (
      <div id="time-table">
        {standardTimes.map((noticeTime, key) => {
          return (
            <div 
            className="time-section"
            key={key}>
              <NoticeTime noticeTime={noticeTime}/>
              <Cards noticeTime={noticeTime}/>
            </div>
            )})}
          <div id="line"></div>
      </div>
      
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
      return <DepartFromMilyangCards noticeTime={noticeTime}/>
    }

    if (type === TRAIN_OPTION.ARRIVE_ENG) {
      return <ArriveToMilyangCards noticeTime={noticeTime}/>
    }
  }

  const DepartFromMilyangCards = ({noticeTime}) => {
    return (
      timeSchedule.map((schedule, index) => {
        
        let time = undefined;
        
        if (schedule.type === BUS) {
          time = Number(schedule.arriveTime.split(":")[0]);
        } else {
          time = Number(schedule.departTime.split(":")[0]);
        }
        if (time !== noticeTime) {
          return;
        }
        

        return (
          <Card
            key={index}
            cardClassName={cardClassNames[index]}
            type={schedule.type === BUS ? "depart-card" : "arrive-card"}
            name={schedule.name}
            departTime={schedule.departTime}
            arriveTime={schedule.arriveTime}
          />
        )
    }))
  }

  const ArriveToMilyangCards = ({noticeTime}) => {
    return (
      timeSchedule.map((schedule, index) => {
        let time = undefined;
        
        if (schedule.type === BUS) {
          time = Number(schedule.departTime.split(":")[0]);
        } else {
          time = Number(schedule.arriveTime.split(":")[0]);
        }
        if (time !== noticeTime) {
          return;
        }


        return (
          <Card
            key={index}
            cardClassName={cardClassNames[index]}
            type={schedule.type === BUS ? "arrive-card" : "depart-card"}
            name={schedule.name}
            departTime={schedule.departTime}
            arriveTime={schedule.arriveTime}
          />
        )
    }))
  }

  // TODO: 버스, 기차 시간 강조, onClick 메소드 구현
  const Card = ({cardClassName, type, name, departTime, arriveTime}) => {
    return (
      <div className={`card-container ${cardClassName}`}>
        <div className="depart-section">
          {type === "depart-card" ? 
          <div className="card">
            <div className="card-name">{name}</div>
            <div className="card-time">{departTime} - <span className="point">{arriveTime}</span></div>
          </div>
          : ""}
        </div>
        <div className="point-circle"></div>
        <div className="arrive-section">
          {type === "arrive-card" ? 
            <div className="card">
              <div className="card-name">{name}</div>
              <div className="card-time"><span className="point">{departTime}</span> - {arriveTime}</div>
            </div>
          : ""}
        </div>
      </div>
    )
  }

  return (
    <div id='time-table-page'>
      <TimeTableHeader />
      <TimeSection />
    </div>
  )
}

export default TimeTable