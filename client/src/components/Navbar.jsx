import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
                <Link to="/" className="flex items-center gap-3 font-semibold text-slate-950">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)]">
                        F
                    </span>
                    <span className="text-lg tracking-tight">FileFlow</span>
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
                    <Link to="/" className="transition hover:text-slate-950">
                        Home
                    </Link>
                    <span className="cursor-default">Products</span>
                    <span className="cursor-default">Solutions</span>
                    <span className="cursor-default">Resources</span>
                </nav>

                <div className="flex items-center gap-3 sm:gap-4">
                    <Link
                        to="/login"
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar