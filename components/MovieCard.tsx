import Link from "next/link";
import StarOutline from "@/assets/icons/staroutline.svg";
import StarFull from "@/assets/icons/starfull.svg";
import ClockOutline from "@/assets/icons/clockoutline.svg";
import ClockFull from "@/assets/icons/clockfull.svg";
import Image from "next/image";

type MovieProps = {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  favorited: boolean;
  watchLater: boolean;
  image: string;
};

export function MovieCard({
  id,
  title,
  synopsis,
  released,
  genre,
  favorited,
  watchLater,
  image,
}: MovieProps) {
  return (
    <div className="relative group overflow-hidden shadow-lg w-96 border-2 border-teal rounded-2xl flex justify-center">
      <img src={image} alt={title} className="w-full rounded-lg " />

      {/* Overlay */}
      <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
        <button>
            <Image
              src={StarFull.src}
              alt="Favorites Icon"
              width={30}
              height={30}
              className="object-cover transition-transform duration-200 transform group-hover:scale-105"
            />
        </button>
        <button>
            <Image
              src={ClockFull.src}
              alt="Watch Later Icon"
              width={30}
              height={30}
              className="object-cover transition-transform duration-200 transform group-hover:scale-105"
            />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-navy opacity-0 group-hover:opacity-90 transition-opacity duration-200 flex flex-col p-4 text-left">
        <h1 className="text-lg mb-2">
          {title} ({released})
        </h1>
        <p className="mb-3 text-sm">{synopsis}</p>
        <div className="genre rounded-full bg-teal p-2 w-fit gap-2 text-black">{genre}</div>
      </div>
    </div>
  );
}
