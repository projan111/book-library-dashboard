import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { CirclePlus, CircleX } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

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
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-zinc-500">Create a new book</CardTitle>
          <CardDescription className="text-green-500">
            Update the book below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name" className="font-semibold">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                className="w-full text-zinc-500 "
                defaultValue="Gamer Gear Pro Controller"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="genre" className="font-semibold">
                Genre
              </Label>
              <Input
                id="genre"
                type="text"
                className="w-full text-zinc-500 "
                defaultValue="Gamer Gear Pro Controller"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description" className="font-semibold">
                Description
              </Label>
              <Textarea
                id="description"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                className="min-h-32 text-zinc-500 "
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="coverImage" className="font-semibold">
                Cover Image
              </Label>
              <Input
                id="coverImage"
                type="file"
                className="w-full text-zinc-500 "
                
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="bookFile" className="font-semibold">
                Book PDF
              </Label>
              <Input
                id="bookFile"
                type="file"
                className="w-full text-zinc-500 "
                
              />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <Button
              variant={"outline"}
              className="flex items-center gap-2 justify-center bg-yellow-50 hover:bg-yellow-200 text-zinc-400 hover:text-red-400"
            >
              <CircleX size={16} />
              <span>Cancell</span>
            </Button>
            <Button
              variant={"secondary"}
              className="flex items-center gap-2 justify-center bg-[#70d413] hover:bg-[#65af20]"
            >
              <CirclePlus size={16} />
              <span>Update</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CreateBooks;
