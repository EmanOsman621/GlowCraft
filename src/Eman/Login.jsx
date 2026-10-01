export default function Login() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Login & Comparison
        </h2>

        {/* Container for Login & Register Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Login Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
              Login
            </h3>
            <p className="text-sm text-center text-gray-500 mb-6">
              Welcome Back!
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-1 rounded border-gray-300"
                  />{" "}
                  Remember me
                </label>
                <a href="#" className="hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#2C3E35] text-white rounded-lg font-medium text-sm hover:bg-[#1e2b24] transition-colors"
              >
                Login
              </button>
            </form>
          </div>

          {/* Register Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
              Register
            </h3>
            <p className="text-sm text-center text-gray-500 mb-6">
              Create Your Account
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Eman Osman"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#2C3E35] text-white rounded-lg font-medium text-sm hover:bg-[#1e2b24] transition-colors"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
