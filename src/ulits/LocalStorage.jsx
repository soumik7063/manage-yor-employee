const employees = [
  {
      "id": 1,
      "firstname": "Arjun",
      "email": "abc@d.com",
      "password": "123",
      "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
          {
              "title": "Prepare monthly report",
              "description": "Compile the financial and operational data for the month.",
              "date": "2024-12-10",
              "category": "Reporting",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Client follow-up",
              "description": "Schedule and conduct follow-up meetings with key clients.",
              "date": "2024-12-08",
              "category": "Communication",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Team meeting",
              "description": "Organize a team meeting to discuss project milestones.",
              "date": "2024-12-07",
              "category": "Management",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ]
  },
  {
      "id": 2,
      "firstname": "Priya",
      "email": "jane.smith@example.com",
      "password": "123",
      "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
          {
              "title": "Develop feature update",
              "description": "Implement and test new features for the web application.",
              "date": "2024-12-15",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Bug fixing",
              "description": "Resolve critical bugs reported by the QA team.",
              "date": "2024-12-11",
              "category": "Maintenance",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Code review",
              "description": "Review code submissions from junior developers.",
              "date": "2024-12-09",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 3,
      "firstname": "Rohit",
      "email": "robert.brown@example.com",
      "password": "123",
      "taskCounts": { "active": 1, "newTask": 0, "completed": 2, "failed": 0 },
      "tasks": [
          {
              "title": "Inventory check",
              "description": "Audit and update inventory records for Q4.",
              "date": "2024-12-12",
              "category": "Logistics",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Supplier meeting",
              "description": "Negotiate terms with new suppliers for the upcoming year.",
              "date": "2024-12-13",
              "category": "Procurement",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Order fulfillment",
              "description": "Ensure all pending orders are processed and shipped.",
              "date": "2024-12-06",
              "category": "Operations",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ]
  },
  {
      "id": 4,
      "firstname": "Ananya",
      "email": "emily.davis@example.com",
      "password": "123",
      "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
          {
              "title": "Marketing strategy",
              "description": "Develop a marketing plan for Q1 2025.",
              "date": "2024-12-18",
              "category": "Marketing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Social media campaign",
              "description": "Launch a holiday season campaign on social platforms.",
              "date": "2024-12-10",
              "category": "Marketing",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Content creation",
              "description": "Write blog posts for the company website.",
              "date": "2024-12-07",
              "category": "Content",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 5,
      "firstname": "Manoj",
      "email": "michael.jones@example.com",
      "password": "123",
      "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
          {
              "title": "System maintenance",
              "description": "Update server software and ensure uptime.",
              "date": "2024-12-20",
              "category": "IT",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Data backup",
              "description": "Backup critical data and verify the integrity of backups.",
              "date": "2024-12-05",
              "category": "IT",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Security audit",
              "description": "Perform a comprehensive security audit for the IT infrastructure.",
              "date": "2024-12-14",
              "category": "IT",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  }
];

  const admin = [
    {"id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage= () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
} 
export const getLocalStorage= () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}