import Link from 'next/link'
import Image from 'next/image'

export default function ProviderCard({ provider }) {
  return (
    <Link href={`/proveedores/${provider.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={provider.image}
            alt={provider.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-white text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-md">
              {provider.category}
            </span>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
            {provider.name}
          </h3>
          
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {provider.city}
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {provider.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {provider.rating} ({provider.reviews})
              </span>
            </div>
            
            <span className="text-primary font-bold text-sm">
              {provider.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
