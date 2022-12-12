export default function ModuleRowWithControls(props) {
    const [grade, setGrade] = React.useState(props.value || 0);

    return (
        <tr>
            <td className="code">{props.code || '???'}</td>
            <td className="name">{props.name || '???'}</td>
            <td className="credit">{props.credit || '???'}</td>
            <td className="grade">
                <select
                    value={grade}
                    onChange={function (event) {
                        setGrade(event.target.value);
                    }}
                >
                    <option disabled>-</option>
                    <option value="4">A</option>
                    <option value="3.5">B+</option>
                    <option value="3">B</option>
                    <option value="2.5">C+</option>
                    <option value="2">C</option>
                    <option value="1.5">D+</option>
                    <option value="1">D</option>
                    <option value="0.5">D-</option>
                    <option value="0">F</option>
                </select>
            </td>
            <td className="remove">
                <button onClick={props.onRemove}>X</button>
            </td>
        </tr>
    );
}
