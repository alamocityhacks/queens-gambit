"use strict";

module.exports = function (answer, data) {
  if (answer === challenge(data)) {
    return true;
  } else {
    return false;
  }
};

function challenge(data) {
  var i;
  return regeneratorRuntime.async(function challenge$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!data) {
            _context.next = 9;
            break;
          }

          i = 0;
          data = data.split(" ");
          _context.next = 5;
          return regeneratorRuntime.awrap(data.forEach(function (number) {
            if (number.includes("7")) i++;
          }));

        case 5:
          console.log(i);
          return _context.abrupt("return", i);

        case 9:
          return _context.abrupt("return", null);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
} // challenge 1 77 = 1
// challenge 2 77  = 2