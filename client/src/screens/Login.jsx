import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../auth/user.auth.jsx";
import bg from "../components/bg/DESKTOP WALLPAPER.jpg"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginUser(formData);
      navigate("/user-data", { replace: true });
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ?? "Unable to log in right now.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-12 sm:px-10"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="flex w-full max-w-xs items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_rgba(110,88,255,0.18)] backdrop-blur">
          <p className="flex items-center justify-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Welcome back
          </p>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                placeholder="you@example.com"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                placeholder="Your password"
              />
            </label>

            {error ? (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-600">
            Don’t have an account?{" "}
            <Link to="/register" className="font-semibold text-violet-600 hover:text-violet-700">
              Sign up
            </Link>
          </p>
        </section>

      </div>
    </main>
  );
};

export default Login;