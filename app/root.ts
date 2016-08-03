interface Application {
  name: string;
}

class App implements Application {
  constructor() {
    alert(this.name)
  }
}

new App('hello');
