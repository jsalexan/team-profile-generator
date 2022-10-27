const Engineer = require("../lib/Engineer");

test('should create a new engineer', () => {
    const engineer = new Engineer ('Jennifer Hill', 9392934, 'jen@gmail.com', 'jsalexan');

    expect(engineer.name).toBe('Jennifer Hill');
    expect(engineer.id).toEqual('9392934');
    expect(engineer.email).toEqual('jen@gmail.com');
    expect(engineer.github).toEqual('jsalexan');
});

test('should use each method of the Engineer class', () => {
    const engineer2 = new engineer ('Jennifer Hall', 9392932, 'jenn@gmail.com', 'engineer', 'jalexan');

    expect(engineer2.getName()).toBe('Jennifer Hall');
    expect(engineer2.getId()).toEqual('9392932');
    expect(engineer2.getEmail()).toEqual('jenn@gmail.com');
    expect(engineer2.getRole()).toBe('engineer');
    expect(engineer2.getGitHubName()).toBe('jsalexan');
});