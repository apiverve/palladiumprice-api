# Palladium Price API - Ruby Gem

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies and 24-hour hourly history.

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
  hourly: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ currency: "USD", hourly: true })
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
    "gram": 40.08,
    "kilogram": 40075.88,
    "ounce": 1246.5,
    "lastUpdated": "2026-02-07T12:00:00.000Z",
    "change24h": -8.2,
    "change24hPct": -0.65,
    "changeDirection": "down",
    "high24h": 1259,
    "low24h": 1241.1,
    "formatted": {
      "ounce": "$1,246.50",
      "gram": "$40.08",
      "kilogram": "$40,075.88",
      "ounceWords": "one thousand, two hundred forty-seven dollars",
      "kilogramWords": "forty thousand, seventy-six dollars"
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
