module.exports = function createDreamTeam(members) {
  let alph = [];
if (members == null || members == false || members == undefined ) return false;
   for (let i = 0; i < members.length; i++ ){
  if (typeof(members[i]) == "string"){
  alph += members[i].charAt(0);
  }
else i++;
  }
  a = alph.split("").sort().join("");

  return a.toUpperCase();
   
  };
