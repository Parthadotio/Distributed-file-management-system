import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, verifyEmail } from "../auth/user.auth.jsx";
import bg from "../components/bg/DESKTOP WALLPAPER.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationEmail, setVerificationEmail] = useState("");
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await registerUser(formData);
      setVerificationEmail(formData.email);
      setIsVerificationStep(true);
      setSuccess(
        "We sent an OTP to your email. Enter it below to verify your account.",
      );
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ?? "Unable to register right now.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await verifyEmail({ email: verificationEmail, otp: verificationCode });
      setSuccess("Email verified successfully. You can now log in.");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1200);
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ??
          "Unable to verify email right now.",
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
      <div className="w-full max-w-xs">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_rgba(110,88,255,0.18)] backdrop-blur">
          <p className="flex items-center justify-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Create account
          </p>
          {!isVerificationStep ? (
            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  placeholder="Your name"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  Email
                </span>
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
                <span className="text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  placeholder="Create a password"
                />
              </label>

              {error ? (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              ) : null}

              {success ? (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {success}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Creating account..." : "Register"}
              </button>
            </form>
          ) : (
            <form className="mt-10 space-y-5" onSubmit={handleVerify}>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm text-violet-800">
                We sent an OTP to{" "}
                <span className="font-semibold">{verificationEmail}</span>.
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  OTP Code
                </span>
                <input
                  type="text"
                  name="otp"
                  value={verificationCode}
                  onChange={(event) => setVerificationCode(event.target.value)}
                  required
                  maxLength={6}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  placeholder="Enter OTP code"
                />
              </label>

              {error ? (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              ) : null}

              {success ? (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {success}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Verifying..." : "Verify email"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsVerificationStep(false);
                  setVerificationCode("");
                  setSuccess("");
                  setError("");
                }}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
              >
                Back to registration
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-violet-600 hover:text-violet-700"
            >
              Login
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Register;
