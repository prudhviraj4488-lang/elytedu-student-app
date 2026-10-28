
import { useState } from "react";

const features = [
  { label: "Classes", icon: "▤" },
  { label: "Exams", icon: "☑" },
  { label: "Code Lab", icon: "</>" },
  { label: "Updates", icon: "♧" },
];

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please enter your college email and password.");
      return;
    }

    setMessage("Login UI is ready. Connect your authentication API to sign in.");
  }

  function handleForgotPassword() {
    setMessage("Please contact your college administrator to reset your password.");
  }

  return (
    <main className="min-h-screen bg-[#f4f5f9] px-4 py-7 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 flex items-center gap-4 sm:mb-16">
          <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-[#111b32] text-3xl font-bold tracking-tight text-white">
            EC
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1b1c2b]">
              Ely​tEdu
            </h1>
            <p className="mt-0.5 text-lg text-[#9295a4]">
              Student · Crec
            </p>
          </div>
        </header>

        {/* Login card */}
        <section className="mx-auto max-w-3xl overflow-hidden rounded-[30px] border border-[#e7e8ed] bg-white shadow-[0_15px_50px_rgba(25,30,55,0.04)]">
          <div className="p-6 sm:p-10 lg:p-11">
            <h2 className="text-4xl font-semibold tracking-tight text-[#191a29]">
              Sign in
            </h2>

            <p className="mt-3 text-base text-[#9699a6] sm:text-lg">
              Use your college email and password.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-7">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-lg font-medium text-[#656878]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  placeholder="you@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[70px] w-full rounded-[27px] border border-[#e5e6eb] bg-white px-6 text-lg text-[#202131] outline-none transition placeholder:text-[#b1b4c0] focus:border-[#1b1c2b] focus:ring-2 focus:ring-[#1b1c2b]/10"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-lg font-medium text-[#656878]"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm font-semibold text-[#191a29] hover:underline sm:text-base"
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
                    className="h-[70px] w-full rounded-[27px] border border-[#e5e6eb] bg-white px-6 pr-16 text-lg text-[#202131] outline-none transition placeholder:text-[#b1b4c0] focus:border-[#1b1c2b] focus:ring-2 focus:ring-[#1b1c2b]/10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9295a4] hover:text-[#191a29]"
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-6 w-6"
                      >
                        <path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8" />
                        <path d="M9.9 5.2A10.9 10.9 0 0121 12a11.8 11.8 0 01-3.1 3.8M6.2 6.2A12 12 0 003 12s3.3 6 9 6a9.7 9.7 0 004-.9" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-6 w-6"
                      >
                        <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex w-fit cursor-pointer items-center gap-3 text-base text-[#666978] sm:text-lg">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="h-6 w-6 cursor-pointer accent-[#191a29]"
                />
                Keep me logged in
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="h-[72px] w-full rounded-[27px] bg-[#1b1c2b] text-lg font-semibold text-white transition hover:bg-[#292b40] active:scale-[0.99]"
              >
                Sign in
              </button>

              {message && (
                <p
                  role="status"
                  className="rounded-xl bg-[#f4f5f9] p-4 text-sm text-[#4b5062]"
                >
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Footer */}
          <footer className="border-t border-[#e8e9ee] px-6 py-6 sm:px-10">
            <p className="text-base leading-7 text-[#9699a6]">
              Accounts are created by your college admin. Contact them if you
              cannot sign in.
            </p>
          </footer>
        </section>

        {/* Feature cards */}
        <section className="mx-auto mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex min-h-[76px] items-center gap-3 rounded-[26px] border border-[#e6e7ec] bg-white px-4 py-4 text-[#646777] transition hover:border-[#c8cad5] sm:px-6"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center text-xl text-[#343544]"
              >
                {feature.icon}
              </span>

              <span className="text-base font-medium sm:text-lg">
                {feature.label}
              </span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
