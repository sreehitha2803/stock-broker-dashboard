
# Stock Broker Client Web Dashboard

## Introduction

The Stock Broker Client Web Dashboard is a real-time web application developed using React, Node.js, Express, and Socket.IO. The application allows users to log in using their email address, subscribe to supported stock ticker symbols, and receive live stock price updates without refreshing the page.

The project demonstrates real-time communication between the frontend and backend using WebSockets. Multiple users can connect simultaneously and subscribe to different stocks while receiving asynchronous updates independently.

---

## Project Objective

The objective of this project is to build a stock broker client dashboard that:

* Allows users to log in using an email address.
* Supports subscription to stock ticker symbols.
* Updates stock prices in real time without page refresh.
* Supports multiple users with different subscriptions.
* Demonstrates asynchronous communication using Socket.IO.
* Simulates stock prices using a random number generator.

---

## Features

### User Login

* Users can log in using their email address.
* No page reload is required after login.

### Stock Subscription

* Users can subscribe to supported stock symbols.
* Supported stocks:

  * GOOG
  * TSLA
  * AMZN
  * META
  * NVDA

### Real-Time Updates

* Stock prices are updated every second.
* Updates are pushed to the dashboard automatically using WebSockets.

### Multiple User Support

* Multiple users can access the application simultaneously.
* Each user can subscribe to different stocks.
* Dashboards update independently and asynchronously.

### Simulated Stock Prices

* Random stock prices are generated on the backend every second.
* No external stock market API is required.

---

## Technology Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* CORS

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## Project Structure

```text
stock-broker-dashboard
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── frontend
    ├── package.json
    ├── package-lock.json
    ├── public
    └── src
        ├── App.js
        ├── Login.js
        ├── Dashboard.js
        ├── socket.js
        └── index.js
```

## System Workflow

1. User enters an email address and logs in.
2. The dashboard displays available stocks.
3. User subscribes to one or more stocks.
4. Subscription information is sent to the backend using Socket.IO.
5. The backend generates random stock prices every second.
6. Updated prices are sent to connected clients.
7. The frontend updates the dashboard instantly without refreshing the page.

---

## Installation and Setup

### Prerequisites

* Node.js
* npm
* Visual Studio Code

---

### Clone Repository

```bash
git clone https://github.com/sreehitha2803/stock-broker-dashboard.git
```

```bash
cd stock-broker-dashboard
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
node server.js
```

Expected Output:

```text
Server Running on http://localhost:5000
```

---

## Frontend Setup

Open a new terminal and navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm start
```

Application URL:

```text
http://localhost:3000
```

---

## Testing the Application

### User 1

Login with:

```text
alice@gmail.com
```

Subscribe to:

```text
GOOG
TSLA
```

### User 2

Open another browser window or Incognito mode.

Login with:

```text
bob@gmail.com
```

Subscribe to:

```text
NVDA
AMZN
```

Both dashboards receive independent real-time stock updates.

---

## Future Enhancements

* Database integration using MongoDB.
* User authentication with passwords.
* Real stock market API integration.
* Portfolio management.
* Buy and sell stock functionality.
* Improved UI/UX design.
* Deployment using Vercel and Render.

---

## Conclusion

The Stock Broker Client Web Dashboard successfully demonstrates real-time communication between a React frontend and a Node.js backend using Socket.IO. The application allows users to subscribe to stocks and receive live updates without refreshing the page. Multiple users can interact with the system simultaneously and receive asynchronous updates based on their subscriptions. This project showcases modern web development concepts such as WebSockets, event-driven architecture, and client-server communication.
