function Footer() {
  return (
    <footer className="border-t mt-2">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-600">
        
        <span>© {new Date().getFullYear()} NotesApp</span>

        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;