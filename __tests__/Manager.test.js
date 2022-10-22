const Manager = require("../lib/manager");
const Terry = new Manager('99', 'Terry', 'ManagerTerry@email.com', "100")

describe("Manager class", () => {
  describe("Manager class methods", () => {
    it("gets id", () => {
      expect(Terry.getId()).toBe('99');
    });

    it("gets name", () => {
      expect(Terry.getName()).toBe('Terry');
    });

    it("gets email", () => {
      expect(Terry.getEmail()).toBe('ManagerTerry@email.com');
    });

    it("gets office number", () => {
      expect(Terry.getOfficeNumber()).toBe('100');
    })

    it("gets role", () => {
      expect(Terry.getRole()).toBe('Manager')
    })
  });
});
