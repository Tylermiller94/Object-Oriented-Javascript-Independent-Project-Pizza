function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.cost = function(size, toppings) {
  if(this.size == "Small") {
    this.cost += 8;
  } else if(this.size == "Medium") {
    this.cost += 10;
  } else if(this.size == "Large") {
    this.cost += 12;
  }
  if(pizza.toppings.includes("toppings")){
    cost +=2;
  }
  return cost;
}

//Interface Logic
