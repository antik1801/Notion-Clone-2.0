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
import { TRoomDocument } from "./Sidebar";

type menuOptionsProps = {
  groupedData: {
    owner: TRoomDocument[],
    editor: TRoomDocument[]
  }
}


const SidebarSheet = ({groupedData}: menuOptionsProps ) => {

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
           <MenuOptions groupedData={groupedData}/>
          </div>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default SidebarSheet;
