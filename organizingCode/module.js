var Westeros;

(function(Westeros) {
  (function(Structures) {
    var Castle = (function() {
      function Castle(name) {
        this.name = name;
      }

      Castle.prototype.Build = function() {
        console.log(`Castle built: ${this.name}`);
      };

      return Castle;
    })();

    Structures.Castle = Castle;
  })(Westeros.Structures || (Westeros.Structures = {}));

  var Structures = Westeros.Structures;
})(Westeros || (Westeros = {}));
