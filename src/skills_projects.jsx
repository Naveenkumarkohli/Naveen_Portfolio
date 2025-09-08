import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from 'react-toastify';
import SkillsProjectsIcon from './asserts/skills_projects.svg';
import { projects_skills } from './data';
import IconLoader from './IconLoader.jsx';

// Lazy load the Carousel component
const Carousel = lazy(() => import('./carousel.jsx'));

// Fallback component for Suspense
const LoadingFallback = () => (
  <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
    <p>Loading...</p>
  </div>
);

function SkillSProjects(){

    const projects_list = projects_skills.projects_list;

    const [projectOpen, setProjectOpen] = useState(false);
    const [projectData, setProjectData] = useState(projects_skills.projects[projects_list[0]]);
    const navigate = useNavigate();
    const { projectName } = useParams();

    useEffect(() => {
        if(projectName){
            if(!projects_skills.projects[projectName]){
                toast.error('Project not found', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                navigate('/');
                return;
            }
            setProjectData(projects_skills.projects[projectName]);
            setProjectOpen(true);
        }
    }, [projectName, navigate]);

    const projects = projects_list.map((projectName, index) => {
        let project = projects_skills.projects[projectName];
        return (
            <div 
                key={index}
                className='group flex flex-col w-64 min-h-[400px] m-4 rounded-lg border border-gray-200 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex-shrink-0'
            >
                {/* Fixed height image container */}
                <div className='w-full h-48 bg-gray-100 flex-shrink-0 relative overflow-hidden'>
                    {project.thumbnail ? (
                        <img 
                            src={project.thumbnail}
                            alt={`${project.name} thumbnail`}
                            className='absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105'
                            loading='lazy'
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/placeholder.png';
                            }}
                        />
                    ) : (
                        <div className='w-full h-full flex items-center justify-center bg-gray-100 text-gray-400'>
                            No Image
                        </div>
                    )}
                </div>
                
                {/* Content with fixed height */}
                <div className='p-4 flex flex-col flex-grow'>
                    <h3 className='text-lg font-semibold text-gray-800 text-center mb-2 line-clamp-2'>{project.name}</h3>
                    <p className='text-sm text-gray-600 text-center mb-4 line-clamp-2 flex-grow'>{project.short_description}</p>
                    
                    {/* Buttons at fixed bottom */}
                    <div className='mt-auto flex space-x-2 p-2'>
                        <button 
                            className='flex-1 text-blue-500 border border-blue-500 py-2 rounded-md hover:bg-blue-50 transition-colors'
                            onClick={() => {
                                setProjectOpen(true);
                                setProjectData(project);
                                navigate(`/${projectName}`);
                            }}
                        >
                            Details
                        </button>
                        <button 
                            className='flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors'
                            onClick={() => window.open(project.link || '#', '_blank')}
                        >
                            Live
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    const skills = projects_skills.skills.map((skill, index) => {
        return (
            <div 
                className='group h-32 w-full p-3 flex flex-col items-center border border-gray-200 shadow-md rounded-lg hover:shadow-xl transition-all duration-300 bg-white hover:bg-gray-50' 
                key={index}
            >
                <div className='w-10 h-10 mb-2 flex items-center justify-center'>
                    <div className={`w-7 h-7 ${skill.color} flex items-center justify-center`}>
                        <IconLoader path={skill.path} className='w-full h-full' />
                    </div>
                </div>
                <h3 className='text-xs font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors mb-1'>
                    {skill.name}
                </h3>
                <p className='text-[10px] leading-tight text-center text-gray-500 line-clamp-3 flex-grow flex items-center'>
                    {skill.description}
                </p>
            </div>
        )
    });

    return (
        <div className="min-h-full w-full pt-5" id='skills&projects'>
            <h1 className='flex justify-center items-center w-full h-10 my-5 text-xl font-bold md:text-base lg:text-xl xl:text-2xl'>Skills and Projects <img src={SkillsProjectsIcon} alt='skills and projects' className='w-14 h-14 mx-5 md:w-24 md:h-24' /></h1>
            <div className='mt-10'>
                <h2 className='text-xl opacity-50 m-5 text-center'>Projects</h2>
                <div className='flex justify-center items-center flex-wrap py-5 mx-5'>
                    {projects}
                </div>
            </div>
            <div className='w-full'>
                <h2 className='text-xl opacity-50 m-5 text-center'>Skills</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-w-7xl mx-auto'>
                    {skills}
                </div>
            </div>
            <div className={ projectOpen ? 'w-full h-full absolute top-0 left-0 z-50 bg-black/50 transition-all ease-in-out duration-500' : 'w-full h-full absolute top-0 left-0 z-50 bg-black/50 transition-all ease-in-out duration-500 opacity-0 scale-0' }>
                <div className='w-full projectCard absolute top-[60px] left-0 box-border bg-white rounded-lg shadow-lg md:w-4/5 md:left-[10%] md:h-4/5 md:top-[10%]'>
                    <div className='w-full h-[60px] flex justify-between items-center px-5 border-b-2'>
                        <h2 className='text-xl lg:2xl xl:3xl'>
                            {projectData.name}
                        </h2>
                        <button className='hover:text-red-500 w-8 h-8' onClick={() => {
                            setProjectOpen(false);
                            navigate('/');
                        }}
                            title='Close'
                            aria-label='Close project details'
                        >
                            <IoMdCloseCircleOutline className='w-full h-full'/>
                        </button>
                    </div>
                    <div className='w-full projectCard overflow-y-scroll scrollbar px-5 py-5 flex flex-col lg:flex-row-reverse'>
                        <div className='w-full h-3/4 md:h-full lg:w-1/2 lg:h-2/3'>
                            <React.Suspense fallback={<LoadingFallback />}>
                                <Carousel images={projectData.images || []} />
                            </React.Suspense>
                            <div className='w-full m-5'>
                                <div className='flex w-full mt-8'>
                                    { projectData.demo && <p className='text-sm bg-brown text-white px-5 rounded-md mx-3 cursor-pointer py-2' onClick={() => {
                                        window.open(projectData.demo, '_blank');
                                    }} aria-label='watch demo' role='button' >Watch Demo</p> }
                                    { projectData.source && <p className='text-sm bg-brown text-white px-5 rounded-md mx-3 cursor-pointer py-2' onClick={() => {
                                        window.open(projectData.source, '_blank');
                                    }
                                    } aria-label='Source Code' role='button' >Source Code</p> }
                                    { projectData.link && <p className='text-sm bg-brown text-white px-5 rounded-md mx-3 cursor-pointer py-2' onClick={() => {
                                        window.open(projectData.link, '_blank');
                                    }} aria-label='Live Demonstation' role='button' >Deployment</p> }
                                </div>
                                <p className='text-lg mt-5 text-black/50'>tags</p>
                                <div className='flex w-full flex-wrap'>
                                    { projectData.techStack.map((tag, index) => {
                                        return (
                                            <p className='text-sm bg-blue-300 text-white px-5 py-2 rounded-md mx-3 my-2' key={index}>{tag}</p>
                                        )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-black/50'>Description</h2>
                            <div className='p-5' dangerouslySetInnerHTML={{__html : projectData.long_description }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the main component
export default SkillSProjects;