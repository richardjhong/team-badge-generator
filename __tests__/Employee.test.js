const Employee = require("../lib/employee");
const Bill = new Employee('24', 'Bill', 'Bill@email.com')

describe("Employee class", () => {
  describe("Employee class methods", () => {
    it("gets id", () => {
      expect(Bill.getId()).toBe('24');
    });

    it("gets name", () => {
      expect(Bill.getName()).toBe('Bill');
    });

    it("gets email", () => {
      expect(Bill.getEmail()).toBe('Bill@email.com');
    });

    it("gets role", () => {
      expect(Bill.getRole()).toBe('Employee')
    })
  });
});
