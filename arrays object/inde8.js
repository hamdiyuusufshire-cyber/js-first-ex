let car = {
   make: "toyoto", 
   model: "haririer",
   year: 200,
   start: function(){
    console.log("The car has start "+ this.make);
   }

};
console.log(car.start());
console.log(car.make);
console.log(car.model);
console.log(car.year);