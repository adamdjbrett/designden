// Mock data for the application
// In a real application, this would be fetched from an API

export const mockStudents = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@designden.space',
    studentId: 'S12345',
    avatarUrl: 'https://i.pravatar.cc/150?u=john'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@designden.space',
    studentId: 'S67890',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane'
  },
  {
    id: '3',
    name: 'Alex Johnson',
    email: 'alex@designden.space',
    studentId: 'S24680',
    avatarUrl: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: '4',
    name: 'Sam Brown',
    email: 'sam@designden.space',
    studentId: 'S13579',
    avatarUrl: 'https://i.pravatar.cc/150?u=sam'
  },
  {
    id: '5',
    name: 'Taylor Lee',
    email: 'taylor@designden.space',
    studentId: 'S97531',
    avatarUrl: 'https://i.pravatar.cc/150?u=taylor'
  }
];

export const mockCourses = [
  {
    id: '1',
    name: 'Introduction to Design',
    description: 'Fundamentals of design principles and elements',
    year: '2025',
    term: 'Spring',
    enrolledStudents: ['1', '3', '5'],
    completionRate: 72,
    forms: [
      { id: '101', name: 'Design Software Basics', status: 'completed' },
      { id: '102', name: 'Color Theory Assessment', status: 'completed' },
      { id: '103', name: 'Typography Fundamentals', status: 'pending' }
    ]
  },
  {
    id: '2',
    name: 'Advanced Typography',
    description: 'In-depth study of typography in modern design',
    year: '2025',
    term: 'Spring',
    enrolledStudents: ['2', '4'],
    completionRate: 45,
    forms: [
      { id: '201', name: 'Font Creation Tools', status: 'completed' },
      { id: '202', name: 'Typography History', status: 'pending' },
      { id: '203', name: 'Layout Design Principles', status: 'pending' },
      { id: '204', name: 'Typographic Hierarchy', status: 'pending' }
    ]
  },
  {
    id: '3',
    name: 'Visual Communication',
    description: 'Effective communication through visual design',
    year: '2025',
    term: 'Summer',
    enrolledStudents: ['1', '2', '3', '4', '5'],
    completionRate: 30,
    forms: [
      { id: '301', name: 'Visual Storytelling', status: 'completed' },
      { id: '302', name: 'Infographic Design', status: 'pending' },
      { id: '303', name: 'Brand Identity Creation', status: 'pending' }
    ]
  }
];

// Student view of courses with more detailed form information
export const mockStudentCourses = [
  {
    id: '1',
    name: 'Introduction to Design',
    description: 'Fundamentals of design principles and elements',
    year: '2025',
    term: 'Spring',
    enrolledStudents: ['1', '3', '5'],
    forms: [
      { 
        id: '101', 
        name: 'Design Software Basics', 
        description: 'Certification for basic design software tools',
        status: 'completed',
        lastAttempt: '2025-03-15T10:30:00Z'
      },
      { 
        id: '102', 
        name: 'Color Theory Assessment', 
        description: 'Certification for understanding and applying color theory',
        status: 'completed',
        lastAttempt: '2025-03-18T14:45:00Z'
      },
      { 
        id: '103', 
        name: 'Typography Fundamentals', 
        description: 'Certification for typography principles and usage',
        status: 'pending',
        lastAttempt: null
      }
    ]
  },
  {
    id: '2',
    name: 'Advanced Typography',
    description: 'In-depth study of typography in modern design',
    year: '2025',
    term: 'Spring',
    enrolledStudents: ['2', '4'],
    forms: [
      { 
        id: '201', 
        name: 'Font Creation Tools', 
        description: 'Certification for font design and creation tools',
        status: 'completed',
        lastAttempt: '2025-03-10T09:15:00Z'
      },
      { 
        id: '202', 
        name: 'Typography History', 
        description: 'Assessment of knowledge about typography history',
        status: 'failed',
        lastAttempt: '2025-03-12T11:00:00Z'
      },
      { 
        id: '203', 
        name: 'Layout Design Principles', 
        description: 'Certification for page layout and design principles',
        status: 'pending',
        lastAttempt: null
      },
      { 
        id: '204', 
        name: 'Typographic Hierarchy', 
        description: 'Assessment of typographic hierarchy implementation',
        status: 'pending',
        lastAttempt: null
      }
    ]
  },
  {
    id: '3',
    name: 'Visual Communication',
    description: 'Effective communication through visual design',
    year: '2025',
    term: 'Summer',
    enrolledStudents: ['1', '2', '3', '4', '5'],
    forms: [
      { 
        id: '301', 
        name: 'Visual Storytelling', 
        description: 'Certification for visual narrative techniques',
        status: 'completed',
        lastAttempt: '2025-04-05T15:30:00Z'
      },
      { 
        id: '302', 
        name: 'Infographic Design', 
        description: 'Assessment of data visualization and infographic creation',
        status: 'pending',
        lastAttempt: null
      },
      { 
        id: '303', 
        name: 'Brand Identity Creation', 
        description: 'Certification for brand identity design principles',
        status: 'pending',
        lastAttempt: null
      }
    ]
  }
];

// Mock form template data
export const mockFormTemplate = {
  id: '101',
  title: 'Design Software Basics',
  description: 'Certification for basic design software tools and practices',
  sections: [
    {
      id: 's1',
      title: 'Software Knowledge',
      questions: [
        {
          id: 'q1',
          type: 'multiple_choice',
          question: 'Which tool would you use to create vector graphics?',
          options: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro'],
          correctAnswer: 'Illustrator'
        },
        {
          id: 'q2',
          type: 'multiple_choice',
          question: 'Which file format preserves layers?',
          options: ['JPEG', 'PNG', 'PSD', 'GIF'],
          correctAnswer: 'PSD'
        }
      ]
    },
    {
      id: 's2',
      title: 'Safety Protocols',
      questions: [
        {
          id: 'q3',
          type: 'true_false',
          question: 'You should always save your work frequently.',
          correctAnswer: true
        },
        {
          id: 'q4',
          type: 'multiple_choice',
          question: 'What is the proper way to handle software crashes?',
          options: [
            'Force restart the computer immediately',
            'Wait for the system to recover on its own',
            'Try to save work in other open applications, then restart the application',
            'Unplug the computer'
          ],
          correctAnswer: 'Try to save work in other open applications, then restart the application'
        }
      ]
    },
    {
      id: 's3',
      title: 'Practical Application',
      questions: [
        {
          id: 'q5',
          type: 'text',
          question: 'Describe the process you would use to create a logo for a client.',
          minWords: 30
        },
        {
          id: 'q6',
          type: 'file_upload',
          question: 'Upload a screenshot of your workspace with proper tool arrangement.',
          allowedFileTypes: ['image/jpeg', 'image/png'],
          maxFileSize: 5 // MB
        }
      ]
    },
    {
      id: 's4',
      title: 'Certification',
      questions: [
        {
          id: 'q7',
          type: 'signature',
          question: 'I certify that I have completed this training and understand the proper use of design software tools.',
        }
      ]
    }
  ]
};