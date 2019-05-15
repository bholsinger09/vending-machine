/*
this is all private data
only service.js file can change this data
here we will export data being used by our service
service will normally make copy of data
if data does need changed service can use setters to change data
*/

/*
create class to be exported below :
class will have constructor
constructor will pass in parimeter of data
properties of the class will be set :
example properties will be any math logic
data description
tables
index values
*/


/*
class should have methods outside of constructor
these are the private methods used by service
here we all use our getter methods to create any templates needed
getter will use return and backtick to return html needed in template
*/

export default class VendingModel {
  constructor(coinsData) {
    //add properties of model here 
    //model has property of data requested on coin click
    //model has string property "you purchased coke"
    //model has string property "more coins please"
    this.addCoins = function (coinsData) {
      for (coinsData = 0; coinsData < 25; coinsData++) {
        console.log('you inserted coin data')
      }

    }
  }

  get coinAlert() {

    return alert('need more coins')
  }
  //add methods for getter here
}
