// simple object
const user = {
  name: "Swapnil",
  age: 24,
  city: "Pune",
  isStudent: true,
};

// nested object
const person = {
  name: "Shelke",
  contact: {
    email: "shelke@example.com",
    phone: {
      mobile: "9876543210",
      landline: "020-1234567",
    },
  },
  address: {
    city: "Pune",
    state: "Maharashtra",
    zip: 411001,
  },
};

// array of objects
const students = [
  { id: 1, name: "Riya", marks: 85, passed: true },
  { id: 2, name: "Arjun", marks: 42, passed: false },
  { id: 3, name: "Meera", marks: 91, passed: true },
  { id: 4, name: "Karan", marks: 67, passed: true },
];

// 2D array
const matrix2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 3D array
const matrix3D = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

// strings
const greeting = "Hello JavaScript Learner!";

// booleans
const isLoggedIn = true;
const hasAccess = false;

// combined object
const company = {
  name: "Techify",
  employees: [
    {
      id: 1,
      name: "Swapnil",
      skills: ["JavaScript", "React", "Node"],
      projects: [
        { title: "Website", completed: true },
        { title: "App", completed: false },
      ],
    },
    {
      id: 2,
      name: "Riya",
      skills: ["HTML", "CSS", "Design"],
      projects: [
        { title: "Landing Page", completed: true },
        { title: "Portfolio", completed: true },
      ],
    },
  ],
};

// ✅ Export all (ES Modules)
export  {
  user,
  person,
  students,
  matrix2D,
  matrix3D,
  greeting,
  isLoggedIn,
  hasAccess,
  company,
};
