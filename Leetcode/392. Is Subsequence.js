var isSubsequence = function(s, t) {
  for(let i=0; i<s.length; i++) {
    if(t.includes(s[i])) t = t.slice(t.indexOf(s[i])+1);
    else return false;
  }
  return true;
};

console.log(isSubsequence("bb", "ahbgdc"))