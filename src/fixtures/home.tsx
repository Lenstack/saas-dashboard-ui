import {
    AcademicCapIcon,
    BeakerIcon,
    BriefcaseIcon,
    CloudIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const HOME_FEATURES = [
    {
        icon: <RocketLaunchIcon className="h-8 w-8"/>,
        title: 'Boost your students grades with our AI powered grading system',
    },
    {
        icon: <BeakerIcon className="h-8 w-8"/>,
        title: 'Automate your upload with our scheduled upload system',
    },
    {
        icon: <BriefcaseIcon className="h-8 w-8"/>,
        title: 'Manage your students grades with our easy to use dashboard',
    },
    {
        icon: <CloudIcon className="h-8 w-8"/>,
        title: 'Your data is safe with our secure cloud storage',
    },
    {
        icon: <AcademicCapIcon className="h-8 w-8"/>,
        title: 'Get the best grades with our AI powered grading system',
    },
    {
        icon: <BeakerIcon className="h-8 w-8"/>,
        title: 'Automate your upload with our scheduled upload system',
    },
    {
        icon: <BriefcaseIcon className="h-8 w-8"/>,
        title: 'Manage your students grades with our easy to use dashboard',
    },
    {
        icon: <CloudIcon className="h-8 w-8"/>,
        title: 'Your data is safe with our secure cloud storage',
    },
    {
        icon: <AcademicCapIcon className="h-8 w-8"/>,
        title: 'Get the best grades with our AI powered grading system',
    }
]

export const HOME_TESTIMONIALS = [
    {
        name: 'John Doe',
        role: 'Lead Developer, ABC Company',
        description: 'The best service I have ever used. I have been using this service for 2 years now and I have never had any issues. I would recommend this service to anyone who is looking for a reliable service.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    },
    {
        name: 'Alex Doe',
        role: 'Teacher, ABC School',
        description: 'Simply the best. I have been using this service for 2 years now and I have never had any issues. I would recommend this service to anyone who is looking for a reliable service.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    },
    {
        name: 'Anna Doe',
        role: 'CEO, ABC Company',
        description: 'The best service I have ever used. I have been using this service for 2 years now and I have never had any issues. I would recommend this service to anyone who is looking for a reliable service.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    },
    {
        name: 'Alexandra Doe',
        role: 'Mother, ABC School',
        description: 'In the short time I have been using this service, I have never had any issues. I would recommend this service to anyone who is looking for a reliable service.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    },
    {
        name: 'John Doe',
        role: 'Lead Developer, ABC Company',
        description: 'The best service I have ever used. I have been using this service for 2 years now and I have never had any issues. I would recommend this service to anyone who is looking for a reliable service.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    },
    {
        name: 'Alex Doe',
        role: 'Teacher, ABC School',
        description: 'Simply the best. I have been using this service for 2 years now and I have never had any issues. I would recommend this service to anyone who is looking for a reliable service.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    }
]

export const HOME_PLANS = [
    {
        name: 'Basic',
        description: '1 School',
        price: 50000,
        icon: <AcademicCapIcon className="h-8 w-8"/>,
        features: [
            {
                description: 'You can upload 100 students',
                available: true,
            },
            {
                description: 'You can upload 1000 students',
            },
            {
                description: 'You can upload 10000 students',
            },
            {
                description: 'You can upload 100000 students',
            },
            {
                description: 'You can upload 100000 students',
            }
        ]
    },
    {
        name: 'Standard',
        description: '5 Schools',
        price: 100000,
        icon: <AcademicCapIcon className="h-8 w-8"/>,
        features: [
            {
                description: 'You can upload 100 students',
                available: true,
            },
            {
                description: 'You can upload 1000 students',
                available: true,
            },
            {
                description: 'You can upload 10000 students',
                available: true,
            },
            {
                description: 'You can upload 100000 students',
            },
            {
                description: 'You can upload 100000 students',
            }
        ]
    },
    {
        name: 'Premium',
        description: '10 Schools',
        price: 200000,
        icon: <AcademicCapIcon className="h-8 w-8"/>,
        features: [
            {
                description: 'You can upload 100 students',
                available: true,
            },
            {
                description: 'You can upload 1000 students',
                available: true,
            },
            {
                description: 'You can upload 10000 students',
                available: true,
            },
            {
                description: 'You can upload 100000 students',
                available: true,
            },
            {
                description: 'You can upload 100000 students',
                available: true,
            }
        ]
    }
]

export const HOME_FAQS = [
    {
        question: 'How do I get started?',
        answer: 'You can get started by signing up for a free account. You can then upgrade to a paid plan to unlock all the features.',
    },
    {
        question: 'How do create a new school?',
        answer: 'You can create a new school by clicking on the "Create School" button on the dashboard.',
    },
    {
        question: 'How do I add students to a school?',
        answer: 'You can add students to a school by clicking on the "Add Students" button on the dashboard.',
    },
    {
        question: 'How do I add teachers to a school?',
        answer: 'You can add teachers to a school by clicking on the "Add Teachers" button on the dashboard.',
    }
]