"use client";
import GenreFilter from "@/components/GenreFilter";
import SearchFilter from "@/components/SearchFilter";
import { useEffect, useState } from "react";

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
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState("");
    const [minYear, setMinYear] = useState(1900);
    const [maxYear, setMaxYear] = useState(2024);
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        async function fetchMovies() {
          const params = new URLSearchParams({
            page: "1",
            minYear: minYear.toString(),
            maxYear: maxYear.toString(),
            genres: genres.join(","),
            query: query,
          });
    
          const response = await fetch(`/api/titles?${params.toString()}`);
          const data = await response.json();
          setMovies(data.titles);
        }
    
        fetchMovies();
      }, [query, minYear, maxYear, genres]);

  return (
    <main className="flex flex-col">
        <div className="search-filter w-full p-6 flex justify-between text-white">
            {/* Search Forms */}
            <SearchFilter onSearch={(query, minYear, maxYear) => {
                setQuery(query);
                setMinYear(minYear);
                setMaxYear(maxYear);
            }}
            />
            <GenreFilter onGenreSelect={(selectedGenres) => setGenres(selectedGenres)} />
        </div>
        <div className="w-full p-10"></div>
    </main>
  );
}
