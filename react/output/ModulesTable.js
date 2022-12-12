export default function ModulesTable(props) {
  return /*#__PURE__*/React.createElement("table", {
    border: 1
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Code"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Credit"))), /*#__PURE__*/React.createElement("tbody", null, props.modules.map(function (module) {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, module.code), /*#__PURE__*/React.createElement("td", null, module.name), /*#__PURE__*/React.createElement("td", null, module.credit));
  })));
}