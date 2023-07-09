import { CarProps } from "@/types";
import { FilterProps } from "@/types";

export async function fetchCars(filter:FilterProps){
  const { manufacturer, model, year, limit, fuel } = filter;
    const headers = {
      'X-RapidAPI-Key': '2e228fad03msh552905b4228f935p1a78abjsn79e1f1307cb0',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      };
    
      const res =await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${manufacturer}&year=${year}&fuel=${fuel}&model=${model}&limit=${limit}`,{
        headers
      });

      const result = await res.json();

      return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 


export const UpdateSearchParmas = (type:string, value:string) => {
  const searchParmas = new URLSearchParams(window.location.search);

        searchParmas.set(type,value)

      const newPathname = `${window.location.pathname}?${searchParmas.toString()}`

     return newPathname;
}