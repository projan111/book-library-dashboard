import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { CirclePlus } from "lucide-react";

const CreateBooks = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/books">Books</BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Link to={"/dashboard/books/create"}>
          <Button
            variant={"secondary"}
            className="flex items-center gap-2 justify-center bg-green-400 hover:bg-green-500"
          >
            <CirclePlus size={16} />
            <span>Update</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CreateBooks;
