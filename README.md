# NannyScheduler-Backend-API

## Introduction
The Nanny Scheduler API, designed by Justin Irabor (mogwai), can be found [here.](https://nanny-scheduler-api.herokuapp.com/)

It handles four different databases with their distinct endpoints. 

The `Users` database is used to handle login and logout functionality and define who (parent, nannies, admins) has access to what. 

The `Parents` endpoint holds data for parents, and front-end engineers can build a form to collect data that is supported by `POST` and `PUT` endpoints. 

The `Nannies` endpoint holds data for nannies, and front-end engineers can build a form to collect data supported by `POST` and `PUT` endpoints. `GET` and `DELETE` also supported:

1. Register a nanny: [Send `POST` request here](https://nanny-scheduler-api.herokuapp.com/api/nannies/register)


2. Update a nanny: [Send `PUT` request here](https://nanny-scheduler-api.herokuapp.com/api/nannies/:id)

3. Delete Nanny by ID: [Send `DELETE` Request here](https://nanny-scheduler-api.herokuapp.com/nannies/:id)


## Database Schema 

### Nannies
![Nanny schema](https://res.cloudinary.com/studio-mogwai/image/upload/v1574167104/Screenshot_2019-11-19_at_13.34.37.png)

### Parents 
![Parents schema](https://res.cloudinary.com/studio-mogwai/image/upload/v1574167100/Screenshot_2019-11-19_at_13.34.46.png)

### Users
![Users schema](https://res.cloudinary.com/studio-mogwai/image/upload/v1574167100/Screenshot_2019-11-19_at_13.34.56.png)

### Todos
![Todos schema](https://res.cloudinary.com/studio-mogwai/image/upload/v1574167103/Screenshot_2019-11-19_at_13.35.03.png)



### What's next:
1. bcrypt middleware
2. parents CRUD
3. todos CRUD
4. Cookie Authentication
5. Location tracking