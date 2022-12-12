export default function ModulesTable(props) {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                {props.modules.map(function (module) {
                    return (
                        <tr>
                            <td>{module.code}</td>
                            <td>{module.name}</td>
                            <td>{module.credit}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
