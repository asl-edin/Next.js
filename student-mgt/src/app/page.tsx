import StudentCard from "@/components/StudentCard";
import { Student } from "@/types/student";
import { studentsData } from "../data/studenData";
import StudentList from "@/components/StudentList";

export default function Home() {
  // const students: Student[] = [
  //   { id: 1, name: "Asledin" },
  //   { id: 2, name: "Abel" },
  //   { id: 3, name: "Ahmed" },
  // ];
  const students: Student[] = studentsData;
  return (
    <div className="min-h-screen bg-gray-300/50">
      {/* {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))} */}
      <StudentList />
    </div>
  );
}
