# DT-Node.js-Challenges
Assignment of DT for Node.js Internship

# Event Management API

This is an event management REST API that allows users to create, retrieve, update, and delete events. It provides various endpoints to handle event-related data like name, tagline, schedule, and more. This API uses the MongoDB native driver instead of Mongoose to perform CRUD operations directly.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Payload Structure](#payload-structure)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create an event with name, tagline, schedule, and other details.
- Retrieve an event by its unique ID.
- List events by recency with pagination.
- Update or delete events based on their unique ID.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Native MongoDB driver)
- **File Storage:** Local (for event image uploads)
- **Environment Management:** dotenv

## Installation

###  Clone the Repository
```bash
git clone https://github.com/githubRahuld/DT-Node.js-Challenges.git

Payload Structure
When creating or updating an event, the following payload is expected:

###  Run: npm run dev

{
  "uid": 18,
  "name": "Event Name",
  "tagline": "This is the event tagline",
  "schedule": 1695062400,
  "description": "This is the description of the event",
  "files": {
    "image": "image_path_or_url"
  },
  "moderator": 25,
  "category": "Tech",
  "sub_category": "Web Development",
  "rigor_rank": 5,
  "attendees": [20, 21, 22]
}

##Example Commands in Postman
Create a New Event

#Method: POST
URL: http://localhost:3000/api/v3/app/events
Body (JSON):

{
  "uid": 18,
  "name": "Web Development Workshop",
  "tagline": "Learn the latest web development trends",
  "schedule": 1695062400,
  "description": "This workshop covers HTML, CSS, and JavaScript fundamentals.",
  "files": {
    "image": "path/to/image.jpg"
  },
  "moderator": 25,
  "category": "Education",
  "sub_category": "Technology",
  "rigor_rank": 3,
  "attendees": [101, 102, 103]
}
Get an Event by ID

#Method: GET
URL: http://localhost:3000/api/v3/app/events?id=60c72b8f5b3d3a001c8e4d1b
Get Latest Events

#Method: GET
URL: http://localhost:3000/api/v3/app/events?type=latest&limit=5&page=1
Update an Event

#Method: PUT
URL: http://localhost:3000/api/v3/app/events/60c72b8f5b3d3a001c8e4d1b
Body (JSON):
{
  "name": "Updated Event Name",
  "tagline": "Updated tagline"
}

Delete an Event
#Method: DELETE
URL: http://localhost:3000/api/v3/app/events/60c72b8f5b3d3a001c8e4d1b

