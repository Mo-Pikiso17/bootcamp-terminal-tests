module.exports = function (shiftType){
  
    if(shiftType == "morning"){
      return "R20";
    }
    else if(shiftType =="afternoon"){
      return "R10";
    }
    else{
      return "free";
    
    }  
  }