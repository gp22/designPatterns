const Westeros = {};
Westeros.Structures = {};

const Castle = (function() {
  function Castle(name) {
    this.name = name;
  }
  Castle.prototype.Build = function() {
    console.log(`Castle built: ${this.name}`);
  };
  return Castle;
})();
Westeros.Structures.Castle = Castle;

const winterfell = new Westeros.Structures.Castle('Winterfell');
winterfell.Build();
