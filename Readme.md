# NestJS Gateway Sample Apps

This repository contains a set of sample apps and a Docker Compose to run them. The point is to show the interaction between a minimal set of microservices and an API gateway crafted using the NestJS gateway library I have built.

## Getting started

### Prerequesites

- Docker with docker-compose installed
- A working knowledge of [NestJS](https://nestjs.com/)

### Starting the set of services

1. Run `docker-compose up` in this directory

### Using these services

1. The `tasks-svc` is running on port 3001
1. The `projects-svc` is running on port 3002
1. A Postman collection is available at [https://www.getpostman.com/collections/beafee638d5e7423813d](https://www.getpostman.com/collections/beafee638d5e7423813d) with docs at [https://documenter.getpostman.com/view/2472963/S1LySmKk](https://documenter.getpostman.com/view/2472963/S1LySmKk)
1. All apps have Swagger docs available at `/swagger`