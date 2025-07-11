import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.jsx'; // Make sure this is the right path

const experiences = [
  {
    year: 'Sep 07, 2023 - Present',
    role: 'Full-Stack Developer',
    company: 'PA-Support Subic Ltd Inc',
    description:
      'Maintaining and enhancing a large-scale legacy codebase built with native PHP, JavaScript, jQuery, and MySQL. Refactored marketplace UI for improved usability, implemented product image zoom on product pages, and developed the customer review system. Improved discount logic based on loyalty rank and added a barcode scanner feature to the admin panel. Integrated multiple delivery carrier APIs (e.g., FedEx, BoxC, UPS) for shipment tracking and automated delivery status updates (in transit, delivered) using cron jobs for the admin warehouse tracking system. Contributed to ongoing enhancements for the Play-Asia.com platform.',
  },
  {
    year: 'May 30, 2022 - Sep 06, 2023',
    role: 'Full-Stack Developer',
    company: 'Dunbrae Subic Inc',
    description:
      'Developed internal dashboards and maintained tools using CodeIgniter 4. Built RESTful APIs to support cross-platform functionality and collaborated with various departments to automate workflows. Also contributed to a mobile service management app using Ionic Angular.',
  },
];

const ExpandableDescription = ({ text, expanded }) => {
  return (
    <div className="relative text-sm leading-relaxed">
      <div
        className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-[1000px]' : 'max-h-[110px]'
        }`}
      >
        <p>{text}</p>

        {!expanded && <div className="fade-overlay" />}
      </div>
    </div>
  );
};

const Experience = () => {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="font-mono min-h-[calc(100vh-64px)] px-4 sm:px-6 md:px-16 py-16 bg-gray-50"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-[#1261A0]">
        Experience
      </h2>

      <VerticalTimeline lineColor="#1261A0">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            className="timeline-element group cursor-pointer"
            key={index}
            date={exp.year}
            icon={<Briefcase />}
            iconStyle={{
              background: '#1261A0',
              color: '#fff',
            }}
            contentStyle={{
              boxShadow:
                'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
              borderRadius: '0.5rem',
            }}
            contentArrowStyle={{ display: 'none' }}
          >
            <div onClick={() => toggleExpand(index)}>
              <h3 className="text-lg font-bold">{exp.role}</h3>
              <h4 className="text-sm text-gray-500 mb-2">{exp.company}</h4>
              <ExpandableDescription
                text={exp.description}
                expanded={expandedIndex === index}
              />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
