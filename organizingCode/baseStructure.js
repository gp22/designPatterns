const BaseStructure = (function() {
  function BaseStructure() {

  }
  return BaseStructure;
})();

const Structures = {};
Structures.BaseStructure = BaseStructure;

const __extends = this.__extends || function(d,b) {
  for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  const __ = function() { this.constructor = d; };
  __.prototype = b.prototype;
  d.prototype = new __();
}

const Castle = (function(_super) {
  __extends(Castle, _super);
  function Castle(name) {
    this.name = name;
    _super.call(this);
  }

  Castle.prototype.Build = function() {
    console.log(`Castle built: ${this.name}`);
  };
  return Castle;
})(BaseStructure);
