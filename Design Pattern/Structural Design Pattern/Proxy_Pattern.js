// RealSubject
class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }

  loadFromDisk() {
    console.log(`Loading ${this.filename} from disk`);
  }
}

// Proxy
class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage
const image1 = new ImageProxy("image1.jpg");
const image2 = new ImageProxy("image2.jpg");

image1.display(); // Will load and display image1.jpg
image1.display(); // Will display image1.jpg (already loaded)

image2.display(); // Will load and display image2.jpg
