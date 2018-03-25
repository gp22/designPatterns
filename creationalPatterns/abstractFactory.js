const KingOfJoffery = (function() {
  function KingJoffery() {

  }
  KingJoffery.prototype.makeDecision = function() {
    console.log('King Joffery made a decision');
  };
  KingJoffery.prototype.marry = function() {
    console.log('King Joffery got married');
  };

  return KingJoffery;
})();
