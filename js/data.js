// EDUSPHERE - Sample Course Data

const COURSE_CATEGORIES = [
    { id: 'programming', name: 'Programming', icon: '💻', color: '#6366f1' },
    { id: 'datascience', name: 'Data Science', icon: '📊', color: '#10b981' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖', color: '#8b5cf6' },
    { id: 'webdev', name: 'Web Development', icon: '🌐', color: '#06b6d4' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', color: '#ef4444' },
    { id: 'uidesign', name: 'UI/UX Design', icon: '🎨', color: '#f59e0b' }
];

const COURSES = [
    {
        id: 'course-1',
        title: 'Complete Python Programming Masterclass',
        description: 'Learn Python from scratch to advanced concepts. Build real-world projects and master data structures, OOP, and more.',
        shortDescription: 'Master Python from basics to advanced with hands-on projects',
        instructor: 'Dr. Sarah Johnson',
        instructorTitle: 'Senior Software Engineer at Google',
        category: 'programming',
        level: 'Beginner',
        duration: '42 hours',
        lessons: 156,
        rating: 4.8,
        students: 15420,
        price: 89.99,
        originalPrice: 199.99,
        thumbnail: 'python',
        badge: 'Bestseller',
        modules: [
            {
                title: 'Getting Started with Python',
                lessons: [
                    { id: 'l1-1', title: 'Introduction to Python', duration: '15 min', type: 'video' },
                    { id: 'l1-2', title: 'Setting Up Your Environment', duration: '20 min', type: 'video' },
                    { id: 'l1-3', title: 'Your First Python Program', duration: '25 min', type: 'video' },
                    { id: 'l1-4', title: 'Module 1 Quiz', duration: '10 min', type: 'quiz' }
                ]
            },
            {
                title: 'Python Fundamentals',
                lessons: [
                    { id: 'l2-1', title: 'Variables and Data Types', duration: '30 min', type: 'video' },
                    { id: 'l2-2', title: 'Operators and Expressions', duration: '25 min', type: 'video' },
                    { id: 'l2-3', title: 'Control Flow Statements', duration: '35 min', type: 'video' },
                    { id: 'l2-4', title: 'Working with Strings', duration: '30 min', type: 'video' }
                ]
            },
            {
                title: 'Data Structures',
                lessons: [
                    { id: 'l3-1', title: 'Lists and List Operations', duration: '40 min', type: 'video' },
                    { id: 'l3-2', title: 'Tuples and Sets', duration: '35 min', type: 'video' },
                    { id: 'l3-3', title: 'Dictionaries', duration: '30 min', type: 'video' },
                    { id: 'l3-4', title: 'Module 3 Quiz', duration: '15 min', type: 'quiz' }
                ]
            }
        ]
    },
    {
        id: 'course-2',
        title: 'Machine Learning A-Z: AI & Python',
        description: 'Master Machine Learning with Python, including supervised learning, unsupervised learning, and deep learning fundamentals.',
        shortDescription: 'Complete ML journey from theory to real-world applications',
        instructor: 'Prof. Michael Chen',
        instructorTitle: 'AI Research Scientist at MIT',
        category: 'ai',
        level: 'Intermediate',
        duration: '56 hours',
        lessons: 234,
        rating: 4.9,
        students: 23150,
        price: 99.99,
        originalPrice: 249.99,
        thumbnail: 'ml',
        badge: 'Featured',
        modules: [
            {
                title: 'Introduction to Machine Learning',
                lessons: [
                    { id: 'ml1-1', title: 'What is Machine Learning?', duration: '20 min', type: 'video' },
                    { id: 'ml1-2', title: 'Types of Machine Learning', duration: '25 min', type: 'video' },
                    { id: 'ml1-3', title: 'Setting Up ML Environment', duration: '30 min', type: 'video' }
                ]
            },
            {
                title: 'Supervised Learning',
                lessons: [
                    { id: 'ml2-1', title: 'Linear Regression', duration: '45 min', type: 'video' },
                    { id: 'ml2-2', title: 'Logistic Regression', duration: '40 min', type: 'video' },
                    { id: 'ml2-3', title: 'Decision Trees', duration: '35 min', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'course-3',
        title: 'Full Stack Web Development Bootcamp',
        description: 'Become a full-stack developer with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build complete web applications.',
        shortDescription: 'Complete web development from frontend to backend',
        instructor: 'James Williams',
        instructorTitle: 'Lead Developer at Facebook',
        category: 'webdev',
        level: 'Beginner',
        duration: '68 hours',
        lessons: 312,
        rating: 4.7,
        students: 42180,
        price: 129.99,
        originalPrice: 299.99,
        thumbnail: 'webdev',
        badge: 'Popular',
        modules: [
            {
                title: 'HTML & CSS Fundamentals',
                lessons: [
                    { id: 'web1-1', title: 'Introduction to HTML', duration: '25 min', type: 'video' },
                    { id: 'web1-2', title: 'HTML Elements & Attributes', duration: '30 min', type: 'video' },
                    { id: 'web1-3', title: 'CSS Basics', duration: '35 min', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'course-4',
        title: 'Data Science Complete Bootcamp',
        description: 'Learn Data Science with Python. Master NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn for data analysis.',
        shortDescription: 'Data Science from zero to hero with Python',
        instructor: 'Dr. Emily Rodriguez',
        instructorTitle: 'Data Scientist at Netflix',
        category: 'datascience',
        level: 'Beginner',
        duration: '52 hours',
        lessons: 198,
        rating: 4.8,
        students: 18920,
        price: 94.99,
        originalPrice: 229.99,
        thumbnail: 'datascience',
        badge: 'Trending',
        modules: [
            {
                title: 'Python for Data Science',
                lessons: [
                    { id: 'ds1-1', title: 'Python Fundamentals Review', duration: '30 min', type: 'video' },
                    { id: 'ds1-2', title: 'NumPy Array Operations', duration: '40 min', type: 'video' },
                    { id: 'ds1-3', title: 'Pandas DataFrames', duration: '45 min', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'course-5',
        title: 'Cybersecurity Fundamentals',
        description: 'Learn ethical hacking, network security, and cybersecurity best practices. Protect systems from cyber threats.',
        shortDescription: 'Essential cybersecurity skills for the modern world',
        instructor: 'Alex Thompson',
        instructorTitle: 'Security Analyst at CIA',
        category: 'cybersecurity',
        level: 'Intermediate',
        duration: '38 hours',
        lessons: 145,
        rating: 4.6,
        students: 8720,
        price: 79.99,
        originalPrice: 179.99,
        thumbnail: 'security',
        badge: 'New',
        modules: [
            {
                title: 'Introduction to Cybersecurity',
                lessons: [
                    { id: 'sec1-1', title: 'Security Fundamentals', duration: '25 min', type: 'video' },
                    { id: 'sec1-2', title: 'Common Threats & Attacks', duration: '30 min', type: 'video' },
                    { id: 'sec1-3', title: 'Security Frameworks', duration: '35 min', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'course-6',
        title: 'UI/UX Design Masterclass',
        description: 'Master UI/UX design with Figma. Learn design principles, prototyping, and create stunning user interfaces.',
        shortDescription: 'Design beautiful user experiences from scratch',
        instructor: 'Lisa Park',
        instructorTitle: 'Design Lead at Airbnb',
        category: 'uidesign',
        level: 'Beginner',
        duration: '32 hours',
        lessons: 124,
        rating: 4.9,
        students: 12340,
        price: 69.99,
        originalPrice: 159.99,
        thumbnail: 'design',
        badge: 'Featured',
        modules: [
            {
                title: 'Design Fundamentals',
                lessons: [
                    { id: 'ui1-1', title: 'Introduction to UI/UX', duration: '20 min', type: 'video' },
                    { id: 'ui1-2', title: 'Color Theory', duration: '25 min', type: 'video' },
                    { id: 'ui1-3', title: 'Typography Basics', duration: '30 min', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'course-7',
        title: 'JavaScript Advanced Concepts',
        description: 'Deep dive into JavaScript ES6+, closures, promises, async/await, and modern web development patterns.',
        shortDescription: 'Advanced JavaScript for professional developers',
        instructor: 'Robert Davis',
        instructorTitle: 'Senior Engineer at Amazon',
        category: 'programming',
        level: 'Advanced',
        duration: '28 hours',
        lessons: 98,
        rating: 4.7,
        students: 9870,
        price: 74.99,
        originalPrice: 169.99,
        thumbnail: 'javascript',
        badge: 'Advanced',
        modules: [
            {
                title: 'Modern JavaScript',
                lessons: [
                    { id: 'js1-1', title: 'ES6+ Features', duration: '35 min', type: 'video' },
                    { id: 'js1-2', title: 'Closures & Scope', duration: '40 min', type: 'video' },
                    { id: 'js1-3', title: 'Promises & Async/Await', duration: '45 min', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'course-8',
        title: 'Deep Learning with TensorFlow',
        description: 'Build neural networks with TensorFlow. Master deep learning, CNNs, RNNs, and AI applications.',
        shortDescription: 'Deep Learning powered by TensorFlow',
        instructor: 'Dr. Kevin Lee',
        instructorTitle: 'AI Engineer at OpenAI',
        category: 'ai',
        level: 'Advanced',
        duration: '48 hours',
        lessons: 186,
        rating: 4.8,
        students: 7650,
        price: 119.99,
        originalPrice: 279.99,
        thumbnail: 'deeplearning',
        badge: 'Expert',
        modules: [
            {
                title: 'Neural Networks Basics',
                lessons: [
                    { id: 'dl1-1', title: 'Introduction to Neural Networks', duration: '30 min', type: 'video' },
                    { id: 'dl1-2', title: 'TensorFlow Fundamentals', duration: '40 min', type: 'video' },
                    { id: 'dl1-3', title: 'Building Your First NN', duration: '45 min', type: 'video' }
                ]
            }
        ]
    }
];

const QUIZ_DATA = {
    'course-1': [
        {
            id: 'quiz-1-1',
            title: 'Python Basics Quiz',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the correct way to create a variable in Python?',
                    options: ['var x = 5', 'x = 5', 'let x = 5', 'int x = 5'],
                    correctAnswer: 1
                },
                {
                    id: 'q2',
                    question: 'Which data type is used to store text in Python?',
                    options: ['int', 'str', 'float', 'char'],
                    correctAnswer: 1
                },
                {
                    id: 'q3',
                    question: 'How do you print "Hello World" in Python?',
                    options: ['echo "Hello World"', 'print("Hello World")', 'console.log("Hello World")', 'printf("Hello World")'],
                    correctAnswer: 1
                },
                {
                    id: 'q4',
                    question: 'What is the output of: type(3.14)?',
                    options: ['<class "int">', '<class "float">', '<class "str">', '<class "double">'],
                    correctAnswer: 1
                },
                {
                    id: 'q5',
                    question: 'Which operator is used for exponentiation in Python?',
                    options: ['^', '**', '//', '**'],
                    correctAnswer: 1
                }
            ],
            timeLimit: 300 // 5 minutes
        }
    ]
};

const ACHIEVEMENTS = [
    { id: 'first-course', name: 'First Steps', description: 'Enroll in your first course', icon: '🎯', xp: 50 },
    { id: 'quiz-master', name: 'Quiz Master', description: 'Complete 10 quizzes with 80%+ score', icon: '🏆', xp: 200 },
    { id: 'week-streak', name: 'Week Warrior', description: 'Maintain a 7-day learning streak', icon: '🔥', xp: 150 },
    { id: 'month-streak', name: 'Dedicated Learner', description: 'Maintain a 30-day learning streak', icon: '⭐', xp: 500 },
    { id: 'first-cert', name: 'Graduate', description: 'Earn your first certificate', icon: '🎓', xp: 100 },
    { id: 'five-courses', name: 'Knowledge Seeker', description: 'Complete 5 courses', icon: '📚', xp: 300 },
    { id: 'top-learner', name: 'Top Learner', description: 'Reach #1 on the leaderboard', icon: '👑', xp: 1000 },
    { id: 'perfect-quiz', name: 'Perfect Score', description: 'Get 100% on any quiz', icon: '💯', xp: 100 },
    { id: 'early-bird', name: 'Early Bird', description: 'Study before 7 AM', icon: '🌅', xp: 50 },
    { id: 'night-owl', name: 'Night Owl', description: 'Study after 10 PM', icon: '🦉', xp: 50 }
];

const FORUM_POSTS = [
    {
        id: 'post-1',
        author: 'John Doe',
        avatar: 'JD',
        title: 'How to handle large datasets in Python?',
        content: 'I\'m working with a dataset that has over 10 million rows. What\'s the best approach to process it efficiently?',
        category: 'Data Science',
        likes: 24,
        replies: 8,
        timestamp: '2 hours ago'
    },
    {
        id: 'post-2',
        author: 'Jane Smith',
        avatar: 'JS',
        title: 'Best practices for React state management',
        content: 'What are the current best practices for managing state in React applications? Should I use Redux, Context, or something else?',
        category: 'Web Development',
        likes: 18,
        replies: 12,
        timestamp: '5 hours ago'
    },
    {
        id: 'post-3',
        author: 'Mike Johnson',
        avatar: 'MJ',
        title: 'Career transition from marketing to AI/ML',
        content: 'Has anyone successfully transitioned from a non-technical background to AI/ML? What resources would you recommend?',
        category: 'Career',
        likes: 42,
        replies: 15,
        timestamp: '1 day ago'
    }
];

const TRANSLATIONS = {
    en: {
        welcome: 'Welcome to EDUSPHERE',
        login: 'Login',
        signup: 'Sign Up',
        logout: 'Logout',
        dashboard: 'Dashboard',
        courses: 'Courses',
        profile: 'Profile',
        search: 'Search courses...',
        continueLearning: 'Continue Learning',
        myCourses: 'My Courses',
        achievements: 'Achievements',
        leaderboard: 'Leaderboard',
        forum: 'Forum',
        settings: 'Settings'
    },
    hi: {
        welcome: 'EDUSPHERE में आपका स्वागत है',
        login: 'लॉगिन',
        signup: 'साइन अप',
        logout: 'लॉगआउट',
        dashboard: 'डैशबोर्ड',
        courses: 'कोर्स',
        profile: 'प्रोफाइल',
        search: 'कोर्स खोजें...',
        continueLearning: 'सीखना जारी रखें',
        myCourses: 'मेरे कोर्स',
        achievements: 'उपलब्धियां',
        leaderboard: 'लीडरबोर्ड',
        forum: 'फोरम',
        settings: 'सेटिंग्स'
    },
    es: {
        welcome: 'Bienvenido a EDUSPHERE',
        login: 'Iniciar sesión',
        signup: 'Registrarse',
        logout: 'Cerrar sesión',
        dashboard: 'Panel',
        courses: 'Cursos',
        profile: 'Perfil',
        search: 'Buscar cursos...',
        continueLearning: 'Continuar Aprendiendo',
        myCourses: 'Mis Cursos',
        achievements: 'Logros',
        leaderboard: 'Clasificación',
        forum: 'Foro',
        settings: 'Configuración'
    }
};

// Helper functions
function getCourseById(id) {
    return COURSES.find(course => course.id === id);
}

function getCoursesByCategory(category) {
    return COURSES.filter(course => course.category === category);
}

function searchCourses(query) {
    const lowerQuery = query.toLowerCase();
    return COURSES.filter(course => 
        course.title.toLowerCase().includes(lowerQuery) ||
        course.description.toLowerCase().includes(lowerQuery) ||
        course.instructor.toLowerCase().includes(lowerQuery)
    );
}

function getTotalLessons(courseId) {
    const course = getCourseById(courseId);
    if (!course) return 0;
    return course.modules.reduce((total, module) => total + module.lessons.length, 0);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        COURSE_CATEGORIES,
        COURSES,
        QUIZ_DATA,
        ACHIEVEMENTS,
        FORUM_POSTS,
        TRANSLATIONS,
        getCourseById,
        getCoursesByCategory,
        searchCourses,
        getTotalLessons
    };
}

