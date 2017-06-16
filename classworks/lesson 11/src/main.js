const mainTeacher = { teacherName: 'Doctor House' };

const createStudentsGroup = () => {
  let allStundets = [];
  for (let i = 0; i < 30; i++) {
    let student = { name: 'qwerty ' + i };
    student.__proto__ = mainTeacher;
    student.someMagic = function() {
      console.log(this.name + ' calls ', 'ХАЛЯВА ПРИДИ');
    };
    allStundets.push(student);
  }
  return allStundets;
};

function User(name, teacher) {
  
}

var students = createStudentsGroup();
