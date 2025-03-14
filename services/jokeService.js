
/**
 * The idea is that jokeService.js only takes care of getting the data 
 *  without worrying about its internal structure of the data.
 * 
 * fetchRandomJoke() just makes the API call, handles errors and passes 
 *  the resulting JSON to createJokeObject().
 * 
 * If a new API needs to be used:
 *    1.- Change the context of the Joke (JokeModel.js)
 *    2.- Change the URL in this file
 *    3.- Make sure that JokeCard.js can represent the data
 */

//Import the context to be sure of the data
import { createJokeObject } from '../context/JokeModel';

//Async fuction HTTP call to the API
export const fetchRandomJoke = async () => {
    try {
      
      // Define API URL
      // Correct request
      const API_URL = 'https://v2.jokeapi.dev/joke/Any';  
      // Expected 404 Error
      //const API_URL = 'https://v2.jokeapi.dev/invalidEndpoint';  
      // Expected 400 Error
      //const API_URL = 'https://v2.jokeapi.dev/joke/InvalidCategory';  
      // Expected 403 Error
      //const API_URL = 'https://v2.jokeapi.dev/joke/Any?apikey=INVALID_KEY';  
      // Expected 500 Error
      //const API_URL = 'https://httpstat.us/500';  
      
      // API Call
      const response = await fetch(API_URL);
            
      //If error, debug and catch
      if (!response.ok) { 
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      //Turn respose to JSON
      const data = await response.json();

      //Debug
      console.log("*** fetchRandomJoke ***\nData obtenido en formato JSON:\n", JSON.stringify(data, null, 2));
      
      //Create de object and be sure to use the correct format
      return createJokeObject(data); 

    } catch (error) {

      console.error("Error fetching joke:", error);

      //Return a error message
      return createJokeObject({
        error: true,
        code: error.message.includes("HTTP error!") ? error.message.split("Status: ")[1] : "Network Error",
        message: "Error while fetching joke from API.",
        additionalInfo: "Possible causes: No internet connection, API down, or incorrect URL."
      });
          }
};