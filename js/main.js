
// EDUSPHERE - Main JavaScript
// Smart AI Learning Platform

// ========================================
// CONFIGURATION & STATE
// ========================================
const APP_CONFIG = {
    appName: 'EDUSPHERE',
    version: '1.0.0',
    theme: 'light',
    language: 'en'
};

const APP_STATE = {
    currentUser: null,
    isLoggedIn: false,
    enrolledCourses: [],
    completedLessons: [],
    xpPoints: 0,
    streak: 0,
    achievements: [],
    quizScores: {}
};

// ========================================
// LOCAL STORAGE MANAGEMENT
// ========================================
const StorageManager = {
    saveUser(user) {
        localStorage.setItem('edusphere_user', JSON.stringify(user));
    },

    getUser() {
        const user = localStorage.getItem('edusphere_user');
        return user ? JSON.parse(user) : null;
    },

    saveState() {
        localStorage.setItem('edusphere_state', JSON.stringify(APP_STATE));
    },

    loadState() {
        const state = localStorage.getItem('edusphere_state');
        if (state) {
            Object.assign(APP_STATE, JSON.parse(state));
        }
    },

    clearAll() {
        localStorage.removeItem('edusphere_user');
        localStorage.removeItem('edusphere_state');
        localStorage.removeItem('edusphere_progress');
    },

    saveProgress(courseId, lessonId, completed) {
        const progress = JSON.parse(localStorage.getItem('edusphere_progress') || '{}');
        if (!progress[courseId]) {
            progress[courseId] = { lessons: [] };
        }
        if (completed && !progress[courseId].lessons.includes(lessonId)) {
            progress[courseId].lessons.push(lessonId);
        }
        localStorage.setItem('edusphere_progress', JSON.stringify(progress));
    },

    getProgress(courseId) {
        const progress = JSON.parse(localStorage.getItem('edusphere_progress') || '{}');
        return progress[courseId] || { lessons: [] };
    }
};

// ========================================
// AUTHENTICATION
// ========================================
const AuthManager = {
    register(name, email, password) {
        const users = JSON.parse(localStorage.getItem('edusphere_users') || '[]');
        
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = {
            id: 'user_' + Date.now(),
            name,
            email,
            password,
            xp: 0,
            streak: 0,
            joinedAt: new Date().toISOString(),
            enrolledCourses: [],
            achievements: [],
            completedCourses: []
        };

        users.push(newUser);
        localStorage.setItem('edusphere_users', JSON.stringify(users));
        this.login(email, password);
        
        return { success: true, message: 'Registration successful' };
    },

    login(email, password) {
        const users = JSON.parse(localStorage.getItem('edusphere_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            APP_STATE.currentUser = user;
            APP_STATE.isLoggedIn = true;
            StorageManager.saveUser(user);
            return { success: true, message: 'Login successful' };
        }

        return { success: false, message: 'Invalid email or password' };
    },

    logout() {
        APP_STATE.currentUser = null;
        APP_STATE.isLoggedIn = false;
        localStorage.removeItem('edusphere_user');
    },

    checkAuth() {
        const user = StorageManager.getUser();
        if (user) {
            APP_STATE.currentUser = user;
            APP_STATE.isLoggedIn = true;
        }
    },

    addXP(amount) {
        if (APP_STATE.currentUser) {
            APP_STATE.currentUser.xp = (APP_STATE.currentUser.xp || 0) + amount;
            StorageManager.saveUser(APP_STATE.currentUser);
            updateXPDisplay();
        }
    },

    enrollInCourse(courseId) {
        if (APP_STATE.currentUser) {
            if (!APP_STATE.currentUser.enrolledCourses) {
                APP_STATE.currentUser.enrolledCourses = [];
            }
            if (!APP_STATE.currentUser.enrolledCourses.includes(courseId)) {
                APP_STATE.currentUser.enrolledCourses.push(courseId);
                StorageManager.saveUser(APP_STATE.currentUser);
                return true;
            }
        }
        return false;
    },

    isEnrolled(courseId) {
        if (APP_STATE.currentUser && APP_STATE.currentUser.enrolledCourses) {
            return APP_STATE.currentUser.enrolledCourses.includes(courseId);
        }
        return false;
    }
};

// ========================================
// THEME MANAGEMENT
// ========================================
const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem('edusphere_theme') || 'light';
        this.setTheme(savedTheme);
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('edusphere_theme', theme);
        APP_CONFIG.theme = theme;
    },

    toggle() {
        const newTheme = APP_CONFIG.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
};

// ========================================
// UI COMPONENTS
// ========================================
const UIComponents = {
    showToast(title, message, type = 'info') {
        const container = document.querySelector('.toast-container') || this.createToastContainer();
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${type === 'success' ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' : 
                      type === 'error' ? '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>' :
                      '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'}
                </svg>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;

        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },

    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    },

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    renderCourseCard(course) {
        return `
            <div class="course-card" data-course-id="${course.id}">
                <div class="course-card-image">
                    <div style="width:100%;height:100%;background:linear-gradient(135deg, ${this.getCategoryColor(course.category)}, ${this.getCategoryColor(course.category)}dd);display:flex;align-items:center;justify-content:center;font-size:3rem;">
                        ${this.getCategoryIcon(course.category)}
                    </div>
                    ${course.badge ? `<span class="course-card-badge">${course.badge}</span>` : ''}
                </div>
                <div class="course-card-content">
                    <h3 class="course-card-title">${course.title}</h3>
                    <p class="course-card-instructor">${course.instructor}</p>
                    <div class="course-card-meta">
                        <span class="course-card-rating">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ${course.rating}
                        </span>
                        <span class="course-card-price">$${course.price}</span>
                    </div>
                </div>
            </div>
        `;
    },

    getCategoryColor(category) {
        const colors = {
            programming: '#6366f1',
            datascience: '#10b981',
            ai: '#8b5cf6',
            webdev: '#06b6d4',
            cybersecurity: '#ef4444',
            uidesign: '#f59e0b'
        };
        return colors[category] || '#6366f1';
    },

    getCategoryIcon(category) {
        const icons = {
            programming: '💻',
            datascience: '📊',
            ai: '🤖',
            webdev: '🌐',
            cybersecurity: '🔒',
            uidesign: '🎨'
        };
        return icons[category] || '📚';
    }
};

// ========================================
// NAVIGATION
// ========================================
const NavigationManager = {
    init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
    },

    setupMobileMenu() {
        const toggle = document.querySelector('.navbar-toggle');
        const menu = document.querySelector('.navbar-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }
    },

    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
    },

    updateAuthUI() {
        const authButtons = document.getElementById('auth-buttons');
        const userMenu = document.getElementById('user-menu');
        
        if (APP_STATE.isLoggedIn && APP_STATE.currentUser) {
            if (authButtons) authButtons.classList.add('hidden');
            if (userMenu) {
                userMenu.classList.remove('hidden');
                const userName = userMenu.querySelector('.user-name');
                if (userName) userName.textContent = APP_STATE.currentUser.name;
            }
        } else {
            if (authButtons) authButtons.classList.remove('hidden');
            if (userMenu) userMenu.classList.add('hidden');
        }
    }
};

// ========================================
// GAMIFICATION
// ========================================
const GamificationManager = {
    addXP(amount) {
        if (APP_STATE.currentUser) {
            APP_STATE.currentUser.xp = (APP_STATE.currentUser.xp || 0) + amount;
            StorageManager.saveUser(APP_STATE.currentUser);
            this.checkAchievements();
            updateXPDisplay();
        }
    },

    updateStreak() {
        if (APP_STATE.currentUser) {
            const lastStudy = localStorage.getItem('edusphere_last_study');
            const today = new Date().toDateString();
            
            if (lastStudy !== today) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                
                if (lastStudy === yesterday.toDateString()) {
                    APP_STATE.currentUser.streak = (APP_STATE.currentUser.streak || 0) + 1;
                } else if (lastStudy !== today) {
                    APP_STATE.currentUser.streak = 1;
                }
                
                localStorage.setItem('edusphere_last_study', today);
                StorageManager.saveUser(APP_STATE.currentUser);
                this.checkAchievements();
            }
        }
    },

    checkAchievements() {
        if (!APP_STATE.currentUser) return;
        
        const userXP = APP_STATE.currentUser.xp || 0;
        const userStreak = APP_STATE.currentUser.streak || 0;
        const enrolledCount = (APP_STATE.currentUser.enrolledCourses || []).length;
        
        const achievementsToCheck = [
            { id: 'first-course', condition: enrolledCount >= 1 },
            { id: 'week-streak', condition: userStreak >= 7 },
            { id: 'month-streak', condition: userStreak >= 30 },
            { id: 'five-courses', condition: enrolledCount >= 5 }
        ];

        achievementsToCheck.forEach(achievement => {
            if (achievement.condition && !APP_STATE.currentUser.achievements?.includes(achievement.id)) {
                this.unlockAchievement(achievement.id);
            }
        });
    },

    unlockAchievement(achievementId) {
        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (achievement && APP_STATE.currentUser) {
            if (!APP_STATE.currentUser.achievements) {
                APP_STATE.currentUser.achievements = [];
            }
            APP_STATE.currentUser.achievements.push(achievementId);
            this.addXP(achievement.xp);
            StorageManager.saveUser(APP_STATE.currentUser);
            UIComponents.showToast('Achievement Unlocked!', `${achievement.name} - +${achievement.xp} XP`, 'success');
        }
    }
};

// ========================================
// AI CHATBOT
// ========================================
const ChatbotManager = {
    init() {
        this.setupChatbot();
    },

    setupChatbot() {
        const toggle = document.querySelector('.chatbot-toggle');
        const window = document.querySelector('.chatbot-window');
        
        if (toggle && window) {
            toggle.addEventListener('click', () => {
                window.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !window.contains(e.target)) {
                    window.classList.remove('active');
                }
            });
        }

        this.setupSendMessage();
    },

    setupSendMessage() {
        const input = document.querySelector('.chatbot-input');
        const sendBtn = document.querySelector('.chatbot-send');
        
        if (input && sendBtn) {
            const send = () => {
                const message = input.value.trim();
                if (message) {
                    this.addMessage(message, 'user');
                    input.value = '';
                    this.getAIResponse(message);
                }
            };

            sendBtn.addEventListener('click', send);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') send();
            });
        }
    },

    addMessage(text, type) {
        const container = document.querySelector('.chatbot-messages');
        if (container) {
            const message = document.createElement('div');
            message.className = `chatbot-message ${type}`;
            message.textContent = text;
            container.appendChild(message);
            container.scrollTop = container.scrollHeight;
        }
    },

    getAIResponse(message) {
        const responses = [
            "That's a great question! Let me help you with that.",
            "I'd recommend checking out our Python Programming course for that topic.",
            "Great question! In our platform, you can find that in the Data Science section.",
            "Let me explain that concept. Would you like me to find a related lesson?",
            "I can help you with that! Here are some resources that might help."
        ];

        setTimeout(() => {
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            this.addMessage(randomResponse, 'bot');
        }, 1000);
    }
};

// ========================================
// SEARCH FUNCTIONALITY
// ========================================
const SearchManager = {
    init() {
        this.setupSearch();
    },

    setupSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchForm = document.querySelector('.search-bar');
        
        if (searchInput && searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.performSearch(searchInput.value);
            });

            searchInput.addEventListener('input', (e) => {
                if (e.target.value.length >= 3) {
                    this.performSearch(e.target.value);
                }
            });
        }
    },

    performSearch(query) {
        if (!query) return;
        
        const results = searchCourses(query);
        this.displayResults(results, query);
    },

    displayResults(results, query) {
        const coursesGrid = document.querySelector('.courses-grid');
        if (coursesGrid) {
            if (results.length > 0) {
                coursesGrid.innerHTML = results.map(course => UIComponents.renderCourseCard(course)).join('');
            } else {
                coursesGrid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">🔍</div>
                        <h3>No courses found</h3>
                        <p>No courses match "${query}". Try different keywords.</p>
                    </div>
                `;
            }
        }
    }
};

// ========================================
// QUIZ SYSTEM
// ========================================
const QuizManager = {
    currentQuiz: null,
    currentQuestion: 0,
    answers: [],
    timer: null,
    timeLeft: 0,

    startQuiz(quizId) {
        const quizData = QUIZ_DATA[quizId];
        if (!quizData || !quizData[0]) return;

        this.currentQuiz = quizData[0];
        this.currentQuestion = 0;
        this.answers = [];
        this.timeLeft = this.currentQuiz.timeLimit || 300;

        this.renderQuestion();
        this.startTimer();
    },

    renderQuestion() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer || !this.currentQuiz) return;

        const question = this.currentQuiz.questions[this.currentQuestion];
        
        quizContainer.innerHTML = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${((this.currentQuestion + 1) / this.currentQuiz.questions.length) * 100}%"></div>
                </div>
                <div class="quiz-progress-text">Question ${this.currentQuestion + 1} of ${this.currentQuiz.questions.length}</div>
            </div>
            <div class="quiz-question">
                <h3>${question.question}</h3>
            </div>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <button class="quiz-option" data-index="${index}">${option}</button>
                `).join('')}
            </div>
            <div class="quiz-actions">
                <button class="btn btn-ghost" id="prev-btn" ${this.currentQuestion === 0 ? 'disabled' : ''}>Previous</button>
                <button class="btn btn-primary" id="next-btn">${this.currentQuestion === this.currentQuiz.questions.length - 1 ? 'Finish' : 'Next'}</button>
            </div>
        `;

        this.setupQuestionHandlers();
    },

    setupQuestionHandlers() {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(o => o.classList.remove('selected'));
                option.classList.add('selected');
                this.answers[this.currentQuestion] = parseInt(option.dataset.index);
            });
        });

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousQuestion());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentQuestion === this.currentQuiz.questions.length - 1) {
                    this.finishQuiz();
                } else {
                    this.nextQuestion();
                }
            });
        }
    },

    nextQuestion() {
        if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        }
    },

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    },

    startTimer() {
        const timerDisplay = document.getElementById('quiz-timer');
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            
            if (timerDisplay) {
                const minutes = Math.floor(this.timeLeft / 60);
                const seconds = this.timeLeft % 60;
                timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }

            if (this.timeLeft <= 0) {
                this.finishQuiz();
            }
        }, 1000);
    },

    finishQuiz() {
        clearInterval(this.timer);
        
        let correct = 0;
        this.currentQuiz.questions.forEach((q, i) => {
            if (this.answers[i] === q.correctAnswer) {
                correct++;
            }
        });

        const score = Math.round((correct / this.currentQuiz.questions.length) * 100);
        
        if (score >= 80) {
            GamificationManager.addXP(50);
        } else if (score >= 60) {
            GamificationManager.addXP(25);
        }

        this.showResults(score, correct);
    },

    showResults(score, correct) {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer) return;

        const passed = score >= 60;
        
        quizContainer.innerHTML = `
            <div class="quiz-results">
                <div class="results-icon ${passed ? 'passed' : 'failed'}">
                    ${passed ? '🎉' : '😔'}
                </div>
                <h2>${passed ? 'Congratulations!' : 'Keep Learning!'}</h2>
                <div class="results-score">
                    <span class="score-number">${score}%</span>
                    <span class="score-label">Your Score</span>
                </div>
                <p>You got ${correct} out of ${this.currentQuiz.questions.length} questions correct.</p>
                <div class="results-actions">
                    <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
                    <button class="btn btn-outline" onclick="window.location.href='dashboard.html'">Back to Dashboard</button>
                </div>
            </div>
        `;
    }
};

// ========================================
// INITIALIZATION
// ========================================
function initializeApp() {
    AuthManager.checkAuth();
    ThemeManager.init();
    StorageManager.loadState();
    NavigationManager.init();
    SearchManager.init();
    
    if (document.querySelector('.chatbot-toggle')) {
        ChatbotManager.init();
    }

    NavigationManager.updateAuthUI();
    updateXPDisplay();
    console.log('EDUSPHERE initialized successfully!');
}

function updateXPDisplay() {
    const xpElements = document.querySelectorAll('.user-xp');
    const xp = APP_STATE.currentUser?.xp || 0;
    xpElements.forEach(el => {
        el.textContent = `${xp.toLocaleString()} XP`;
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);

