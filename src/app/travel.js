export default function Travel() {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-3xl font-serif">Travel Memories</h1>
        {/* Add navigation here if needed */}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map through your travel memories and display them here */}
      </div>

      <footer className="py-6">
        <p>© {new Date().getFullYear()} Our Memories</p>
      </footer>
    </div>
  );
}