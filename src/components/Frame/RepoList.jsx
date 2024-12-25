import axios from "axios";
import { useEffect, useState } from "react";

import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

const RepoList = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://api.github.com/users/Vedant-Dalavi/repos');
                setRepos(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);



    const calculateTimeDifference = (updatedAt) => {
        const now = new Date();
        const updatedDate = new Date(updatedAt);

        const yearsDifference = differenceInYears(now, updatedDate);
        const monthsDifference = differenceInMonths(now, updatedDate);
        const daysDifference = differenceInDays(now, updatedDate);

        if (yearsDifference > 0) {
            return `${yearsDifference} years ago`;
        } else if (monthsDifference > 0) {
            return `${monthsDifference} months ago`;
        } else {
            return `${daysDifference} days ago`;
        }
    };


    return (
        <div className="flex flex-col overflow-hidden rounded-b-lg border-b border-[#D5D7DA]">
            {loading && (
                <div className="flex justify-center items-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" viewBox="0 0 24 24"></svg>
                    <p>Loading...</p>
                </div>
            )}

            {!loading && (
                <div
                    className="flex flex-col scroll-smooth overflow-y-auto h-[645px] md:h-[756px]"
                >
                    {repos.map((repo, index) => (
                        <div
                            key={index}
                            className="h-[108px] flex items-center py-[24px] px-[24px] border-b border-x border-[#D5D7DA] hover:bg-[#F5F5F5] transition-all duration-300"
                        >
                            <div className="flex flex-col justify-between gap-y-2">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <p className="text-xl ">{repo.name}</p>
                                    <span className="first-letter:uppercase bg-[#EFF8FF] rounded-full text-sm border-[1px] py-[2px] px-[10px] border-[#B2DDFF] h-full text-[#175CD3]">{repo.visibility}</span>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-row gap-2 items-center">
                                        <p>{repo.language}</p>
                                        <div className="bg-[#1570EF] h-2 w-2 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path id="database" d="M5.25 12C2.34375 12 0 11.1797 0 10.125V1.875C0 0.84375 2.34375 0 5.25 0C8.13281 0 10.5 0.84375 10.5 1.875V10.125C10.5 11.1797 8.13281 12 5.25 12ZM9.375 2.03906L9.35156 2.01562C9.23438 1.92188 8.97656 1.75781 8.57812 1.61719C7.78125 1.33594 6.58594 1.125 5.25 1.125C3.89062 1.125 2.69531 1.33594 1.89844 1.61719C1.5 1.75781 1.24219 1.92188 1.125 2.01562V4.10156C1.42969 4.26562 1.85156 4.42969 2.39062 4.57031C3.1875 4.75781 4.17188 4.875 5.25 4.875C6.30469 4.875 7.28906 4.75781 8.08594 4.57031C8.625 4.42969 9.04688 4.26562 9.375 4.10156V2.03906ZM9.375 5.34375C9.04688 5.46094 8.71875 5.57812 8.34375 5.67188C7.45312 5.88281 6.375 6 5.25 6C4.10156 6 3.02344 5.88281 2.13281 5.67188C1.75781 5.57812 1.42969 5.46094 1.125 5.34375V7.10156C1.42969 7.26562 1.85156 7.42969 2.39062 7.57031C3.1875 7.75781 4.17188 7.875 5.25 7.875C6.30469 7.875 7.28906 7.75781 8.08594 7.57031C8.625 7.42969 9.04688 7.26562 9.375 7.10156V5.34375ZM1.125 10.0078C1.24219 10.1016 1.5 10.2656 1.89844 10.4062C2.69531 10.6875 3.89062 10.875 5.22656 10.875C6.58594 10.875 7.78125 10.6875 8.57812 10.4062C8.97656 10.2656 9.23438 10.1016 9.35156 10.0078L9.375 9.98438V8.34375C9.04688 8.46094 8.71875 8.57812 8.34375 8.67188C7.45312 8.88281 6.375 9 5.22656 9C4.10156 9 3.02344 8.88281 2.13281 8.67188C1.75781 8.57812 1.42969 8.46094 1.10156 8.34375V9.98438L1.125 10.0078ZM9.42188 9.9375L9.39844 9.96094C9.42188 9.9375 9.42188 9.9375 9.42188 9.9375ZM1.07812 9.96094C1.07812 9.9375 1.05469 9.9375 1.05469 9.9375L1.07812 9.96094ZM1.07812 2.0625C1.05469 2.08594 1.05469 2.08594 1.05469 2.08594L1.07812 2.0625ZM9.42188 2.08594C9.42188 2.08594 9.42188 2.08594 9.39844 2.0625L9.42188 2.08594Z" fill="#181D27" />
                                        </svg>
                                        <span>{repo.size} KB</span>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <p>{calculateTimeDifference(repo.updated_at)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


export default RepoList;