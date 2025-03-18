// import React from 'react'
// import { Button } from './ui/button'
// import { Bookmark } from 'lucide-react'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const Job = ({job}) => {
//     const navigate = useNavigate();
//     // const jobId = "lsekdhjgdsnfvsdkjf";

//     const daysAgoFunction = (mongodbTime) => {
//         const createdAt = new Date(mongodbTime);
//         const currentTime = new Date();
//         const timeDifference = currentTime - createdAt;
//         return Math.floor(timeDifference/(1000*24*60*60));
//     }
    
//     return (
//         <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
//             <div className='flex items-center justify-between'>
//                 <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
//                 <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
//             </div>

//             <div className='flex items-center gap-2 my-2'>
//                 <Button className="p-6" variant="outline" size="icon">
//                     <Avatar>
//                         <AvatarImage src={job?.company?.logo} />
//                     </Avatar>
//                 </Button>
//                 <div>
//                     <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                     <p className='text-sm text-gray-500'>India</p>
//                 </div>
//             </div>

//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>
//             <div className='flex items-center gap-4 mt-4'>
//                 <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
//                 <Button className="bg-[#7209b7]">Save For Later</Button>
//             </div>
//         </div>
//     )
// }

// export default Job

//chatgpt code below
import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  // Function to calculate how many days ago the job was posted
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  };

  return (
    <div
      className="p-5 rounded-lg shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer max-w-3xl mx-auto"
      onClick={() => navigate(`/description/${job?._id}`)}
    >
      {/* Job Posting Date & Save Button */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Details (Responsive Layout) */}
      <div className="flex items-center gap-3 my-3 flex-wrap">
        <Avatar className="w-14 h-14 border border-gray-300">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">{job?.company?.name || "Unknown Company"}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div>
        <h1 className="font-bold text-xl my-2 text-gray-900">{job?.title || "Job Title"}</h1>
        <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
          {job?.description || "No description available"}
        </p>
      </div>

      {/* Job Details (Position, Type, Salary) */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        {job?.position && (
          <Badge className="text-blue-700 font-bold px-3 py-1" variant="ghost">
            {job?.position} Positions
          </Badge>
        )}
        {job?.jobType && (
          <Badge className="text-[#F83002] font-bold px-3 py-1" variant="ghost">
            {job?.jobType}
          </Badge>
        )}
        {job?.salary && (
          <Badge className="text-[#7209b7] font-bold px-3 py-1" variant="ghost">
            {job?.salary} LPA
          </Badge>
        )}
      </div>

      {/* Action Buttons (Responsive) */}
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <Button
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent div click from triggering navigation
            navigate(`/description/${job?._id}`);
          }}
          variant="outline"
          className="w-full md:w-auto"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] w-full md:w-auto">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
