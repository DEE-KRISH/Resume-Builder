# Resume Builder Website

## Introduction

A mini project developed for Semester 3 using HTML, JavaScript, CSS, MongoDB, and Node.js. This project aims to provide users with a user-friendly platform to create and manage their professional resumes online.

## Features

- **User Authentication:** Users can create accounts, log in, and securely manage their personal information.

- **Resume Creation:** A dynamic and intuitive interface for users to build and customize their resumes. This includes sections for personal details, education, work experience, skills, and more.
- - **Templates:** Choose from two resume templates to enhance the visual appeal of your resume.

- **Save and Edit:** Users can save their progress and come back later to edit their resumes. The data is securely stored in a MongoDB database.

- **Export to PDF:** Once the resume is complete, users can export it to a downloadable PDF format.

## Technologies Used

- **HTML:** Markup language for structuring the web pages.

- **CSS:** Stylesheet language for designing the visual presentation.

- **JavaScript:** Programming language for implementing dynamic and interactive features.

- **Node.js:** JavaScript runtime for server-side development.

- **Express.js:** Web application framework for Node.js, used to build the backend of the application.

- **MongoDB:** NoSQL database for storing user data securely.


## Getting Started

1. Clone the repository:
      ```bash
      git clone https://github.com/your-username/resume-builder.git](https://github.com/DEE-KRISH/Resume-Builder.git
      ```

3. Install dependencies:
      ```bash
      cd RESUME-BUILDER
      npm install
      ```

      If you haven't created a package.json file yet, you can create one by running:
       ```bash
          npm init -y
       ```
    
  Installation of MongoDB, Node.js, Express.js and Mongoose:
  
    ```bash
    # Install MongoDB driver for Node.js
     npm install mongodb
   
    # Install Express.js
     npm install express
        
    # Install Mongoose (an ODM for MongoDB and Node.js)
      npm install mongoose
    ```

3. Configure MongoDB:
  
    Ensure MongoDB is installed and running.

    Update the MongoDB connection string in config.js.
    ## Recommended:
     Use MongoDB Compass as a graphical user interface to interact with your MongoDB database. 

5. Start the application:
   
    ```bash
      npm start
    ```
