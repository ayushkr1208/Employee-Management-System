const employees = [
    {
      "id": 1,
      "email": "emp1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "title": "Prepare monthly report",
          "date": "2025-06-10",
          "description": "Compile sales and finance data for June.",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "title": "Client feedback review",
          "date": "2025-06-01",
          "description": "Analyze feedback from Q2 clients.",
          "category": "Analysis"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "title": "Bug fix on login API",
          "date": "2025-05-28",
          "description": "Resolve token expiry bug in authentication service.",
          "category": "Development"
        }
      ]
    },
    {
      "id": 2,
      "email": "emp2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "title": "Design homepage banner",
          "date": "2025-06-15",
          "description": "Create a promotional banner for summer sale.",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "title": "Review UI guidelines",
          "date": "2025-06-05",
          "description": "Update the design system documentation.",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "title": "Fix layout bugs",
          "date": "2025-06-08",
          "description": "Resolve overlapping elements in dashboard view.",
          "category": "Bug Fix"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "title": "Create mobile layout",
          "date": "2025-06-17",
          "description": "Adapt homepage for mobile devices.",
          "category": "Design"
        }
      ]
    },
    {
      "id": 3,
      "email": "emp3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "title": "Update customer database",
          "date": "2025-06-16",
          "description": "Add new fields for CRM integration.",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "title": "Run monthly backup",
          "date": "2025-06-01",
          "description": "Full backup of user and app data.",
          "category": "Maintenance"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "title": "Integrate Stripe",
          "date": "2025-06-03",
          "description": "Set up Stripe for online payments.",
          "category": "Payments"
        }
      ]
    },
    {
      "id": 4,
      "email": "emp4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "title": "SEO audit",
          "date": "2025-06-12",
          "description": "Evaluate SEO performance and fix broken links.",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "title": "Update blog articles",
          "date": "2025-06-04",
          "description": "Revise old articles with current data.",
          "category": "Content"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "title": "Launch newsletter",
          "date": "2025-06-07",
          "description": "Email campaign launch delayed due to design issues.",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "title": "Schedule social media posts",
          "date": "2025-06-17",
          "description": "Plan content calendar for Twitter and LinkedIn.",
          "category": "Social Media"
        }
      ]
    },
    {
      "id": 5,
      "email": "emp5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false,
          "title": "Write test cases",
          "date": "2025-06-13",
          "description": "Add unit and integration tests for user service.",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false,
          "title": "Deploy staging build",
          "date": "2025-06-05",
          "description": "Push latest features to staging environment.",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true,
          "title": "Implement feature flags",
          "date": "2025-06-09",
          "description": "Feature flag implementation failed due to merge conflict.",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false,
          "title": "Review PRs",
          "date": "2025-06-17",
          "description": "Code review for teammates' pull requests.",
          "category": "Code Review"
        }
      ]
    }
  ];




const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
 const employees= JSON.parse(localStorage.getItem('employees'))
  const admin= JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}



