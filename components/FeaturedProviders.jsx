import { providers } from '@/lib/mockData'
import ProviderCard from '@/components/ProviderCard'
import Link from 'next/link'

export default function FeaturedProviders() {
  // Tomar los primeros 6 proveedores con mejor rating
  const featuredProviders = providers
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proveedores Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre a nuestros proveedores mejor calificados y más solicitados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProviders.map(provider => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/proveedores"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Todos los Proveedores
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
