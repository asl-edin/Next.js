import { Student } from "@/types/student";

type Props = {
  student: Student;
};

export default function StudentCard({ student }: Props) {
  return <div>{student.name}</div>;
}
