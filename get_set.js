class Course{
  constructor({
    id,
    name,
    classes = [],
    teacher,
  }){
    this._id = id;
    this.name = name;
    this.classes = classes;
    this.teacher = teacher;
  };
  get name() {
    return  this.name;
  }
  set name(nuevoNombre) {
    if(nuevoNombre === "Curso"){
      console.error("No lo hagas");
    }else {
      this.name = nuevoNombre;
    }
  }
}

const cursoProgramacionBasica = new Course({
  id: 1,
  name: "Curso gratis de programación básica",
  // classes: [lesson1PB],
  teacher: "FreddyVega",
});
// console.log(cursoProgramacionBasica);

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  // classes: [lesson1DM],
  teacher: "ClauAlderete",
});
console.log(cursoIntroMarketingDigital.name = "Curso");
console.log(cursoIntroMarketingDigital.name);
