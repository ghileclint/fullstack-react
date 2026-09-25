import { useState } from "react";

interface UserProps {
  firstName: string;
  lastName: string;
  role: string;
}

export function StatePlayground() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({
    firstName: "Tapas",
    lastName: "Adhikary",
    role: "Architect",
  });
  const [count, setCount] = useState<number>(0);

  const handleNameChange = (newName: string) => {
    setUser({
      ...user,
      firstName: newName,
    });
  };

  const handleTripleIncrement = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <h1 className="text-3xl font-bold mb-6">State Architect's Playground</h1>

      <button
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        className="px-4 py-2 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-200 hover:text-black"
      >
        Toogle {isDarkMode ? "Light" : "Dark"} mode
      </button>

      <div className="mt-8 p-6 border rounded-lg max-w-md">
        <h2 className="text-xl mb-4">
          Profile: {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-500 mb-4">Role: {user.role}</p>

        <input
          type="text"
          onChange={(e) => handleNameChange(e.target.value)}
          value={user.firstName}
          className="w-full p-2 border rounded text-gray-900"
          placeholder="First Name"
        />
      </div>

      <div>
        <p>Count: {count}</p>
        <button onClick={handleTripleIncrement}>Add Count</button>
      </div>
    </div>
  );
}
