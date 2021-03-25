## Warahi's personal project

Zealandia is a purely front end surf forecast app displaying data specific to the regions of New Zealand, and each region has a muiltiple surf spots. 

This app uses latitude & longitude in a GET request to recieve data from a marine weather API, and then displays it in it's own unique way using mainly react, redux and bootstrap. This app Also uses logic to display visuals when the wind and swell conditions are good, moderate or bad specifically dependant on the region that is currently being displayed.


## Data object shape

GET http://api.worldweatheronline.com/premium/v1/marine.ashx?
key=*APIKEY
[&format=json]
&q=*LATITUDE,*lONGITUDE
[&fx=yes]
[&tide=yes] will return the following object:

```
{
    "data": {
        "request": [
            {
                "type": "LatLon",
                "query": "Lat -39.81 and Lon 176.99"
            }
        ],
        "weather": [
            {
                "date": "2021-03-25",
                "astronomy": [
                    {
                        "sunrise": "07:20 AM",
                        "sunset": "07:16 PM",
                        "moonrise": "05:35 PM",
                        "moonset": "02:32 AM",
                        "moon_phase": "Full Moon",
                        "moon_illumination": "90"
                    }
                ],
                "maxtempC": "17",
                "maxtempF": "63",
                "mintempC": "15",
                "mintempF": "59",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "3:03 AM",
                                "tideHeight_mt": "1.53",
                                "tideDateTime": "2021-03-25 03:03",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "9:22 AM",
                                "tideHeight_mt": "0.32",
                                "tideDateTime": "2021-03-25 09:22",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "3:30 PM",
                                "tideHeight_mt": "1.43",
                                "tideDateTime": "2021-03-25 15:30",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "9:40 PM",
                                "tideHeight_mt": "0.30",
                                "tideDateTime": "2021-03-25 21:40",
                                "tide_type": "LOW"
                            }
                        ]
                    }
                ],
                "uvIndex": "4",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "16",
                        "tempF": "60",
                        "windspeedMiles": "7",
                        "windspeedKmph": "12",
                        "winddirDegree": "125",
                        "winddir16Point": "SE",
                        "weatherCode": "119",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "73",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "86",
                        "HeatIndexC": "16",
                        "HeatIndexF": "60",
                        "DewPointC": "11",
                        "DewPointF": "52",
                        "WindChillC": "16",
                        "WindChillF": "60",
                        "WindGustMiles": "9",
                        "WindGustKmph": "15",
                        "FeelsLikeC": "16",
                        "FeelsLikeF": "60",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "120",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "10.9",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "15",
                        "tempF": "59",
                        "windspeedMiles": "9",
                        "windspeedKmph": "14",
                        "winddirDegree": "125",
                        "winddir16Point": "SE",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.1",
                        "precipInches": "0.0",
                        "humidity": "79",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1019",
                        "pressureInches": "31",
                        "cloudcover": "68",
                        "HeatIndexC": "15",
                        "HeatIndexF": "59",
                        "DewPointC": "11",
                        "DewPointF": "52",
                        "WindChillC": "14",
                        "WindChillF": "57",
                        "WindGustMiles": "13",
                        "WindGustKmph": "22",
                        "FeelsLikeC": "14",
                        "FeelsLikeF": "57",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.9",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "15",
                        "tempF": "59",
                        "windspeedMiles": "6",
                        "windspeedKmph": "10",
                        "winddirDegree": "92",
                        "winddir16Point": "E",
                        "weatherCode": "266",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0033_cloudy_with_light_rain_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light drizzle"
                            }
                        ],
                        "precipMM": "0.6",
                        "precipInches": "0.0",
                        "humidity": "84",
                        "visibility": "2",
                        "visibilityMiles": "1",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "100",
                        "HeatIndexC": "15",
                        "HeatIndexF": "59",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "14",
                        "WindChillF": "58",
                        "WindGustMiles": "10",
                        "WindGustKmph": "16",
                        "FeelsLikeC": "14",
                        "FeelsLikeF": "58",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.7",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "2",
                        "windspeedKmph": "3",
                        "winddirDegree": "318",
                        "winddir16Point": "NW",
                        "weatherCode": "353",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "precipMM": "0.6",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "71",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "12",
                        "DewPointF": "53",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "12",
                        "WindGustKmph": "20",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.3",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1200",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "5",
                        "windspeedKmph": "9",
                        "winddirDegree": "279",
                        "winddir16Point": "W",
                        "weatherCode": "353",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "precipMM": "0.7",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "59",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "12",
                        "WindGustKmph": "20",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.2",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1500",
                        "tempC": "17",
                        "tempF": "63",
                        "windspeedMiles": "3",
                        "windspeedKmph": "4",
                        "winddirDegree": "306",
                        "winddir16Point": "NW",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.1",
                        "precipInches": "0.0",
                        "humidity": "71",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "54",
                        "HeatIndexC": "17",
                        "HeatIndexF": "63",
                        "DewPointC": "12",
                        "DewPointF": "53",
                        "WindChillC": "17",
                        "WindChillF": "63",
                        "WindGustMiles": "13",
                        "WindGustKmph": "21",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "63",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1800",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "4",
                        "windspeedKmph": "6",
                        "winddirDegree": "326",
                        "winddir16Point": "NW",
                        "weatherCode": "119",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "77",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "73",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "13",
                        "DewPointF": "55",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "12",
                        "WindGustKmph": "19",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "2100",
                        "tempC": "16",
                        "tempF": "62",
                        "windspeedMiles": "3",
                        "windspeedKmph": "5",
                        "winddirDegree": "15",
                        "winddir16Point": "NNE",
                        "weatherCode": "353",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "precipMM": "0.2",
                        "precipInches": "0.0",
                        "humidity": "80",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1024",
                        "pressureInches": "31",
                        "cloudcover": "86",
                        "HeatIndexC": "16",
                        "HeatIndexF": "62",
                        "DewPointC": "13",
                        "DewPointF": "55",
                        "WindChillC": "16",
                        "WindChillF": "62",
                        "WindGustMiles": "7",
                        "WindGustKmph": "12",
                        "FeelsLikeC": "16",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "9.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            },
            {
                "date": "2021-03-26",
                "astronomy": [
                    {
                        "sunrise": "07:21 AM",
                        "sunset": "07:15 PM",
                        "moonrise": "06:11 PM",
                        "moonset": "03:41 AM",
                        "moon_phase": "Full Moon",
                        "moon_illumination": "97"
                    }
                ],
                "maxtempC": "18",
                "maxtempF": "65",
                "mintempC": "14",
                "mintempF": "57",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "3:54 AM",
                                "tideHeight_mt": "1.55",
                                "tideDateTime": "2021-03-26 03:54",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "10:13 AM",
                                "tideHeight_mt": "0.26",
                                "tideDateTime": "2021-03-26 10:13",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "4:24 PM",
                                "tideHeight_mt": "1.47",
                                "tideDateTime": "2021-03-26 16:24",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "10:36 PM",
                                "tideHeight_mt": "0.23",
                                "tideDateTime": "2021-03-26 22:36",
                                "tide_type": "LOW"
                            }
                        ]
                    }
                ],
                "uvIndex": "4",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "15",
                        "tempF": "60",
                        "windspeedMiles": "10",
                        "windspeedKmph": "16",
                        "winddirDegree": "72",
                        "winddir16Point": "ENE",
                        "weatherCode": "353",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "precipMM": "0.4",
                        "precipInches": "0.0",
                        "humidity": "84",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1024",
                        "pressureInches": "31",
                        "cloudcover": "90",
                        "HeatIndexC": "15",
                        "HeatIndexF": "60",
                        "DewPointC": "13",
                        "DewPointF": "55",
                        "WindChillC": "15",
                        "WindChillF": "60",
                        "WindGustMiles": "21",
                        "WindGustKmph": "34",
                        "FeelsLikeC": "15",
                        "FeelsLikeF": "60",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "9.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "15",
                        "tempF": "58",
                        "windspeedMiles": "15",
                        "windspeedKmph": "24",
                        "winddirDegree": "67",
                        "winddir16Point": "ENE",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.1",
                        "precipInches": "0.0",
                        "humidity": "83",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1024",
                        "pressureInches": "31",
                        "cloudcover": "80",
                        "HeatIndexC": "15",
                        "HeatIndexF": "58",
                        "DewPointC": "12",
                        "DewPointF": "53",
                        "WindChillC": "14",
                        "WindChillF": "58",
                        "WindGustMiles": "26",
                        "WindGustKmph": "42",
                        "FeelsLikeC": "14",
                        "FeelsLikeF": "58",
                        "sigHeight_m": "0.6",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "8.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "14",
                        "tempF": "57",
                        "windspeedMiles": "11",
                        "windspeedKmph": "18",
                        "winddirDegree": "63",
                        "winddir16Point": "ENE",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.1",
                        "precipInches": "0.0",
                        "humidity": "83",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1024",
                        "pressureInches": "31",
                        "cloudcover": "80",
                        "HeatIndexC": "14",
                        "HeatIndexF": "57",
                        "DewPointC": "11",
                        "DewPointF": "52",
                        "WindChillC": "14",
                        "WindChillF": "57",
                        "WindGustMiles": "25",
                        "WindGustKmph": "40",
                        "FeelsLikeC": "14",
                        "FeelsLikeF": "57",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "1.0",
                        "swellHeight_ft": "3.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "8.4",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "14",
                        "tempF": "57",
                        "windspeedMiles": "4",
                        "windspeedKmph": "6",
                        "winddirDegree": "338",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "79",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1024",
                        "pressureInches": "31",
                        "cloudcover": "11",
                        "HeatIndexC": "14",
                        "HeatIndexF": "57",
                        "DewPointC": "10",
                        "DewPointF": "51",
                        "WindChillC": "14",
                        "WindChillF": "57",
                        "WindGustMiles": "15",
                        "WindGustKmph": "24",
                        "FeelsLikeC": "14",
                        "FeelsLikeF": "57",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "1.1",
                        "swellHeight_ft": "3.6",
                        "swellDir": "110",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "5.7",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1200",
                        "tempC": "16",
                        "tempF": "61",
                        "windspeedMiles": "9",
                        "windspeedKmph": "14",
                        "winddirDegree": "317",
                        "winddir16Point": "NW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1023",
                        "pressureInches": "31",
                        "cloudcover": "5",
                        "HeatIndexC": "16",
                        "HeatIndexF": "61",
                        "DewPointC": "11",
                        "DewPointF": "52",
                        "WindChillC": "16",
                        "WindChillF": "61",
                        "WindGustMiles": "13",
                        "WindGustKmph": "21",
                        "FeelsLikeC": "16",
                        "FeelsLikeF": "61",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "1.1",
                        "swellHeight_ft": "3.6",
                        "swellDir": "330",
                        "swellDir16Point": "NNW",
                        "swellPeriod_secs": "6.5",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1500",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "9",
                        "windspeedKmph": "15",
                        "winddirDegree": "314",
                        "winddir16Point": "NW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "77",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "15",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "14",
                        "DewPointF": "57",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "17",
                        "WindGustKmph": "27",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "1.0",
                        "swellHeight_ft": "3.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "8.9",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1800",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "8",
                        "windspeedKmph": "13",
                        "winddirDegree": "333",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "82",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "19",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "15",
                        "DewPointF": "59",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "12",
                        "WindGustKmph": "19",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "9.1",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "2100",
                        "tempC": "18",
                        "tempF": "64",
                        "windspeedMiles": "9",
                        "windspeedKmph": "15",
                        "winddirDegree": "4",
                        "winddir16Point": "N",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "84",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1023",
                        "pressureInches": "31",
                        "cloudcover": "31",
                        "HeatIndexC": "18",
                        "HeatIndexF": "64",
                        "DewPointC": "15",
                        "DewPointF": "59",
                        "WindChillC": "18",
                        "WindChillF": "64",
                        "WindGustMiles": "11",
                        "WindGustKmph": "17",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "64",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "9.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            },
            {
                "date": "2021-03-27",
                "astronomy": [
                    {
                        "sunrise": "07:22 AM",
                        "sunset": "07:13 PM",
                        "moonrise": "06:43 PM",
                        "moonset": "04:52 AM",
                        "moon_phase": "Waning Gibbous",
                        "moon_illumination": "97"
                    }
                ],
                "maxtempC": "22",
                "maxtempF": "72",
                "mintempC": "17",
                "mintempF": "62",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "4:46 AM",
                                "tideHeight_mt": "1.60",
                                "tideDateTime": "2021-03-27 04:46",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "11:06 AM",
                                "tideHeight_mt": "0.20",
                                "tideDateTime": "2021-03-27 11:06",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "5:17 PM",
                                "tideHeight_mt": "1.52",
                                "tideDateTime": "2021-03-27 17:17",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "11:30 PM",
                                "tideHeight_mt": "0.15",
                                "tideDateTime": "2021-03-27 23:30",
                                "tide_type": "LOW"
                            }
                        ]
                    }
                ],
                "uvIndex": "6",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "12",
                        "windspeedKmph": "19",
                        "winddirDegree": "45",
                        "winddir16Point": "NE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "77",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1023",
                        "pressureInches": "31",
                        "cloudcover": "8",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "13",
                        "DewPointF": "55",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "15",
                        "WindGustKmph": "23",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "1.0",
                        "swellHeight_ft": "3.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.1",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "14",
                        "windspeedKmph": "23",
                        "winddirDegree": "44",
                        "winddir16Point": "NE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "75",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1022",
                        "pressureInches": "31",
                        "cloudcover": "6",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "28",
                        "WindGustKmph": "45",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.6",
                        "swellHeight_m": "1.1",
                        "swellHeight_ft": "3.6",
                        "swellDir": "330",
                        "swellDir16Point": "NNW",
                        "swellPeriod_secs": "10.4",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "17",
                        "windspeedKmph": "27",
                        "winddirDegree": "342",
                        "winddir16Point": "NNW",
                        "weatherCode": "113",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "73",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1022",
                        "pressureInches": "31",
                        "cloudcover": "0",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "12",
                        "DewPointF": "53",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "18",
                        "WindGustKmph": "29",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.7",
                        "swellHeight_m": "1.2",
                        "swellHeight_ft": "3.9",
                        "swellDir": "330",
                        "swellDir16Point": "NNW",
                        "swellPeriod_secs": "10.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "18",
                        "tempF": "64",
                        "windspeedMiles": "13",
                        "windspeedKmph": "21",
                        "winddirDegree": "338",
                        "winddir16Point": "NNW",
                        "weatherCode": "113",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "70",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1023",
                        "pressureInches": "31",
                        "cloudcover": "0",
                        "HeatIndexC": "18",
                        "HeatIndexF": "64",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "18",
                        "WindChillF": "64",
                        "WindGustMiles": "20",
                        "WindGustKmph": "32",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "64",
                        "sigHeight_m": "0.5",
                        "swellHeight_m": "1.2",
                        "swellHeight_ft": "3.9",
                        "swellDir": "330",
                        "swellDir16Point": "NNW",
                        "swellPeriod_secs": "10.7",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1200",
                        "tempC": "19",
                        "tempF": "66",
                        "windspeedMiles": "9",
                        "windspeedKmph": "14",
                        "winddirDegree": "352",
                        "winddir16Point": "N",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "71",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "5",
                        "HeatIndexC": "19",
                        "HeatIndexF": "66",
                        "DewPointC": "14",
                        "DewPointF": "57",
                        "WindChillC": "19",
                        "WindChillF": "66",
                        "WindGustMiles": "23",
                        "WindGustKmph": "37",
                        "FeelsLikeC": "19",
                        "FeelsLikeF": "66",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "1.1",
                        "swellHeight_ft": "3.6",
                        "swellDir": "330",
                        "swellDir16Point": "NNW",
                        "swellPeriod_secs": "10.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1500",
                        "tempC": "20",
                        "tempF": "68",
                        "windspeedMiles": "8",
                        "windspeedKmph": "13",
                        "winddirDegree": "335",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "70",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "7",
                        "HeatIndexC": "20",
                        "HeatIndexF": "68",
                        "DewPointC": "15",
                        "DewPointF": "58",
                        "WindChillC": "20",
                        "WindChillF": "68",
                        "WindGustMiles": "25",
                        "WindGustKmph": "40",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "68",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "1.0",
                        "swellHeight_ft": "3.3",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.7",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "1800",
                        "tempC": "22",
                        "tempF": "72",
                        "windspeedMiles": "6",
                        "windspeedKmph": "9",
                        "winddirDegree": "331",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "55",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1019",
                        "pressureInches": "31",
                        "cloudcover": "11",
                        "HeatIndexC": "25",
                        "HeatIndexF": "76",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "22",
                        "WindChillF": "72",
                        "WindGustMiles": "26",
                        "WindGustKmph": "42",
                        "FeelsLikeC": "25",
                        "FeelsLikeF": "76",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "2100",
                        "tempC": "20",
                        "tempF": "67",
                        "windspeedMiles": "6",
                        "windspeedKmph": "10",
                        "winddirDegree": "0",
                        "winddir16Point": "N",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "68",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "15",
                        "HeatIndexC": "20",
                        "HeatIndexF": "67",
                        "DewPointC": "14",
                        "DewPointF": "56",
                        "WindChillC": "20",
                        "WindChillF": "67",
                        "WindGustMiles": "12",
                        "WindGustKmph": "20",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "67",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            },
            {
                "date": "2021-03-28",
                "astronomy": [
                    {
                        "sunrise": "07:23 AM",
                        "sunset": "07:12 PM",
                        "moonrise": "07:13 PM",
                        "moonset": "06:05 AM",
                        "moon_phase": "Waning Gibbous",
                        "moon_illumination": "90"
                    }
                ],
                "maxtempC": "21",
                "maxtempF": "69",
                "mintempC": "17",
                "mintempF": "63",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "5:41 AM",
                                "tideHeight_mt": "1.66",
                                "tideDateTime": "2021-03-28 05:41",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "12:00 PM",
                                "tideHeight_mt": "0.14",
                                "tideDateTime": "2021-03-28 12:00",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "6:11 PM",
                                "tideHeight_mt": "1.60",
                                "tideDateTime": "2021-03-28 18:11",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "12:23 AM",
                                "tideHeight_mt": "0.08",
                                "tideDateTime": "2021-03-29 00:23",
                                "tide_type": "LOW"
                            }
                        ]
                    }
                ],
                "uvIndex": "6",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "7",
                        "windspeedKmph": "12",
                        "winddirDegree": "14",
                        "winddir16Point": "NNE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1021",
                        "pressureInches": "31",
                        "cloudcover": "27",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "14",
                        "DewPointF": "57",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "9",
                        "WindGustKmph": "14",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.7",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "18",
                        "tempF": "64",
                        "windspeedMiles": "11",
                        "windspeedKmph": "18",
                        "winddirDegree": "35",
                        "winddir16Point": "NE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "75",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "48",
                        "HeatIndexC": "18",
                        "HeatIndexF": "64",
                        "DewPointC": "14",
                        "DewPointF": "56",
                        "WindChillC": "18",
                        "WindChillF": "64",
                        "WindGustMiles": "11",
                        "WindGustKmph": "18",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "64",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.7",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "17",
                        "tempF": "63",
                        "windspeedMiles": "12",
                        "windspeedKmph": "19",
                        "winddirDegree": "14",
                        "winddir16Point": "NNE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "48",
                        "HeatIndexC": "17",
                        "HeatIndexF": "63",
                        "DewPointC": "13",
                        "DewPointF": "55",
                        "WindChillC": "17",
                        "WindChillF": "63",
                        "WindGustMiles": "19",
                        "WindGustKmph": "30",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "63",
                        "sigHeight_m": "0.5",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "50",
                        "swellDir16Point": "NE",
                        "swellPeriod_secs": "10.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "18",
                        "tempF": "64",
                        "windspeedMiles": "10",
                        "windspeedKmph": "15",
                        "winddirDegree": "15",
                        "winddir16Point": "NNE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "72",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1020",
                        "pressureInches": "31",
                        "cloudcover": "45",
                        "HeatIndexC": "18",
                        "HeatIndexF": "64",
                        "DewPointC": "13",
                        "DewPointF": "55",
                        "WindChillC": "18",
                        "WindChillF": "64",
                        "WindGustMiles": "19",
                        "WindGustKmph": "30",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "64",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.5",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1200",
                        "tempC": "20",
                        "tempF": "67",
                        "windspeedMiles": "9",
                        "windspeedKmph": "14",
                        "winddirDegree": "5",
                        "winddir16Point": "N",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "72",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1019",
                        "pressureInches": "31",
                        "cloudcover": "28",
                        "HeatIndexC": "20",
                        "HeatIndexF": "67",
                        "DewPointC": "14",
                        "DewPointF": "58",
                        "WindChillC": "20",
                        "WindChillF": "67",
                        "WindGustMiles": "11",
                        "WindGustKmph": "18",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "67",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.3",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1500",
                        "tempC": "20",
                        "tempF": "69",
                        "windspeedMiles": "8",
                        "windspeedKmph": "13",
                        "winddirDegree": "6",
                        "winddir16Point": "N",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "71",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1017",
                        "pressureInches": "31",
                        "cloudcover": "32",
                        "HeatIndexC": "20",
                        "HeatIndexF": "69",
                        "DewPointC": "15",
                        "DewPointF": "59",
                        "WindChillC": "20",
                        "WindChillF": "69",
                        "WindGustMiles": "20",
                        "WindGustKmph": "32",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "69",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.2",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "1800",
                        "tempC": "21",
                        "tempF": "69",
                        "windspeedMiles": "9",
                        "windspeedKmph": "14",
                        "winddirDegree": "16",
                        "winddir16Point": "NNE",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "71",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1016",
                        "pressureInches": "30",
                        "cloudcover": "46",
                        "HeatIndexC": "21",
                        "HeatIndexF": "69",
                        "DewPointC": "15",
                        "DewPointF": "59",
                        "WindChillC": "21",
                        "WindChillF": "69",
                        "WindGustMiles": "19",
                        "WindGustKmph": "31",
                        "FeelsLikeC": "21",
                        "FeelsLikeF": "69",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.1",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "2100",
                        "tempC": "20",
                        "tempF": "67",
                        "windspeedMiles": "11",
                        "windspeedKmph": "17",
                        "winddirDegree": "15",
                        "winddir16Point": "NNE",
                        "weatherCode": "122",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "76",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1017",
                        "pressureInches": "30",
                        "cloudcover": "95",
                        "HeatIndexC": "20",
                        "HeatIndexF": "67",
                        "DewPointC": "15",
                        "DewPointF": "60",
                        "WindChillC": "20",
                        "WindChillF": "67",
                        "WindGustMiles": "25",
                        "WindGustKmph": "40",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "67",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            },
            {
                "date": "2021-03-29",
                "astronomy": [
                    {
                        "sunrise": "07:24 AM",
                        "sunset": "07:10 PM",
                        "moonrise": "07:43 PM",
                        "moonset": "07:19 AM",
                        "moon_phase": "Waning Gibbous",
                        "moon_illumination": "83"
                    }
                ],
                "maxtempC": "23",
                "maxtempF": "73",
                "mintempC": "18",
                "mintempF": "65",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "6:36 AM",
                                "tideHeight_mt": "1.73",
                                "tideDateTime": "2021-03-29 06:36",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "12:55 PM",
                                "tideHeight_mt": "0.09",
                                "tideDateTime": "2021-03-29 12:55",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "7:06 PM",
                                "tideHeight_mt": "1.69",
                                "tideDateTime": "2021-03-29 19:06",
                                "tide_type": "HIGH"
                            }
                        ]
                    }
                ],
                "uvIndex": "5",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "19",
                        "tempF": "67",
                        "windspeedMiles": "12",
                        "windspeedKmph": "19",
                        "winddirDegree": "349",
                        "winddir16Point": "N",
                        "weatherCode": "119",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "79",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1016",
                        "pressureInches": "30",
                        "cloudcover": "81",
                        "HeatIndexC": "19",
                        "HeatIndexF": "67",
                        "DewPointC": "16",
                        "DewPointF": "60",
                        "WindChillC": "19",
                        "WindChillF": "67",
                        "WindGustMiles": "19",
                        "WindGustKmph": "30",
                        "FeelsLikeC": "19",
                        "FeelsLikeF": "67",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "19",
                        "tempF": "66",
                        "windspeedMiles": "15",
                        "windspeedKmph": "24",
                        "winddirDegree": "335",
                        "winddir16Point": "NNW",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.1",
                        "precipInches": "0.0",
                        "humidity": "82",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1014",
                        "pressureInches": "30",
                        "cloudcover": "81",
                        "HeatIndexC": "19",
                        "HeatIndexF": "66",
                        "DewPointC": "16",
                        "DewPointF": "60",
                        "WindChillC": "19",
                        "WindChillF": "66",
                        "WindGustMiles": "19",
                        "WindGustKmph": "31",
                        "FeelsLikeC": "19",
                        "FeelsLikeF": "66",
                        "sigHeight_m": "0.6",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "10.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "14",
                        "windspeedKmph": "23",
                        "winddirDegree": "333",
                        "winddir16Point": "NNW",
                        "weatherCode": "122",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "85",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1014",
                        "pressureInches": "30",
                        "cloudcover": "93",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "16",
                        "DewPointF": "60",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "26",
                        "WindGustKmph": "41",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.6",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.9",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "19",
                        "tempF": "67",
                        "windspeedMiles": "11",
                        "windspeedKmph": "18",
                        "winddirDegree": "332",
                        "winddir16Point": "NNW",
                        "weatherCode": "266",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0017_cloudy_with_light_rain.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light drizzle"
                            }
                        ],
                        "precipMM": "0.4",
                        "precipInches": "0.0",
                        "humidity": "81",
                        "visibility": "2",
                        "visibilityMiles": "1",
                        "pressure": "1013",
                        "pressureInches": "30",
                        "cloudcover": "100",
                        "HeatIndexC": "19",
                        "HeatIndexF": "67",
                        "DewPointC": "16",
                        "DewPointF": "61",
                        "WindChillC": "19",
                        "WindChillF": "67",
                        "WindGustMiles": "26",
                        "WindGustKmph": "42",
                        "FeelsLikeC": "19",
                        "FeelsLikeF": "67",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "10",
                        "swellDir16Point": "N",
                        "swellPeriod_secs": "7.2",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1200",
                        "tempC": "22",
                        "tempF": "72",
                        "windspeedMiles": "7",
                        "windspeedKmph": "11",
                        "winddirDegree": "344",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "65",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1012",
                        "pressureInches": "30",
                        "cloudcover": "54",
                        "HeatIndexC": "25",
                        "HeatIndexF": "76",
                        "DewPointC": "15",
                        "DewPointF": "59",
                        "WindChillC": "22",
                        "WindChillF": "72",
                        "WindGustMiles": "25",
                        "WindGustKmph": "41",
                        "FeelsLikeC": "25",
                        "FeelsLikeF": "76",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.6",
                        "swellHeight_ft": "2.0",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "1500",
                        "tempC": "23",
                        "tempF": "73",
                        "windspeedMiles": "5",
                        "windspeedKmph": "9",
                        "winddirDegree": "334",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "58",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1010",
                        "pressureInches": "30",
                        "cloudcover": "19",
                        "HeatIndexC": "25",
                        "HeatIndexF": "77",
                        "DewPointC": "14",
                        "DewPointF": "58",
                        "WindChillC": "23",
                        "WindChillF": "73",
                        "WindGustMiles": "30",
                        "WindGustKmph": "49",
                        "FeelsLikeC": "25",
                        "FeelsLikeF": "77",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.6",
                        "swellHeight_ft": "2.0",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.6",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "1800",
                        "tempC": "22",
                        "tempF": "71",
                        "windspeedMiles": "7",
                        "windspeedKmph": "11",
                        "winddirDegree": "328",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "64",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "cloudcover": "13",
                        "HeatIndexC": "25",
                        "HeatIndexF": "76",
                        "DewPointC": "15",
                        "DewPointF": "58",
                        "WindChillC": "22",
                        "WindChillF": "71",
                        "WindGustMiles": "32",
                        "WindGustKmph": "52",
                        "FeelsLikeC": "22",
                        "FeelsLikeF": "71",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.5",
                        "swellHeight_ft": "1.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.4",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "2100",
                        "tempC": "20",
                        "tempF": "67",
                        "windspeedMiles": "8",
                        "windspeedKmph": "13",
                        "winddirDegree": "337",
                        "winddir16Point": "NNW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1010",
                        "pressureInches": "30",
                        "cloudcover": "4",
                        "HeatIndexC": "20",
                        "HeatIndexF": "67",
                        "DewPointC": "15",
                        "DewPointF": "58",
                        "WindChillC": "20",
                        "WindChillF": "67",
                        "WindGustMiles": "25",
                        "WindGustKmph": "40",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "67",
                        "sigHeight_m": "0.3",
                        "swellHeight_m": "0.5",
                        "swellHeight_ft": "1.6",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.3",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            },
            {
                "date": "2021-03-30",
                "astronomy": [
                    {
                        "sunrise": "07:25 AM",
                        "sunset": "07:08 PM",
                        "moonrise": "08:13 PM",
                        "moonset": "08:34 AM",
                        "moon_phase": "Waning Gibbous",
                        "moon_illumination": "76"
                    }
                ],
                "maxtempC": "21",
                "maxtempF": "71",
                "mintempC": "18",
                "mintempF": "65",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "1:15 AM",
                                "tideHeight_mt": "0.03",
                                "tideDateTime": "2021-03-30 01:15",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "7:30 AM",
                                "tideHeight_mt": "1.80",
                                "tideDateTime": "2021-03-30 07:30",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "1:49 PM",
                                "tideHeight_mt": "0.05",
                                "tideDateTime": "2021-03-30 13:49",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "8:01 PM",
                                "tideHeight_mt": "1.77",
                                "tideDateTime": "2021-03-30 20:01",
                                "tide_type": "HIGH"
                            }
                        ]
                    }
                ],
                "uvIndex": "6",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "7",
                        "windspeedKmph": "11",
                        "winddirDegree": "356",
                        "winddir16Point": "N",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "74",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1010",
                        "pressureInches": "30",
                        "cloudcover": "5",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "14",
                        "DewPointF": "56",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "19",
                        "WindGustKmph": "31",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.2",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "5",
                        "windspeedKmph": "8",
                        "winddirDegree": "291",
                        "winddir16Point": "WNW",
                        "weatherCode": "119",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "75",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1008",
                        "pressureInches": "30",
                        "cloudcover": "70",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "14",
                        "DewPointF": "57",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "20",
                        "WindGustKmph": "32",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.1",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "19",
                        "tempF": "66",
                        "windspeedMiles": "5",
                        "windspeedKmph": "8",
                        "winddirDegree": "222",
                        "winddir16Point": "SW",
                        "weatherCode": "119",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "71",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "cloudcover": "85",
                        "HeatIndexC": "19",
                        "HeatIndexF": "66",
                        "DewPointC": "14",
                        "DewPointF": "57",
                        "WindChillC": "19",
                        "WindChillF": "66",
                        "WindGustMiles": "22",
                        "WindGustKmph": "35",
                        "FeelsLikeC": "19",
                        "FeelsLikeF": "66",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "30",
                        "swellDir16Point": "NNE",
                        "swellPeriod_secs": "6.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "19",
                        "tempF": "66",
                        "windspeedMiles": "2",
                        "windspeedKmph": "4",
                        "winddirDegree": "192",
                        "winddir16Point": "SSW",
                        "weatherCode": "122",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "73",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "cloudcover": "90",
                        "HeatIndexC": "19",
                        "HeatIndexF": "66",
                        "DewPointC": "14",
                        "DewPointF": "57",
                        "WindChillC": "19",
                        "WindChillF": "66",
                        "WindGustMiles": "20",
                        "WindGustKmph": "32",
                        "FeelsLikeC": "19",
                        "FeelsLikeF": "66",
                        "sigHeight_m": "0.1",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "9.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1200",
                        "tempC": "20",
                        "tempF": "69",
                        "windspeedMiles": "6",
                        "windspeedKmph": "10",
                        "winddirDegree": "274",
                        "winddir16Point": "W",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "64",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1008",
                        "pressureInches": "30",
                        "cloudcover": "56",
                        "HeatIndexC": "20",
                        "HeatIndexF": "69",
                        "DewPointC": "13",
                        "DewPointF": "56",
                        "WindChillC": "20",
                        "WindChillF": "69",
                        "WindGustMiles": "23",
                        "WindGustKmph": "38",
                        "FeelsLikeC": "20",
                        "FeelsLikeF": "69",
                        "sigHeight_m": "0.2",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "60",
                        "swellDir16Point": "ENE",
                        "swellPeriod_secs": "8.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "1500",
                        "tempC": "21",
                        "tempF": "71",
                        "windspeedMiles": "11",
                        "windspeedKmph": "18",
                        "winddirDegree": "229",
                        "winddir16Point": "SW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "55",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1006",
                        "pressureInches": "30",
                        "cloudcover": "8",
                        "HeatIndexC": "24",
                        "HeatIndexF": "76",
                        "DewPointC": "12",
                        "DewPointF": "53",
                        "WindChillC": "21",
                        "WindChillF": "71",
                        "WindGustMiles": "33",
                        "WindGustKmph": "53",
                        "FeelsLikeC": "21",
                        "FeelsLikeF": "71",
                        "sigHeight_m": "0.4",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "120",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "7.3",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "1800",
                        "tempC": "21",
                        "tempF": "69",
                        "windspeedMiles": "15",
                        "windspeedKmph": "24",
                        "winddirDegree": "243",
                        "winddir16Point": "WSW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "59",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1005",
                        "pressureInches": "30",
                        "cloudcover": "31",
                        "HeatIndexC": "21",
                        "HeatIndexF": "69",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "21",
                        "WindChillF": "69",
                        "WindGustMiles": "26",
                        "WindGustKmph": "42",
                        "FeelsLikeC": "21",
                        "FeelsLikeF": "69",
                        "sigHeight_m": "0.6",
                        "swellHeight_m": "0.4",
                        "swellHeight_ft": "1.3",
                        "swellDir": "120",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "6.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "6"
                    },
                    {
                        "time": "2100",
                        "tempC": "18",
                        "tempF": "65",
                        "windspeedMiles": "18",
                        "windspeedKmph": "30",
                        "winddirDegree": "227",
                        "winddir16Point": "SW",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.2",
                        "precipInches": "0.0",
                        "humidity": "67",
                        "visibility": "9",
                        "visibilityMiles": "5",
                        "pressure": "1007",
                        "pressureInches": "30",
                        "cloudcover": "74",
                        "HeatIndexC": "18",
                        "HeatIndexF": "65",
                        "DewPointC": "12",
                        "DewPointF": "54",
                        "WindChillC": "18",
                        "WindChillF": "65",
                        "WindGustMiles": "32",
                        "WindGustKmph": "51",
                        "FeelsLikeC": "18",
                        "FeelsLikeF": "65",
                        "sigHeight_m": "0.8",
                        "swellHeight_m": "0.5",
                        "swellHeight_ft": "1.6",
                        "swellDir": "120",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "6.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            },
            {
                "date": "2021-03-31",
                "astronomy": [
                    {
                        "sunrise": "07:26 AM",
                        "sunset": "07:07 PM",
                        "moonrise": "08:46 PM",
                        "moonset": "09:50 AM",
                        "moon_phase": "Last Quarter",
                        "moon_illumination": "69"
                    }
                ],
                "maxtempC": "17",
                "maxtempF": "62",
                "mintempC": "13",
                "mintempF": "56",
                "tides": [
                    {
                        "tide_data": [
                            {
                                "tideTime": "2:10 AM",
                                "tideHeight_mt": "0.01",
                                "tideDateTime": "2021-03-31 02:10",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "8:24 AM",
                                "tideHeight_mt": "1.84",
                                "tideDateTime": "2021-03-31 08:24",
                                "tide_type": "HIGH"
                            },
                            {
                                "tideTime": "2:41 PM",
                                "tideHeight_mt": "0.03",
                                "tideDateTime": "2021-03-31 14:41",
                                "tide_type": "LOW"
                            },
                            {
                                "tideTime": "8:54 PM",
                                "tideHeight_mt": "1.85",
                                "tideDateTime": "2021-03-31 20:54",
                                "tide_type": "HIGH"
                            }
                        ]
                    }
                ],
                "uvIndex": "5",
                "hourly": [
                    {
                        "time": "0",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "13",
                        "windspeedKmph": "21",
                        "winddirDegree": "216",
                        "winddir16Point": "SW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "61",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1007",
                        "pressureInches": "30",
                        "cloudcover": "15",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "9",
                        "DewPointF": "49",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "17",
                        "WindGustKmph": "28",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "0.5",
                        "swellHeight_m": "0.5",
                        "swellHeight_ft": "1.6",
                        "swellDir": "110",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "7.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "300",
                        "tempC": "15",
                        "tempF": "60",
                        "windspeedMiles": "20",
                        "windspeedKmph": "32",
                        "winddirDegree": "221",
                        "winddir16Point": "SW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "65",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1007",
                        "pressureInches": "30",
                        "cloudcover": "1",
                        "HeatIndexC": "15",
                        "HeatIndexF": "60",
                        "DewPointC": "9",
                        "DewPointF": "48",
                        "WindChillC": "15",
                        "WindChillF": "60",
                        "WindGustMiles": "31",
                        "WindGustKmph": "50",
                        "FeelsLikeC": "15",
                        "FeelsLikeF": "60",
                        "sigHeight_m": "0.8",
                        "swellHeight_m": "0.6",
                        "swellHeight_ft": "2.0",
                        "swellDir": "110",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "7.0",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "600",
                        "tempC": "13",
                        "tempF": "56",
                        "windspeedMiles": "17",
                        "windspeedKmph": "28",
                        "winddirDegree": "224",
                        "winddir16Point": "SW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "73",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "cloudcover": "5",
                        "HeatIndexC": "13",
                        "HeatIndexF": "56",
                        "DewPointC": "9",
                        "DewPointF": "47",
                        "WindChillC": "12",
                        "WindChillF": "53",
                        "WindGustMiles": "24",
                        "WindGustKmph": "39",
                        "FeelsLikeC": "12",
                        "FeelsLikeF": "53",
                        "sigHeight_m": "0.7",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "110",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "8.5",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    },
                    {
                        "time": "900",
                        "tempC": "14",
                        "tempF": "56",
                        "windspeedMiles": "16",
                        "windspeedKmph": "26",
                        "winddirDegree": "250",
                        "winddir16Point": "WSW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "68",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "cloudcover": "19",
                        "HeatIndexC": "14",
                        "HeatIndexF": "56",
                        "DewPointC": "8",
                        "DewPointF": "46",
                        "WindChillC": "13",
                        "WindChillF": "56",
                        "WindGustMiles": "28",
                        "WindGustKmph": "44",
                        "FeelsLikeC": "13",
                        "FeelsLikeF": "56",
                        "sigHeight_m": "0.7",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "110",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "10.3",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1200",
                        "tempC": "17",
                        "tempF": "62",
                        "windspeedMiles": "23",
                        "windspeedKmph": "38",
                        "winddirDegree": "256",
                        "winddir16Point": "WSW",
                        "weatherCode": "116",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "precipMM": "0.0",
                        "precipInches": "0.0",
                        "humidity": "60",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "cloudcover": "29",
                        "HeatIndexC": "17",
                        "HeatIndexF": "62",
                        "DewPointC": "9",
                        "DewPointF": "48",
                        "WindChillC": "17",
                        "WindChillF": "62",
                        "WindGustMiles": "37",
                        "WindGustKmph": "59",
                        "FeelsLikeC": "17",
                        "FeelsLikeF": "62",
                        "sigHeight_m": "1.1",
                        "swellHeight_m": "0.7",
                        "swellHeight_ft": "2.3",
                        "swellDir": "120",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "12.5",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "5"
                    },
                    {
                        "time": "1500",
                        "tempC": "16",
                        "tempF": "60",
                        "windspeedMiles": "23",
                        "windspeedKmph": "37",
                        "winddirDegree": "232",
                        "winddir16Point": "SW",
                        "weatherCode": "353",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "precipMM": "0.4",
                        "precipInches": "0.0",
                        "humidity": "69",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1010",
                        "pressureInches": "30",
                        "cloudcover": "100",
                        "HeatIndexC": "16",
                        "HeatIndexF": "60",
                        "DewPointC": "10",
                        "DewPointF": "50",
                        "WindChillC": "16",
                        "WindChillF": "60",
                        "WindGustMiles": "36",
                        "WindGustKmph": "58",
                        "FeelsLikeC": "16",
                        "FeelsLikeF": "60",
                        "sigHeight_m": "1.0",
                        "swellHeight_m": "0.8",
                        "swellHeight_ft": "2.6",
                        "swellDir": "120",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "13.2",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "4"
                    },
                    {
                        "time": "1800",
                        "tempC": "14",
                        "tempF": "58",
                        "windspeedMiles": "21",
                        "windspeedKmph": "34",
                        "winddirDegree": "234",
                        "winddir16Point": "SW",
                        "weatherCode": "176",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "precipMM": "0.1",
                        "precipInches": "0.0",
                        "humidity": "76",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "pressure": "1011",
                        "pressureInches": "30",
                        "cloudcover": "87",
                        "HeatIndexC": "14",
                        "HeatIndexF": "58",
                        "DewPointC": "10",
                        "DewPointF": "50",
                        "WindChillC": "12",
                        "WindChillF": "54",
                        "WindGustMiles": "26",
                        "WindGustKmph": "42",
                        "FeelsLikeC": "12",
                        "FeelsLikeF": "54",
                        "sigHeight_m": "0.9",
                        "swellHeight_m": "0.9",
                        "swellHeight_ft": "3.0",
                        "swellDir": "110",
                        "swellDir16Point": "ESE",
                        "swellPeriod_secs": "8.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "3"
                    },
                    {
                        "time": "2100",
                        "tempC": "14",
                        "tempF": "56",
                        "windspeedMiles": "24",
                        "windspeedKmph": "39",
                        "winddirDegree": "229",
                        "winddir16Point": "SW",
                        "weatherCode": "263",
                        "weatherIconUrl": [
                            {
                                "value": "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                            }
                        ],
                        "weatherDesc": [
                            {
                                "value": "Patchy light drizzle"
                            }
                        ],
                        "precipMM": "0.2",
                        "precipInches": "0.0",
                        "humidity": "77",
                        "visibility": "5",
                        "visibilityMiles": "3",
                        "pressure": "1013",
                        "pressureInches": "30",
                        "cloudcover": "74",
                        "HeatIndexC": "14",
                        "HeatIndexF": "56",
                        "DewPointC": "10",
                        "DewPointF": "49",
                        "WindChillC": "11",
                        "WindChillF": "51",
                        "WindGustMiles": "30",
                        "WindGustKmph": "49",
                        "FeelsLikeC": "11",
                        "FeelsLikeF": "51",
                        "sigHeight_m": "1.1",
                        "swellHeight_m": "1.0",
                        "swellHeight_ft": "3.3",
                        "swellDir": "100",
                        "swellDir16Point": "E",
                        "swellPeriod_secs": "8.8",
                        "waterTemp_C": "19",
                        "waterTemp_F": "66",
                        "uvIndex": "1"
                    }
                ]
            }
        ]
    }
}
```








