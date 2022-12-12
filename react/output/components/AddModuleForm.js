export default function AddModuleForm(props) {
  const [code, setCode] = React.useState('');
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: function (event) {
      setCode('');
      event.preventDefault();
      return props.onAddModule(code);
    }
  }, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "Code"), /*#__PURE__*/React.createElement("input", {
    value: code,
    onChange: function (event) {
      setCode(event.target.value);
    },
    type: "text",
    name: "code",
    required: true
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add to table"));
}