class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
});

class Student{
  constructor({
    id,
    name,
    email,
    username,
    points = 0,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.points = points;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  }
};


class FreeStudent extends Student{
  constructor(props){
    super(props);
  }
  approveCourse(cursoAprobado) {
    if(cursoAprobado.isFree){
      this.approvedCourses.push(cursoAprobado);
    }else {
      console.warn(`Lo sentimos ${this.name} perdiste y quedaste triste`);
    }
  }
}

class BasicStudent extends Student{
  constructor(props){
    super(props);
  }
  approveCourse(cursoAprobado) {
    if(cursoAprobado.lang != "english"){
      this.approvedCourses.push(cursoAprobado);
    }else {
      console.warn(`Lo sentimos ${this.name} perdiste y quedaste triste`);
    }
  }
}

class ExpertStudent extends Student{
  constructor(props){
    super(props);
  }
  approveCourse(cursoAprobado) {
    this.approvedCourses.push(cursoAprobado);
  }
}

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  // learningPaths: [
  //   escuelaWeb,
  //   escuelaVgs,
  // ],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  // learningPaths: [
  //   escuelaWeb,
  //   escuelaData,
  // ],
});

console.log(miguelito)