import {Metadata} from 'next'
import Link from 'next/link'
import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: 'App',
  description: "Page d'app",
}
export default function BackofficeLayout({children}: PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      <header className="bg-gradient-to-r from-black to-gray-800 p-4 shadow-lg">
        <h1 className="text-xl font-bold">Backoffice Title</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="from-dark-900 w-64 space-y-2 bg-gradient-to-b via-gray-800 to-gray-900 p-4">
          {/* Menu items */}
          <nav className="flex flex-col">
            <Link
              href="/"
              className="block rounded px-4 py-2 transition-colors hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block rounded px-4 py-2 transition-colors hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="block rounded px-4 py-2 transition-colors hover:bg-gray-700"
            >
              Settings
            </Link>
            <Link
              href="#"
              className="block rounded px-4 py-2 transition-colors hover:bg-gray-700"
            >
              Analytics
            </Link>
          </nav>
        </aside>

        {/* Adjusted to match header/footer gradient */}
        <main className="flex-1 overflow-auto bg-gradient-to-r from-black to-gray-800 p-4">
          {children}
        </main>
      </div>

      <footer className="bg-gradient-to-r from-black to-gray-800 p-4 shadow-inner">
        <p>
          © {new Date().getFullYear()} Super SaaS Backoffice. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}