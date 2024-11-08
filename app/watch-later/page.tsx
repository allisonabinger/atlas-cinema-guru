"use client";
import MovieList from "@/components/MovieList";
import PageButtons from "@/components/PageButtons";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "@/assets/lotties/loading.json";

// homepage for non-logged-in users

interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string;
}
export default function Page() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const moviesPerPage = 6;

  // fetch funciton
  async function fetchAllMovies() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/watch-later");
      const data = await response.json();

      setAllMovies(data.watchLater);
    //   setFilteredMovies(data.title);
      setIsLoading(false);
      setTotalPages(Math.ceil(data.watchLater.length / moviesPerPage));
    } catch (err) {
      console.error("Error fetching titles: ", err);
    } finally {
      setIsLoading(false);
    }
  }


  // fetch upon initial load
  useEffect(() => {
    fetchAllMovies();
  }, []);

  const paginatedMovies = allMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col mb-0 justify-center">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <Player
            src={Loading}
            className="loading"
            loop
            autoplay
            speed={3}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      ) : (
        <>
          <div className="search-filter w-full p-4 pb-0 mb-2 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-bold mb-2">Watch Later</h2>
            <PageButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="w-auto p-5 mx-0 flex flex-col justify-center">
            <MovieList movieList={paginatedMovies} />
          </div>
        </>
      )}
    </div>
  );
}
