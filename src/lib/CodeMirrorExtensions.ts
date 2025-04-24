// lib/codemirrorExtensions.ts

import { Extension } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { cpp } from "@codemirror/lang-cpp";

/**
 * Returns the CodeMirror language extension based on the selected language.
 * @param language - The selected language key (e.g., 'python', 'typescript', etc.)
 */
export const getLanguageExtension = (language: string): Extension => {
  switch (language.toLowerCase()) {
    case "python":
      return python();
    case "javascript":
      return javascript();
    case "typescript":
      return javascript({ typescript: true });
    case "go":
      return go();
    case "php":
      return php();
    case "rust":
      return rust();
    case "c":
    case "cpp":
    case "c++":
      return cpp();
    default:
      return javascript(); // Fallback to JavaScript
  }
};

