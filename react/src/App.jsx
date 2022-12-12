import ReactDOM from 'react-dom/client';

import HelloWorld from './HelloWorld';

function App(props) {
    return (
        <div>
            <HelloWorld />
        </div>
    );
}

// To render onto HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
