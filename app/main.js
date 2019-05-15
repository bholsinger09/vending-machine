

class App {
  constructor() {
    this.controler = {
      vendingControler: new vendingControler()
    }

  }
}


window['app'] = new App();