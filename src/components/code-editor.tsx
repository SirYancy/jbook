import './code-editor.css';
import { useRef } from 'react';
import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const editorRef = useRef<any>();
    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        editor.getModel()?.updateOptions({ tabSize: 2 });
    };

    const handleEditorChange: OnChange = (value, event) => {
        onChange(value);
    };

    const onFormatClick = () => {
        const unformatted = editorRef.current.getModel().getValue();
        const formatted = prettier
            .format(unformatted, {
                parser: 'babel',
                plugins: [parser],
                useTabs: false,
                semi: true,
                singleQuote: true,
            })
            .replace(/\n$/, '');

        editorRef.current.setValue(formatted);
    };

    return (
        <section className="editor-wrapper">
            <button
                className="button button-format is-primary is-small"
                onClick={onFormatClick}
            >
                Format
            </button>
            <MonacoEditor
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                value={initialValue}
                language="javascript"
                theme="vs-dark"
                height="100%"
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </section>
    );
};

export default CodeEditor;
