import React from "react";

import CodeMirror from "react-codemirror";

import codeMirrorStyles from "codemirror/lib/codemirror.css";
import lintStyles from "codemirror/addon/lint/lint.css";
import styles from "./styles.css";

import FieldInput from "../FieldInput";

export default class FieldCode extends React.Component {
  render() {
    const { input, mode, ...rest } = this.props;

    return (
      <FieldInput
        {...rest}
        inputComponent={CodeMirror}
        input={{
          ...input,
          value:
            typeof input.value === "object"
              ? JSON.stringify(input.value, null, 2)
              : input.value,
          onChange: value => value !== input.value && input.onChange(value)
        }}
        options={{
          mode: mode || {
            name: "application/json",
            json: true
          },
          placeholder: this.props.placeholder,
          readOnly: false,
          lineNumbers: true,
          indentUnit: 2,
          tabSize: 2,
          smartIndent: false,
          gutters: ["CodeMirror-lint-markers"],
          lint: true
        }}
      />
    );
  }
}
