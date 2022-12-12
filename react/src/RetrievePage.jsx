import ReactDOM from 'react-dom/client';
import AddModuleForm from './components/AddModuleForm';
import ModulesTableWithControls from './components/ModulesTableWithControls';

function fetchModule(code) {
    return fetch(`/modules/${code}`).then(function (response) {
        return response.json();
    });
}

function RetrievePage(props) {
    const [codes, setCodes] = React.useState([]);
    const [modules, setModules] = React.useState({});
    return (
        <div>
            <h1>Retrieve Module</h1>
            <div>
                <AddModuleForm
                    onAddModule={function (code) {
                        return setCodes([...codes, code]);
                    }}
                />
            </div>
            <div>
                <ModulesTableWithControls
                    codes={codes}
                    modules={modules}
                    onRemove={function (index) {
                        codes.splice(index, 1);
                        setCodes([...codes]);
                    }}
                ></ModulesTableWithControls>
                <p>
                    <button
                        id="retrieve"
                        onClick={function () {
                            const fetchModulePromises = [];
                            for (let i = 0; i < codes.length; i++) {
                                const code = codes[i];
                                fetchModulePromises.push(
                                    fetchModule(code).then(function (body) {
                                        if (body.error) throw new Error(body.error);
                                        return { name: body.module.name, credit: body.module.credit };
                                    }),
                                );
                            }
                            Promise.all(fetchModulePromises).then(function (fetchedModules) {
                                for (let i = 0; i < fetchedModules.length; i++) {
                                    modules[codes[i]] = fetchedModules[i];
                                }
                                setModules({ ...modules });
                            });
                        }}
                    >
                        Retrieve
                    </button>
                </p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RetrievePage />);
