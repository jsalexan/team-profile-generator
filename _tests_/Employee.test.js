const Employee = require("../lib/Employee");

test('should create a new employee', () => {
    const employee = new Employee ('Jennifer Hill', 9392934, 'jen@gmail.com');

    expect(employee.name).toBe('Jennifer Hill');
    expect(employee.id).toEqual(9392934);
    expect(employee.email).toEqual('jen@gmail.com');
});

test('should use each method of the Employee class', () => {
    const employee2 = new Employee ('Jennifer Hall', 9392932, 'jenn@gmail.com');

    expect(employee2.getName()).toBe('Jennifer Hall');
    expect(employee2.getId()).toEqual(9392932);
    expect(employee2.getEmail()).toEqual('jenn@gmail.com');
    expect(employee2.getRole()).toBe('Employee');
});