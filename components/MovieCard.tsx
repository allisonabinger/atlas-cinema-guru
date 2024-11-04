import Link from "next/link";

type MovieProps = {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
};

export function MovieCard({
  id,
  title,
  synopsis,
  released,
  genre,
}: MovieProps) {
  return (
    <div className="relative group overflow-hidden shadow-lg h-96 w-64 border-2 border-teal rounded-lg">
      <img
        src={id}
        alt={title}
        className="w-full max-w-[300px] h-[350px] rounded-lg object-cover transition-transform duration-200 transform group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-navy opacity-0 group-hover:opacity-90 transition-opacity duration-200 flex flex-col justify-center items-center p-4 text-left font-light">
        <h2>
          `{title} ({released})`
        </h2>
        <p>{synopsis}</p>
        <div className="genre rounded-full bg-teal p-0">{genre}</div>
      </div>
    </div>
  );
}
