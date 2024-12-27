import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

import React from "react";
import MenuOptions from "./MenuOptions";



const SidebarSheet = () => {

  return (
    <div className="md:hidden">
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40}/>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <div>
            {/* Options */}
           <MenuOptions />
          </div>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default SidebarSheet;
