import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-5rem)] bg-[radial-gradient(circle_at_top_left,_#ffffff_0%,_#f3efff_38%,_#ebe4ff_100%)] px-6 py-12 text-slate-900 sm:px-10">
        <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-violet-600" />
              Secure file management, one place for everything
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Manage files, folders, and access without the clutter.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Store documents, organize project folders, and keep your team
              aligned with a clean workflow built for fast daily use.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Folders", "Organize by project and team."],
                ["Secure", "Refresh-token auth and protected routes."],
                ["Fast", "Simple UI for daily file access."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_18px_50px_rgba(109,92,255,0.12)] backdrop-blur"
                >
                  <h2 className="text-base font-semibold text-slate-900">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
