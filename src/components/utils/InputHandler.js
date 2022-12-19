class InputHandler {
  constructor(setValue) {
    this.setValue = setValue;
  }

  changeDepartStationInput = (e) => {
    this.setValue((curr) =>  {
      curr = e.target.value;
      return curr;
    });
  }

  changeArriveStationInput = (e) => {
    this.setValue((curr) => {
      curr = e.target.value;
      return curr;
    })
  }

  initInputValue = () => {
    this.setValue((curr) => {
      curr = '';
      return curr;
    })
  }
}

export default InputHandler;