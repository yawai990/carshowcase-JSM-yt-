import { Hero,CustomFilter, SearchBar } from "@/components"

export default function Home() {
  return (
    <main className='relative'>
     <Hero />

     <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>

        <p>Explore the car you might light</p>

        <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
          
        </div>
        </div>
      </div>
     </div>
    </main>
  )
}
