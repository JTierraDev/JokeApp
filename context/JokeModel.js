/**
 * 03-12-25. Jaime Tierra
 * 
 * Joke Structure Based on the API https://v2.jokeapi.dev/
 *
 * Consulted at 03-12-25
 * 
 *  Standardizes the structure of jokes retrieved from the API.
 * 
 *  The API provides three types of responses:
 * 
 *    1.- SINGLE JOKE (One-line joke)
 *    
 *    {
 *       "error": false,
 *       "category": "Programming",
 *       "type": "single",
 *       "joke": "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
 *       "flags": {
 *           "nsfw": false,
 *           "religious": false,
 *           "political": false,
 *           "racist": false,
 *           "sexist": false,
 *           "explicit": false
 *       },
 *       "id": 124,
 *       "safe": true,
 *       "lang": "en"
 *    }
 * 
 *    2. TWO PART JOKES (setup and delivery)
 * 
 *     {
 *        "error": false,
 *        "category": "Misc",
 *        "type": "twopart",
 *        "setup": "Why did the scarecrow win an award?",
 *        "delivery": "Because he was outstanding in his field!",
 *        "flags": {
 *            "nsfw": false,
 *            "religious": false,
 *            "political": false,
 *            "racist": false,
 *            "sexist": false,
 *            "explicit": false
 *        },
 *        "id": 789,
 *        "safe": true,
 *        "lang": "en"
 *     }
 * 
 *    3. ERROR RESPONSE (Invalid request, API issues, etc.)
 *     {
 *        "error": true,
 *        "code": 106,
 *        "message": "No matching joke found",
 *        "additionalInfo": "This API endpoint only serves jokes from selected categories."
 *     }
 * 
 *  Status Codes:
 *    - 200: OK (Success)
 *    - 201: Created (Successful joke submission)
 *    - 400: Bad Request (Incorrect API request)
 *    - 403: Forbidden (User blocked due to malicious behavior)
 *    - 404: Not Found (Invalid endpoint)
 *    - 429: Too Many Requests (Rate limit exceeded)
 *    - 500: Internal Server Error (Server-side failure)
 * 
 *        Success 20X • Client Error 4XX • Server Error  5XX
 * 
 * 
 *  - The app always stores structured joke objects
 *  - All relevant joke details (including errors) are preserved
 *  - API changes do not affect the application's logic
 * 
 * 
 */

//  Data represents the JSON Response from the API
//
//  Ensures all received data is correctly formatted.
//
//  Converts missing or invalid data into a default structured format
//
//  Prevents app crashes due to unexpected API responses
//
//  Adds unique IDs for both jokes and error responses.
//
export const createJokeObject = (data) => {

  // If API don't work or data not valid
  if (!data || typeof data !== "object") {
    return {
      id: `error-${Date.now()}`, // ID único para errores
      category: "Error (Invalid Response)",
      content: "Invalid response received from API.",
      flags: {},
      safe: false,
      lang: "N/A",
    };
  }
  
  // If error, return JSON object with info
  if (data.error) {
    return {
        //id: null,
        id: `error-${Date.now()}`,
        //category: "Error",
        category: `Error (Code ${data.code || "Unknown"})`,
        //content: data.message || "An unknown error occurred while fetching the joke.",
        content: `${data.message || "An unknown error occurred."}\n\n${data.additionalInfo || ""}`,
        flags: {},
        safe: false,
        lang: "N/A",
      };
  }

  return {
    //id: data.id || null,                 // ID único del chiste
    //id: data.id !== undefined ? data.id : null,
    id: data.id ?? `joke-${Date.now()}`,

    //category: data.category || "Unknown", // Categoría del chiste
    category: typeof data.category === "string" ? data.category : "Unknown",

    //type: data.type || "Unknown",         // Tipo de chiste (single / twopart)
    type: ["single", "twopart"].includes(data.type) ? data.type : "Unknown",

//    content: data.type === "single"
//      ? data.joke
//      : `${data.setup}\n\n${data.delivery}`, // Texto del chiste, formateado
    content: data.type === "single"
      ? data.joke ?? "No joke available"
      : `${data.setup ?? "Missing setup"}\n\n${data.delivery ?? "Missing delivery"}`,
      
    //flags: Object.values(data.flags).some(value => value)
    //? data.flags // Si hay algún flag en `true`, los mantenemos
    //: { None: true }, // Si no hay flags activados, agregamos `none: true`
    flags: data.flags && Object.values(data.flags).some(value => value)
    ? data.flags
    : { None: true },
    
    //safe: data.safe ?? true,
    safe: typeof data.safe === "boolean" ? data.safe : true,

    //lang: data.lang || "en",             
    lang: typeof data.lang === "string" ? data.lang : "en",

  };
};