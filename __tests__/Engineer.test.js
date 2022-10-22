const Engineer = require("../lib/engineer");
const Sandy = new Engineer('35', 'Sandy', 'Sandy@anotheremail.com', "SandyGitHub")

describe("Engineer class", () => {
  describe("Engineer class methods", () => {
    it("gets id", () => {
      expect(Sandy.getId()).toBe('35');
    });

    it("gets name", () => {
      expect(Sandy.getName()).toBe('Sandy');
    });

    it("gets email", () => {
      expect(Sandy.getEmail()).toBe('Sandy@anotheremail.com');
    });

    it("gets GitHub username", () => {
      expect(Sandy.getGithub()).toBe('SandyGitHub');
    })

    it("gets role", () => {
      expect(Sandy.getRole()).toBe('Engineer')
    })
  });
});
