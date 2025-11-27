import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Directorio de Proveedores de Eventos',
  description: 'Encuentra los mejores proveedores para tu evento. Caterers, fotógrafos, DJs, decoradores y más.',
  keywords: 'proveedores, eventos, bodas, fiestas, catering, fotografía',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
