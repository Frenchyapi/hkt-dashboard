const fs = require('fs');
// Let's mock a subset of app.js logic to see what happens
const flightRegex = /^[A-Z0-9]{2}\s*\d+/i;
function getAirlineCode(flightStr) {
    if (!flightStr) return null;
    const clean = flightStr.trim();
    const match = clean.match(/^([A-Z0-9]{2})\s*\d+/i);
    return match ? match[1].toUpperCase() : null;
}
console.log(getAirlineCode("VQ-BZF")); // Should be null
console.log(getAirlineCode("AFL123")); // Should be null
console.log(getAirlineCode("ZF 123")); // Should be ZF
console.log(getAirlineCode("OZN123")); // Should be null
console.log(getAirlineCode("OZ 123")); // Should be OZ
