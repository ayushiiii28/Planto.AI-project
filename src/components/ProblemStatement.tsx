// components/ProblemStatement.tsx

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
  
  export default ProblemStatement;
  