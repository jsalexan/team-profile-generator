const Engineer = require("../lib/Engineer");

test('should create a new engineer', () => {
    const engineer = new Engineer ('Jennifer Hill', 9392934, 'jen@gmail.com', 'jsalexan');

    expect(engineer.name).toBe('Jennifer Hill');
    expect(engineer.id).toEqual(9392934);
    expect(engineer.email).toBe('jen@gmail.com');
    expect(engineer.github).toBe('jsalexan');
});

test('should use each method of the Engineer class', () => {
    const engineer2 = new Engineer ('Jennifer Hall', 9392932, 'jenn@gmail.com', 'jsalexan', 'engineer');

    expect(engineer2.getName()).toBe('Jennifer Hall');
    expect(engineer2.getId()).toEqual(9392932);
    expect(engineer2.getEmail()).toBe('jenn@gmail.com');
    expect(engineer2.getGitHub()).toBe('jsalexan');
    expect(engineer2.getRole()).toBe('Engineer');  
});