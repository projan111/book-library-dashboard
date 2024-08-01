import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.jpg";
import book5 from "../../assets/book5.jpg";
import book6 from "../../assets/book6.jpg";
import { Button } from "../../components/ui/button";

interface Book {
  image: string;
  title: string;
  description: string;
  price: string;
  author: string;
  genre: string;
  createdAt: string;
}

interface Props {
  mainTitle: string;
}

const books: Book[] = [
  {
    image: book1,
    title: "Reach Dad Poor Dad",
    description: "This book teaches you about how to get rich",
    price: "Rs 200",
    author: "L",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
  {
    image: book2,
    title: "Atomic Habit",
    description: "A book about to change your habit with your life",
    price: "Rs 300",
    author: "Rojan",
    genre: "Self-help",
    createdAt: new Date().toISOString(),
  },
  {
    image: book3,
    title: "Ikigai",
    description: "This book will help you to find your passion",
    price: "Rs 500",
    author: "L",
    genre: "Self-help",
    createdAt: new Date().toISOString(),
  },
  {
    image: book4,
    title: "Arab Blues",
    description: "This book teaches you about how to get rich",
    price: "Rs 700",
    author: "Sigmund Frud",
    genre: "Psychology",
    createdAt: new Date().toISOString(),
  },
  {
    image: book5,
    title: "Firfire",
    description: "This book teaches you about how to get rich",
    price: "Rs 400",
    author: "Achut",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
  {
    image: book6,
    title: "Pagal Basti",
    description: "This book teaches you about how to get rich",
    price: "Rs 900",
    author: "Pagal",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
];
const TopCategories: React.FC<Props> = ({ mainTitle }) => {
  return (
    <>
      <h1 className="text-xl font-bold">{mainTitle}</h1>
      <div className="flex py-3 gap-2">
        {books.map((book, index) => (
          <div key={index} className="border p-2">
            <img
              src={book.image}
              alt={book.title}
              className="w-screen h-72 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <div className="flex flex-col justify-between items-start py-2">
                <p className="text-zinc-700">
                  Author:{" "}
                  <span className="text-zinc-950 font-medium">
                    {book.author}
                  </span>
                </p>
                <p className="text-zinc-950 ">
                  Genre:{" "}
                  <span className="font-medium border rounded-full px-4 bg-green-50">
                    {book.genre}
                  </span>
                </p>
              </div>
              <p className="font-semibold text-xl">{book.price}</p>
              <p className="text-zinc-500 py-3">{book.description}</p>
              <div className="flex justify-between items-center">
                <Button variant={"outline"} className=" hover:bg-green-200">
                  Learn more{" "}
                </Button>
                <Button
                  variant={"outline"}
                  className="bg-[#62B611] text-white hover:bg-[#55901e] hover:text-white"
                >
                  Buy now{" "}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCategories;
