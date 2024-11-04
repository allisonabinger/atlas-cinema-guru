"use client";

import { useEffect, useState } from "react";

interface GenreFilterProps {
    onGenreSelect: (genres: string[]) => void;
}

export default function GenreFilter({ onGenreSelect}: GenreFilterProps) {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    async function fetchGenres() {
      const response = await fetch("/api/genres");
      const data = await response.json();
      setGenres(data.genres);
    }
    fetchGenres();
  }, []);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  useEffect(() => {
    onGenreSelect(selectedGenres);
  }, [selectedGenres, onGenreSelect]);

  return (
    <div className="genre-lists">
      <h2>Genres</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
                    <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`border-2 border-teal rounded-full p-1 ${selectedGenres.includes(genre) ? "bg-teal" : "bg-navy"}`}
                  >
                    {genre}
                  </button>
        ))}
      </div>
    </div>
  );
}
