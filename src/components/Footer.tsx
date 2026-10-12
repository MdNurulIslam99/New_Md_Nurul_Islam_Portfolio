export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400">Md Nurul Islam</span>. All rights
          reserved.
        </p>
        <p className="text-xs">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
