
# Poll Management System

A dynamic poll management system built using **Node.js**, **Express**, **MongoDB**, and **EJS**. The application allows users to create polls, vote on them, and view poll results dynamically.

## Features

- Create new polls with multiple options.
- Vote on existing polls.
- View real-time poll results with percentages.
- Clean and responsive UI designed using **Tailwind CSS**.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS, Tailwind CSS
- **Database**: MongoDB
- **Others**: Morgan (logger)

## Setup and Installation

Follow the steps below to run the project on your local machine:

### Prerequisites

- **Node.js** and **yarn** installed on your system.
- **MongoDB** running locally or on a cloud provider.

### Clone the Repository


  git clone https://github.com/mdatikur-contact/Voting-System.git
  cd poll-management-system

  yarn install
Install Dependencies

Always show details

Copy
yarn install
Start MongoDB
Ensure MongoDB is running locally on port 27017. Alternatively, update the connection string in the mongoose.connect function in app.js to point to your database.

Run the Application
bash
Always show details


yarn start
The server will start at http://localhost:3000.

