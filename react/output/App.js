import ReactDOM from 'react-dom/client';
import HelloWorld from "./HelloWorld.js";
function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelloWorld, null));
}

// To render onto HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));