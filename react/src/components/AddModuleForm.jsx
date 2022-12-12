export default function AddModuleForm(props) {
    const [code, setCode] = React.useState('');
    return (
        <form
            onSubmit={function (event) {
                setCode('');
                event.preventDefault();
                return props.onAddModule(code);
            }}
        >
            <fieldset>
                <p>
                    <label>Code</label>
                    <input
                        value={code}
                        onChange={function (event) {
                            setCode(event.target.value);
                        }}
                        type="text"
                        name="code"
                        required
                    />
                </p>
            </fieldset>
            <button type="submit">Add to table</button>
        </form>
    );
}
