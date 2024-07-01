import React, { useState } from 'react';

function Prompts() {
  const [prompts, setPrompts] = useState([]);
  const [newPrompt, setNewPrompt] = useState('');

  const addPrompt = () => {
    setPrompts([...prompts, newPrompt]);
    setNewPrompt('');
  };

  const deletePrompt = (index) => {
    setPrompts(prompts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Prompts</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newPrompt}
          onChange={(e) => setNewPrompt(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addPrompt} className="bg-blue-500 text-white p-2">Add Prompt</button>
      </div>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            {prompt}
            <button onClick={() => deletePrompt(index)} className="bg-red-500 text-white p-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Prompts;