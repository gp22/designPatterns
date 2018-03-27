const KingOfJoffery = (function() {
  function KingJoffery() {

  }
  KingJoffery.prototype.makeDecision = function() {

  };
  KingJoffery.prototype.marry = function() {

  };

  return KingJoffery;
})();

const LordTywin = (function() {
  function LordTywin() {

  }
  LordTywin.prototype.makeDecision = function() {

  };

  return LordTywin;
})();

const LannisterFactory = (function() {
  function LannisterFactory() {

  }
  LannisterFactory.prototype.getKing = function() {
    return new KingJoffery();
  };
  LannisterFactory.prototype.getHandOfTheKing = function() {
    return new LordTywin();
  };

  return LannisterFactory;
})();

/*
  Implementation
*/
const CourtSession = (function() {
  function CourtSession(abstractFactory) {
    this.abstractFactory = abstractFactory;
    this.COMPLAINT_THRESHOLD = 10;
  }
  CourtSession.prototype.complaintPresented = function(complaint) {
    if (complaint.severity < this.COMPLAINT_THRESHOLD) {
      this.abstractFactory.getHandOfTheKing().makeDecision();
    } else {
      this.abstractFactory.getKing().makeDecision();
    };

    return CourtSession;
  }
})();

/*
  Usage
*/
const courtSession1 = new CourtSession(new LannisterFactory());
courtSession1.complaintPresented({ severity: 8 });
courtSession1.complaintPresented({ severity: 12 });
