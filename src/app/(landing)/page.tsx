export default function LandingPage() {
  return (
    <div className="h-screen w-full flex flex-col">
      <main className="flex-1 flex items-center justify-center p-12 flex-col">
        <p>Hello!</p>
        <p>This is the Home Page</p>
        <p><a href="/dashboard" className="text-blue-500 underline hover:text-blue-800">Login to view the Dashboard</a></p>
      </main>
    </div>
  );
}
