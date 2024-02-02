# Strapi Backend API for SE Factory Hiring Portal

## Overview

This document details the backend API developed with Strapi for the SE Factory Hiring Portal. It extends the functionalities to manage students, project types, programming languages, database technologies, data visualization tools, and cloud platforms. The backend ensures secure and efficient data handling and provides a comprehensive API for managing the portal's data.

## Getting Started

To get started with this Strapi backend, ensure you have Node.js installed on your system. Then, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-repository/SE-Factory-Backend.git
   ```

2. Navigate to the project directory:
   ```
   cd SE-Factory-Backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the Strapi server:
   ```
   npm run develop
   ```

This will start the Strapi backend in development mode, allowing you to access the admin panel and API endpoints.

## API Endpoints

### Student Routes
- **Filter Students**
  - `GET /students/filter`
  - Filters students based on criteria like skills, availability, and bootcamp.

- **Add Student to Favorites**
  - `POST /students/addFavorite/:id`
  - Adds a student to the recruiter's favorites list.

- **Remove Student from Favorites**
  - `DELETE /students/deleteFavorite/:id`
  - Removes a student from the recruiter's favorites list.

### Project Type Routes
- **Get All Project Types**
  - `GET /project-types`
  - Lists all project types.

- **Get Project Type by ID**
  - `GET /project-types/:id`
  - Retrieves details of a project type by ID.

### Language Routes
- **Get All Languages**
  - `GET /languages`
  - Lists all programming languages.

- **Get Language by ID**
  - `GET /languages/:id`
  - Retrieves details of a programming language by ID.

### Database Technology Routes
- **Get All Database Technologies**
  - `GET /database-technologies`
  - Lists all database technologies.

- **Get Database Technology by ID**
  - `GET /database-technologies/:id`
  - Retrieves details of a database technology by ID.

### Data Visualization Tool Routes
- **Get All Data Visualization Tools**
  - `GET /data-visualization-tools`
  - Lists all data visualization tools.

- **Get Data Visualization Tool by ID**
  - `GET /data-visualization-tools/:id`
  - Retrieves details of a data visualization tool by ID.

### Cloud Platform Routes
- **Get All Cloud Platforms**
  - `GET /cloud-platforms`
  - Lists all cloud platforms.

- **Get Cloud Platform by ID**
  - `GET /cloud-platforms/:id`
  - Retrieves details of a cloud platform by ID.

## Built With

- ![Strapi](https://img.shields.io/badge/Strapi-8E75FF.svg?style=for-the-badge&logo=strapi&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
- ![Auth0](https://img.shields.io/badge/Auth0-%23EB5424.svg?style=for-the-badge&logo=auth0&logoColor=white)

For additional information or inquiries, please contact the development team or refer to the Strapi documentation for further guidance on managing and extending the API.


