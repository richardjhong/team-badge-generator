const convertToClass = require("../utils/generateClasses");

describe("generateClasses", () => {
  describe("convertToClass", () => {
    it("should take data relevant to a manager class and create a new instance of Manager", () => {
      const Michelle = convertToClass('1', 'Michelle', 'michelle@email.com', '34b', 'manager')

      expect(Michelle.getId()).toBe('1');
      expect(Michelle.getName()).toBe('Michelle');
      expect(Michelle.getEmail()).toBe('michelle@email.com');
      expect(Michelle.getOfficeNumber()).toBe('34b');
      expect(Michelle.getRole()).toBe('Manager');
      expect(Michelle.constructor.name).toBe('Manager')
    });

    it("should take data relevant to an engineer class and create a new instance of Engineer", () => {
      const David = convertToClass('3', 'David', 'david@email.com', 'davidgithub', 'engineer')

      expect(David.getId()).toBe('3');
      expect(David.getName()).toBe('David');
      expect(David.getEmail()).toBe('david@email.com');
      expect(David.getGithub()).toBe('davidgithub');
      expect(David.getRole()).toBe('Engineer');
      expect(David.constructor.name).toBe('Engineer')
    });

    it("should take data relevant to an intern class and create a new instance of Intern", () => {
      const Lisa = convertToClass('5', 'Lisa', 'lisa@email.com', 'UT Austin', 'intern')

      expect(Lisa.getId()).toBe('5');
      expect(Lisa.getName()).toBe('Lisa');
      expect(Lisa.getEmail()).toBe('lisa@email.com');
      expect(Lisa.getSchool()).toBe('UT Austin');
      expect(Lisa.getRole()).toBe('Intern');
      expect(Lisa.constructor.name).toBe('Intern')
    });
  });
});
