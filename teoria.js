const { log } = console;

// OBJETOS LITERALES
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso de Linux",
    "Curso de HTML",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
}

natalia.aprobarCurso("Curso de latoneria");
log(natalia);

// PROTOTIPOS

function Student(name, age, cursosAprobados) {
  this.name = name
  this.age = age
  this.cursosAprobados = cursosAprobados
};

//* Nueva manera de escribir funciones
Student.prototype.aprobarCurso = function(nuevoCursito){
  this.cursosAprobados.push(nuevoCursito)
};

const miguel = new Student(
  "Miguel Ángel",
  22,
  ['Básico de React', 'Profesional de JS']
);

miguel.aprobarCurso("Curso de unreal engine");
console.log(miguel);


// Prototipos con la sintaxis de clases
class Student2 {
  constructor({
    name,
    cursosAprobados = ["Curso de induccion"],
    age,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  email: "miguelito@platzi.com",
  name: "Miguel",
  age: 28,
});

console.log(miguelito);