# Palladium Price API - Ruby Gem

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies, 7- and 30-day changes, 30-day stats, and hourly and 30-day daily history.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_palladiumprice'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_palladiumprice
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_palladiumprice'

# Initialize the client
client = APIVerve::Palladiumprice::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  currency: "USD",
  hourly: true,
  daily: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ currency: "USD", hourly: true, daily: true })
  puts response["data"]
rescue APIVerve::Palladiumprice::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Palladiumprice::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Palladiumprice::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/palladiumprice?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/palladiumprice?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/palladiumprice?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
