Palladium Price API
============

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies, 7- and 30-day changes, 30-day stats, and hourly and 30-day daily history.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.PalladiumPrice.svg)](https://www.nuget.org/packages/APIVerve.API.PalladiumPrice)

This is a .NET wrapper for the [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.PalladiumPrice
```

Using the Package Manager:
```
nuget install APIVerve.API.PalladiumPrice
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.PalladiumPrice
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.PalladiumPrice"
5. Click on the APIVerve.API.PalladiumPrice package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the Palladium Price API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.PalladiumPrice;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new PalladiumPriceQueryOptions {
            Currency = "USD",
            Hourly = true,
            Daily = true
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The Palladium Price API documentation is found here: [https://docs.apiverve.com/ref/palladiumprice](https://docs.apiverve.com/ref/palladiumprice?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
Palladium Price API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.PalladiumPrice;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new PalladiumPriceQueryOptions {
            Currency = "USD",
            Hourly = true,
            Daily = true
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.PalladiumPrice;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new PalladiumPriceQueryOptions {
            Currency = "USD",
            Hourly = true,
            Daily = true
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.PalladiumPrice;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new PalladiumPriceQueryOptions {
            Currency = "USD",
            Hourly = true,
            Daily = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.PalladiumPrice;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new PalladiumPriceQueryOptions {
            Currency = "USD",
            Hourly = true,
            Daily = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new PalladiumPriceQueryOptions {
    Currency = "USD",
    Hourly = true,
    Daily = true
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new PalladiumPriceQueryOptions {
    Currency = "USD",
    Hourly = true,
    Daily = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new PalladiumPriceQueryOptions {
    Currency = "USD",
    Hourly = true,
    Daily = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new PalladiumPriceQueryOptions {
    Currency = "USD",
    Hourly = true,
    Daily = true
};

using (var apiClient = new PalladiumPriceAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
