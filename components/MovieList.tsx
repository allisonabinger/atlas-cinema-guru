// Movie grid for movie cards
"use client";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string;
}

interface MovieListProps {
  movieList: Movie[];
}

export default function MovieList({ movieList }: MovieListProps) {
  // storing favorites and watchLaters in a set for optimization when mapping titles
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [watchLater, setWatchLater] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const [favoritesRes, watchLaterRes] = await Promise.all([
          fetch("/api/favorites"),
          fetch("/api/watch-later"),
        ]);
        const favoritesData = await favoritesRes.json();
        const watchLaterData = await watchLaterRes.json();

        // console.log("Favorites Data: ", favoritesData)

        const favorites = Array.isArray(favoritesData.favorites) ? favoritesData.favorites : [];
        const watchLater = Array.isArray(watchLaterData.favorites) ? watchLaterData.watchLater : [];

        setFavorites(new Set(favorites.map((movie: Movie) => movie.id)));
        setWatchLater(new Set(watchLater.map((movie: Movie) => movie.id)));

        // console.log("Favorites after stored in set: ", favorites)
      } catch (err) {
        console.error("Error fetching favorites and watch later data:", err);
      }
    };
    fetchFlags();
  }, []);

  return (
    <div className="px-24 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-x-16 lg:gap-x-8 gap-y-4 mb-3">
        {movieList ? (
          movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                ...movie,
                favorited: favorites.has(movie.id),
                watchLater: watchLater.has(movie.id),
              }}
            />
          ))
        ) : (
          <h2 className="text-white text-2xl">No titles found.</h2>
        )}
      </div>
    </div>
  );
}
