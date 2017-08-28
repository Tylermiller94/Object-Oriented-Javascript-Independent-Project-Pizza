// //business logic
// function Pizza(size, toppings, cost) {
//   this.size = size;
//   this.toppings = toppings;
//   this.cost = cost;
// }
//
// Pizza.prototype.cost = function(size, toppings) {
//   if(this.size == "Small") {
//     this.cost += 8;
//   } else if(this.size == "Medium") {
//     this.cost += 10;
//   } else if(this.size == "Large") {
//     this.cost += 12;
//   }
//   //if(pizza.toppings.includes("toppings")){
//     //ost +=2;
//   //}
//   for(i = 0; i < this.toppings.length; i++) {
//      this.cost += 2;
//    }
//  }

//   //return cost;
// }


// Business Logic v2
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

function Customer(firstName, lastName, street, city) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
}

Pizza.prototype.getSizeCost = function(size) {
  if(this.size == "Small") {
    this.cost += 8;
  } else if(this.size == "Medium") {
    this.cost += 10;
  } else if(this.size == "Large") {
    this.cost += 12;
  }
}

Pizza.prototype.getToppingsCost = function(toppings) {
  for(i = 0; i < this.toppings.length; i++) {
    this.cost += 2;
  }
}


//Interface Logic
$(document).ready(function(){
 $("#form-pizza").submit(function(event){
   event.preventDefault();
   var size = $("#size").val;
   var topiings = $("#toppings").val();
   var toppingCost = 0;

  });
