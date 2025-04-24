// components/LanguageSelector.tsx

import { ChangeEvent } from "react";

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelector = ({ language, onLanguageChange }: LanguageSelectorProps) => (
  <select
    value={language}
    onChange={onLanguageChange}
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
);

export default LanguageSelector;
