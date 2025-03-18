// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import CompaniesTable from './CompaniesTable'
// import { useNavigate } from 'react-router-dom'
// import useGetAllCompanies from '@/hooks/useGetAllCompanies'
// import { useDispatch } from 'react-redux'
// import { setSearchCompanyByText } from '@/redux/companySlice'

// const Companies = () => {
//     useGetAllCompanies();
//     const [input, setInput] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(setSearchCompanyByText(input));
//     },[input]);
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-6xl mx-auto my-10'>
//                 <div className='flex items-center justify-between my-5'>
//                     <Input
//                         className="w-fit"
//                         placeholder="Filter by name"
//                         onChange={(e) => setInput(e.target.value)}
//                     />
//                     <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
//                 </div>
//                 <CompaniesTable/>
//             </div>
//         </div>
//     )
// }

// export default Companies

//chatgpt code below

import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input]);

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row items-center justify-between my-5 gap-3'>
                    <Input
                        className="w-full md:w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button className="w-full md:w-auto" onClick={() => navigate("/admin/companies/create")}>
                        New Company
                    </Button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    );
}

export default Companies;
