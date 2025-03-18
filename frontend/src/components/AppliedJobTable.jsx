// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
// import { Badge } from './ui/badge'
// import { useSelector } from 'react-redux'

// const AppliedJobTable = () => {
//     const {allAppliedJobs} = useSelector(store=>store.job);
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your applied jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Date</TableHead>
//                         <TableHead>Job Role</TableHead>
//                         <TableHead>Company</TableHead>
//                         <TableHead className="text-right">Status</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> : allAppliedJobs.map((appliedJob) => (
//                             <TableRow key={appliedJob._id}>
//                                 <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
//                                 <TableCell>{appliedJob.job?.title}</TableCell>
//                                 <TableCell>{appliedJob.job?.company?.name}</TableCell>
//                                 <TableCell className="text-right"><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default AppliedJobTable

//chatgpt code below
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div className="overflow-x-auto p-4">
      <Table className="w-full min-w-[600px] sm:min-w-full">
        <TableCaption className="text-sm sm:text-base">
          A list of your applied jobs
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-xs sm:text-sm md:text-base">Date</TableHead>
            <TableHead className="text-xs sm:text-sm md:text-base">Job Role</TableHead>
            <TableHead className="text-xs sm:text-sm md:text-base">Company</TableHead>
            <TableHead className="text-xs sm:text-sm md:text-base text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center py-4 text-gray-500">
                You haven't applied for any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id} className="border-b">
                <TableCell className="text-xs sm:text-sm md:text-base">
                  {appliedJob?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="text-xs sm:text-sm md:text-base">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="text-xs sm:text-sm md:text-base">
                  {appliedJob.job?.company?.name}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`px-2 py-1 text-xs sm:text-sm ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400"
                        : appliedJob.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
