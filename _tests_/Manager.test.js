const Manager = require("../lib/Manager");

test('should create a new employee', () => {
    const employee = new Manager ('Jennifer Hill', 9392934, 'jen@gmail.com', 24);

    expect(employee.name).toBe('Jennifer Hill');
    expect(employee.id).toEqual(9392934);
    expect(employee.email).toBe('jen@gmail.com');
    expect(employee.officeNumber).toEqual(24)
});

test('should use each method of the Employee class', () => {
    const employee2 = new Manager ('Jennifer Hall', 9392932, 'jenn@gmail.com', 24, 'Manager');

    expect(employee2.getName()).toBe('Jennifer Hall');
    expect(employee2.getId()).toEqual(9392932);
    expect(employee2.getEmail()).toBe('jenn@gmail.com');
    expect(employee2.getOfficeNumber()).toEqual(24);
    expect(employee2.getRole()).toBe('Manager');
});