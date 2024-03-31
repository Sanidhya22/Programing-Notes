// Printer class
class Printer {
  print() {
    throw new Error("print method not implemented");
  }
}

// Scanner class
class Scanner {
  scan() {
    throw new Error("scan method not implemented");
  }
}

// Fax class
class Fax {
  fax() {
    throw new Error("fax method not implemented");
  }
}

class MultiFunctionPrinter extends Printer {
  print() {
    console.log("Printing");
  }
}
