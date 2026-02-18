const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyy-MMM-dd\thh:mm:ss"));
console.log(uuid());
