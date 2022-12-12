import ReactDOM from 'react-dom/client';
import ModulesTable from "./ModulesTable.js";
function RetrieveAllPage(props) {
  const [modules, setModules] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(function () {
    setTimeout(function () {
      setModules([{
        code: 'ST0507',
        name: 'ADES',
        credit: 6
      }, {
        code: 'ST0503',
        name: 'BED',
        credit: 6
      }, {
        code: 'ST0502',
        name: 'FOP',
        credit: 5
      }]);
      setIsLoading(false);
    }, 3000);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Retrieve All Module"), isLoading ? 'Loading....' : /*#__PURE__*/React.createElement(ModulesTable, {
    modules: modules
  }));
}
const root = ReactDOM.createRoot(document.getElementById('retrieve-all-root'));
root.render( /*#__PURE__*/React.createElement(RetrieveAllPage, null));