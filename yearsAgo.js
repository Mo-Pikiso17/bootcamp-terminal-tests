module.exports = function (year){
    var day = new Date();
    var nyears = day.getFullYear() - year;
   
    console.log(nyears);
   
 }