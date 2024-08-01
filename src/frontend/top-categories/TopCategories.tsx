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
    title: "Reach Dad Poor Dad",
    description: "This book teaches you about how to get rich",
    price: "Rs 200",
    author: "L",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
  {
    image: book3,
    title: "Reach Dad Poor Dad",
    description: "This book teaches you about how to get rich",
    price: "Rs 200",
    author: "L",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
  {
    image: book4,
    title: "Reach Dad Poor Dad",
    description: "This book teaches you about how to get rich",
    price: "Rs 200",
    author: "L",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
  {
    image: book5,
    title: "Reach Dad Poor Dad",
    description: "This book teaches you about how to get rich",
    price: "Rs 200",
    author: "L",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
  {
    image: book6,
    title: "Reach Dad Poor Dad",
    description: "This book teaches you about how to get rich",
    price: "Rs 200",
    author: "L",
    genre: "Finance",
    createdAt: new Date().toISOString(),
  },
];
const TopCategories = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Top Categories</h1>
      <div className="flex py-3 gap-2">
        {books.map((book, index) => (
          <div key={index} className="border p-2">
            <img
              src={book.image}
              alt={book.title}
              className="w-screen h-72 object-cover"
            />
            <div>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-xl">{book.price}</p>
                <Button variant={"outline"}>Buy now </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCategories;
