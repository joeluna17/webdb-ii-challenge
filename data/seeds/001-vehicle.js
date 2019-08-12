
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vehicle').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vehicle').insert([
        {vin:'1547r64th645s',make: 'Dodge', model:"1500 EcoDesiel",mileage:12450,trasmissionType:"EFHU78"},
        {vin:'65461hdh96612',make: 'Cheverolet', model:"1500",mileage:1400,trasmissionType:"ksdf5",titleStatus:'clean'},
        {vin:'5641dfgerg2af',make: 'Dodge', model:"1500",mileage:15090,trasmissionType:"EFHU78", titleStatus:'salvage'}
      ]);
    });
};
