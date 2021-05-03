```
npm install
npm run dev
```

**World Weather Online API free trial ends MAY 15, 2021**\


Zealandia is a 7-day surf forecast application displaying data specific to the regions of New Zealand, Each region displays muiltiple surf spots.\

This app uses multiple latitude & longitude GET requests to recieve data from a marine weather API.\

Each API call returns a very large JSON object, which I have turned into an easy to read table using Bootstrap. Using mainly React & Redux, I was able to use a single component to render the data for every API call. This worked by utilizing Redux to conditionally populate multiple states based on how the user interacted with the site.\

In the last image below you can see there are wind and swell images rendering. Green represents good, while orange & red represent moderate and bad. These images conditionally render depending on how both the wind & swell direction interact with the paticular location, as every location is unique. To get every location correct, I used a map and compass and learnt about different types of winds.\

![zealandia-north-island](https://user-images.githubusercontent.com/73860983/116836588-2df41f00-ac1b-11eb-9c61-7f0d97cf87c0.png)

![Screenshot (31)](https://user-images.githubusercontent.com/73860983/112794476-686e1780-90c3-11eb-83b6-97c451717c8d.png)
