import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">Iqal Mahendra Laksono</h3>
            <p className="text-sm text-muted-foreground">Data Analyst & Informatics Student</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-4 text-sm">
              <Link href="#home" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">© {currentYear} Iqal Mahendra Laksono.</p>
        </div>
      </div>
    </footer>
  )
}
