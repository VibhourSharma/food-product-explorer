# Food Product Listing App

This is a food product listing web app built with **Next.js 14** and **Tailwind CSS**, using data from the **OpenFoodFacts API**. It allows users to browse, search, and filter food products, as well as view detailed information for each product.

## Features

- **Product Listing**: Displays a paginated list of products (8 products per page).
- **Search by Name/Barcode**: Users can search for products either by name or barcode.
- **Category Filtering**: Filter products by categories like snacks, breakfast, dinner, etc.
- **Sorting**: Sort products alphabetically by name (ascending/descending).
- **Product Details**: Navigate to a detailed page for each product to view ingredients, nutritional values, and labels (e.g., vegan, gluten-free).
- **Go Back Button**: On the product details page, users can easily go back to the previous page.
- **Responsive Design**: Optimized for both desktop and mobile screens.

## How to Use

1. **Browse Products**: On the home page, you’ll see a list of products fetched from the OpenFoodFacts API. Use the pagination controls to navigate through pages.
   
2. **Search**: 
   - To search by product name, enter the name in the search bar.
   - For barcode search, input the barcode in the search field.

3. **Filter by Category**: Use the dropdown menu to filter products by specific categories like breakfast, snacks, or dinner.

4. **View Details**: Click on "More Information" for any product to navigate to its detailed page, which includes:
   - Product image
   - Full list of ingredients
   - Nutritional values (energy, fat, carbs, proteins)
   - Labels such as vegan or gluten-free

5. **Go Back**: Use the "Go Back" button on the product details page to return to the product listing.

## Technologies Used

- **Next.js 14**: Framework for React-based web apps.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenFoodFacts API**: Provides the data for food products.
- **Context API**: Manages global state for products and pagination.

## Time Taken
This assignment was completed in **1.5 days**.
