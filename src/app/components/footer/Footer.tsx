export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 py-6 mt-12">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} SportLoom. All rights reserved.
      </div>
    </footer>
  )
}
