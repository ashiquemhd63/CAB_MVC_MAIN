const Passenger = require('./passenger');
const Driver = require('./driver');
const Cab = require('./cab');
const Booking = require('./booking');
const Routecost = require('./routecost')

//adding foriegn keys
// foriegn key for cabs table from drivers table
// Driver.hasMany(Cab, {foreignKey:'Driver_Id'});
// Cab.belongsTo(Driver, {

//     foreignKey:'Driver_Id'

// });

// //foreignkey key for booking => cabo no

// Cab.hasMany(Booking, {foreignKey:'cab_no'});
// Booking.belongsTo(Cab, {

//     foreignKey:'cab_no'

// });
// //driver to booking => driver_id(FK)
// Driver.hasMany(Booking, {foreignKey:'driver_id'});
// Booking.belongsTo(Driver, {

//     foreignKey:'driver_id'

// });
// Passenger.hasMany(Booking, {foreignKey:'passenger_id'});
// Booking.belongsTo(Driver, {

//     foreignKey:'passenger_id'

// });




// Passenger.sync({alter: true});

// Driver.sync({alter: true});

// Cab.sync({alter: true});

// Booking.sync({alter: true});


Routecost.sync({alter: true})

