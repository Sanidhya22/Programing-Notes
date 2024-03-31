//Super class
class Bird {
  fly() {
    console.log("bird flying");
  }
}

//Sub class
class Eagle extends Bird {
  dive() {
    console.log("bird diving");
  }
}

const bird = new Bird();
bird.fly();

const eagle = new Eagle();
eagle.fly();
eagle.dive();
