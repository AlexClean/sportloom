export default function Footer() {
  return (
    <footer className="app-footer full-bleed not-dark:bg-gray-100 mt-12 dark:border-t dark:border-gray-400">
      <div className="container-center p-2">
        <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap items-center justify-between gap-2 md:gap-3 py-6">
          <div className="ml-auto mr-3 text-sm not-dark:text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} SportLoom. All rights reserved.
          </div>
          <p className="mr-auto ml-3 text-xs text-zinc-500 text-center md:text-right">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
