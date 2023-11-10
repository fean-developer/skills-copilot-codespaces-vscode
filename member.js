function skillMember() {
  var member = {
    name: 'John',
    age: 30,
    skills: ['js', 'html', 'css'],
    salary: 2000,
    getSalary: function() {
      return this.salary;
    },
    getSkills: function() {
      return this.skills;
    },
    setSkills: function(newSkills) {
      this.skills = newSkills;
    }
  };
  return member;
}
  