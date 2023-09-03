import Calendar from "@/components/Calendar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


export default function CalendarPage() {
    return (
      <div className="bg-primary-black overflow-hidden flex">
        <div className="z-10 w-16 hidden md:block sticky top-0">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="z-10 overflow-hidden">
            <Navbar />
          </div>
          <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
            <Calendar />
          </div>
        </div>
      </div>
    );
}