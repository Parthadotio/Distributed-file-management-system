const footerColumns = [
  {
    title: 'Product',
    links: ['Cloud storage', 'Folder sharing', 'Sync', 'Desktop app'],
  },
  {
    title: 'Security',
    links: ['Zero-knowledge', 'Access control', 'Recovery', 'Audit logs'],
  },
  {
    title: 'Company',
    links: ['About', 'Pricing', 'Business', 'Contact'],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-[#4e6a9c]/60 bg-[#00002a]/90">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#00002a] via-[#1a3f75] to-[#4ea4cc] text-lg font-black text-[#00002a]">
                D
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-[#4ea4cc]/80">DISTRIBUTED</p>
                <p className="text-lg font-semibold text-white">File Manager</p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-6 text-[#4e6a9c] sm:text-base">
              Store, sync, and share your files with a clean interface built for teams that need control,
              speed, and privacy in one place.
            </p>

            <div className="mt-8 rounded-3xl border border-[#4e6a9c]/60 bg-[#1a3f75]/35 p-6">
              <p className="text-sm font-semibold text-white">Ready to simplify file management?</p>
              <p className="mt-2 text-sm text-[#4e6a9c]">Create a secure workspace for projects, teams, and clients.</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f4f8ff]">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-[#4e6a9c]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[#4ea4cc]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#4e6a9c]/60 pt-6 text-sm text-[#4e6a9c] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Distributed File Manager. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#4ea4cc]">
              Privacy
            </a>
            <a href="#" className="transition hover:text-[#4ea4cc]">
              Terms
            </a>
            <a href="#" className="transition hover:text-[#4ea4cc]">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer