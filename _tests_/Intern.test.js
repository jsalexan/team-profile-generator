const Intern = require("../lib/Intern");

test('should create a new intern', () => {
    const intern = new Intern ('Jennifer Hill', 9392934, 'jen@gmail.com', 'Princeton');

    expect(intern.name).toBe('Jennifer Hill');
    expect(intern.id).toEqual(9392934);
    expect(intern.email).toEqual('jen@gmail.com');
    expect(intern.school).toEqual('Princeton');
});

test('should use each method of the intern class', () => {
    const intern2 = new Intern ('Jennifer Hall', 9392932, 'jenn@gmail.com', 'Princeton', 'Intern');

    expect(intern2.getName()).toBe('Jennifer Hall');
    expect(intern2.getId()).toEqual(9392932);
    expect(intern2.getEmail()).toEqual('jenn@gmail.com');
    expect(intern2.getSchool()).toEqual('Princeton');
    expect(intern2.getRole()).toBe('Intern');
});