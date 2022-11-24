const Passenger = require('./passenger')
const Driver = require('./driver')
const Cab = require('./cab')
const Booking = require('./booking')

Passenger.sync({alter: true})

Driver.sync()

Cab.sync()

Booking.sync()




