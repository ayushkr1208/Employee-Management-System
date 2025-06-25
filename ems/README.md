# Employee Management System

A modern, full-stack Employee Management System (EMS) built with React. This application allows an admin to manage employees and their tasks, while employees can view and update their assigned tasks. The UI is clean, modern, and responsive, with separate login windows for admin and employees.

## Features

- **Modern Login UI**: Split-screen login with branding and separate login windows for admin and employees.
- **Role-based Dashboards**: Admin and employees have different dashboards and permissions.
- **Task Management**:
  - Admin can assign tasks to employees.
  - Employees can accept, complete, or fail tasks.
  - Real-time dashboard updates for task counts (new, active, completed, failed).
- **Persistent Data**: Uses browser localStorage to persist users and tasks.
- **Live Updates**: Dashboards update instantly when tasks are assigned or updated.
- **Responsive Design**: Works well on desktop and tablets.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd EMS/ems
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage
- On the landing page, choose **Admin** or **Employee** to log in.
- **Admin Login**: Use the default admin credentials (see `src/utils/localStorage.jsx`, usually `admin@example.com` / `123`).
- **Employee Login**: Use any employee email and password from the same file (e.g., `e@e.com` / `123`).
- **Admin Dashboard**:
  - Assign tasks to employees.
  - View all employees and their task stats.
- **Employee Dashboard**:
  - View assigned tasks.
  - Accept, complete, or fail tasks.
  - See real-time updates to your task stats.

## Project Structure
```
ems/
├── src/
│   ├── components/
│   │   ├── Auth/         # Login components
│   │   ├── Dashboard/    # Admin and Employee dashboards
│   │   ├── TaskList/     # Task-related components
│   │   └── other/        # Shared UI components
│   ├── context/          # AuthProvider for global state
│   ├── utils/            # LocalStorage helpers and seed data
│   └── App.jsx           # Main app logic
├── public/
├── package.json
└── README.md
```

## Customization
- You can edit `src/utils/localStorage.jsx` to change the initial admin and employee data.
- UI colors and branding can be customized in the component files and Tailwind config.

## License
This project is for educational/demo purposes. Feel free to use and modify it for your needs.
