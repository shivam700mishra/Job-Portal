// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const AdminJobsTable = () => { 
//     const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

//     const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//     const navigate = useNavigate();

//     useEffect(()=>{ 
//         console.log('called');
//         const filteredJobs = allAdminJobs.filter((job)=>{
//             if(!searchJobByText){
//                 return true;
//             };
//             return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

//         });
//         setFilterJobs(filteredJobs);
//     },[allAdminJobs,searchJobByText])
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent  posted jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Company Name</TableHead>
//                         <TableHead>Role</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterJobs?.map((job) => (
//                             <tr>
//                                 <TableCell>{job?.company?.name}</TableCell>
//                                 <TableCell>{job?.title}</TableCell>
//                                 <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                                 <Edit2 className='w-4' />
//                                                 <span>Edit</span>
//                                             </div>
//                                             <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
//                                                 <Eye className='w-4'/>
//                                                 <span>Applicants</span>
//                                             </div>
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </tr>

//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default AdminJobsTable

//chatgpt code below

import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => { 
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(() => { 
        const filteredJobs = allAdminJobs.filter((job) => {
            if (!searchJobByText) return true;
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || 
                   job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    return (
        <div className="overflow-x-auto">
            <Table className="w-full min-w-[600px]">
                <TableCaption>A list of your recently posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="whitespace-nowrap">Company Name</TableHead>
                        <TableHead className="whitespace-nowrap">Role</TableHead>
                        <TableHead className="whitespace-nowrap">Date</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs?.map((job) => (
                            <TableRow key={job._id} className="text-sm">
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger className="focus:outline-none">
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32 p-2 bg-white shadow-md rounded-md">
                                            <div 
                                                onClick={() => navigate(`/admin/companies/${job._id}`)} 
                                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                                            >
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                            <div 
                                                onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} 
                                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded mt-2"
                                            >
                                                <Eye className='w-4'/>
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default AdminJobsTable;
