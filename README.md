VOOSHA ASSIGNMENT

TASK COMPLETED

To run the Project

#yarn install

#yarn run start:dev

Endpoints

Document the available API endpoints with their respective methods, routes, and functionalities.
POST /add-user - Register a new user.
POST /login-user - Login user.
POST /add-order - Add a new order.
GET /get-order - Get order details for a user

Protected Routes

@UseGuards() decorator is used at the controller or method level to protect endpoints and ensure that only authenticated users can access them.
NestJS provides AuthGuard as a built-in guard specifically designed for JWT authentication.

Custom Decorator: @GetCurrentUserId() To extract the user_id from the token from the auth guard

Database : I have used PostgresDB with TypeORM for the Database Connectivity.

Password Encryption : Password are stored encrypted using bcrypt

Deployment:

I have deployed the nestjs Backend using docker container on aws ec2 (Ubuntu server)

Also Postgres DB is also using docker service on the same database

I have also attached the .env.example file

Frontend: react is also deployed using the Docker Container on Server .

Thank You
