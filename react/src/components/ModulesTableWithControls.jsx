import ModuleRowWithControls from './ModuleRowWithControls';

export default function ModulesTableWithControls(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credit</th>
                    <th>Grade</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody id="module-tbody">
                {props.codes.map(function (code, index) {
                    return (
                        <ModuleRowWithControls
                            key={index}
                            code={code}
                            name={props.modules[code]?.name}
                            credit={props.modules[code]?.credit}
                            onRemove={function () {
                                return props.onRemove(index);
                            }}
                        ></ModuleRowWithControls>
                    );
                })}
            </tbody>
        </table>
    );
}
