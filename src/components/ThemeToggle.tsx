// components/ThemeToggle.tsx

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
