import profile from "../../public/pexels-doquyen-1520760.jpg";
import Image from "next/image";

export default function StudentList() {
  return (
    <div className="min-h-screen w-full p-5 max-w-350 mx-auto">
      {/* headers */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-5">
        <div className=" w-full flex md:flex-col  gap-2">
          <h1 className="font-medium">Student List</h1>
          <p className="text-sm">
            <span className="text-gray-400 ">Dashboard </span>/ main / Student
          </p>
        </div>

        <div className=" w-full flex items-center justify-end    gap-5">
          <span className="material-symbols-outlined bg-gray-50 rounded-md p-2 hover:bg-gray-100 cursor-pointer text-gray-600 text-sm ">
            refresh
          </span>
          <span className="material-symbols-outlined bg-gray-50 rounded-md p-2 hover:bg-gray-100 cursor-pointer text-gray-600 ">
            print
          </span>
          <div className="flex items-center bg-blue-300/50 w-fit p-2 rounded-md cursor-pointer  justify-between gap-2 hover:bg-blue-500/50 transition-colors duration-300">
            <span className="material-symbols-outlined">description</span>
            <h2 className="text-sm font-medium">Export</h2>
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </div>
          <div className="flex items-center bg-black text-gray-100 p-2 rounded-md gap-2 cursor-pointer w-fit hover:bg-gray-700 transition-colors duration-300">
            <span className="material-symbols-outlined">Add</span>
            <h2 className="text-sm ">Add Student</h2>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 mt-5 h-fit rounded-md overflow">
        {/* search bar */}
        <div className="p-3 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* search */}
          <div className="flex items-center gap-1 h-10 border border-slate-600/30 rounded-lg px-2 w-80">
            <span className="material-symbols-outlined text-slate-500">
              search
            </span>
            <input
              type="text"
              placeholder="Studen Name...."
              className="h-8 w-full text-sm  outline-none"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3">
            <div className="flex  items-center gap-3">
              <div className="flex items-center border border-slate-300 text-slate-600 w-fit p-2 rounded-md cursor-pointer  justify-between gap-2 hover:bg-slate-200/50 transition-colors duration-300">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                <h2 className="text-sm font-medium">Academic Year</h2>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>
              <div className="flex items-center border border-slate-300 text-slate-600 w-fit p-2 rounded-md cursor-pointer  justify-between gap-2 hover:bg-slate-200/50 transition-colors duration-300">
                <span className="material-symbols-outlined">filter_alt</span>
                <h2 className="text-sm font-medium">Filter by</h2>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-slate-300 text-slate-600 w-fit p-2 rounded-md cursor-pointer  justify-between gap-2 ">
                <span className="material-symbols-outlined border border-slate-200 p-1 rounded-md hover:bg-slate-200/50 transition-colors duration-300 cursor-pointer">
                  apps
                </span>
                <span className="material-symbols-outlined border border-slate-200 p-1 rounded-md bg-blue-800 text-white   cursor-pointer">
                  list
                </span>
              </div>

              <div className="flex items-center border border-slate-300 text-slate-600 w-fit p-2 rounded-md cursor-pointer  justify-between gap-2 hover:bg-slate-200/50 transition-colors duration-300">
                <span className="material-symbols-outlined">sort_by_alpha</span>
                <h2 className="text-sm font-medium">Sort by A-Z</h2>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="overflow-x-auto lg:overflow p-3">
          <div className="w-300 min-w-full">
            {/* table header */}
            <div className=" text-slate-200 bg-slate-900  h-12 p-2 flex items-center gap-2 text-sm  text-left  mt-3 border-b border-slate-400/20">
              <div className=" w-10 flex items-center">
                <input type="checkbox" id="" className="w-4 h-4" />
              </div>
              <div className="w-24 ">Student Id</div>
              <div className="w-60 ">Name</div>
              <div className="w-32 ">Class & Section</div>
              <div className="w-32 ">Gender</div>
              <div className="w-44 ">Email</div>
              <div className="w-32">Contact No.</div>
              <div className="w-fit  mr-20">Status</div>
              <div className="flex items-center gap-5">Action</div>
            </div>

            {/* table body */}
            <div className=" text-slate-700 bg-slate-100  h-12 px-2 py-7 flex items-center gap-2 text-sm  text-left   border-b border-slate-400/20 hover:bg-slate-200/70 transition-colors duration-300">
              <div className=" w-10 flex items-center">
                <input type="checkbox" id="" className="w-4 h-4" />
              </div>
              <div className="w-24  text-blue-500">AD9911001</div>
              <div className="w-60 flex items-center gap-2">
                {/* <span className="material-symbols-outlined border rounded-full p-2">
                  person
                </span> */}
                <Image
                  src={profile}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border border-slate-300/70"
                  width={32}
                  height={32}
                />
                <p>Jagat Khaling Rai</p>
              </div>
              <div className="w-32 ">8 - B</div>
              <div className="w-32 ">Female</div>
              <div className="w-44 ">asledin@gamil.com</div>
              <div className="w-32">973838383</div>
              <div className="w-fit py-1 px-3 flex items-center gap-2 bg-green-200 text-green-700 rounded-full mr-10">
                <span className="w-2 h-2 bg-green-500  rounded-full"></span>
                <span className="text-[12px]">Present</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined border border-slate-400 rounded-full p-2 cursor-pointer"
                    style={{ fontSize: "14px" }}
                  >
                    chat
                  </span>
                  <span
                    className="material-symbols-outlined border border-slate-400 rounded-full p-2 cursor-pointer"
                    style={{ fontSize: "14px" }}
                  >
                    call
                  </span>
                  <span
                    className="material-symbols-outlined border border-slate-400 rounded-full p-2 cursor-pointer"
                    style={{ fontSize: "14px" }}
                  >
                    mail
                  </span>
                </div>
                <span className="material-symbols-outlined cursor-pointer">
                  more_vert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
