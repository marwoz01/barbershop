# Barbershop Management System

A full-stack web application designed to manage barbershop operations and client bookings.

The project contains two separate React applications inside a single monorepo:

- **client-app** – public website for customers  
  (services, gallery, pricing, booking flow, user dashboard)

- **admin-app** – management panel for barbers and administrators  
  (calendar view, service management, statistics, client list)

Both frontends communicate with a shared **Express.js backend**, using:

- **PostgreSQL** – core relational data (users, services, bookings, barbers)
- **MongoDB** – logs, visit history, analytical data
- **JWT authentication** with role-based access control
- **Swagger/OpenAPI** documentation
- **Docker** for containerized development

This structure provides a clear separation between public-facing features and internal administrative tools while maintaining consistency in architecture, design, and API communication.
