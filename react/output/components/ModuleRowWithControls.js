export default function ModuleRowWithControls(props) {
  const [grade, setGrade] = React.useState(props.value || 0);
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "code"
  }, props.code || '???'), /*#__PURE__*/React.createElement("td", {
    className: "name"
  }, props.name || '???'), /*#__PURE__*/React.createElement("td", {
    className: "credit"
  }, props.credit || '???'), /*#__PURE__*/React.createElement("td", {
    className: "grade"
  }, /*#__PURE__*/React.createElement("select", {
    value: grade,
    onChange: function (event) {
      setGrade(event.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true
  }, "-"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "A"), /*#__PURE__*/React.createElement("option", {
    value: "3.5"
  }, "B+"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "B"), /*#__PURE__*/React.createElement("option", {
    value: "2.5"
  }, "C+"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "C"), /*#__PURE__*/React.createElement("option", {
    value: "1.5"
  }, "D+"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "D"), /*#__PURE__*/React.createElement("option", {
    value: "0.5"
  }, "D-"), /*#__PURE__*/React.createElement("option", {
    value: "0"
  }, "F"))), /*#__PURE__*/React.createElement("td", {
    className: "remove"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: props.onRemove
  }, "X")));
}