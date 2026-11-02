# Palladium Price API

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies, 7- and 30-day changes, 30-day stats, and hourly and 30-day daily history.

[![npm version](https://img.shields.io/npm/v/@apiverve/palladiumprice.svg)](https://www.npmjs.com/package/@apiverve/palladiumprice)

This is a JavaScript wrapper for the [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/palladiumprice
```

Using yarn:
```shell
yarn add @apiverve/palladiumprice
```

---

## Configuration

Before using the Palladium Price API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Palladium Price API documentation is found here: [https://docs.apiverve.com/ref/palladiumprice](https://docs.apiverve.com/ref/palladiumprice?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const palladiumpriceAPI = require('@apiverve/palladiumprice');
const api = new palladiumpriceAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  currency: "USD",
  hourly: false,
  daily: false
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  currency: "USD",
  hourly: false,
  daily: false
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  currency: "USD",
  hourly: false,
  daily: false
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "currency": "USD",
    "gram": 33.47,
    "kilogram": 33466.63,
    "ounce": 1040.93,
    "lastUpdated": "2026-10-27T12:00:00.000Z",
    "change24h": -11.29,
    "change24hPct": -1.07,
    "changeDirection": "down",
    "high24h": 1052.22,
    "low24h": 1040.93,
    "change7d": -63.98,
    "change7dPct": -5.79,
    "change30d": -229.07,
    "change30dPct": -18.04,
    "high30d": 1235.1,
    "low30d": 1040.93,
    "average30d": 1135.83,
    "volatility30d": 1.4294,
    "daily": [
      {
        "date": "2026-09-28",
        "price": 1235.1
      },
      {
        "date": "2026-09-29",
        "price": 1208.34
      },
      {
        "date": "2026-09-30",
        "price": 1224.27
      },
      {
        "date": "2026-10-01",
        "price": 1218.02
      },
      {
        "date": "2026-10-02",
        "price": 1187.55
      },
      {
        "date": "2026-10-03",
        "price": 1172.5
      },
      {
        "date": "2026-10-04",
        "price": 1172.49
      },
      {
        "date": "2026-10-05",
        "price": 1169.52
      },
      {
        "date": "2026-10-06",
        "price": 1166.94
      },
      {
        "date": "2026-10-07",
        "price": 1159.57
      },
      {
        "date": "2026-10-08",
        "price": 1142.54
      },
      {
        "date": "2026-10-09",
        "price": 1159.97
      },
      {
        "date": "2026-10-10",
        "price": 1151.5
      },
      {
        "date": "2026-10-11",
        "price": 1151.49
      },
      {
        "date": "2026-10-12",
        "price": 1155.39
      },
      {
        "date": "2026-10-13",
        "price": 1145.38
      },
      {
        "date": "2026-10-14",
        "price": 1134.16
      },
      {
        "date": "2026-10-15",
        "price": 1108.24
      },
      {
        "date": "2026-10-16",
        "price": 1146.93
      },
      {
        "date": "2026-10-17",
        "price": 1115.49
      },
      {
        "date": "2026-10-18",
        "price": 1115.5
      },
      {
        "date": "2026-10-19",
        "price": 1133.25
      },
      {
        "date": "2026-10-20",
        "price": 1104.91
      },
      {
        "date": "2026-10-21",
        "price": 1092.86
      },
      {
        "date": "2026-10-22",
        "price": 1063.17
      },
      {
        "date": "2026-10-23",
        "price": 1053.78
      },
      {
        "date": "2026-10-24",
        "price": 1046.49
      },
      {
        "date": "2026-10-25",
        "price": 1046.5
      },
      {
        "date": "2026-10-26",
        "price": 1052.22
      },
      {
        "date": "2026-10-27",
        "price": 1040.93
      }
    ],
    "marketStatus": "open",
    "formatted": {
      "ounce": "$1,040.93",
      "gram": "$33.47",
      "kilogram": "$33,466.63",
      "ounceWords": "one thousand, forty-one dollars",
      "kilogramWords": "thirty-three thousand, four hundred sixty-seven dollars"
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
