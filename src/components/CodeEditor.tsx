// components/CodeEditor.tsx

"use client";

import React, { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { getLanguageExtension } from "@/lib/codemirrorExtensions";
import { oneDark } from "@codemirror/theme-one-dark";

interface CodeEditorProps {
  language: string;
  code: string;
  onCodeChange: (value: string) => void;
  theme: "light" | "dark";
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, code, onCodeChange, theme }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const newCode = update.state.doc.toString();
        onCodeChange(newCode);
      }
    });

    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        updateListener,
        getLanguageExtension(language),
        theme === "dark" ? oneDark : [],
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, [editorRef, language, theme]);

  useEffect(() => {
    const view = viewRef.current;
    if (view) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: code },
      });
    }
  }, [code]);

  return (
    <div className="w-full h-full border rounded-lg overflow-hidden">
      <div ref={editorRef} className="h-full" />
    </div>
  );
};

export default CodeEditor;
