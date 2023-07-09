"use client";
import { useEffect, useState } from "react";
import { Hero,CustomFilter,CarCard, SearchBar,ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { yearsOfProduction, fuels } from "@/constants";
import Image from "next/image";

export default function Home() {
  const [ allCars, setAllCars ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  

  //search
  const [ manufacturer, setManufacturer ] = useState('');
  const [ model, setModel ] = useState('');

  //filter
  const [ fuel, setFuel ] = useState('');
  const [ year, setYear ] = useState(2020);

  //pagination
  const [ limit, setLimit ] = useState(10);

  const getCars = async () =>{
    setLoading(true);
    try {
        const result = await fetchCars({
        manufacturer:manufacturer || '',
        year:year || 2022,
        fuel:fuel || '',
        limit:limit || 10,
        model:model || '',
      });
      setAllCars(result);

      console.log(result)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false);
    }
  };
  useEffect(() =>{
    getCars()

  }, [fuel,year,limit,manufacturer,model]);

  return (
    <main className='relative'>
     <Hero />

     <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>

        <p>Explore the car you might light</p>

        <div className="home__filters">
        <SearchBar setManufacturer={setManufacturer}
      setModel={setModel}
       />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels}  setFilter={setFuel} />
          <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          
        </div>
        </div>
      </div>

      {
      allCars.length > 0 ? (
        <section>
          <div className="home__cars-wrapper">
            {
              allCars?.map((car,idx) => <CarCard key={idx} car={car} />)
            }
          </div>

          {
            loading && (
              <div className="w-full mt-16 flex-center">
                <Image src='/loader.svg'
                alt="loader"
                width={50}
                height={50}
                className="object-contain"
                />
              </div>
            )
          }
          <ShowMore 
          pageNumber={limit/ 10}
          isNext={limit > allCars.length}
          setLimit={setLimit}
          />
         </section>
      ):(
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops; We have no car</h2>

          {/* <p>{allCars?.message}</p> */}
        </div>
      )}
     </div>
    </main>
  )
}
