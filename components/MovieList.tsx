// Movie grid for movie cards

import { MovieCard } from "./MovieCard";

export default function MovieList() {
  return (
    <div className="grid grid-cols-3 gap-x-32 gap-y-4">
      <MovieCard
        id="Movie1"
        title="After the Rain"
        synopsis="Two strangers form a bond as they try to rebuild their lives after a devastating flood."
        released={2016}
        genre="Sci-Fi"
        favorited={false}
        watchLater={false}
        image="/images/b132955e-1e64-4b08-8954-03971bd05352.webp"
      />
            <MovieCard
        id="Movie2"
        title="Movie2Title"
        synopsis="Movie2Synopsis"
        released={2016}
        genre="Movie2Genre"
        favorited={false}
        watchLater={false}
        image="/images/b132955e-1e64-4b08-8954-03971bd05352.webp"
      />
            <MovieCard
        id="Movie3"
        title="Movie3Title"
        synopsis="Movie3Synopsis"
        released={2016}
        genre="Movie3Genre"
        favorited={false}
        watchLater={false}
        image="/images/b132955e-1e64-4b08-8954-03971bd05352.webp"
      />
            <MovieCard
        id="Movie4"
        title="Movie4Title"
        synopsis="Movie4Synopsis"
        released={2016}
        genre="Movie4Genre"
        favorited={false}
        watchLater={false}
        image="/images/b132955e-1e64-4b08-8954-03971bd05352.webp"
      />
            <MovieCard
        id="Movie5"
        title="Movie5Title"
        synopsis="Movie5Synopsis"
        released={2016}
        genre="Movie5Genre"
        favorited={false}
        watchLater={false}
        image="/images/b132955e-1e64-4b08-8954-03971bd05352.webp"
      />
            <MovieCard
        id="Movie6"
        title="Movie6Title"
        synopsis="Movie6Synopsis"
        released={2016}
        genre="Movie6Genre"
        favorited={false}
        watchLater={false}
        image="/images/b132955e-1e64-4b08-8954-03971bd05352.webp"
      />
    </div>
  );
}
