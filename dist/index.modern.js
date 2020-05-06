var setParam = function setParam(param) {
  var queryString = require('query-string');

  var location = window.location;
  var parsed = queryString.parse(location.search);

  var _Object$keys = Object.keys(param),
      key = _Object$keys[0];

  var _Object$values = Object.values(param),
      value = _Object$values[0];

  if (!parsed[key]) {
    parsed[key] = value;
    location.search = queryString.stringify(parsed);
  }
};

export { setParam };
//# sourceMappingURL=index.modern.js.map
