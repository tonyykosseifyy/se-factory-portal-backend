# Strapi Backend API Documentation - Additional Routes

## Overview
This documentation extends the backend API routes for the Strapi-based project, focusing on languages, database technologies, data visualization tools, and cloud platforms.

## API Endpoints

### Student Routes
- **Filter Students**
  - `GET /students/filter`
  - Description: Retrieve students based on applied filters.

- **Add Student to Favorites**
  - `POST /students/addFavorite/:id`
  - Description: Add a student to favorites list using their ID.

- **Remove Student from Favorites**
  - `DELETE /students/deleteFavorite/:id`
  - Description: Remove a student from favorites list using their ID.

### Project Type Routes
- **Get All Project Types**
  - `GET /project-types`
  - Description: Retrieve all project types.

- **Get Project Type by ID**
  - `GET /project-types/:id`
  - Description: Retrieve a specific project type by ID.
  
### Language Routes
- **Get All Languages**
  - `GET /languages`
  - Description: Retrieve all programming languages.

- **Get Language by ID**
  - `GET /languages/:id`
  - Description: Retrieve a specific programming language by its ID.

### Database Technology Routes
- **Get All Database Technologies**
  - `GET /database-technologies`
  - Description: Retrieve all database technologies.

- **Get Database Technology by ID**
  - `GET /database-technologies/:id`
  - Description: Retrieve a specific database technology by its ID.

### Data Visualization Tool Routes
- **Get All Data Visualization Tools**
  - `GET /data-visualization-tools`
  - Description: Retrieve all data visualization tools.

- **Get Data Visualization Tool by ID**
  - `GET /data-visualization-tools/:id`
  - Description: Retrieve a specific data visualization tool by its ID.

### Cloud Platform Routes
- **Get All Cloud Platforms**
  - `GET /cloud-platforms`
  - Description: Retrieve all cloud platforms.

- **Get Cloud Platform by ID**
  - `GET /cloud-platforms/:id`
  - Description: Retrieve a specific cloud platform by its ID.

## Built With
- [Strapi](https://strapi.io/) - Open source headless CMS.


