# Class 08

## Express routing and Param Middleware

- Previous labs were monolithic. Now we will define all of our routing in a separate file.
- Welcome the express.Router();
- Router is used for modularizing. We want routing logic in another file so we can tinker with it and not break something in the server file where many people are probably working. 

## New Middleware

- Cors
  - www.mysite.com --> api.superradservice.com       <------- different origins
  - API asks: "Can a different service access my resources from their origin?"
  - Cors lets us grab resources hosted at a diff origin.

- Morgan
  - Tracks requests across our app
  - pulls off method and route, looks at how long it took to get response.
