// page.tsx

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { basicSetup, EditorView } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { typescript } from "@codemirror/lang-typescript";
import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { cpp } from "@codemirror/lang-cpp";

const ProblemStatement = () => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md space-y-4">
    <h2 className="text-xl font-bold">Problem Title</h2>
    <p className="text-gray-700 dark:text-gray-200">
      Description: Write a program that does something interesting.
    </p>
    <h3 className="font-semibold">Input/Output Format</h3>
    <pre className="text-sm text-gray-600 dark:text-gray-300">Input: integer N</pre>
    <pre className="text-sm text-gray-600 dark:text-gray-300">Output: N squared</pre>
    <h3 className="font-semibold">Constraints</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">1 ≤ N ≤ 100</p>
    <h3 className="font-semibold">Sample Input/Output</h3>
    <pre className="text-sm text-gray-600 dark:text-gray-300">Input: 5</pre>
    <pre className="text-sm text-gray-600 dark:text-gray-300">Output: 25</pre>
  </div>
);

const OutputPanel = ({ output }: { output: string }) => (
  <div className="p-4 bg-gray-800 text-white rounded-md shadow-md mt-4">
    <h3 className="text-lg font-semibold">Output</h3>
    <pre>{output}</pre>
  </div>
);

const Page = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<string>("javascript");
  const [editor, setEditor] = useState<EditorView | null>(null);
  const [output, setOutput] = useState<string>("");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleRunCode = () => {
    setOutput("Running code... Please wait...");
    setTimeout(() => {
      setOutput("Code executed successfully! Output will appear here.");
    }, 2000); // Simulate code execution delay
  };

  const getLanguageExtension = () => {
    switch (language) {
      case "python":
        return python();
      case "javascript":
        return javascript();
      case "typescript":
        return typescript();
      case "go":
        return go();
      case "php":
        return php();
      case "rust":
        return rust();
      case "cpp":
        return cpp();
      default:
        return javascript();
    }
  };

  useEffect(() => {
    if (!editor) {
      const initialEditor = new EditorView({
        state: EditorState.create({
          doc: `# Write your code here`,
          extensions: [basicSetup, getLanguageExtension()],
        }),
        parent: document.getElementById("editor")!,
      });
      setEditor(initialEditor);
    } else {
      editor.setState(
        EditorState.create({
          doc: `# Write your code here`,
          extensions: [basicSetup, getLanguageExtension()],
        })
      );
    }
  }, [editor, language]);

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <ProblemStatement />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="go">Go</option>
            <option value="php">PHP</option>
            <option value="rust">Rust</option>
            <option value="cpp">C/C++</option>
          </select>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            Toggle Theme
          </button>
        </div>

        <div id="editor" className="border rounded-md shadow-md p-4 h-96"></div>

        <button
          onClick={handleRunCode}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Run Code
        </button>

        <OutputPanel output={output} />
      </div>
    </div>
  );
};

export default Page;
