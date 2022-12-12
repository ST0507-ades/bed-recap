import ReactDOM from 'react-dom/client';
import ModulesTable from './ModulesTable';

function RetrieveAllPage(props) {
    const [modules, setModules] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(function () {
        setTimeout(function () {
            setModules([
                { code: 'ST0507', name: 'ADES', credit: 6 },
                { code: 'ST0503', name: 'BED', credit: 6 },
                { code: 'ST0502', name: 'FOP', credit: 5 },
            ]);
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Retrieve All Module</h1>
            {isLoading ? 'Loading....' : <ModulesTable modules={modules} />}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('retrieve-all-root'));
root.render(<RetrieveAllPage />);
