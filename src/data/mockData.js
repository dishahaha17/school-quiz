export const INITIAL_USER_STATS = {
  streak: 15,
  xp: 4200,
  level: 6,
  userName: "Aarav Sharma",
  userClass: "Class 6B",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Aarav6",
};

// Real NCERT & CBSE Subject Skill Tracks (Class 5th to 8th)
export const SKILL_TRACKS = [
  {
    id: "science-fun",
    title: "Class 5-8 Science Wonders",
    grade: "CLASS 5-8",
    color: "#2FD9A0", // mint
    icon: "🔬",
    description: "Learn Photosynthesis, Solar System Planets, States of Matter, Human Digestive System, and Light Reflection.",
    modules: "12 Real Quizzes",
    xp: "+1,200 XP",
    badge: "NCERT ALIGNED",
    quiz: {
      id: "q-science",
      title: "Class 5th - 8th Science Wonders Quiz",
      category: "Science",
      teacherName: "Mrs. Meenakshi Sundaram",
      questions: [
        {
          questionText: "Which part of the green plant prepares food during Photosynthesis?",
          options: ["Roots", "Stem", "Leaves", "Flowers"],
          correctAnswerIndex: 2
        },
        {
          questionText: "Which gas is absorbed by leaves during Photosynthesis?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Which planet is known as the 'Red Planet' in our Solar System?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Which organ in the human body produces bile juice for digestion?",
          options: ["Stomach", "Pancreas", "Liver", "Small Intestine"],
          correctAnswerIndex: 2
        },
        {
          questionText: "Light travels in a ______ line.",
          options: ["Curved", "Zig-zag", "Straight", "Circular"],
          correctAnswerIndex: 2
        }
      ]
    }
  },
  {
    id: "maths-champions",
    title: "Mental Maths & Geometry",
    grade: "CLASS 5-8",
    color: "#F5B942", // gold
    icon: "📐",
    description: "Master Fractions & Decimals, Perimeter & Area of Triangles, Linear Equations, and Speed-Time-Distance.",
    modules: "15 Speed Quizzes",
    xp: "+1,500 XP",
    badge: "CBSE CURRICULUM",
    quiz: {
      id: "q-maths",
      title: "Class 5th - 8th Mental Maths & Geometry Quiz",
      category: "Maths",
      teacherName: "Mr. Sharma",
      questions: [
        {
          questionText: "What is the perimeter of a rectangle with length = 10 cm and breadth = 6 cm?",
          options: ["16 cm", "32 cm", "60 cm", "20 cm"],
          correctAnswerIndex: 1
        },
        {
          questionText: "What is 3/4 expressed as a percentage?",
          options: ["50%", "60%", "75%", "80%"],
          correctAnswerIndex: 2
        },
        {
          questionText: "Sum of all interior angles of a Triangle is always equal to:",
          options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
          correctAnswerIndex: 1
        },
        {
          questionText: "If speed = 60 km/hr and time = 2 hours, what is the distance covered?",
          options: ["30 km", "120 km", "80 km", "100 km"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Solve the linear equation: 2x + 5 = 15. What is x?",
          options: ["x = 5", "x = 10", "x = 7", "x = 4"],
          correctAnswerIndex: 0
        }
      ]
    }
  },
  {
    id: "english-grammar",
    title: "English Grammar & Vocabulary",
    grade: "CLASS 5-8",
    color: "#F0506E", // coral
    icon: "📚",
    description: "Nouns, Verbs, Tenses, Synonyms & Antonyms, Active & Passive Voice, Idioms, and Sentence Correction.",
    modules: "10 Skill Quizzes",
    xp: "+1,000 XP",
    badge: "GRAMMAR HERO",
    quiz: {
      id: "q-english",
      title: "Class 5th - 8th English Grammar & Vocabulary Quiz",
      category: "English",
      teacherName: "Ms. Anjali",
      questions: [
        {
          questionText: "Identify the Noun in the sentence: 'The brave tiger ran across the jungle.'",
          options: ["brave", "tiger", "ran", "across"],
          correctAnswerIndex: 1
        },
        {
          questionText: "What is the opposite (Antonym) of the word 'Ancient'?",
          options: ["Old", "Modern", "Huge", "Bright"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Choose the correct Past Tense form of the verb 'Fly':",
          options: ["Flied", "Flew", "Flying", "Flown"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Which of the following is a Conjunction?",
          options: ["Quickly", "Because", "Beautiful", "Under"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Complete the idiom: 'Actions speak louder than ______.'",
          options: ["words", "thoughts", "noise", "promises"],
          correctAnswerIndex: 0
        }
      ]
    }
  },
  {
    id: "coding-scratch",
    title: "Junior Coding & Block Logic",
    grade: "CLASS 5-8",
    color: "#8B6FE8", // purple
    icon: "💻",
    description: "Learn Scratch block programming, loops, variables, conditional IF-ELSE logic, and basic 2D game design.",
    modules: "14 Logic Quizzes",
    xp: "+1,400 XP",
    badge: "STEM FAVOURITE",
    quiz: {
      id: "q-scratch",
      title: "Class 5th - 8th Junior Scratch & Block Logic Quiz",
      category: "Coding",
      teacherName: "Mr. Alex Dev",
      questions: [
        {
          questionText: "In Scratch programming, what is the default cat character called?",
          options: ["Robot", "Sprite", "Block", "Avatar"],
          correctAnswerIndex: 1
        },
        {
          questionText: "Which block block is used to run a command 10 times automatically?",
          options: ["Forever block", "Repeat (10) block", "If-Then block", "Wait block"],
          correctAnswerIndex: 1
        },
        {
          questionText: "What color category are Motion blocks in Scratch?",
          options: ["Blue", "Yellow", "Green", "Purple"],
          correctAnswerIndex: 0
        },
        {
          questionText: "Which block is used to check a condition before running code?",
          options: ["Say Hello", "IF...THEN", "Change size by 10", "Next costume"],
          correctAnswerIndex: 1
        },
        {
          questionText: "To start a Scratch script when the user clicks the green flag, which event block do you use?",
          options: ["When Space Key Pressed", "When Green Flag Clicked", "When Sprite Clicked", "Broadcast Message"],
          correctAnswerIndex: 1
        }
      ]
    }
  },
  {
    id: "social-studies",
    title: "Social Studies & History",
    grade: "CLASS 5-8",
    color: "#2E6BB3", // royal blue
    icon: "🌍",
    description: "Ancient Civilizations, Earth's Layers, Continents & Oceans, Indian Freedom Movement, and Weather & Climate.",
    modules: "11 Map Quizzes",
    xp: "+1,100 XP",
    badge: "MAP EXPLORER",
    quiz: {
      id: "q-sst",
      title: "Class 5th - 8th Social Studies & History Quiz",
      category: "Social Studies",
      teacherName: "Prof. Rajesh Kumar",
      questions: [
        {
          questionText: "Which is the largest continent on Earth by land area?",
          options: ["Africa", "North America", "Asia", "Europe"],
          correctAnswerIndex: 2
        },
        {
          questionText: "The innermost layer of the Earth is called the:",
          options: ["Crust", "Mantle", "Core", "Atmosphere"],
          correctAnswerIndex: 2
        },
        {
          questionText: "Who was known as the 'Father of the Indian Nation'?",
          options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel"],
          correctAnswerIndex: 0
        },
        {
          questionText: "Which imaginary line divides the Earth into Northern and Southern Hemispheres?",
          options: ["Tropic of Cancer", "Equator", "Prime Meridian", "Arctic Circle"],
          correctAnswerIndex: 1
        },
        {
          questionText: "In Indus Valley Civilization, which city had the famous 'Great Bath'?",
          options: ["Harappa", "Mohenjo-daro", "Lothal", "Kalibangan"],
          correctAnswerIndex: 1
        }
      ]
    }
  },
  {
    id: "gk-current-affairs",
    title: "General Knowledge & Cyber Safety",
    grade: "CLASS 5-8",
    color: "#F0506E", // coral
    icon: "🧠",
    description: "World Capitals, Inventions, Famous Scientists, Safe Internet Rules, and Environmental Science.",
    modules: "8 Daily Quizzes",
    xp: "+900 XP",
    badge: "CYBER HERO",
    quiz: {
      id: "q-gk",
      title: "Class 5th - 8th G.K. & Cyber Safety Quiz",
      category: "General Knowledge",
      teacherName: "Ms. Anjali",
      questions: [
        {
          questionText: "Who invented the Telephone?",
          options: ["Thomas Edison", "Alexander Graham Bell", "Albert Einstein", "Isaac Newton"],
          correctAnswerIndex: 1
        },
        {
          questionText: "What is the capital city of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
          correctAnswerIndex: 2
        },
        {
          questionText: "Should you share your account passwords with strangers online?",
          options: ["Yes, always", "Only if they ask nicely", "No, never", "Only on weekends"],
          correctAnswerIndex: 2
        },
        {
          questionText: "World Environment Day is celebrated every year on:",
          options: ["5th June", "15th August", "22nd April", "1st January"],
          correctAnswerIndex: 0
        },
        {
          questionText: "Which gas in the Earth's atmosphere protects us from harmful UV rays?",
          options: ["Oxygen", "Ozone Layer", "Carbon Monoxide", "Nitrogen"],
          correctAnswerIndex: 1
        }
      ]
    }
  }
];

export const LIVE_CHALLENGES = [
  {
    id: 1,
    title: "Class 6 Maths Tables Duel",
    category: "MATHS",
    color: "#F5B942",
    icon: "⚡",
    time: "Ends in 15 mins",
    players: "120 Students",
    reward: "400 XP",
    quiz: {
      id: "ch-maths-tables",
      title: "Class 6 Multiplication Speed Duel",
      category: "Maths",
      teacherName: "Speed Math Bot",
      questions: [
        { questionText: "What is 14 x 6?", options: ["84", "76", "92", "64"], correctAnswerIndex: 0 },
        { questionText: "What is 15 x 9?", options: ["125", "135", "145", "115"], correctAnswerIndex: 1 },
        { questionText: "What is 12 x 12?", options: ["124", "134", "144", "154"], correctAnswerIndex: 2 }
      ]
    }
  },
  {
    id: 2,
    title: "Class 7 Science Light & Shadow",
    category: "SCIENCE",
    color: "#2FD9A0",
    icon: "💡",
    time: "Live Now",
    players: "95 Students",
    reward: "500 XP",
    quiz: {
      id: "ch-science-light",
      title: "Class 7 Light & Shadow Speed Duel",
      category: "Science",
      teacherName: "Science Speed Bot",
      questions: [
        { questionText: "Which object allows light to pass completely through it?", options: ["Opaque", "Transparent", "Translucent", "Mirror"], correctAnswerIndex: 1 },
        { questionText: "Shadows are formed when an ______ object blocks the path of light.", options: ["Transparent", "Opaque", "Luminous", "Glass"], correctAnswerIndex: 1 },
        { questionText: "What is the speed of light in vacuum?", options: ["3,00,000 km/s", "1,00,000 km/s", "5,00,000 km/s", "50,000 km/s"], correctAnswerIndex: 0 }
      ]
    }
  },
  {
    id: 3,
    title: "Class 8 English Tenses Battle",
    category: "ENGLISH",
    color: "#F0506E",
    icon: "✍️",
    time: "Starts 4:00 PM",
    players: "180 Students",
    reward: "450 XP",
    quiz: {
      id: "ch-english-tenses",
      title: "Class 8 English Tenses Speed Duel",
      category: "English",
      teacherName: "Grammar Bot",
      questions: [
        { questionText: "Identify the Tense: 'She has completed her homework.'", options: ["Simple Past", "Present Perfect", "Past Perfect", "Present Continuous"], correctAnswerIndex: 1 },
        { questionText: "Fill in the blank: 'They ______ to the park yesterday.'", options: ["go", "went", "going", "gone"], correctAnswerIndex: 1 },
        { questionText: "Which sentence is in Future Continuous Tense?", options: ["I will study tomorrow.", "I will be studying tomorrow at 5 PM.", "I studied yesterday.", "I am studying now."], correctAnswerIndex: 1 }
      ]
    }
  },
  {
    id: 4,
    title: "Class 5 Solar System Quiz",
    category: "SPACE SCIENCE",
    color: "#8B6FE8",
    icon: "🪐",
    time: "Tomorrow",
    players: "210 Registered",
    reward: "600 XP",
    quiz: {
      id: "ch-space-quiz",
      title: "Class 5 Solar System & Planets Duel",
      category: "Space",
      teacherName: "Astro Bot",
      questions: [
        { questionText: "Which is the smallest planet in our Solar System?", options: ["Mercury", "Mars", "Venus", "Pluto"], correctAnswerIndex: 0 },
        { questionText: "Which planet has beautiful large visible rings around it?", options: ["Jupiter", "Uranus", "Saturn", "Neptune"], correctAnswerIndex: 2 },
        { questionText: "How long does it take for Earth to complete one revolution around the Sun?", options: ["24 hours", "30 days", "365 days (1 year)", "100 days"], correctAnswerIndex: 2 }
      ]
    }
  }
];

export const INITIAL_LEADERBOARD = [
  { rank: 1, name: "Ananya Gupta", classSection: "Class 7A", xp: 9850, level: 12, streak: 35, badge: "👑 School Topper", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Ananya", isUser: false },
  { rank: 2, name: "Rohan Verma", classSection: "Class 8C", xp: 8400, level: 10, streak: 28, badge: "⚡ Math Wizard", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rohan", isUser: false },
  { rank: 3, name: "Diya Patel", classSection: "Class 5B", xp: 7150, level: 9, streak: 22, badge: "🔥 Science Champ", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Diya", isUser: false },
  { rank: 4, name: "Aarav Sharma", classSection: "Class 6B", xp: 4200, level: 6, streak: 15, badge: "🚀 Rising Star", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Aarav6", isUser: true },
  { rank: 5, name: "Kabir Singh", classSection: "Class 6A", xp: 3900, level: 5, streak: 12, badge: "🎯 Grammar Hero", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Kabir", isUser: false },
  { rank: 6, name: "Sanya Malhotra", classSection: "Class 7B", xp: 3550, level: 5, streak: 10, badge: "🧠 Quiz Ninja", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sanya", isUser: false },
];

export const MINI_GAMES = [
  { 
    title: "Math Table Smasher", 
    color: "#F0506E", 
    icon: "🔢", 
    category: "SPEED MATHS",
    quiz: {
      title: "Math Table Smasher Mini-Game",
      category: "Speed Maths",
      teacherName: "Math Arcade",
      questions: [
        { questionText: "What is 8 x 7?", options: ["54", "56", "64", "48"], correctAnswerIndex: 1 },
        { questionText: "What is 9 x 9?", options: ["81", "72", "99", "89"], correctAnswerIndex: 0 },
        { questionText: "What is 13 x 4?", options: ["48", "52", "56", "44"], correctAnswerIndex: 1 }
      ]
    }
  },
  { 
    title: "Spelling Bee Champion", 
    color: "#2FD9A0", 
    icon: "🐝", 
    category: "ENGLISH",
    quiz: {
      title: "Spelling Bee Champion Mini-Game",
      category: "English",
      teacherName: "Spelling Bee Bot",
      questions: [
        { questionText: "Select the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Receiv"], correctAnswerIndex: 1 },
        { questionText: "Select the correct spelling:", options: ["Necessary", "Necesary", "Neccessary", "Nessasary"], correctAnswerIndex: 0 },
        { questionText: "Select the correct spelling:", options: ["Environment", "Enviroment", "Environmint", "Envirunment"], correctAnswerIndex: 0 }
      ]
    }
  },
  { 
    title: "Planet Match 3D", 
    color: "#F5B942", 
    icon: "🌍", 
    category: "SCIENCE",
    quiz: {
      title: "Planet Match 3D Mini-Game",
      category: "Science",
      teacherName: "Space Explorer",
      questions: [
        { questionText: "Which is the hottest planet in our Solar System?", options: ["Mercury", "Venus", "Mars", "Sun"], correctAnswerIndex: 1 },
        { questionText: "Which planet is famous for being surrounded by rings?", options: ["Saturn", "Earth", "Neptune", "Mars"], correctAnswerIndex: 0 },
        { questionText: "Earth's natural satellite is the:", options: ["Sun", "Moon", "Phobos", "Titan"], correctAnswerIndex: 1 }
      ]
    }
  },
  { 
    title: "Scratch Code Maze", 
    color: "#8B6FE8", 
    icon: "🐱", 
    category: "CODING LOGIC",
    quiz: {
      title: "Scratch Code Maze Mini-Game",
      category: "Coding",
      teacherName: "Scratch Cat",
      questions: [
        { questionText: "If x = 5 and you 'Change x by 10', what is the new value of x?", options: ["5", "10", "15", "50"], correctAnswerIndex: 2 },
        { questionText: "Which block loops code indefinitely until stopped?", options: ["Repeat 10", "Forever", "If-Then", "Stop All"], correctAnswerIndex: 1 },
        { questionText: "Which block makes a sprite say a message on screen?", options: ["Think", "Say", "Ask", "Broadcast"], correctAnswerIndex: 1 }
      ]
    }
  }
];

export const TESTIMONIALS = [
  {
    quote: "My Class 6 students love Questly! The live classroom quiz arena makes revision super fun and every student wants to get on the winner podium.",
    name: "Mrs. Meenakshi Sundaram",
    role: "Class 6 Science Teacher",
    color: "#F0506E",
    tag: "🎓 VERIFIED TEACHER",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Meenakshi"
  },
  {
    quote: "I unlocked the 15-day streak badge in Maths! Taking daily speed quizzes helped me score 95% in my Class 7 term exams.",
    name: "Aarav & Diya",
    role: "Class 6 & 7 Students",
    color: "#2FD9A0",
    tag: "🏆 95% EXAM SCORE",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PriyaStudent"
  },
  {
    quote: "The neo-brutalist sticker badges, avatars, and instant XP feedback keep primary students super motivated every single day.",
    name: "Prof. Rajesh Kumar",
    role: "School STEM Coordinator",
    color: "#F5B942",
    tag: "⭐ SCHOOL APPROVED",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rajesh"
  }
];

export const SAMPLE_TEACHER_QUIZZES = [
  SKILL_TRACKS[0].quiz,
  SKILL_TRACKS[1].quiz,
  SKILL_TRACKS[2].quiz,
  SKILL_TRACKS[3].quiz,
  SKILL_TRACKS[4].quiz,
  SKILL_TRACKS[5].quiz
];
