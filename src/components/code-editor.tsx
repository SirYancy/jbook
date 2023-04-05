import MonacoEditor, { OnChange, OnMount} from '@monaco-editor/react';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const handleEditorDidMount:OnMount = (editor, monaco) => {
        console.log("onMount: editor instance:" + editor);
        console.log("onMount: editor instance:" + monaco);
    };

    const handleEditorChange:OnChange = (value, event) => {
        onChange(value);
    };

    return <MonacoEditor
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        value={initialValue}
        language="javascript"
        theme="vs-dark"
        height="500px"
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
    />;
};

export default CodeEditor;