// components/RunButton.tsx

interface RunButtonProps {
    onRunCode: () => void;
  }
  
  const RunButton = ({ onRunCode }: RunButtonProps) => (
    <button
      onClick={onRunCode}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Run Code
    </button>
  );
  
  export default RunButton;
  