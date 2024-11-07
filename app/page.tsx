"use client";
import GenreFilter from "@/components/GenreFilter";
import MovieList from "@/components/MovieList";
import PageButtons from "@/components/PageButtons";
import SearchFilter from "@/components/SearchFilter";
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
  const [query, setQuery] = useState("");
  const [minYear, setMinYear] = useState<number>();
  const [maxYear, setMaxYear] = useState<number>();
  const [genres, setGenres] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const moviesPerPage = 6;

  // fetch funciton
  async function fetchAllMovies() {
    setIsLoading(true);
    try {
      //   const params = new URLSearchParams();
      //   if (query) {
      //     params.append("query", query);
      //   }
      //   if (minYear) {
      //     params.append("minYear", minYear?.toString())
      //   }
      //   if (maxYear) {
      //     params.append("maxYear", maxYear?.toString())
      //   }
      //   if (genres.length > 0) {
      //     params.append("genres", genres.join(","));
      //   }
      //   if (currentPage) {
      //     params.append("page", currentPage.toString())
      //   }
      //   const fetchURL = `/api/titles?${params.toString()}`;
      //   console.log(fetchURL);

      const response = await fetch("/api/titles");
      const data = await response.json();

    //   console.log(data);
      setAllMovies(data.title);
      setFilteredMovies(data.title);
      setIsLoading(false);
      setTotalPages(Math.ceil(data.title.length / moviesPerPage));
    } catch (err) {
      console.error("Error fetching titles: ", err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFilterSearchChange = () => {
    let filtered = allMovies;
    if (query) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (minYear) {
      filtered = filtered.filter((movie) => movie.released >= minYear);
    }
    if (maxYear) {
      filtered = filtered.filter((movie) => movie.released <= maxYear);
    }

    if (genres.length > 0) {
      filtered = filtered.filter((movie) => genres.includes(movie.genre));
    }

    setFilteredMovies(filtered);
    // console.log(filteredMovies);
    setTotalPages(Math.ceil(filtered.length / moviesPerPage));
    setCurrentPage(1);
  };

  // fetch upon initial load
  useEffect(() => {
    fetchAllMovies();
  }, []);

  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    handleFilterSearchChange();
  }, [query, minYear, maxYear, genres]);

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
            style={{ height: "500px", width: "500px" }}
          />
        </div>
      ) : (
        <>
          <div className="search-filter w-full p-4 pb-0 mb-2 flex justify-between text-white">
            {/* Search Forms */}
            <SearchFilter
              onSearch={(query, minYear, maxYear) => {
                setQuery(query);
                setMinYear(minYear);
                setMaxYear(maxYear);
              }}
            />
            <PageButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <GenreFilter
              onGenreSelect={(selectedGenres) => setGenres(selectedGenres)}
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
