# Project Documentation

## How to run the project

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## How to update the project

To keep the project up to date, you should periodically update its dependencies.

* To update Node.js dependencies, run `npm update`.
* To update Bower components, run `bower update`.

## Backend Routes

The backend API is assumed to follow a standard RESTful architecture. The API namespace is `/api/v1`.

### Agency

| Method | Path                  | Description        |
|--------|-----------------------|--------------------|
| GET    | /api/v1/agencies      | Get agency details |
| PUT    | /api/v1/agencies/:id  | Update agency      |

### Pages

| Method | Path                  | Description        |
|--------|-----------------------|--------------------|
| GET    | /api/v1/pages         | Get all pages      |
| GET    | /api/v1/pages/:id     | Get a single page  |
| POST   | /api/v1/pages         | Create a new page  |
| PUT    | /api/v1/pages/:id     | Update a page      |
| DELETE | /api/v1/pages/:id     | Delete a page      |

### Website

| Method | Path                  | Description          |
|--------|-----------------------|----------------------|
| GET    | /api/v1/websites      | Get website settings |
| PUT    | /api/v1/websites/:id  | Update website       |

### Properties (Propiedades)

| Method | Path                      | Description            |
|--------|---------------------------|------------------------|
| GET    | /api/v1/propiedades       | Get all properties     |
| GET    | /api/v1/propiedades/:id   | Get a single property  |
| POST   | /api/v1/propiedades       | Create a new property  |
| PUT    | /api/v1/propiedades/:id   | Update a property      |
| DELETE | /api/v1/propiedades/:id   | Delete a property      |

### Clients

| Method | Path                  | Description          |
|--------|-----------------------|----------------------|
| GET    | /api/v1/clients       | Get all clients      |
| GET    | /api/v1/clients/:id   | Get a single client  |
| POST   | /api/v1/clients       | Create a new client  |
| PUT    | /api/v1/clients/:id   | Update a client      |
| DELETE | /api/v1/clients/:id   | Delete a client      |

### Contacts

| Method | Path                  | Description          |
|--------|-----------------------|----------------------|
| GET    | /api/v1/contacts      | Get all contacts     |
| GET    | /api/v1/contacts/:id  | Get a single contact |
| POST   | /api/v1/contacts      | Create a new contact |
| PUT    | /api/v1/contacts/:id  | Update a contact     |
| DELETE | /api/v1/contacts/:id  | Delete a contact     |
