
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Search = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 m-6">
            {/* Hidden on small screens, visible on medium and large screens */}
            <div className="hidden md:flex md:basis-1/4">
                <p className="text-center mt-2">Hello <b>Chamod</b></p>
            </div>

            {/* Hidden on small screens, visible on medium and large screens */}
            <div className="hidden md:flex md:basis-1/2">
                <div className="flex w-full space-x-2">
                    <Input type="text" placeholder="Search your desire" />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border-black border p-1 px-6 rounded-full">
                            <p>Categories</p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>T-shirts</DropdownMenuItem>
                            <DropdownMenuItem>Pants</DropdownMenuItem>
                            <DropdownMenuItem>Shoes</DropdownMenuItem>
                            <DropdownMenuItem>Sunglasses</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Hidden on medium and large screens, visible on small screens */}
            <div className="md:hidden flex flex-row gap-2 w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-purple-300 hover:bg-purple-500 flex-grow px-4 rounded-full text-black font-semibold">
                        <p>Categories</p>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-100">
                        <DropdownMenuLabel>Categories</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>T-shirts</DropdownMenuItem>
                        <DropdownMenuItem>Pants</DropdownMenuItem>
                        <DropdownMenuItem>Shoes</DropdownMenuItem>
                        <DropdownMenuItem>Sunglasses</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button type="submit" className="bg-purple-300 hover:bg-purple-500 flex-grow px-4 rounded-full text-black font-semibold">
                    Advanced
                </Button>
            </div>

            {/* Hidden on small screens, visible on medium and large screens */}
            <div className="hidden md:flex md:basis-1/4 md:justify-end space-x-2">
                <Button type="submit" className="rounded-full px-6" variant="outline">Search</Button>
                <Button type="submit" variant="link">Advanced</Button>
            </div>
        </div>
    );
}

export default Search;

