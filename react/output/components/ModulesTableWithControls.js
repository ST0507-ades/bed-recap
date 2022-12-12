import ModuleRowWithControls from "./ModuleRowWithControls.js";
export default function ModulesTableWithControls(props) {
  return /*#__PURE__*/React.createElement("table", {
    border: "1"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Code"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Credit"), /*#__PURE__*/React.createElement("th", null, "Grade"), /*#__PURE__*/React.createElement("th", null, "Remove"))), /*#__PURE__*/React.createElement("tbody", {
    id: "module-tbody"
  }, props.codes.map(function (code, index) {
    return /*#__PURE__*/React.createElement(ModuleRowWithControls, {
      key: index,
      code: code,
      name: props.modules[code]?.name,
      credit: props.modules[code]?.credit,
      onRemove: function () {
        return props.onRemove(index);
      }
    });
  })));
}