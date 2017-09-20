(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var EMPTY_STR = '';
  var IGNORE_GI = 'gi';
  var IGNORE_G = 'g';

  nx.replaceAll = function (inString, inFind, inReplace, inIgnorecase) {

    var str = inString || EMPTY_STR;
    var flags = (inIgnorecase === true) ? IGNORE_GI : IGNORE_G;
    var reg = new RegExp(inFind, flags);
    return str.replace(reg, inReplace);

  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.replaceAll;
  }

}());
