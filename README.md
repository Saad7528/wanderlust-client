# 🗺️ Add Destination Feature

The `/add-destination` page allows authorized users to create and add new travel destinations to the platform. It features a user-friendly form that captures essential details about the location and sends the data to the backend server.

## 🔗 Route
* **URL:** `http://localhost:3000/add-destination`
* **Access:** Admin / Authenticated Users (Adjust as needed)

## ✨ Features

* **Interactive Form:** Clean UI for data entry.
* **Image Upload:** Users can upload a thumbnail or cover image for the destination.
* **Form Validation:** Client-side validation to ensure required fields (like Destination Name and Location) are not left empty.
* **Real-time Feedback:** Success or error toast notifications upon form submission.

## 📝 Form Fields

The form typically collects the following data:
* **Title/Name:** Name of the destination (e.g., "Cox's Bazar").
* **Location:** City or Country.
* **Description:** A brief overview of the place.
* **Price/Budget:** Estimated travel cost (if applicable).
* **Image URL/Upload:** Visual representation of the destination.

## 📡 API Integration

When the form is submitted, it makes a `POST` request to the backend server.

* **Endpoint:** `/api/destinations` (Update with your actual API route)
* **Method:** `POST`
* **Payload Example:**
```json
  {
    "title": "Sylhet Tea Gardens",
    "location": "Sylhet, Bangladesh",
    "description": "Beautiful rolling hills covered in lush green tea leaves.",
    "price": 5000,
    "imageUrl": "[https://example.com/sylhet.jpg](https://example.com/sylhet.jpg)"
  }