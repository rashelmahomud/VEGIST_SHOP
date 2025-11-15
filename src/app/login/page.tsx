"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = (): boolean => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 800));
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-emerald-900 p-6">
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="hidden md:flex flex-col items-center justify-center p-8 space-y-6 bg-[linear-gradient(135deg,#0f172a55,#0b122955)] dark:bg-black">
          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 flex items-center justify-center shadow-xl">
            <span className="text-white font-extrabold text-2xl tracking-tight">RS</span>
          </div>
          <h3 className="text-white text-2xl font-semibold">Welcome Back</h3>
          <p className="text-sm text-slate-200 text-center px-2">
            Sign in to continue to your dashboard — beautiful analytics, product controls, and everything in one place.
          </p>

          <div className="w-full px-6">
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white/10">✓</span>
                Secure, fast authentication
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white/10">✓</span>
                Magic small-UI microinteractions
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white/10">✓</span>
                Works on mobile & desktop
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-center dark:bg-black">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Sign in</h2>
            <p className="text-sm text-slate-300 mt-1">
              Use your account to access the portal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full rounded-xl bg-white/6 border border-white/10 backdrop-blur px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-white/6 border border-white/10 backdrop-blur px-4 py-3 pr-36 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute top-1/2 -translate-y-1/2 right-3 px-3 py-1 rounded-lg text-xs bg-white/8 backdrop-blur"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

                <div className="absolute right-20 top-1/2 -translate-y-1/2 text-xs text-slate-300">
                  <span className="px-2 py-1 rounded-full bg-white/3">strong</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <a href="#" className="text-indigo-300 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-3 font-semibold shadow-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white transform active:scale-[0.997] disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>

            <div className="relative my-2">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-white/10" />
              <p className="relative text-center text-sm text-slate-300 bg-transparent inline-block px-3">
                or continue with
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 dark:text-gray-200">
              <button type="button" className="rounded-xl py-2 text-sm border border-white/8">
                Google
              </button>
              <button type="button" className="rounded-xl py-2 text-sm border border-white/8">
                GitHub
              </button>
              <button type="button" className="rounded-xl py-2 text-sm border border-white/8">
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-slate-300 mt-3">
              Don’t have an account?{' '}
              <Link href="/registation" className="text-indigo-300 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>

          <footer className="mt-6 text-xs text-slate-400 text-center">
            By continuing, you agree to our Terms and Privacy.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;