interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Std1: Student = {
  firstName: 'Abdu',
  lastName: 'Nur',
  age: 20,
  location: 'Addis Ababa'
}

const Std2: Student = {
  firstName: 'Mohammed',
  lastName: 'Ali',
  age: 22,
  location: 'Addis Ababa'
}

const studentsList: Array<Student> = [Std1, Std2];

const table = document.createElement('table');
studentsList.forEach((std) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = std.firstName;
  cell2.textContent = std.location;
});

document.body.append(table);
