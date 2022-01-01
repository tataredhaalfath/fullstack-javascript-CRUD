# fullstack-javascript-CRUD
## API Documentation

### Get all data
GET http://localhost:5000/products

### Get data by ID
GET http://localhost:5000/products/5

### Post new data
POST http://localhost:5000/products
Content-Type: application/json

{
  "title":"Product new",
  "price": 5000
}

### Edit data by Id
PUT http://localhost:5000/products/5
Content-Type: application/json

{
  "title":"Product baru",
  "price": 3000
}

### Delete data by Id
DELETE http://localhost:5000/products/4