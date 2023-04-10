import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from '../bundler';
import {useState} from "react";
import Resizable from "./resizable";

const CodeCell = () => {
    const [code, setCode] = useState('');
    const [input, setInput] = useState<string | undefined>('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <Resizable direction={"vertical"}>
        <>
            <CodeEditor
                initialValue="const a = 1;"
                onChange={(value) => setInput(value)}
            />
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </>
        </Resizable>
    );
};

export default CodeCell;
