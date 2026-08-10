const navLinks = [
  { label: 'Cloud storage', href: '#storage' },
  { label: 'Security', href: '#security' },
  { label: 'Plans', href: '#plans' },
  { label: 'Business', href: '#business' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#4e6a9c]/60 bg-[#00002a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#00002a] via-[#1a3f75] to-[#4ea4cc] text-lg font-black text-[#00002a] shadow-lg shadow-[#4ea4cc]/20">
            D
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#4ea4cc]/80">DISTRIBUTED</p>
            <p className="text-lg font-semibold text-white">File Manager</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#4e6a9c] transition hover:text-[#4ea4cc]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full border border-[#4e6a9c]/60 px-4 py-2 text-sm font-medium text-[#f4f8ff] transition hover:border-[#4ea4cc] hover:bg-[#1a3f75]/40 sm:inline-flex"
          >
            Sign in
          </a>
          <a
            href="#plans"
            className="inline-flex rounded-full bg-[#4ea4cc] px-4 py-2 text-sm font-semibold text-[#00002a] transition hover:bg-[#7dc7e3]"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar