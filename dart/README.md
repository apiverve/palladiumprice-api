# Palladium Price API - Dart/Flutter Client

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies, 7- and 30-day changes, 30-day stats, and hourly and 30-day daily history.

[![pub package](https://img.shields.io/pub/v/apiverve_palladiumprice.svg)](https://pub.dev/packages/apiverve_palladiumprice)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_palladiumprice: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_palladiumprice/apiverve_palladiumprice.dart';

void main() async {
  final client = PalladiumpriceClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'currency': 'USD',
      'hourly': true,
      'daily': true
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Palladium Price API](https://apiverve.com/marketplace/palladiumprice?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/palladiumprice](https://docs.apiverve.com/ref/palladiumprice?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
