const Intern = require("../lib/intern");
const Jason = new Intern('08', 'Jason', 'JasonTheIntern@email.com', "UT Austin")

describe("Intern class", () => {
  describe("Intern class methods", () => {
    it("gets id", () => {
      expect(Jason.getId()).toBe('08');
    });

    it("gets name", () => {
      expect(Jason.getName()).toBe('Jason');
    });

    it("gets email", () => {
      expect(Jason.getEmail()).toBe('JasonTheIntern@email.com');
    });

    it("gets school name", () => {
      expect(Jason.getSchool()).toBe('UT Austin');
    })

    it("gets role", () => {
      expect(Jason.getRole()).toBe('Intern')
    })
  });
});
