import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const stats = [
  { value: '20 GB', label: 'free starter storage' },
  { value: '256-bit', label: 'encryption at rest' },
  { value: '24/7', label: 'sync across devices' },
]

const features = [
  {
    title: 'Cloud storage',
    description: 'Upload, organize, and access files from any device with instant sync and rich folder controls.',
  },
  {
    title: 'Private sharing',
    description: 'Share links with passwords, expiry dates, and role-based permissions for total control.',
  },
  {
    title: 'Security by default',
    description: 'Protect data with zero-knowledge encryption, recovery tools, and detailed activity tracking.',
  },
]

const capabilityTiles = [
  'Live folder sync',
  'Team collaboration',
  'Password-protected links',
  'Cross-device access',
]

const Home = () => {
  return (
    <div id="top" className="min-h-screen text-[#f4f8ff]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(78,164,204,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(26,63,117,0.3),transparent_26%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4e6a9c]/60 bg-[#1a3f75]/45 px-4 py-2 text-sm font-medium text-[#f4f8ff]">
                <span className="h-2 w-2 rounded-full bg-[#4ea4cc]" />
                Secure encrypted file storage for teams and individuals
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Store, share, and protect files without losing control.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4e6a9c]">
                A polished landing page inspired by modern privacy-first cloud platforms, designed for fast file
                access, dependable sharing, and a calm, enterprise-ready experience.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center rounded-full bg-[#4ea4cc] px-6 py-3 text-sm font-semibold text-[#00002a] transition hover:bg-[#7dc7e3]"
                >
                  Start free
                </a>
                <a
                  href="#security"
                  className="inline-flex items-center justify-center rounded-full border border-[#4e6a9c]/60 bg-[#1a3f75]/35 px-6 py-3 text-sm font-semibold text-[#f4f8ff] transition hover:border-[#4ea4cc] hover:bg-[#1a3f75]/55"
                >
                  Explore security
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-[#4e6a9c]/60 bg-[#1a3f75]/35 p-5 backdrop-blur">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-[#4e6a9c]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-[#4ea4cc]/15 blur-3xl" />
              <div className="absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-[#1a3f75]/25 blur-3xl" />

              <div className="relative overflow-hidden rounded-4xl border border-[#4e6a9c]/60 bg-[#1a3f75]/55 p-5 shadow-2xl shadow-[#00002a]/35 backdrop-blur">
                <div className="flex items-center justify-between rounded-2xl border border-[#4e6a9c]/60 bg-[#00002a]/35 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-[#f4f8ff]">Project vault</p>
                    <p className="text-xs text-[#4e6a9c]">Last synced 2 min ago</p>
                  </div>
                  <span className="rounded-full bg-[#4ea4cc]/15 px-3 py-1 text-xs font-semibold text-[#4ea4cc]">
                    Protected
                  </span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-[#4e6a9c]/60 bg-linear-to-br from-[#00002a] via-[#1a3f75] to-[#4ea4cc] p-5">
                    <p className="text-sm text-[#f4f8ff]">Encrypted folders</p>
                    <p className="mt-4 text-4xl font-semibold">248</p>
                    <p className="mt-2 text-sm text-[#f4f8ff]/80">Across client workspaces and shared archives.</p>
                  </div>
                  <div className="rounded-3xl border border-[#4e6a9c]/60 bg-[#00002a]/35 p-5">
                    <p className="text-sm text-[#4e6a9c]">Recent activity</p>
                    <div className="mt-4 space-y-3 text-sm text-[#f4f8ff]">
                      <div className="flex items-center justify-between rounded-2xl bg-[#1a3f75]/45 px-4 py-3">
                        <span>Design-system.zip</span>
                        <span className="text-[#4ea4cc]">Shared</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-[#1a3f75]/45 px-4 py-3">
                        <span>Launch-notes.pdf</span>
                        <span className="text-[#4ea4cc]">Synced</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-[#1a3f75]/45 px-4 py-3">
                        <span>Invoices</span>
                        <span className="text-[#4ea4cc]">Locked</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border border-[#4e6a9c]/60 bg-[#00002a]/35 p-5">
                  <p className="text-sm font-medium text-[#f4f8ff]">Capabilities</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {capabilityTiles.map((tile) => (
                      <span key={tile} className="rounded-full border border-[#4e6a9c]/60 bg-[#1a3f75]/45 px-4 py-2 text-sm text-[#f4f8ff]">
                        {tile}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="storage" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`rounded-[1.75rem] border p-8 shadow-lg shadow-slate-950/20 ${
                  index === 1 ? 'border-[#4ea4cc]/70 bg-[#1a3f75]/55' : 'border-[#4e6a9c]/60 bg-[#1a3f75]/35'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4ea4cc]/80">
                  0{index + 1}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4e6a9c]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-4xl border border-[#4e6a9c]/60 bg-[#1a3f75]/35 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4ea4cc]/80">Security that’s always on</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Built so the platform never sees your keys.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4e6a9c]">
                Use strong encryption, private sharing controls, and session-based access to keep sensitive content
                available to the right people and invisible to everyone else.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Zero-knowledge encryption',
                'Password and expiry controls',
                'Shared folder permissions',
                'Audit-friendly activity trails',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-[#4e6a9c]/60 bg-[#00002a]/35 p-5 text-sm text-[#f4f8ff]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-4xl bg-linear-to-r from-[#00002a] via-[#1a3f75] to-[#4ea4cc] p-px shadow-2xl shadow-[#00002a]/30">
            <div className="rounded-4xl bg-[#00002a] px-8 py-10 lg:px-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4ea4cc]/80">Millions of files, one system</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                    Start with free storage and scale as your team grows.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#4e6a9c]">
                    A landing experience that feels polished, fast, and privacy-led, with enough structure to support
                    product sign-up, pricing, and business conversion flows.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="#top"
                    className="inline-flex items-center justify-center rounded-full bg-[#4ea4cc] px-6 py-3 text-sm font-semibold text-[#00002a] transition hover:bg-[#7dc7e3]"
                  >
                    Create account
                  </a>
                  <a
                    href="#business"
                    className="inline-flex items-center justify-center rounded-full border border-[#4e6a9c]/60 px-6 py-3 text-sm font-semibold text-[#f4f8ff] transition hover:border-[#4ea4cc] hover:bg-[#1a3f75]/40"
                  >
                    Contact sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="business" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#4e6a9c]/60 bg-[#1a3f75]/35 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4ea4cc]/80">For business</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Share workspaces, not just files.</h2>
              <p className="mt-3 text-sm leading-6 text-[#4e6a9c]">
                Give teams a clean place to upload, review, and collaborate while keeping access and sharing policies
                under control.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#4e6a9c]/60 bg-[#1a3f75]/35 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4ea4cc]/80">For individuals</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">A simpler way to keep everything in sync.</h2>
              <p className="mt-3 text-sm leading-6 text-[#4e6a9c]">
                Back up personal documents, protect shared links, and browse your vault from desktop or mobile without
                friction.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home