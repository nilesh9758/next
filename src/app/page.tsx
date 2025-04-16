// This is the home page .. sbse phle yhi render hoga

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Welcome to Lost and Found</h1>
        <div className="flex justify-center gap-8">
          <Link href="/login">
            <button className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-200">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
