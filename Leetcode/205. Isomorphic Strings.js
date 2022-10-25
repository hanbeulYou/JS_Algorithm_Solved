const check = function(s, t) {
  let dictObj = {};
  for(let i=0; i<s.length; i++){
    if(s[i] in dictObj && dictObj[s[i]] !== t[i]) return false;
    dictObj[s[i]] = t[i];
  }
  return true;
}

var isIsomorphic = function(s, t) {
  return check(s, t) && check(t, s)
};