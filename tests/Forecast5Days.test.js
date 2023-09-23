// Import the necessary testing functions and your Svelte component
import { render } from '@testing-library/svelte';
import Forecast5Days from './Forecast5Days.svelte'; // Replace with the actual path to your component

// Create a test suite
describe('Forecast5Days Component', () => {
    it('renders 5-day forecast data', () => {
        // Define the data to be passed as a prop
        const forecastData = [
            {
                dt: 1632434400, // Replace with your date data
                weather: [{ description: 'Sunny', icon: '01d' }],
                temp: { min: 15, max: 25 }, // Replace with your temperature data
            },
            // Add more data for other days as needed
        ];

        // Render the component with the provided data
        const { getAllByText, getByText } = render(Forecast5Days, {
            props: { Forecast5DaysData: forecastData },
        });

        // Check if the component renders the expected content
        expect(getByText('5 Tage Vorhersage')).toBeInTheDocument();

        // Check if it renders data for each day
        forecastData.forEach((day) => {
            expect(getByText(calcDate(day.dt))).toBeInTheDocument();
            expect(getByText(day.weather[0].description)).toBeInTheDocument();
            expect(getByText(`Min: ${day.temp.min}°C`)).toBeInTheDocument();
            expect(getByText(`Max: ${day.temp.max}°C`)).toBeInTheDocument();
            expect(
                getByText(`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`)
            ).toBeInTheDocument();
        });
    });
});
