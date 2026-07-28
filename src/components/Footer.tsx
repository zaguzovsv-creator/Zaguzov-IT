export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 relative z-10">
      <div className="container mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="text-zinc-100 font-medium tracking-tight text-xl">
           Zaguzov<span className="text-zinc-500">-IT</span>
         </div>
         <p className="text-zinc-500 text-sm">
           © {new Date().getFullYear()} Zaguzov-IT. Все права защищены.
         </p>
      </div>
    </footer>
  );
}
