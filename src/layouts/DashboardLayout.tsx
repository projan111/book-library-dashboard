import {
  Badge,
  Bell,
  Book,
  Copyright,
  Home,
  LogOut,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  User2,
} from "lucide-react";
import { Link, Outlet, Navigate, NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import logo from "../assets/lifebook.png";
import useTokenStore from "../store";
import webxLogo from "../assets/webxLogo.png";

const DashboardLayout = () => {
  const { token, setToken } = useTokenStore((state) => state);

  if (token === "") {
    return <Navigate to={"/auth/login"} replace />;
  }

  const logout = () => {
    console.log("logged out");
    setToken("");
  };

  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-green-50">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to={"/"} className="flex items-center gap-2 font-semibold">
              {/* <Package2 className="h-6 w-6" /> */}
              <img src={logo} alt="Life Book" width={120} />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to={"/dashboard/home"}
                className={({ isActive }) => {
                  return `flex items-center  gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary ${
                    isActive && "bg-white"
                  }`;
                }}
              >
                <Home className="h-4 w-4" />
                Home
              </NavLink>
              <NavLink
                to={"/dashboard/books"}
                className={({ isActive }) => {
                  return `flex items-center  gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary ${
                    isActive && "bg-white"
                  }`;
                }}
              >
                <Book className="h-4 w-4" />
                Books{" "}
              </NavLink>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card
              x-chunk="dashboard-02-chunk-0"
              className="border-green-400 border"
            >
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro 🌟</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited book access.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button
                  size="sm"
                  className="w-full bg-[#d7980e] hover:bg-[#ad8122]"
                >
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Responsive Design Here  */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to={"/"}
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro 🌟</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited book access.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full ">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search books..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8  hover:bg-green-100"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md h-8 w-8  hover:bg-green-100"
                >
                  <User2 className="h-4 w-4" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  onClick={logout}
                  variant={"link"}
                  className="hover:text-red-500 flex items-center gap-3 hover:no-underline"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />

          <div className=" mx-auto flex flex-col items-center gap-1">
            <div className=" flex items-center gap-1 text-zinc-400">
              <Copyright size={16} />
              <span className="font-semibold ">
                Copyright 2024 | All Rights Reserved
              </span>
            </div>
            <span className="text-green-400">Designed and Developed By</span>
            <Link to={"https://webxnep.com"} target="__blank">
              <img
                src={webxLogo}
                width={60}
                alt="creative website designing company in nepal"
                className="hover:scale-125 transition-all duration-100"
              />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
