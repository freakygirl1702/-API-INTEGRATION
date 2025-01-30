# -API-INTEGRATION
"COMPANY":CODETECH IT SOLUTIONS
"NAME":PERISETTI MOUNIKA VEERA VENKATA DURGA BHAVANI
"INTERN ID":CT12OBJ
"DOMAIN":FULLSTACK WEB DEVELOPMENT
"DURATION":8 WEEKS
"MENTOR":NEELA SANTOSH

DESCRIPTION:
TASK1:The primary objective of this task was to perform API integration by creating a responsive webpage that fetches and displays weather data from a public API. API integration involves connecting different software systems or applications through their Application Programming Interfaces (APIs) to enable seamless communication and data exchange. For this project,I selected a weather API from OpenWeatherMap.
PROJECT OVERVIEW:
I developed a simple weather application that retrieves and displays weather information for a user-specified location.The application consists of three main files: index.html,styles.css,and script.js.Each of these files plays a crucial role in the overall functionality and presentation of the webpage.

Tools used:HTML,CSS,JAVASCRIPT,OPEN WEATHER MAP API,VISUALSTUDIO(VS CODE).

HTML Structure (index.html):The index.html file is responsible for defining the structure of the webpage.I began by including metadata in the <head> section, such as the character encoding (UTF-8) and a link to our external CSS file (styles.css).The <body> section contains the visible content of the webpage.Within a <div> element with the class weather-widget,I included an <h1> heading displaying "Today's Weather,"an input field for the user to enter the city name,a button to trigger the weather data fetch,and paragraphs with IDs city,temperature,and humidity to display the fetched data.Finally, I linked to the external JavaScript file (script.js) using a <script> tag.

CSS Styling (styles.css):The styles.css file is used to enhance the visual appeal of the weather widget.The stylesheet sets the font family for the entire body to Arial, applies a flexbox layout to center the content,and sets the height to fill the viewport,among other styling choices.The .weather class styles the main container with properties such as a white background,padding,rounded corners,a subtle shadow,and centered text.Additional styles are applied to the paragraphs,input field,and button to improve the overall user experience.

JavaScript Functionality (script.js):The script.js file handles the core functionality of the application,including fetching and displaying weather data.To begin,I generated an API key by logging into the OpenWeatherMap API,registering,and obtaining the key from the "My API keys" section.I stored this API key and the  URL in constants within script.js.The getWeather function retrieves the city name entered by the user,constructs the API URL,and makes a fetch request to the OpenWeatherMap API.Upon receiving the response,the display Weather function updates the DOM elements with the fetched weather data.If the data is invalid,default values such as "Not found" or "N/A" are displayed.

therefore,This project highlights a robust approach to building a dynamic weather webpage using HTML,CSS,and JavaScript.By integrating data from an external API,managing user input,and updating the webpage content in real time,we create an engaging user experience.The harmonious combination of a well-organized HTML structure,appealing CSS designand and functional JavaScript code sets a solid groundwork.

OUTPUT:

