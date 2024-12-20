# Modular Compliance Dashboard

## Overview

Welcome to the **Modular Compliance Dashboard** project. This project uses **micro frontends** to build a modular and scalable dashboard. It is built using **ReactJS** and consists of the following micro frontend projects:

1. **compliance-status**
2. **recent-activity**
3. **task-overview**
4. **shell-frontend** (Main project)

Each micro frontend runs on its own port, and the **shell-frontend** project ties everything together. The shell serves as the entry point for the dashboard.

## Project Structure and Ports

Below is the list of all projects and the corresponding ports that they run on:

| Project Name          | Port |
| --------------------- | ---- |
| **shell-frontend**    | 3001 |
| **compliance-status** | 3002 |
| **recent-activity**   | 3003 |
| **task-overview**     | 3000 |

## Setup Instructions

Follow the steps below to set up and run the project locally:

### Step 1: Install Dependencies

Before running the project, ensure you have the necessary dependencies installed using `yarn`. Open your terminal and navigate to each project folder, then run:

yarn install
Do this for each of the following projects:
shell-frontend
compliance-status
recent-activity
task-overview

### Step 2: Start the Micro Frontends

Start each of the micro frontends in the following order to ensure they load correctly:

cd compliance-status

`yarn install`

`yarn start`

cd ../recent-activity

`yarn install`

`yarn start`

cd ../task-overview

`yarn install`

`yarn start`

### Step 3: Start the Shell Frontend

Once the micro frontends are running successfully, start the shell-frontend project on port 3001:

cd ../shell-frontend

`yarn install`

`yarn start`

### Step 4: Cognito Authentication

After the projects have successfully started, you will be redirected to the Cognito authentication page. You can either register a new account or log in with the following credentials:

**Username: hieubui**

**Password: Hieu12345**

Troubleshooting

If you encounter any issues while setting up the project, please make sure that:

All projects are running on their respective ports.
Your local environment supports running multiple applications on different ports.
You are logged in to Cognito using valid credentials.
Conclusion
Once all projects are running and authentication is complete, the Modular Compliance Dashboard should be fully functional. If you have any questions or encounter issues, please feel free to reach out.

Happy coding!
