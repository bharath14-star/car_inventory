# TODO: Add Export to Excel Feature for Admin

## Backend Changes
- [ ] Install exceljs dependency in backend/package.json
- [ ] Add exportCars function in backend/controllers/carController.js
  - Check if user is admin
  - Fetch all cars from database
  - Generate Excel file with car details
  - Send file as download
- [ ] Add new route /api/admin/export-cars in backend/routes/carRoutes.js

## Frontend Changes
- [ ] Modify frontend/src/pages/AdminDashboard.jsx
  - Add logic to check user role (admin only)
  - Add Export button visible only to admins
  - Implement download functionality on button click

## Testing
- [ ] Test backend route in Postman (with admin token)
- [ ] Test frontend download from AdminDashboard
- [ ] Verify button is hidden for non-admin users
- [ ] Verify Excel file contains correct data
