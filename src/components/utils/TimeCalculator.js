export const dateCaculator = {
  today: new Date().toISOString().split("T")[0],

  calAfter1MonthDate () {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const endDt = new Date(year, month, day + 31).toISOString().split("T")[0];
  
    return endDt;
  }
}

export const timeCalculator = {
  makeTimeOptions() {
    const times = [];

    for (let time = 6; time < 24; time++) {
      const newTime = String(time).padStart(2, '0');
      times.push(newTime);
    }

    return times;
  }
}