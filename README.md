# async-openssl

[![Build Status](https://travis-ci.com/MatteoArella/async-openssl.svg?branch=master)](https://travis-ci.com/MatteoArella/async-openssl)
[![npm version](https://badge.fury.io/js/async-openssl.svg)](https://badge.fury.io/js/async-openssl)

**`async-openssl`** is an asyncronous wrapper for OpenSSL based on promises.

## Installation
```sh
$ npm install async-openssl
```

## Importing and Usage
```javascript
const openssl = require('async-openssl');

// run any openssl command
try {
    await openssl('genpkey -algorithm RSA -aes-256-cbc -out key.pem -pass file:/run/secrets/KEY_PASS -pkeyopt rsa_keygen_bits:2048');
} catch (err) {
    // handle error
    // ...
}

```