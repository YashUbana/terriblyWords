Website Link : https://terribaly20words.netlify.app/

1) App.js

In this I have used "react-router-dom" package for switching between webpages
"BrowserRouter": This component enable client-side routing in my React Application.
 "Routes": This component used to map specific URLs corresponding React components which    enable navigation and rendering different views based on the URL path.
 “Route” : This component allows to define routes and their associated components.

2) Button.js

In this I have used “useNavigate” component and navigate on the click on “FETCH” button
“useNavigate”:It is a custom hook which gives access to navigate to different route within React App.

3) Fetchdata.js

i) In this I fetched the text from https://www.terriblytinytales.com/test.txt and stored them in a Array of object with data Entry as “name:” and “num:”. Then I sort them in ascending order to find the top 20 occurrence by slicing the first 20 object in the array.

ii) Then I created “convertToCSV” function to convert the data entries into CSV format. Which iterated over the data entries and created CSV rows by joining the values with commas. The headers row is added at the beginning representing the property names of the data entries.

iii) Then I created “downloadCSV” function to initiate the download of the CSV file. It creates a Blob object (Binary Large object) with the CSV data and generates a URL for it. Then it creates an “<a>” element with the download URL and triggers a click event.

4) Histogram.js
  
I have used “Recharts” library for creating histogram for bar chart representation. Because it easy to use and have reusable chart components such as line charts, bar charts, pie charts and many more.
