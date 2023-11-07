# Routeine Application

Routine is a web application designed to help individuals track their daily activities and focus on specific tasks for the day. Whether you want to maintain a daily journal, improve time management, or simply monitor your daily routines, Routine provides a user-friendly interface for logging, tracking, and reviewing your daily tasks and activities.

## Key Features

1. **Log Your Daily Activities:** Routine allows users to record their daily activities and tasks, making it easy to keep a detailed record of their daily routines. This feature is particularly helpful for individuals looking to increase productivity or maintain a personal journal.

2. **Track and Manage Your Routine:** Users can monitor and manage their daily routines throughout the day. The application provides a visual representation of tasks completed and those that are still pending, giving users a sense of accomplishment and control.

3. **Submit Logs at Different Times:** Routine accommodates flexibility by allowing users to submit logs at different times during the day. Whether it's in the morning, afternoon, or evening, users can easily update their activity log.

4. **View and Review Your Routine Logs:** Users can access and review their previous routine logs. This feature is beneficial for tracking progress, identifying trends in daily behavior, and making informed decisions to improve personal routines.

## Technology Stack

- **Next.js 14**: A React framework for building web applications, offering server-side rendering, routing, and other features.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and stylish web interfaces.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Prisma**: A database toolkit for TypeScript and Node.js, which simplifies database operations.
- **Supabase**: An open-source Firebase alternative that provides real-time and secure database and authentication services.
- **Bun**: A package manager for managing your application's dependencies.

## Installation

To get started with routeine, follow these steps:

```bash
   # Clone this Repository

   git clone https://github.com/yourusername/routeine.git && cd routeine

   # Install the dependency
   bun install

   # Setup env variable
   cp .env.example .env.local

   # Prisma Setup
   bun prisma migrate dev

   # Run locally
   bun dev
```

## Usage

Start by creating an account and logging in.
Log your daily activities and tasks throughout the day.
Review your routine logs and track your progress.

## Contributing

Feel free to contribute to Routine by opening issues, suggesting features, or creating pull requests. We welcome your input!

## License

This project is licensed under the [MIT License](/LICENSE). See the LICENSE file for details.
