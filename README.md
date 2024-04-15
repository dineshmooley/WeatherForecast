## Weather Forecast App
### Description

This project is a weather forecast application built with React. It provides users with the ability to search for weather forecasts of different cities worldwide. The application fetches weather data from the OpenWeatherMap API.

### Features

City Search: Users can search for weather forecasts of specific cities.
Dynamic Sorting: Weather forecast entries can be sorted dynamically by city name, country name, or time zone.
Infinite Scrolling: The application supports infinite scrolling, allowing users to load more weather forecast entries as they scroll down the page.
Project Structure
The project is structured as follows:

App.tsx: The main component responsible for rendering the application layout and managing state.
CityDetails.tsx: A component responsible for displaying detailed weather information for a specific city.
Entry.tsx: A reusable component for displaying individual weather forecast entries.
Search.tsx: A component for handling city search functionality.

### Installation

1. Clone the repository: git clone <repository_url>
2.Navigate to the project directory: cd weather-forecast-app
Install dependencies: npm install

### Usage

Obtain an API key from OpenWeatherMap API by signing up on their website.
Create a .env file in the root directory of the project.
Add your API key to the .env file: REACT_APP_API_KEY=your_api_key_here
Start the development server: npm start
Open your browser and navigate to http://localhost:3000 to view the application.

### Technologies Used

1. React
2. React Router
3. OpenWeatherMap API
4. OpenDataSoft API

### Credits

Weather icons by React Icons
Weather data provided by OpenWeatherMap API
City data provided by OpenSoftData API

### License

Feel free to customize the README further to include any additional information or details specific to your project.






