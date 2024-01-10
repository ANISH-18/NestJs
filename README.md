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
