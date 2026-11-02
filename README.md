# [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies, 7- and 30-day changes, 30-day stats, and hourly and 30-day daily history.

The Palladium Price API provides a simple, reliable way to integrate palladium price functionality into your applications. Built for developers who need production-ready palladium price capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/palladiumprice?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/palladiumprice?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/palladiumprice)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.PalladiumPrice)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-palladiumprice/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_palladiumprice)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/palladiumprice)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_palladiumprice)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callPalladiumPriceAPI() {
    try {
        const response = await fetch('https://api.apiverve.com/v1/palladiumprice', {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callPalladiumPriceAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/palladiumprice" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/palladiumprice
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/palladiumprice) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.PalladiumPrice
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.PalladiumPrice) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-palladiumprice
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-palladiumprice/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_palladiumprice
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_palladiumprice) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/palladiumprice
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/palladiumprice) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_palladiumprice
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_palladiumprice) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:palladiumprice-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/palladiumprice-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/palladiumprice](https://docs.apiverve.com/ref/palladiumprice)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Palladium Price API is commonly used for:

- **Web Applications** - Add palladium price features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with palladium price capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Palladium Price API:

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

## Support & Community

- 🏠 **API Home**: [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
