# Palladium Price API - PHP Package

Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies and 24-hour hourly history.

## Installation

Install via Composer:

```bash
composer require apiverve/palladiumprice
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Palladiumprice\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'currency' => 'USD',
    'hourly' => true
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Palladiumprice\Client;
use APIVerve\Palladiumprice\Exceptions\APIException;
use APIVerve\Palladiumprice\Exceptions\ValidationException;

try {
    $response = $client->execute(['currency' => 'USD', 'hourly' => true]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/palladiumprice?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/palladiumprice?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/palladiumprice?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
