# World Countries Information Directory

This project is a simple **React.js-based web application** that provides a comprehensive directory of world countries. Users can browse the list of countries, view details such as flags, capital cities, populations, and regions, and bookmark or mark countries they have visited.

## Features

- **Comprehensive Country Details**: Each country card displays:
  - Flag
  - Name
  - Capital city
  - Population
  - Region
- **Bookmark and Mark as Visited**: Users can:
  - Bookmark their favorite countries.
  - Mark countries as "Visited."
  - Track the number of bookmarked countries.
- **Dynamic UI**: The app updates the total country count and bookmark list dynamically.
  
## Technologies Used

- **React.js**: To build the user interface and manage state.
- **CSS**: For styling the layout and components.

## How It Works

1. **Country List**: A grid of cards representing each country is displayed. Users can see important information about each country at a glance.
2. **Bookmarking**: By clicking the **"Bookmark as Visited"** button, the country will be stored in the bookmark list, and the total number of bookmarked countries will update.
3. **Going Button**: The **"Going"** button allows users to mark countries they are planning to visit.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/RaiyanJiyon/React-World-Tour.git
   ```

2. Navigate to the project directory:
   ```bash
   cd world-countries-directory
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Future Enhancements

- **Country Search and Filter**: Adding a search bar and filters to easily find countries by region or population.
- **Country Details Page**: Expanding the "More Details" section to show in-depth information about each country.
- **Visit Statistics**: Displaying statistics about bookmarked and visited countries, like total population or regional breakdowns.