import { ArrowBigDown, Book, Dog, PersonStanding, Timer } from "lucide-react";
import { Button } from "../../components/ui/button";

const FeatureCategories = () => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-xl font-bold ">Featured Categories</h1>
        <div className="flex items-start justify-between gap-3 py-3">
          <div className="card1 bg-green-200 p-4 flex flex-col items-start w-full rounded-md ">
            <h1>Science Fiction</h1>
            <p>Paragraph</p>
            <Book />
            <Button variant={"link"} className="px-0">
              Read more
            </Button>
          </div>
          <div className="card2 bg-[#ffdca7] p-4 flex flex-col items-start w-full rounded-md ">
            <h1>Biography</h1>
            <p>Paragraph</p>

            <ArrowBigDown />
            <Button variant={"link"} className="px-0">
              Read more
            </Button>
          </div>
          <div className="card3 bg-[#ecffa6] p-4 flex flex-col items-start w-full rounded-md ">
            <h1>Neuro Science</h1>
            <p>Paragraph</p>
            <Timer />

            <Button variant={"link"} className="px-0">
              Read more
            </Button>
          </div>
          <div className="card4 bg-[#a6ecff] p-4 flex flex-col items-start w-full rounded-md ">
            <h1>Data Science</h1>
            <p>Paragraph</p>
            <PersonStanding />

            <Button variant={"link"} className="px-0">
              Read more
            </Button>
          </div>
          <div className="card5 bg-[#ffa6e3] p-4 flex flex-col items-start w-full rounded-md ">
            <h1>AI</h1>
            <p>Paragraph</p>
            <Dog />

            <Button variant={"link"} className="px-0">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategories;
