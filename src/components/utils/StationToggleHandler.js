class StationToggleHandler {
  constructor(departToggle, arriveToggle, setDepartToggle, setArriveToggle) {
    this.departToggle = departToggle;
    this.arriveToggle = arriveToggle;
    this.setDepartToggle = setDepartToggle;
    this.setArriveToggle = setArriveToggle;
  }

  setDepartStationSearchBar() {
    if (this.departToggle) {
      this.closeDepartToggle();
      return;
    }

    this.openDepartToggle();
  }

  setArriveStationSearchBar() {
    if (this.arriveToggle) {
      this.closeArriveTogle();
      return;
    }
    
    this.openArriveToggle();
  }

  openDepartToggle() {
    if (this.arriveToggle) {
      this.closeArriveTogle();
    }

    this.setDepartToggle((current) => {
      current = true;
      return current;
    })
  }

  openArriveToggle() {
    if (this.departToggle) {
      this.closeDepartToggle();
    } 
    
    this.setArriveToggle((current) => {
      current = true;
      return current;
    })
  }

  closeDepartToggle() {
    this.setDepartToggle((current) => {
      current = false;
      return current;
    })
  }

  closeArriveTogle() {
    this.setArriveToggle((current) => {
      current = false;
      return current;
    })
  }
}

export default StationToggleHandler;