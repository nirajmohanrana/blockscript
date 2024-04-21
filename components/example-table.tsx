import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExampleTable = () => {
  const studentsMarks = [
    {
      rollNo: "01",
      studentName: "John Doe",
      studentEmail: "johndoe@example.com",
      parentName: "Jane Doe",
      parentEmail: "janedoe@example.com",
      marksScored: "245",
      totalMarks: "500",
      testStatus: "Pass",
      teachersComment: "Needs improvement in understanding the concepts.",
    },
    {
      rollNo: "02",
      studentName: "Jane Smith",
      studentEmail: "janesmith@example.com",
      parentName: "John Smith",
      parentEmail: "johnsmith@example.com",
      marksScored: "450",
      totalMarks: "500",
      testStatus: "Pass",
      teachersComment: "Excellent performance. Keep up the good work!",
    },
    {
      rollNo: "03",
      studentName: "David Brown",
      studentEmail: "davidbrown@example.com",
      parentName: "Sarah Brown",
      parentEmail: "sarahbrown@example.com",
      marksScored: "120",
      totalMarks: "500",
      testStatus: "Fail",
      teachersComment:
        "Struggling with problem-solving skills. More practice needed.",
    },
    {
      rollNo: "04",
      studentName: "Emily Johnson",
      studentEmail: "emilyjohnson@example.com",
      parentName: "Mark Johnson",
      parentEmail: "markjohnson@example.com",
      marksScored: "430",
      totalMarks: "500",
      testStatus: "Pass",
      teachersComment: "Good effort. Keep focusing on improving understanding.",
    },
    {
      rollNo: "05",
      studentName: "Michael Williams",
      studentEmail: "michaelwilliams@example.com",
      parentName: "Laura Williams",
      parentEmail: "laurawilliams@example.com",
      marksScored: "480",
      totalMarks: "500",
      testStatus: "Pass",
      teachersComment:
        "Outstanding performance. Demonstrates strong understanding of the material.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="student-list">
        <AccordionTrigger>List of all students marks.</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-xs w-16">
                  Roll No.
                </TableHead>
                <TableHead className="text-center text-xs">Name</TableHead>
                <TableHead className="text-center text-xs w-40">
                  Email Address
                </TableHead>
                <TableHead className="text-center text-xs w-20">
                  Marks Scored
                </TableHead>
                <TableHead className="text-center text-xs w-20">
                  Total Marks
                </TableHead>
                <TableHead className="text-center text-xs w-20">
                  Result
                </TableHead>
                <TableHead className="text-center text-xs w-96">
                  Parent Name
                </TableHead>
                <TableHead className="text-center text-xs w-40">
                  Parent Email Address
                </TableHead>
                <TableHead className="text-center text-xs w-[1800px]">
                  Comments
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentsMarks.map((marks) => (
                <TableRow key={marks.rollNo}>
                  <TableCell className="text-xs">{marks.rollNo}</TableCell>
                  <TableCell className="text-xs">{marks.studentName}</TableCell>
                  <TableCell className="text-xs">
                    {marks.studentEmail}
                  </TableCell>
                  <TableCell className="text-right text-xs">
                    {marks.marksScored}
                  </TableCell>
                  <TableCell className="text-right text-xs">
                    {marks.totalMarks}
                  </TableCell>
                  <TableCell
                    className={`text-right text-xs font-bold ${
                      marks.testStatus === "Pass"
                        ? "text-green-500"
                        : "text-red-400"
                    }`}
                  >
                    {marks.testStatus}
                  </TableCell>
                  <TableCell className="text-xs">{marks.parentName}</TableCell>
                  <TableCell className="text-xs">{marks.parentEmail}</TableCell>
                  <TableCell className="text-xs">
                    {marks.teachersComment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExampleTable;
