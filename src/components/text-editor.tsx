import './text-editor.css';
import React, {useEffect, useState, useRef } from "react";
import MDEditor from '@uiw/react-md-editor';

const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string | undefined>('# Header');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if(ref.current && event.target && ref.current.contains(event.target as Node)){
                return;
            }
            setEditing(false);
        };
        document.addEventListener('click', listener, { capture: true });

        return () => {
            document.removeEventListener('click', listener, { capture: true});
        };
    }, []);

    if (editing) {
        return (
            <div className="text-editor" ref={ref}>
                <MDEditor
                    value={value}
                    onChange={(val) => setValue(val || '')}
                />
            </div>
        )
    }

    return (
        <div className="text-editor card" onClick={() => setEditing(true)}>
            <div className="card-content">
                <MDEditor.Markdown source={value}/>
            </div>
        </div>
    )
}

export default TextEditor;