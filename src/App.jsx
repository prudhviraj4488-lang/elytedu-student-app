
import { useState } from "react";

const features = [
  {
    icon: "▤",
    title: "Classes",
    description: "Subjects, lessons, and files your teachers publish.",
  },
  {
    icon: "♧",
    title: "Exams",
    description: "Timed tests, forms, and results in one place.",
  },
  {
    icon: "‹/›",
    title: "Code Lab",
    description: "Practice problems with a built-in editor.",
  },
  {
    icon: "♧",
    title: "Updates",
    description: "Announcements and attendance from your college.",
  },
];

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please enter your college email and password.");
      return;
    }

    setMessage(
      "Login UI is ready. Connect your authentication service to sign in."
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f6fa] font-sans text-[#20212d]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52.4%_47.6%]">
        {/* LEFT PANEL */}
        <section className="relative flex min-h-[600px] flex-col overflow-hidden bg-[#1c1d2a] px-7 py-8 text-white sm:px-11 sm:py-9 lg:min-h-screen">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.045]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/[0.035]" />

          {/* Logo */}
          <header className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#292b3b] text-xl font-black tracking-tight">
              EC
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wide">ElytEdu</h2>
              <p className="text-[11px] text-[#9b9daf]">
                Student portal · Nano
              </p>
            </div>
          </header>

          {/* Welcome content */}
          <div className="relative z-10 my-auto max-w-[470px] py-16 lg:py-10">
            <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#9295ac]">
              WELCOME BACK
            </p>

            <h1 className="max-w-[420px] text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-[36px]">
              Everything for class, in one sign-in.
            </h1>

            <p className="mt-4 max-w-[365px] text-xs leading-[1.8] text-[#a1a3b5] sm:text-[13px]">
              Use the account your college created. Lessons, exams, and Code
              Lab open as soon as you sign in.
            </p>

            <div className="mt-10 grid max-w-[455px] grid-cols-1 gap-2.5 min-[420px]:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="min-h-[122px] rounded-[15px] border border-white/[0.09] bg-white/[0.055] p-3.5 transition duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <div className="mb-3 flex h-[30px] w-[30px] items-center justify-center rounded-[9px] border border-white/[0.06] bg-white/[0.09] text-sm text-[#e5e6f0]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xs font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-[11px] leading-[1.6] text-[#a1a3b5]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <footer className="relative z-10 mt-auto text-[10px] text-[#9295a7]">
            Nano · Student access only
          </footer>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex min-h-[600px] items-center justify-center bg-[#f5f6fa] px-5 py-14 sm:px-10 lg:min-h-screen lg:px-12">
          <div className="w-full max-w-[368px]">
            <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#9699a9]">
              NANO
            </p>

            <h2 className="text-[25px] font-semibold tracking-[-0.04em]">
              Sign in
            </h2>

            <p className="mt-1.5 text-xs text-[#858898]">
              College email and password.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 overflow-hidden rounded-[17px] border border-[#e9e9ee] bg-white shadow-[0_16px_45px_rgba(30,31,48,0.055)]"
            >
              <div className="space-y-4 p-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-medium text-[#383947]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[38px] w-full rounded-full border border-[#e8e8ed] bg-white px-3 text-xs outline-none transition placeholder:text-[#b6b8c4] focus:border-[#8c8ea3] focus:ring-2 focus:ring-[#1c1d2a]/5"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <label
                      htmlFor="password"
                      className="text-[11px] font-medium text-[#383947]"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setMessage(
                          "Please contact your college administrator to reset your password."
                        )
                      }
                      className="text-[11px] font-semibold text-[#30313c] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-[38px] w-full rounded-full border border-[#e8e8ed] bg-white px-3 pr-11 text-xs outline-none transition placeholder:text-[#b6b8c4] focus:border-[#8c8ea3] focus:ring-2 focus:ring-[#1c1d2a]/5"
                    />

                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-[#9698a8] hover:text-[#242532]"
                    >
                      {showPassword ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7" />
                          <path d="M9.9 5.2A10.7 10.7 0 0112 5c5.2 0 8.5 5 9 7-.2.8-1.1 2.5-2.7 4M6.2 6.2C3.8 7.8 2.3 10.5 2 12c.5 2 3.8 7 10 7 1.1 0 2.1-.2 3-.5" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-2 text-[11px] text-[#77798a]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-3 w-3 accent-[#1c1d2a]"
                  />
                  Keep me logged in
                </label>

                <button
                  type="submit"
                  className="h-[38px] w-full rounded-full bg-[#1c1d2a] text-xs font-semibold text-white transition hover:bg-[#303142] active:scale-[0.99]"
                >
                  Sign in
                </button>

                {message && (
                  <p
                    role="status"
                    className="rounded-lg bg-[#f3f3f7] p-3 text-[11px] leading-5 text-[#4c4e60]"
                  >
                    {message}
                  </p>
                )}
              </div>

              <div className="border-t border-[#eeeeF2] px-5 py-3.5">
                <p className="text-[10px] leading-[1.8] text-[#9698a7]">
                  Accounts are created by your college admin. Contact them if
                  you cannot sign in.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
