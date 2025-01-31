import React from 'react';

const cities = [
  { name: "New York", color: "blue" },
  { name: "London", color: "green" },
  { name: "Tokyo", color: "pink" }
];

// Component for the main page with city list
const City = () => {
  const openCityPage = (city) => {
    // Create the HTML content for the new page
    const newPageContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${city.name}</title>
          <style>
            body {
              margin: 0;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: ${city.color}50;
              font-family: Arial, sans-serif;
            }
            h1 {
              font-size: 2rem;
              color: #333;
            }
          </style>
        </head>
        <body style="background-color: ${city.color}50;">
          <h1 style="color: ${city.color}">Welcome to ${city.name}</h1>
        </body>
      </html>
    `;

    // Open new window and write the content
    const newWindow = window.open('', '_blank');
    newWindow.document.write(newPageContent);
    newWindow.document.close();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Cities</h1>
      <div className="flex gap-4">
        {cities.map(city => (
          <button
            key={city.name}
            onClick={() => openCityPage(city)}
            className="p-2 border rounded hover:bg-gray-100"
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default City;