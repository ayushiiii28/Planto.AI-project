// components/OutputPanel.tsx

interface OutputPanelProps {
  output: string;
}

const OutputPanel = ({ output }: OutputPanelProps) => (
  <div className="p-4 bg-gray-800 text-white rounded-md shadow-md mt-4">
    <h3 className="text-lg font-semibold">Output</h3>
    <pre>{output}</pre>
  </div>
);

export default OutputPanel;

  