import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FeaturedProviders from '@/components/FeaturedProviders'
import Categories from '@/components/Categories'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <SearchBar />
        </div>
      </section>
      <FeaturedProviders />
      <Categories />
      <CallToAction />
    </>
  )
}
