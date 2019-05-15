
import VendingController from "./components/vendingControler";


class App {
  constructor() {
    this.controler = {
      vendingController: new VendingController()
    }

  }
}


window['app'] = new App();