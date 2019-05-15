
import VendingModel from "../models/vending";

//private
let _vendingModel = new VendingModel()

//private variable to store model goes here 
//make sure variable stores same data type as the model 

export default class VendingService {

  get coins() {
    let _copyModel = new VendingModel()
    return _copyModel.addCoins(5)
  }
  get alertCoins() {
    let _copyModel = new VendingModel()
    return _copyModel.coinAlert
  }
  //when functional console should show message
  //when functional purchase button should have an alert



}
/*
--export the service class(this makes it private )

--service class will use default constructor

--classes will have a default constructor when not entered

--this service class will have getter and setter methods

--getter method will return with _model what data we are working with

--setter will change and set what the is in our model

--service is the only thing that should change our data in model

--best practice though is to have the getter return copy of data

*/














