import VendingService from "./vendingService";

//private
//we will instantiate service.js which will inport service.js file
//make sure to make that variable private with _service
let _vendingService = new VendingService();

//here we create render or draw on page function
function updateUI() {
  let addCoins = _vendingService.coins;
  let vendingAlert = _vendingService.alertCoins;
  let addCoinsButton = document.getElementById('addCoin');
  let purchaseButton = document.getElementById('purchase');
  console.log(addCoins);
  console.log(vendingAlert);
}





//public
export default class VendingController {
  constructor() {
    updateUI()
  }

}
/*
here is where we create class object for controler
this controler class will have at least
one constructor that uses private function for drawing on page
controler class will have members with methods
the methods will call on different methods of the service variable


*/