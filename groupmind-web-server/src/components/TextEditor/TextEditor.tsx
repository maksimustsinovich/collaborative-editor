import {FC} from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/keymap/sublime";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";

import "./TextEditor.css";

import {Controlled as ControlledEditor} from "react-codemirror2";

type TextEditorProps = {
    name: string,
    lang: string,
    value: string,
    handleChange: (value: string) => void
}

export const TextEditor: FC<TextEditorProps> = ({name, lang, value, handleChange}) => {
    return (
        <div className="editor-container">
            <div className="editor-title">{name}</div>
            <ControlledEditor
                onBeforeChange={(_editor, _data, value) => {
                    handleChange(value)
                }}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    theme: "neat",
                    mode: lang,
                    lineWrapping: true,
                    smartIndent: true,
                    lineNumbers: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    autoCloseTags: true,
                    keyMap: "sublime",
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    extraKeys: {
                        "Ctrl-Space": "autocomplete",
                    },
                }}
            />
        </div>
    );
};