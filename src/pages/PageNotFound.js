import {Link} from "react-router-dom";
import pageNotFound from "../assets/images/pagenotfound.png"
export const PageNotFound = () => {
  return (
    <main>
     <section className= "flex flex-col justify-center px-2">
      <div className="flex flex-col items-center">
        <p className=" text-7xl text-gray-700 font-bold my-10 dark:text-white ">404 Oops!</p>
        <div className="max-w-lg">
        <img className="rounded"src={pageNotFound} alt="404 page not found" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to= "/">
        <button className=" w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2. mr-2 mb-2 font-medium">Back To  Home</button> 
        </Link>
       
      </div>
     </section>
    </main>
  )
}
