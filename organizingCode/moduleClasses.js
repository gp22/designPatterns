let Westeros;

(function (Westeros) {
  (function(Structures) {
    const Castle = (function() {
      function Castle(name) {
        this.name = name;
      }

      Castle.prototype.Build = function() {
        console.log(`Castle built: ${this.name}`);
        const w = new Wall();
      };

      return Castle;
    })();

    Structures.Castle = Castle;

    const Wall = (function() {
      function Wall() {
        console.log('Wall constructed');
      }

      return Wall;
    })();

    Structures.Wall = Wall;
  })(Westeros.Structures || (Westeros.Structures = {}));

  const Structures = Westeros.Structures;
})(Westeros || (Westeros = {}));
