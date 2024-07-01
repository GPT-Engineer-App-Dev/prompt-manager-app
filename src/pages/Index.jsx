function Index() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Prompt Manager</h1>
      <p className="mb-4">Manage your prompts efficiently and effectively.</p>
      <div className="flex justify-center space-x-4">
        <a href="/prompts" className="text-blue-500 hover:underline">Go to Prompts</a>
        <a href="/settings" className="text-blue-500 hover:underline">Go to Settings</a>
      </div>
    </div>
  );
}

export default Index;