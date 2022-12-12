import ReactDOM from 'react-dom/client';
import AddModuleForm from "./components/AddModuleForm.js";
import ModulesTableWithControls from "./components/ModulesTableWithControls.js";
function fetchModule(code) {
  return fetch(`/modules/${code}`).then(function (response) {
    return response.json();
  });
}
function RetrievePage(props) {
  const [codes, setCodes] = React.useState([]);
  const [modules, setModules] = React.useState({});
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Retrieve Module"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AddModuleForm, {
    onAddModule: function (code) {
      return setCodes([...codes, code]);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ModulesTableWithControls, {
    codes: codes,
    modules: modules,
    onRemove: function (index) {
      codes.splice(index, 1);
      setCodes([...codes]);
    }
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    id: "retrieve",
    onClick: function () {
      const fetchModulePromises = [];
      for (let i = 0; i < codes.length; i++) {
        const code = codes[i];
        fetchModulePromises.push(fetchModule(code).then(function (body) {
          if (body.error) throw new Error(body.error);
          return {
            name: body.module.name,
            credit: body.module.credit
          };
        }));
      }
      Promise.all(fetchModulePromises).then(function (fetchedModules) {
        for (let i = 0; i < fetchedModules.length; i++) {
          modules[codes[i]] = fetchedModules[i];
        }
        setModules({
          ...modules
        });
      });
    }
  }, "Retrieve"))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(RetrievePage, null));