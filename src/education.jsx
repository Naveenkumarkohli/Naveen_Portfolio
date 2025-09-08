import EducationImage from '@/asserts/education.svg';
import { FaLocationDot } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { education } from './data';

function Education() {
    return (
        <section id="education" className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className='flex flex-col items-center mb-12'>
                    <div className='flex items-center justify-center space-x-4'>
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                            Education
                        </h1>
                        <FaGraduationCap className='text-blue-600 w-8 h-8 md:w-10 md:h-10' />
                    </div>
                    <div className='w-20 h-1 bg-blue-600 mt-2 rounded-full'></div>
                </div>
                
                <div className='relative max-w-4xl mx-auto'>
                    {/* Timeline line */}
                    <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 -translate-x-1/2'></div>
                    
                    {education.map((edu, index) => (
                        <div 
                            key={index} 
                            className={`mb-8 relative ${index % 2 === 0 ? 'md:pr-8 md:pl-0 pl-12' : 'md:pl-8 md:pr-0 pl-12'}`}
                        >
                            {/* Timeline dot */}
                            <div className='absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 -translate-x-2 -translate-y-1'></div>
                            
                            {/* Education card */}
                            <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 ${index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'}`}>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <div className='flex items-center'>
                                            {edu.image && (
                                                <img 
                                                    src={edu.image} 
                                                    alt={edu.name} 
                                                    className='w-12 h-12 object-contain mr-3 rounded-full border-2 border-gray-200 p-1'
                                                />
                                            )}
                                            <div>
                                                <h2 className='text-xl font-bold text-gray-800'>{edu.title}</h2>
                                                <p className='text-gray-600'>{edu.name}</p>
                                            </div>
                                        </div>
                                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap'>
                                            {edu.duration}
                                        </span>
                                    </div>
                                    
                                    <div className='space-y-2 text-sm text-gray-700 mb-3'>
                                        <div className='flex items-center'>
                                            <FaLocationDot className='text-red-500 mr-2' />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <SlBadge className='text-green-500 mr-2' />
                                            <span>{edu.degree}</span>
                                        </div>
                                        {edu.board && (
                                            <div className='flex items-center'>
                                                <FaGraduationCap className='text-blue-500 mr-2'/>
                                                <span>{edu.board}</span>
                                            </div>
                                        )}
                                        <div className='flex items-center'>
                                            <SlBadge className='text-yellow-500 mr-2'/>
                                            <span className='font-medium'>{edu.grade}</span>
                                        </div>
                                    </div>
                                    
                                    {edu.description && (
                                        <p className='text-gray-600 text-sm mb-3'>{edu.description}</p>
                                    )}
                                    
                                    {edu.link && (
                                        <a 
                                            href={edu.link} 
                                            target='_blank' 
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium'
                                        >
                                            View Details
                                            <FaExternalLinkAlt className='ml-1 text-xs' />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;