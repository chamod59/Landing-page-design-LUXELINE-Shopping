
import { useState, useEffect, useRef } from "react";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FaUser, FaTimes, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Close navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setIsSearchOpen(false); // Close search input when clicking outside
            }
        };

        if (isOpen || isSearchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, isSearchOpen]);

    return (
        <Menubar className="flex justify-between items-center h-16 px-10" ref={navRef}>
            {/* Web Logo on the Left and Toggle Button on the Right for Small/Medium Screens */}
            <div className="flex w-full md:w-auto">
                <div className="flex-none md:mr-auto">
                    <MenubarMenu>
                        <MenubarTrigger className="font-bold text-2xl">
                            LuxeLine
                        </MenubarTrigger>
                    </MenubarMenu>
                </div>

                <div className="md:hidden flex flex-row flex-none ml-auto">
                    <FaSearch className="text-xl mr-6 mt-[18px]" onClick={toggleSearch} />
                    <button onClick={toggleMenu} className="text-2xl mt-3">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
                <div className="fixed top-16 left-0 w-full bg-white p-4 shadow-md z-50">
                    <div className="flex items-center">
                        <Input placeholder="Search..." className="flex-1 rounded-full" />
                        <Button className="ml-2 rounded-full" variant="outline">Search</Button>
                    </div>
                </div>
            )}

            {/* Navigation Links */}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } fixed top-0 left-0 h-full w-64 bg-gray-400 md:relative md:flex md:h-auto md:w-auto md:bg-transparent z-50 transition-transform`}
            >
                <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
                    <div className="flex-1 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                        <MenubarMenu>
                            <MenubarTrigger>Home</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Sale</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Blog</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Privacy Policy</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>About Us</MenubarTrigger>
                        </MenubarMenu>

                        {/* links that visible on medium and small screens but hidden on large screens */}
                        <div className="md:hidden">
                            <MenubarMenu>
                                <MenubarTrigger>My Account</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>User Profile</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>WatchList</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Purchase History</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Message</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Contact Admin</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Log Out</MenubarTrigger>
                            </MenubarMenu>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Icon and Cart (Hidden on Small/Medium Screens) */}
            <div className="hidden md:flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MenubarMenu>
                            <FaUser className="text-2xl" />
                        </MenubarMenu>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Home</DropdownMenuItem>
                        <DropdownMenuItem>User Profile</DropdownMenuItem>
                        <DropdownMenuItem>WatchList</DropdownMenuItem>
                        <DropdownMenuItem>Purchase History</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuItem>Contact Admin</DropdownMenuItem>
                        <DropdownMenuItem>Log Out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <MenubarMenu>
                    <FaCartShopping className="text-[26px]" />
                </MenubarMenu>
            </div>
        </Menubar>
    );
};

export default Navbar;
