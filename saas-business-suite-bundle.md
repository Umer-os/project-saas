# NexusSaaS Complete Project Source Bundle (v2.5 Enterprise Edition)

> Updated single-file bundle containing the full source code for 3 Isolated Dashboards, Profit & Loss Analytics, Sales Dispatch, Payroll & Attendance calculations, In-App Notifications, Kill-Switch, and Automated Subscriptions.

### File: backend\package-lock.json
`json
{
  "name": "saas-backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "saas-backend",
      "version": "1.0.0",
      "dependencies": {
        "@prisma/client": "^5.22.0",
        "bcryptjs": "^2.4.3",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.21.1",
        "jsonwebtoken": "^9.0.2",
        "node-cron": "^3.0.3"
      },
      "devDependencies": {
        "nodemon": "^3.1.7",
        "prisma": "^5.22.0"
      }
    },
    "node_modules/@prisma/client": {
      "version": "5.22.0",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-5.22.0.tgz",
      "integrity": "sha512-M0SVXfyHnQREBKxCgyo7sffrKttwE6R8PMq330MIUF0pTwjUhLbW84pFDlf06B27XyCR++VtjugEnIHdr07SVA==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=16.13"
      },
      "peerDependencies": {
        "prisma": "*"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/debug": {
      "version": "5.22.0",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-5.22.0.tgz",
      "integrity": "sha512-AUt44v3YJeggO2ZU5BkXI7M4hu9BF2zzH2iF2V5pyXT/lRTyWiElZ7It+bRH1EshoMRxHgpYg4VB6rCM+mG5jQ==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines": {
      "version": "5.22.0",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-5.22.0.tgz",
      "integrity": "sha512-UNjfslWhAt06kVL3CjkuYpHAWSO6L4kDCVPegV6itt7nD1kSJavd3vhgAEhjglLJJKEdJ7oIqDJ+yHk6qO8gPA==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "5.22.0",
        "@prisma/engines-version": "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2",
        "@prisma/fetch-engine": "5.22.0",
        "@prisma/get-platform": "5.22.0"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2.tgz",
      "integrity": "sha512-2PTmxFR2yHW/eB3uqWtcgRcgAbG1rwG9ZriSvQw+nnb7c4uCr3RAcGMb6/zfE88SKlC1Nj2ziUvc96Z379mHgQ==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "5.22.0",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-5.22.0.tgz",
      "integrity": "sha512-bkrD/Mc2fSvkQBV5EpoFcZ87AvOgDxbG99488a5cexp5Ccny+UM6MAe/UFkUC0wLYD9+9befNOqGiIJhhq+HbA==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "5.22.0",
        "@prisma/engines-version": "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2",
        "@prisma/get-platform": "5.22.0"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "5.22.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-5.22.0.tgz",
      "integrity": "sha512-pHhpQdr1UPFpt+zFfnPazhulaZYCUqeIcPpJViYoq9R+D/yw4fjE+CtnsnKzPYm0ddUbeXUzjGVGIRVgPDCk4Q==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "5.22.0"
      }
    },
    "node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
      "license": "MIT"
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bcryptjs": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-2.4.3.tgz",
      "integrity": "sha512-V/Hy/X9Vt7f3BbPJEi8BdVFMByHi+jNXrYkW3huaybV/kQ0KJg0Y6PkEMbn+zeT+i+SiKZ/HMqJGIIt4LZDqNQ==",
      "license": "MIT"
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "1.20.8",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.8.tgz",
      "integrity": "sha512-JNcyFQ64OiijEkPzUBTCe+hyPXUD/3LEldGQ6iF5LR1w00mx9o7xtDWHXBY2iItjdCFGoilOLNQbH943ut7pHA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "content-type": "~1.0.5",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "~1.2.0",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "on-finished": "~2.4.1",
        "qs": "~6.16.0",
        "raw-body": "~2.5.3",
        "type-is": "~1.6.18",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.12.tgz",
      "integrity": "sha512-YovQ3rzhaLMIrDjNDMkNS01tea93qhEhG5xy8f6+R0l+dw3Ki+5sCoIoI942iuLZTHWogWktgwVDhU09iNEimQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.7.tgz",
      "integrity": "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==",
      "license": "MIT"
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/dotenv": {
      "version": "16.6.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz",
      "integrity": "sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "4.22.3",
      "resolved": "https://registry.npmjs.org/express/-/express-4.22.3.tgz",
      "integrity": "sha512-Bdcs4+3qlpVlx2NRn6fgX2Ue2/gGRaPeawebgclM0ERSCqDpA+owF1fdPwjJUTAJWMTuAaxjDf+hzb0/4eKvvw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "~1.20.5",
        "content-disposition": "~0.5.4",
        "content-type": "~1.0.4",
        "cookie": "~0.7.1",
        "cookie-signature": "~1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.3.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.0",
        "merge-descriptors": "1.0.3",
        "methods": "~1.1.2",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "path-to-regexp": "~0.1.13",
        "proxy-addr": "~2.0.7",
        "qs": "~6.16.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "~0.19.0",
        "serve-static": "~1.16.2",
        "setprototypeof": "1.2.0",
        "statuses": "~2.0.1",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.2.tgz",
      "integrity": "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==",
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "statuses": "~2.0.2",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jsonwebtoken/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
      "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.6.tgz",
      "integrity": "sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.8"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/node-cron": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/node-cron/-/node-cron-3.0.3.tgz",
      "integrity": "sha512-dOal67//nohNgYWb+nWmg5dkFdIwDm8EpeGYMekPMrngV3637lqnX0lbUcCtgibHTz6SEz7DAIjKvKDFYCnO1A==",
      "license": "ISC",
      "dependencies": {
        "uuid": "8.3.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/nodemon": {
      "version": "3.1.14",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.14.tgz",
      "integrity": "sha512-jakjZi93UtB3jHMWsXL68FXSAosbLfY0In5gtKq3niLSkrWznrVBzXFNOEMJUfc9+Ke7SHWoAZsiMkNP3vq6Jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^4",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^10.2.1",
        "pstree.remy": "^1.1.8",
        "semver": "^7.5.3",
        "simple-update-notifier": "^2.0.0",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/nodemon/node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/nodemon/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.13.tgz",
      "integrity": "sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA==",
      "license": "MIT"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/prisma": {
      "version": "5.22.0",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-5.22.0.tgz",
      "integrity": "sha512-vtpjW3XuYCSnMsNVBjLMNkTj6OZbudcPPTPYHqX0CJfpcdWciI1dM8uHETwmDxxiqEwCIE6WvXucWUetJgfu/A==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/engines": "5.22.0"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": ">=16.13"
      },
      "optionalDependencies": {
        "fsevents": "2.3.3"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.8.tgz",
      "integrity": "sha512-5nnx0yGyVUcY6t9RnWcARWtwT9F1D8O9rt08htPvnd49W1IgZtmLkhu9WfMzQj1cFxjHIO6connUNVW5k7AVyQ==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/qs": {
      "version": "6.16.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.16.0.tgz",
      "integrity": "sha512-h6fhOIaRrID2CbEY2fqs+7t+UXZo+MLAnU5gRIq85uFtdiUPCdsApMlHhXogKVM4HM2DVbIjGNTTYH2OcmP1vA==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "es-define-property": "^1.0.1",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.5.3",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz",
      "integrity": "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.19.2.tgz",
      "integrity": "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==",
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.1",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "~2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "~2.0.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/serve-static": {
      "version": "1.16.3",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.3.tgz",
      "integrity": "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "~0.19.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/simple-update-notifier": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
      "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/touch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
      "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "deprecated": "uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).",
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    }
  }
}

`

---

### File: backend\package.json
`json
{
  "name": "saas-backend",
  "version": "1.0.0",
  "description": "Production Commercial SaaS Business Management & Attendance Backend",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "prisma:generate": "prisma generate",
    "prisma:push": "prisma db push",
    "seed": "node src/seed.js"
  },
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "node-cron": "^3.0.3"
  },
  "devDependencies": {
    "nodemon": "^3.1.7",
    "prisma": "^5.22.0"
  }
}

`

---

### File: backend\prisma\schema.prisma
`prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id                  String         @id @default(uuid())
  name                String
  email               String         @unique
  password            String
  role                String         @default("EMPLOYEE") // DEVELOPER, ADMIN, EMPLOYEE
  businessName        String?        // For Admins
  adminId             String?        // Multi-tenant: If Employee, links to their Admin/Business
  shiftStart          String?        @default("09:00") // e.g. "09:00"
  shiftEnd            String?        @default("17:00") // e.g. "17:00"
  department          String?        @default("Operations")
  salary              Float?         @default(0.0)
  phone               String?
  isBlocked           Boolean        @default(false) // SaaS Kill-Switch Flag
  subscriptionPlan    String?        @default("PREMIUM_PRO")
  subscriptionEndDate DateTime?      // Automated Expiry Date
  resetToken          String?
  resetTokenExpiry    DateTime?
  createdAt           DateTime       @default(now())
  updatedAt           DateTime       @updatedAt

  attendances         Attendance[]
  leaveRequests       LeaveRequest[]
  auditLogs           AuditTrail[]
  systemLogs          SystemAuditLog[] @relation("DeveloperLogs")
  notifications       Notification[]
}

model Attendance {
  id           String    @id @default(uuid())
  userId       String
  user         User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  adminId      String?   // Multi-tenant scope
  date         DateTime  @default(now())
  checkIn      DateTime?
  checkOut     DateTime?
  totalHours   Float?
  status       String    @default("Present") // Present, Late, Absent, Half-Day
  overriddenBy String?   // Admin ID / Name if adjusted manually
  notes        String?
  ipAddress    String?
  createdAt    DateTime  @default(now())
}

model Inventory {
  id               String            @id @default(uuid())
  adminId          String            // Multi-tenant organization scope
  itemName         String
  sku              String            @unique
  category         String            @default("General")
  quantity         Int               @default(0)
  minStockLevel    Int               @default(5)
  costPrice        Float             @default(0.0)
  sellingPrice     Float             @default(0.0)
  lastUpdatedBy    String
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt
  auditTrails      AuditTrail[]
  saleTransactions SaleTransaction[]
}

model SaleTransaction {
  id           String     @id @default(uuid())
  adminId      String     // Client Organization
  inventoryId  String?
  inventory    Inventory? @relation(fields: [inventoryId], references: [id], onDelete: SetNull)
  itemName     String
  quantity     Int
  costPrice    Float
  sellingPrice Float
  totalRevenue Float
  totalProfit  Float
  customerName String?
  notes        String?
  createdAt    DateTime   @default(now())
}

model AuditTrail {
  id          String     @id @default(uuid())
  adminId     String?
  action      String     // CREATED, UPDATED, DELETED, RESTOCKED, SOLD
  details     String
  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  inventoryId String?
  inventory   Inventory? @relation(fields: [inventoryId], references: [id], onDelete: SetNull)
  createdAt   DateTime   @default(now())
}

model LeaveRequest {
  id          String    @id @default(uuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  adminId     String?   // Organization owner
  reason      String
  startDate   DateTime?
  endDate     DateTime?
  status      String    @default("Pending") // Pending, Approved, Rejected
  reviewedBy  String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model SystemAuditLog {
  id            String   @id @default(uuid())
  developerId   String
  developer     User     @relation("DeveloperLogs", fields: [developerId], references: [id], onDelete: Cascade)
  targetAdminId String?
  action        String   // BLOCK_ADMIN, UNBLOCK_ADMIN, EXTEND_SUBSCRIPTION, PLAN_CHANGE
  details       String
  ipAddress     String?
  createdAt     DateTime @default(now())
}

model Notification {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  title     String
  message   String
  type      String   @default("INFO") // INFO, WARNING, SUCCESS, ALERT
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}

`

---

### File: backend\src\config\prisma.js
`javascript
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;

`

---

### File: backend\src\controllers\adminController.js
`javascript
const bcrypt = require('bcryptjs');
const prisma = require('../config/prisma');

/**
 * Get Admin Dashboard Overview Metrics
 */
const getAdminDashboardStats = async (req, res) => {
  const adminId = req.user.id;

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Total employees under this admin
    const totalEmployees = await prisma.user.count({
      where: { role: 'EMPLOYEE', adminId }
    });

    // Attendance today
    const attendancesToday = await prisma.attendance.findMany({
      where: {
        adminId,
        date: {
          gte: today,
          lt: tomorrow
        }
      },
      include: {
        user: {
          select: { name: true, shiftStart: true }
        }
      }
    });

    const presentToday = attendancesToday.filter(a => a.status === 'Present' || a.status === 'Late').length;
    const lateComers = attendancesToday.filter(a => a.status === 'Late').length;

    // Inventory items
    const inventoryItems = await prisma.inventory.findMany({
      where: { adminId }
    });

    const lowStockItems = inventoryItems.filter(item => item.quantity <= item.minStockLevel);
    const totalInventoryValue = inventoryItems.reduce((acc, curr) => acc + (curr.quantity * (curr.costPrice || 0)), 0);

    // Pending Leaves
    const pendingLeaves = await prisma.leaveRequest.count({
      where: { adminId, status: 'Pending' }
    });

    res.json({
      success: true,
      stats: {
        totalEmployees,
        presentToday,
        lateComers,
        absentToday: Math.max(0, totalEmployees - presentToday),
        totalStockItems: inventoryItems.length,
        lowStockCount: lowStockItems.length,
        lowStockItems: lowStockItems.slice(0, 5),
        totalInventoryValue,
        pendingLeaves
      }
    });
  } catch (error) {
    console.error('Error fetching admin dashboard stats:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard metrics' });
  }
};

/**
 * List all employees for the logged-in Admin
 */
const getEmployees = async (req, res) => {
  const adminId = req.user.id;

  try {
    const employees = await prisma.user.findMany({
      where: { role: 'EMPLOYEE', adminId },
      select: {
        id: true,
        name: true,
        email: true,
        department: true,
        phone: true,
        shiftStart: true,
        shiftEnd: true,
        salary: true,
        isBlocked: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, employees });
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

/**
 * Add a new Employee under this Admin
 */
const createEmployee = async (req, res) => {
  const adminId = req.user.id;
  const { name, email, password, department, phone, shiftStart, shiftEnd, salary } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });

    if (existing) {
      return res.status(400).json({ error: 'An account with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role: 'EMPLOYEE',
        adminId,
        department: department || 'Operations',
        phone: phone || null,
        shiftStart: shiftStart || '09:00',
        shiftEnd: shiftEnd || '17:00',
        salary: salary ? parseFloat(salary) : 0
      }
    });

    res.status(201).json({
      success: true,
      message: 'Employee successfully created',
      employee: {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        department: employee.department,
        shiftStart: employee.shiftStart,
        shiftEnd: employee.shiftEnd
      }
    });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Failed to create employee' });
  }
};

/**
 * Update employee details / shift timings
 */
const updateEmployee = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;
  const { name, department, phone, shiftStart, shiftEnd, salary, isBlocked } = req.body;

  try {
    const employee = await prisma.user.findFirst({
      where: { id, adminId, role: 'EMPLOYEE' }
    });

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found under your organization' });
    }

    const updated = await prisma.user.update({
      where: { id },
      data: {
        name: name !== undefined ? name.trim() : undefined,
        department: department !== undefined ? department : undefined,
        phone: phone !== undefined ? phone : undefined,
        shiftStart: shiftStart !== undefined ? shiftStart : undefined,
        shiftEnd: shiftEnd !== undefined ? shiftEnd : undefined,
        salary: salary !== undefined ? parseFloat(salary) : undefined,
        isBlocked: isBlocked !== undefined ? isBlocked : undefined
      }
    });

    res.json({ success: true, message: 'Employee updated successfully', employee: updated });
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Failed to update employee' });
  }
};

/**
 * Delete an employee
 */
const deleteEmployee = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;

  try {
    const employee = await prisma.user.findFirst({
      where: { id, adminId, role: 'EMPLOYEE' }
    });

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await prisma.user.delete({ where: { id } });

    res.json({ success: true, message: 'Employee profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Failed to delete employee' });
  }
};

/**
 * Get all leave requests for this Admin
 */
const getLeaveRequests = async (req, res) => {
  const adminId = req.user.id;

  try {
    const leaveRequests = await prisma.leaveRequest.findMany({
      where: { adminId },
      include: {
        user: {
          select: { name: true, email: true, department: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, leaveRequests });
  } catch (error) {
    console.error('Error fetching leave requests:', error);
    res.status(500).json({ error: 'Failed to fetch leave requests' });
  }
};

/**
 * Review (Approve / Reject) Leave Request
 */
const updateLeaveStatus = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;
  const { status } = req.body; // 'Approved' | 'Rejected'

  try {
    if (!['Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ error: 'Status must be Approved or Rejected' });
    }

    const leave = await prisma.leaveRequest.findFirst({
      where: { id, adminId }
    });

    if (!leave) {
      return res.status(404).json({ error: 'Leave request not found' });
    }

    const updated = await prisma.leaveRequest.update({
      where: { id },
      data: {
        status,
        reviewedBy: req.user.name
      }
    });

    res.json({ success: true, message: `Leave request ${status.toLowerCase()}`, leave: updated });
  } catch (error) {
    console.error('Error updating leave status:', error);
    res.status(500).json({ error: 'Failed to update leave status' });
  }
};

module.exports = {
  getAdminDashboardStats,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getLeaveRequests,
  updateLeaveStatus
};

`

---

### File: backend\src\controllers\attendanceController.js
`javascript
const prisma = require('../config/prisma');

/**
 * Employee Check-In Action
 */
const checkIn = async (req, res) => {
  const userId = req.user.id;
  const adminId = req.user.adminId || null;

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Check if an entry for today already exists
    const existingEntry = await prisma.attendance.findFirst({
      where: {
        userId,
        date: {
          gte: today,
          lt: tomorrow
        }
      }
    });

    if (existingEntry && existingEntry.checkIn) {
      return res.status(400).json({
        error: 'Already Checked In',
        message: `You have already checked in today at ${new Date(existingEntry.checkIn).toLocaleTimeString()}.`
      });
    }

    const now = new Date();

    // Determine if employee is Late based on assigned shiftStart (e.g. "09:00")
    let status = 'Present';
    if (req.user.shiftStart) {
      const [shiftHour, shiftMinute] = req.user.shiftStart.split(':').map(Number);
      const shiftStartTime = new Date();
      shiftStartTime.setHours(shiftHour, shiftMinute, 0, 0);

      // Grace period of 10 minutes
      const graceTime = new Date(shiftStartTime.getTime() + 10 * 60 * 1000);
      if (now > graceTime) {
        status = 'Late';
      }
    }

    let record;
    if (existingEntry) {
      record = await prisma.attendance.update({
        where: { id: existingEntry.id },
        data: {
          checkIn: now,
          status,
          ipAddress: req.ip || req.connection.remoteAddress
        }
      });
    } else {
      record = await prisma.attendance.create({
        data: {
          userId,
          adminId,
          date: today,
          checkIn: now,
          status,
          ipAddress: req.ip || req.connection.remoteAddress
        }
      });
    }

    res.status(201).json({
      success: true,
      message: `Checked in successfully at ${now.toLocaleTimeString()}! Status: ${status}`,
      attendance: record
    });
  } catch (error) {
    console.error('Check-in error:', error);
    res.status(500).json({ error: 'Check-in failed' });
  }
};

/**
 * Employee Check-Out Action
 */
const checkOut = async (req, res) => {
  const userId = req.user.id;

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Find today's active check-in record
    const record = await prisma.attendance.findFirst({
      where: {
        userId,
        date: {
          gte: today,
          lt: tomorrow
        },
        checkIn: { not: null }
      }
    });

    if (!record) {
      return res.status(400).json({
        error: 'No Active Check-In',
        message: 'No check-in record found for today. Please check in first.'
      });
    }

    if (record.checkOut) {
      return res.status(400).json({
        error: 'Already Checked Out',
        message: `You have already checked out today at ${new Date(record.checkOut).toLocaleTimeString()}.`
      });
    }

    const now = new Date();
    const durationMs = now.getTime() - new Date(record.checkIn).getTime();
    const totalHours = parseFloat((durationMs / (1000 * 60 * 60)).toFixed(2));

    const updatedRecord = await prisma.attendance.update({
      where: { id: record.id },
      data: {
        checkOut: now,
        totalHours
      }
    });

    res.json({
      success: true,
      message: `Checked out successfully at ${now.toLocaleTimeString()}! Total hours logged: ${totalHours} hrs.`,
      attendance: updatedRecord
    });
  } catch (error) {
    console.error('Check-out error:', error);
    res.status(500).json({ error: 'Check-out failed' });
  }
};

/**
 * Get Attendance Records for Admin (with filters: date range, employee search)
 */
const getAdminAttendance = async (req, res) => {
  const adminId = req.user.id;
  const { startDate, endDate, userId } = req.query;

  try {
    const whereClause = { adminId };

    if (startDate && endDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      whereClause.date = { gte: start, lte: end };
    }

    if (userId) {
      whereClause.userId = userId;
    }

    const records = await prisma.attendance.findMany({
      where: whereClause,
      include: {
        user: {
          select: { name: true, email: true, department: true, shiftStart: true, shiftEnd: true }
        }
      },
      orderBy: { date: 'desc' }
    });

    res.json({ success: true, count: records.length, records });
  } catch (error) {
    console.error('Error fetching admin attendance:', error);
    res.status(500).json({ error: 'Failed to fetch attendance logs' });
  }
};

/**
 * Admin Manual Override / Adjustment of Attendance
 */
const overrideAttendance = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;
  const { checkIn, checkOut, status, notes } = req.body;

  try {
    const existing = await prisma.attendance.findFirst({
      where: { id, adminId }
    });

    if (!existing) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }

    const newCheckIn = checkIn ? new Date(checkIn) : existing.checkIn;
    const newCheckOut = checkOut ? new Date(checkOut) : existing.checkOut;

    let totalHours = existing.totalHours;
    if (newCheckIn && newCheckOut) {
      const diffMs = new Date(newCheckOut).getTime() - new Date(newCheckIn).getTime();
      totalHours = parseFloat((diffMs / (1000 * 60 * 60)).toFixed(2));
    }

    const updated = await prisma.attendance.update({
      where: { id },
      data: {
        checkIn: newCheckIn,
        checkOut: newCheckOut,
        status: status || existing.status,
        totalHours: totalHours >= 0 ? totalHours : 0,
        notes: notes || existing.notes,
        overriddenBy: req.user.name
      }
    });

    res.json({
      success: true,
      message: 'Attendance record manually adjusted successfully.',
      record: updated
    });
  } catch (error) {
    console.error('Error adjusting attendance:', error);
    res.status(500).json({ error: 'Failed to adjust attendance' });
  }
};

/**
 * Delete or correct duplicate attendance logs
 */
const deleteAttendance = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;

  try {
    const existing = await prisma.attendance.findFirst({
      where: { id, adminId }
    });

    if (!existing) {
      return res.status(404).json({ error: 'Record not found or unauthorized' });
    }

    await prisma.attendance.delete({ where: { id } });

    res.json({ success: true, message: 'Attendance log entry removed successfully' });
  } catch (error) {
    console.error('Error deleting attendance:', error);
    res.status(500).json({ error: 'Failed to delete attendance log' });
  }
};

/**
 * Get Today's Status for Logged-In Employee
 */
const getMyTodayAttendance = async (req, res) => {
  const userId = req.user.id;

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const record = await prisma.attendance.findFirst({
      where: {
        userId,
        date: {
          gte: today,
          lt: tomorrow
        }
      }
    });

    res.json({ success: true, record });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance status' });
  }
};

/**
 * Get Attendance History for Logged-In Employee
 */
const getMyAttendanceHistory = async (req, res) => {
  const userId = req.user.id;

  try {
    const history = await prisma.attendance.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 60
    });

    res.json({ success: true, history });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance history' });
  }
};

module.exports = {
  checkIn,
  checkOut,
  getAdminAttendance,
  overrideAttendance,
  deleteAttendance,
  getMyTodayAttendance,
  getMyAttendanceHistory
};

`

---

### File: backend\src\controllers\authController.js
`javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const prisma = require('../config/prisma');
const { JWT_SECRET } = require('../middleware/auth');

/**
 * Register a new user with strict Role-based restrictions.
 * Developer registration is strictly capped at a maximum of 2 accounts.
 */
const registerUser = async (req, res) => {
  const { name, email, password, role, businessName, adminId, shiftStart, shiftEnd, department, phone } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Validation Error', message: 'Name, email, and password are required.' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already registered
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User Conflict', message: 'A user with this email address already exists.' });
    }

    const assignedRole = (role || 'EMPLOYEE').toUpperCase();

    // 🔒 RESTRICTION 1: Sirf max 2 Developers allow honge across the entire SaaS platform
    if (assignedRole === 'DEVELOPER') {
      const developerCount = await prisma.user.count({
        where: { role: 'DEVELOPER' }
      });

      if (developerCount >= 2) {
        return res.status(403).json({
          error: 'Registration Restricted',
          code: 'DEV_LIMIT_REACHED',
          message: 'Security Constraint: Maximum limit of 2 Platform Developers reached. Additional developer accounts cannot be created.'
        });
      }
    }

    // 🔒 RESTRICTION 2: If an Admin was previously blocked and attempts to re-register with same business name or email
    // or if an admin registering is rejected if company is banned
    const hashedPassword = await bcrypt.hash(password, 10);

    // Default subscription: 30 days trial/active period for Admins
    let subscriptionEndDate = null;
    if (assignedRole === 'ADMIN') {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 30);
      subscriptionEndDate = futureDate;
    }

    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: assignedRole,
        businessName: assignedRole === 'ADMIN' ? (businessName || `${name.trim()}'s Business`) : null,
        adminId: assignedRole === 'EMPLOYEE' ? adminId : null,
        shiftStart: shiftStart || '09:00',
        shiftEnd: shiftEnd || '17:00',
        department: department || 'General',
        phone: phone || null,
        subscriptionPlan: assignedRole === 'ADMIN' ? 'PREMIUM_PRO' : null,
        subscriptionEndDate,
        isBlocked: false
      }
    });

    // Create session token
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      success: true,
      message: `${assignedRole} account created successfully.`,
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        businessName: newUser.businessName,
        adminId: newUser.adminId,
        shiftStart: newUser.shiftStart,
        shiftEnd: newUser.shiftEnd,
        isBlocked: newUser.isBlocked,
        subscriptionEndDate: newUser.subscriptionEndDate
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Server Error', message: 'Failed to complete registration.' });
  }
};

/**
 * Login handler with built-in Kill-Switch and automated subscription checking.
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Validation Error', message: 'Email and password are required.' });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (!user) {
      return res.status(404).json({ error: 'Not Found', message: 'No account found with this email address.' });
    }

    // 🔒 KILL-SWITCH ENFORCEMENT: Check if the user is directly blocked
    if (user.isBlocked) {
      return res.status(403).json({
        error: 'Account Suspended',
        code: 'BLOCKED',
        message: 'Your account access has been restricted by the SaaS platform administrator. Please contact developer support to resolve billing or licensing.'
      });
    }

    // Check if ADMIN has an expired subscription
    if (user.role === 'ADMIN' && user.subscriptionEndDate) {
      if (new Date(user.subscriptionEndDate) < new Date()) {
        await prisma.user.update({
          where: { id: user.id },
          data: { isBlocked: true }
        });

        return res.status(403).json({
          error: 'Subscription Expired',
          code: 'EXPIRED',
          message: 'Your SaaS commercial license expired on ' + user.subscriptionEndDate.toISOString().split('T')[0] + '. Please contact your provider to renew.'
        });
      }
    }

    // Check if EMPLOYEE belongs to a suspended/blocked Admin organization
    if (user.role === 'EMPLOYEE' && user.adminId) {
      const parentAdmin = await prisma.user.findUnique({
        where: { id: user.adminId }
      });

      if (parentAdmin && (parentAdmin.isBlocked || (parentAdmin.subscriptionEndDate && new Date(parentAdmin.subscriptionEndDate) < new Date()))) {
        return res.status(403).json({
          error: 'Company Suspended',
          code: 'PARENT_ADMIN_BLOCKED',
          message: `The company account (${parentAdmin.businessName || 'Your Employer'}) has been suspended for unpaid dues. Access is temporarily locked.`
        });
      }
    }

    // Verify Password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid Credentials', message: 'Incorrect email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      message: 'Login successful.',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
        adminId: user.adminId,
        shiftStart: user.shiftStart,
        shiftEnd: user.shiftEnd,
        isBlocked: user.isBlocked,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionEndDate: user.subscriptionEndDate
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server Error', message: 'Failed to process login.' });
  }
};

/**
 * Forgot Password - Generates a secure single-use recovery token.
 */
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ error: 'Validation Error', message: 'Please provide an email address.' });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });

    if (!user) {
      return res.status(404).json({ error: 'Not Found', message: 'No user registered with this email address.' });
    }

    // Generate cryptographic reset token
    const rawResetToken = crypto.randomBytes(32).toString('hex');
    const hashedResetToken = crypto.createHash('sha256').update(rawResetToken).digest('hex');
    const tokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes lifetime

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: hashedResetToken,
        resetTokenExpiry: tokenExpiry
      }
    });

    return res.json({
      success: true,
      message: 'Password reset instructions and verification token generated.',
      resetToken: rawResetToken, // In demo / local mode, returned directly for instant recovery
      expiresIn: '15 minutes'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ error: 'Server Error', message: 'Failed to process password reset request.' });
  }
};

/**
 * Reset Password - Validates token and updates user password securely.
 */
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Validation Error', message: 'Token and new password are required.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Validation Error', message: 'Password must be at least 6 characters long.' });
    }

    const hashedToken = crypto.createHash('sha256').update(token.trim()).digest('hex');

    const user = await prisma.user.findFirst({
      where: {
        resetToken: hashedToken,
        resetTokenExpiry: { gt: new Date() }
      }
    });

    if (!user) {
      return res.status(400).json({
        error: 'Invalid or Expired Token',
        message: 'The reset token is invalid, expired, or has already been used.'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    return res.json({
      success: true,
      message: 'Password successfully updated. You may now log in with your new password.'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ error: 'Server Error', message: 'Failed to reset password.' });
  }
};

/**
 * Get current authenticated user profile
 */
const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        businessName: true,
        adminId: true,
        shiftStart: true,
        shiftEnd: true,
        department: true,
        phone: true,
        isBlocked: true,
        subscriptionPlan: true,
        subscriptionEndDate: true,
        createdAt: true
      }
    });

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getProfile
};

`

---

### File: backend\src\controllers\developerController.js
`javascript
const prisma = require('../config/prisma');
const { checkSubscriptionExpiryNow } = require('../jobs/subscriptionCron');

/**
 * Get SaaS Platform Overview Stats for Developers
 */
const getPlatformStats = async (req, res) => {
  try {
    const totalAdmins = await prisma.user.count({ where: { role: 'ADMIN' } });
    const blockedAdmins = await prisma.user.count({ where: { role: 'ADMIN', isBlocked: true } });
    const activeAdmins = totalAdmins - blockedAdmins;
    const totalEmployees = await prisma.user.count({ where: { role: 'EMPLOYEE' } });
    const totalDevelopers = await prisma.user.count({ where: { role: 'DEVELOPER' } });
    const totalInventoryItems = await prisma.inventory.count();

    // Expiring within 7 days
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
    const expiringSoon = await prisma.user.count({
      where: {
        role: 'ADMIN',
        isBlocked: false,
        subscriptionEndDate: {
          lte: sevenDaysFromNow,
          gte: new Date()
        }
      }
    });

    res.json({
      success: true,
      stats: {
        totalAdmins,
        activeAdmins,
        blockedAdmins,
        totalEmployees,
        totalDevelopers,
        developerSlotsRemaining: Math.max(0, 2 - totalDevelopers),
        totalInventoryItems,
        expiringSoon
      }
    });
  } catch (error) {
    console.error('Error fetching platform stats:', error);
    res.status(500).json({ error: 'Failed to retrieve SaaS platform analytics' });
  }
};

/**
 * Get list of all client businesses (Admins) with rich details
 */
const getAllClients = async (req, res) => {
  try {
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: {
        id: true,
        name: true,
        email: true,
        businessName: true,
        phone: true,
        isBlocked: true,
        subscriptionPlan: true,
        subscriptionEndDate: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    // Enrich with employee count and inventory count for each admin
    const enrichedClients = await Promise.all(
      admins.map(async (admin) => {
        const employeeCount = await prisma.user.count({
          where: { role: 'EMPLOYEE', adminId: admin.id }
        });
        const inventoryCount = await prisma.inventory.count({
          where: { adminId: admin.id }
        });

        // Determine subscription health status
        let subStatus = 'Active';
        if (admin.isBlocked) {
          subStatus = 'Blocked';
        } else if (admin.subscriptionEndDate && new Date(admin.subscriptionEndDate) < new Date()) {
          subStatus = 'Expired';
        }

        return {
          ...admin,
          employeeCount,
          inventoryCount,
          subStatus
        };
      })
    );

    res.json({ success: true, clients: enrichedClients });
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Failed to fetch SaaS clients' });
  }
};

/**
 * Toggle SaaS Kill-Switch: Block or Unblock a client Admin
 */
const toggleAdminBlockStatus = async (req, res) => {
  const { adminId, isBlocked, reason } = req.body;
  const developerId = req.user.id;

  try {
    if (!adminId || typeof isBlocked !== 'boolean') {
      return res.status(400).json({ error: 'Validation Error', message: 'adminId and isBlocked (boolean) are required.' });
    }

    const targetAdmin = await prisma.user.findUnique({
      where: { id: adminId }
    });

    if (!targetAdmin || targetAdmin.role !== 'ADMIN') {
      return res.status(404).json({ error: 'Not Found', message: 'Target client admin not found.' });
    }

    const updatedAdmin = await prisma.user.update({
      where: { id: adminId },
      data: { isBlocked }
    });

    // Record Action in SystemAuditLog
    const actionName = isBlocked ? 'BLOCK_ADMIN' : 'UNBLOCK_ADMIN';
    const detailMsg = isBlocked
      ? `Developer ${req.user.name} (${req.user.email}) activated SaaS Kill-Switch for Admin "${targetAdmin.businessName || targetAdmin.name}" (${targetAdmin.email}). Reason: ${reason || 'Non-payment or administrative lock'}.`
      : `Developer ${req.user.name} (${req.user.email}) restored platform access for Admin "${targetAdmin.businessName || targetAdmin.name}" (${targetAdmin.email}). Reason: ${reason || 'Payment cleared or administrative unlock'}.`;

    await prisma.systemAuditLog.create({
      data: {
        developerId,
        targetAdminId: adminId,
        action: actionName,
        details: detailMsg,
        ipAddress: req.ip || req.connection.remoteAddress
      }
    });

    res.json({
      success: true,
      message: `Admin ${targetAdmin.email} has been successfully ${isBlocked ? 'BLOCKED' : 'UNBLOCKED'}.`,
      client: updatedAdmin
    });
  } catch (error) {
    console.error('Error toggling admin block status:', error);
    res.status(500).json({ error: 'Failed to update admin block status' });
  }
};

/**
 * Update Admin's SaaS Subscription (Extend days, change plan)
 */
const updateClientSubscription = async (req, res) => {
  const { adminId, daysToAdd, customEndDate, planName } = req.body;
  const developerId = req.user.id;

  try {
    const admin = await prisma.user.findUnique({ where: { id: adminId } });
    if (!admin || admin.role !== 'ADMIN') {
      return res.status(404).json({ error: 'Client admin not found' });
    }

    let newEndDate;
    if (customEndDate) {
      newEndDate = new Date(customEndDate);
    } else if (daysToAdd) {
      const currentOrNow = admin.subscriptionEndDate && new Date(admin.subscriptionEndDate) > new Date()
        ? new Date(admin.subscriptionEndDate)
        : new Date();
      currentOrNow.setDate(currentOrNow.getDate() + parseInt(daysToAdd));
      newEndDate = currentOrNow;
    } else {
      return res.status(400).json({ error: 'Please provide either daysToAdd or customEndDate' });
    }

    // Update admin subscription and automatically unblock if expired
    const updated = await prisma.user.update({
      where: { id: adminId },
      data: {
        subscriptionEndDate: newEndDate,
        subscriptionPlan: planName || admin.subscriptionPlan || 'PREMIUM_PRO',
        isBlocked: false // Unblock automatically when renewed
      }
    });

    // Record audit log
    await prisma.systemAuditLog.create({
      data: {
        developerId,
        targetAdminId: adminId,
        action: 'EXTEND_SUBSCRIPTION',
        details: `Subscription extended to ${newEndDate.toISOString().split('T')[0]} for client "${admin.businessName || admin.name}" (${admin.email}). Plan: ${planName || admin.subscriptionPlan}.`
      }
    });

    res.json({
      success: true,
      message: `Subscription updated successfully until ${newEndDate.toISOString().split('T')[0]}.`,
      client: updated
    });
  } catch (error) {
    console.error('Error updating subscription:', error);
    res.status(500).json({ error: 'Failed to update subscription' });
  }
};

/**
 * Get SaaS System Audit Logs
 */
const getSystemAuditLogs = async (req, res) => {
  try {
    const logs = await prisma.systemAuditLog.findMany({
      include: {
        developer: {
          select: { name: true, email: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 100
    });

    res.json({ success: true, logs });
  } catch (error) {
    console.error('Error fetching audit logs:', error);
    res.status(500).json({ error: 'Failed to fetch system audit logs' });
  }
};

/**
 * Trigger automated subscription expiry sweep on demand
 */
const triggerManualSubscriptionCheck = async (req, res) => {
  try {
    const result = await checkSubscriptionExpiryNow();
    res.json({
      success: true,
      message: `Subscription sweep completed. ${result.count} accounts auto-suspended.`,
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to run subscription sweep' });
  }
};

module.exports = {
  getPlatformStats,
  getAllClients,
  toggleAdminBlockStatus,
  updateClientSubscription,
  getSystemAuditLogs,
  triggerManualSubscriptionCheck
};

`

---

### File: backend\src\controllers\employeeController.js
`javascript
const prisma = require('../config/prisma');

/**
 * Submit a Leave Request
 */
const submitLeaveRequest = async (req, res) => {
  const userId = req.user.id;
  const adminId = req.user.adminId;
  const { reason, startDate, endDate } = req.body;

  try {
    if (!reason) {
      return res.status(400).json({ error: 'Please provide a reason for the leave request' });
    }

    const leave = await prisma.leaveRequest.create({
      data: {
        userId,
        adminId,
        reason: reason.trim(),
        startDate: startDate ? new Date(startDate) : new Date(),
        endDate: endDate ? new Date(endDate) : new Date(),
        status: 'Pending'
      }
    });

    res.status(201).json({
      success: true,
      message: 'Leave request submitted successfully. Awaiting Admin review.',
      leave
    });
  } catch (error) {
    console.error('Error submitting leave request:', error);
    res.status(500).json({ error: 'Failed to submit leave request' });
  }
};

/**
 * Get My Leave Requests
 */
const getMyLeaves = async (req, res) => {
  const userId = req.user.id;

  try {
    const leaves = await prisma.leaveRequest.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, leaves });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leave requests' });
  }
};

/**
 * Get My Employee Profile Details
 */
const getMyDetails = async (req, res) => {
  const userId = req.user.id;

  try {
    const employee = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        shiftStart: true,
        shiftEnd: true,
        department: true,
        phone: true,
        createdAt: true
      }
    });

    // Also fetch business name
    let employerName = 'Corporate Headquarters';
    if (req.user.adminId) {
      const employer = await prisma.user.findUnique({
        where: { id: req.user.adminId },
        select: { businessName: true, name: true }
      });
      if (employer) employerName = employer.businessName || employer.name;
    }

    res.json({
      success: true,
      employee: {
        ...employee,
        employerName
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee details' });
  }
};

module.exports = {
  submitLeaveRequest,
  getMyLeaves,
  getMyDetails
};

`

---

### File: backend\src\controllers\financialController.js
`javascript
const prisma = require('../config/prisma');

/**
 * Get Profit & Loss and Sales Financial Metrics for Business Owner
 */
const getFinancialAnalytics = async (req, res) => {
  const adminId = req.user.id;

  try {
    const transactions = await prisma.saleTransaction.findMany({
      where: { adminId },
      orderBy: { createdAt: 'desc' }
    });

    const totalRevenue = transactions.reduce((acc, curr) => acc + curr.totalRevenue, 0);
    const totalCost = transactions.reduce((acc, curr) => acc + (curr.costPrice * curr.quantity), 0);
    const grossProfit = totalRevenue - totalCost;
    const profitMargin = totalRevenue > 0 ? parseFloat(((grossProfit / totalRevenue) * 100).toFixed(1)) : 0;

    // Monthly breakdown (last 6 months)
    const monthlySales = {};
    transactions.forEach(t => {
      const monthKey = new Date(t.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
      if (!monthlySales[monthKey]) {
        monthlySales[monthKey] = { month: monthKey, revenue: 0, profit: 0, orders: 0 };
      }
      monthlySales[monthKey].revenue += t.totalRevenue;
      monthlySales[monthKey].profit += t.totalProfit;
      monthlySales[monthKey].orders += 1;
    });

    res.json({
      success: true,
      summary: {
        totalRevenue: parseFloat(totalRevenue.toFixed(2)),
        totalCost: parseFloat(totalCost.toFixed(2)),
        grossProfit: parseFloat(grossProfit.toFixed(2)),
        profitMargin,
        totalSalesCount: transactions.length,
        monthlyTrend: Object.values(monthlySales)
      },
      recentTransactions: transactions.slice(0, 20)
    });
  } catch (error) {
    console.error('Financial analytics error:', error);
    res.status(500).json({ error: 'Failed to retrieve financial metrics' });
  }
};

/**
 * Record a New Item Sale & Update Stock Automatically
 */
const recordSale = async (req, res) => {
  const adminId = req.user.id;
  const { inventoryId, quantity, customSellingPrice, customerName, notes } = req.body;

  try {
    const qty = parseInt(quantity);
    if (!inventoryId || isNaN(qty) || qty <= 0) {
      return res.status(400).json({ error: 'Valid inventory item and quantity (>0) are required' });
    }

    const item = await prisma.inventory.findFirst({
      where: { id: inventoryId, adminId }
    });

    if (!item) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }

    if (item.quantity < qty) {
      return res.status(400).json({
        error: 'Insufficient Stock',
        message: `Only ${item.quantity} units of "${item.itemName}" are in stock. Cannot sell ${qty} units.`
      });
    }

    const sellingPrice = customSellingPrice !== undefined && customSellingPrice !== ''
      ? parseFloat(customSellingPrice)
      : item.sellingPrice;
    const costPrice = item.costPrice;
    const totalRevenue = parseFloat((sellingPrice * qty).toFixed(2));
    const totalProfit = parseFloat(((sellingPrice - costPrice) * qty).toFixed(2));

    // 1. Deduct Inventory Stock
    const remainingQty = item.quantity - qty;
    await prisma.inventory.update({
      where: { id: item.id },
      data: {
        quantity: remainingQty,
        lastUpdatedBy: req.user.name
      }
    });

    // 2. Record Sale Transaction
    const transaction = await prisma.saleTransaction.create({
      data: {
        adminId,
        inventoryId: item.id,
        itemName: item.itemName,
        quantity: qty,
        costPrice,
        sellingPrice,
        totalRevenue,
        totalProfit,
        customerName: customerName || 'Walk-in Customer',
        notes: notes || null
      }
    });

    // 3. Log Audit Trail
    await prisma.auditTrail.create({
      data: {
        adminId,
        action: 'SOLD',
        details: `Dispatched ${qty} units of "${item.itemName}" for $${totalRevenue} (Profit: $${totalProfit}). Stock remaining: ${remainingQty} units. Customer: ${customerName || 'Walk-in'}.`,
        userId: req.user.id,
        inventoryId: item.id
      }
    });

    // 4. Low Stock Alert Notification Check
    if (remainingQty <= item.minStockLevel) {
      await prisma.notification.create({
        data: {
          userId: adminId,
          title: '⚠️ Low Stock Alert',
          message: `Stock for "${item.itemName}" (SKU: ${item.sku}) has reached critical level (${remainingQty} units left). Min threshold is ${item.minStockLevel}.`,
          type: 'WARNING'
        }
      });
    }

    res.status(201).json({
      success: true,
      message: `Sale completed: ${qty} units sold for $${totalRevenue}. Net profit: $${totalProfit}.`,
      transaction,
      remainingStock: remainingQty
    });
  } catch (error) {
    console.error('Error recording sale:', error);
    res.status(500).json({ error: 'Failed to record sale transaction' });
  }
};

module.exports = {
  getFinancialAnalytics,
  recordSale
};

`

---

### File: backend\src\controllers\inventoryController.js
`javascript
const prisma = require('../config/prisma');

/**
 * Get all inventory items for the Admin organization with search & filter
 */
const getInventory = async (req, res) => {
  const adminId = req.user.id;
  const { search, lowStockOnly, category } = req.query;

  try {
    const whereClause = { adminId };

    if (search) {
      whereClause.OR = [
        { itemName: { contains: search } },
        { sku: { contains: search } },
        { category: { contains: search } }
      ];
    }

    if (category && category !== 'All') {
      whereClause.category = category;
    }

    let items = await prisma.inventory.findMany({
      where: whereClause,
      include: {
        auditTrails: {
          orderBy: { createdAt: 'desc' },
          take: 3,
          include: {
            user: { select: { name: true } }
          }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });

    if (lowStockOnly === 'true') {
      items = items.filter(item => item.quantity <= item.minStockLevel);
    }

    res.json({ success: true, count: items.length, items });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
};

/**
 * Add a new inventory item
 */
const createInventoryItem = async (req, res) => {
  const adminId = req.user.id;
  const { itemName, sku, category, quantity, minStockLevel, costPrice, sellingPrice } = req.body;

  try {
    if (!itemName || !sku) {
      return res.status(400).json({ error: 'Item name and SKU are required' });
    }

    const existingSku = await prisma.inventory.findUnique({
      where: { sku: sku.trim().toUpperCase() }
    });

    if (existingSku) {
      return res.status(400).json({ error: `SKU "${sku}" is already in use.` });
    }

    const item = await prisma.inventory.create({
      data: {
        adminId,
        itemName: itemName.trim(),
        sku: sku.trim().toUpperCase(),
        category: category || 'General',
        quantity: parseInt(quantity) || 0,
        minStockLevel: parseInt(minStockLevel) || 5,
        costPrice: parseFloat(costPrice) || 0,
        sellingPrice: parseFloat(sellingPrice) || 0,
        lastUpdatedBy: req.user.name
      }
    });

    // Record Audit Trail
    await prisma.auditTrail.create({
      data: {
        adminId,
        action: 'CREATED',
        details: `Initial entry: Created item "${item.itemName}" (SKU: ${item.sku}) with quantity ${item.quantity}. Cost: $${item.costPrice}, Selling: $${item.sellingPrice}.`,
        userId: req.user.id,
        inventoryId: item.id
      }
    });

    res.status(201).json({ success: true, message: 'Item created successfully', item });
  } catch (error) {
    console.error('Error creating inventory item:', error);
    res.status(500).json({ error: 'Failed to create inventory item' });
  }
};

/**
 * Update an inventory item (Quantity adjustment or detail changes)
 */
const updateInventoryItem = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;
  const { itemName, category, quantity, minStockLevel, costPrice, sellingPrice, changeReason } = req.body;

  try {
    const existing = await prisma.inventory.findFirst({
      where: { id, adminId }
    });

    if (!existing) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }

    const oldQty = existing.quantity;
    const newQty = quantity !== undefined ? parseInt(quantity) : oldQty;
    const diff = newQty - oldQty;

    const updated = await prisma.inventory.update({
      where: { id },
      data: {
        itemName: itemName !== undefined ? itemName.trim() : undefined,
        category: category !== undefined ? category : undefined,
        quantity: newQty,
        minStockLevel: minStockLevel !== undefined ? parseInt(minStockLevel) : undefined,
        costPrice: costPrice !== undefined ? parseFloat(costPrice) : undefined,
        sellingPrice: sellingPrice !== undefined ? parseFloat(sellingPrice) : undefined,
        lastUpdatedBy: req.user.name
      }
    });

    // Audit Trail logging
    let action = 'UPDATED';
    let details = `Updated by ${req.user.name}.`;
    if (diff !== 0) {
      action = diff > 0 ? 'RESTOCKED' : 'SOLD/ADJUSTED';
      details = `Stock changed from ${oldQty} to ${newQty} (${diff > 0 ? '+' : ''}${diff} units). Reason: ${changeReason || 'Direct update'}. Updated by ${req.user.name}.`;
    } else {
      details = `Modified attributes for item "${updated.itemName}". Updated by ${req.user.name}.`;
    }

    await prisma.auditTrail.create({
      data: {
        adminId,
        action,
        details,
        userId: req.user.id,
        inventoryId: updated.id
      }
    });

    res.json({ success: true, message: 'Inventory updated successfully', item: updated });
  } catch (error) {
    console.error('Error updating inventory item:', error);
    res.status(500).json({ error: 'Failed to update inventory item' });
  }
};

/**
 * Delete an inventory item
 */
const deleteInventoryItem = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;

  try {
    const existing = await prisma.inventory.findFirst({
      where: { id, adminId }
    });

    if (!existing) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Record audit trail before deletion
    await prisma.auditTrail.create({
      data: {
        adminId,
        action: 'DELETED',
        details: `Deleted item "${existing.itemName}" (SKU: ${existing.sku}) with final stock ${existing.quantity} units by ${req.user.name}.`,
        userId: req.user.id,
        inventoryId: null
      }
    });

    await prisma.inventory.delete({ where: { id } });

    res.json({ success: true, message: `Item "${existing.itemName}" removed from inventory` });
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    res.status(500).json({ error: 'Failed to delete inventory item' });
  }
};

/**
 * Get item audit history
 */
const getItemAuditHistory = async (req, res) => {
  const adminId = req.user.id;
  const { id } = req.params;

  try {
    const trails = await prisma.auditTrail.findMany({
      where: {
        adminId,
        ...(id ? { inventoryId: id } : {})
      },
      include: {
        user: { select: { name: true, email: true } },
        inventory: { select: { itemName: true, sku: true } }
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    res.json({ success: true, trails });
  } catch (error) {
    console.error('Error fetching audit trail:', error);
    res.status(500).json({ error: 'Failed to fetch inventory audit history' });
  }
};

module.exports = {
  getInventory,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  getItemAuditHistory
};

`

---

### File: backend\src\controllers\notificationController.js
`javascript
const prisma = require('../config/prisma');

/**
 * Get user notifications
 */
const getNotifications = async (req, res) => {
  const userId = req.user.id;

  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20
    });

    const unreadCount = notifications.filter(n => !n.isRead).length;

    res.json({ success: true, count: notifications.length, unreadCount, notifications });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notifications' });
  }
};

/**
 * Mark notification as read
 */
const markAsRead = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    await prisma.notification.updateMany({
      where: { id, userId },
      data: { isRead: true }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update notification' });
  }
};

/**
 * Mark all as read
 */
const markAllAsRead = async (req, res) => {
  const userId = req.user.id;

  try {
    await prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark all notifications as read' });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
  markAllAsRead
};

`

---

### File: backend\src\controllers\payrollController.js
`javascript
const prisma = require('../config/prisma');

/**
 * Get Payroll & Performance Analytics for Staff
 */
const getPayrollSummary = async (req, res) => {
  const adminId = req.user.id;
  const { month, year } = req.query;

  try {
    const targetYear = year ? parseInt(year) : new Date().getFullYear();
    const targetMonth = month !== undefined ? parseInt(month) : new Date().getMonth(); // 0-indexed

    const startOfMonth = new Date(targetYear, targetMonth, 1);
    const endOfMonth = new Date(targetYear, targetMonth + 1, 0, 23, 59, 59, 999);

    const employees = await prisma.user.findMany({
      where: { role: 'EMPLOYEE', adminId },
      select: {
        id: true,
        name: true,
        email: true,
        department: true,
        salary: true,
        shiftStart: true,
        shiftEnd: true
      }
    });

    const payrollData = await Promise.all(
      employees.map(async (emp) => {
        const attendances = await prisma.attendance.findMany({
          where: {
            userId: emp.id,
            date: { gte: startOfMonth, lte: endOfMonth }
          }
        });

        const totalDaysPresent = attendances.filter(a => a.status === 'Present' || a.status === 'Late').length;
        const totalLateDays = attendances.filter(a => a.status === 'Late').length;
        const totalHoursWorked = parseFloat(
          attendances.reduce((acc, a) => acc + (a.totalHours || 0), 0).toFixed(2)
        );

        // Standard working days in month ~ 22 days (8 hours/day = 176 hours)
        const expectedHours = 22 * 8;
        const attendanceRate = expectedHours > 0
          ? Math.min(100, parseFloat(((totalHoursWorked / expectedHours) * 100).toFixed(1)))
          : 0;

        // Base monthly salary
        const baseSalary = emp.salary || 3500;

        // Deductions: $20 penalty for each late day beyond 2 grace occurrences
        const excessiveLateDays = Math.max(0, totalLateDays - 2);
        const lateDeduction = excessiveLateDays * 20;

        // Net payout
        const netSalary = Math.max(0, parseFloat((baseSalary - lateDeduction).toFixed(2)));

        return {
          employeeId: emp.id,
          name: emp.name,
          email: emp.email,
          department: emp.department,
          baseSalary,
          totalDaysPresent,
          totalLateDays,
          totalHoursWorked,
          attendanceRate,
          excessiveLateDays,
          lateDeduction,
          netSalary,
          status: 'Processed'
        };
      })
    );

    const totalPayrollDisbursement = payrollData.reduce((acc, p) => acc + p.netSalary, 0);

    res.json({
      success: true,
      period: {
        month: targetMonth + 1,
        year: targetYear,
        monthName: startOfMonth.toLocaleString('default', { month: 'long' })
      },
      summary: {
        totalStaffCount: employees.length,
        totalPayrollDisbursement: parseFloat(totalPayrollDisbursement.toFixed(2)),
        averageAttendanceRate: payrollData.length > 0
          ? parseFloat((payrollData.reduce((acc, p) => acc + p.attendanceRate, 0) / payrollData.length).toFixed(1))
          : 0
      },
      payroll: payrollData
    });
  } catch (error) {
    console.error('Payroll summary error:', error);
    res.status(500).json({ error: 'Failed to generate payroll calculation' });
  }
};

module.exports = {
  getPayrollSummary
};

`

---

### File: backend\src\jobs\subscriptionCron.js
`javascript
const cron = require('node-cron');
const prisma = require('../config/prisma');

/**
 * Checks all active ADMIN accounts and flags expired subscriptions as blocked.
 * Records system audit log for automated suspensions.
 */
const checkSubscriptionExpiryNow = async () => {
  try {
    const now = new Date();

    const expiredAdmins = await prisma.user.findMany({
      where: {
        role: 'ADMIN',
        isBlocked: false,
        subscriptionEndDate: {
          not: null,
          lt: now
        }
      }
    });

    if (expiredAdmins.length === 0) {
      console.log('[CRON SUBSCRIPTION] Scan complete: No expired admin licenses found.');
      return { count: 0, expiredAdmins: [] };
    }

    console.log(`[CRON SUBSCRIPTION] Found ${expiredAdmins.length} expired admin accounts. Applying SaaS Kill-Switch...`);

    // Block them and create system audit log entries
    for (const admin of expiredAdmins) {
      await prisma.user.update({
        where: { id: admin.id },
        data: { isBlocked: true }
      });

      // Find any developer to associate system action with, or record system-level log
      const developer = await prisma.user.findFirst({
        where: { role: 'DEVELOPER' }
      });

      if (developer) {
        await prisma.systemAuditLog.create({
          data: {
            developerId: developer.id,
            targetAdminId: admin.id,
            action: 'AUTO_SUSPEND_EXPIRED_SUBSCRIPTION',
            details: `Automated Cron Suspension: Subscription for client "${admin.businessName || admin.name}" (${admin.email}) expired on ${admin.subscriptionEndDate.toISOString().split('T')[0]}.`
          }
        });
      }
    }

    console.log(`[CRON SUBSCRIPTION] Successfully suspended ${expiredAdmins.length} expired admin accounts.`);
    return { count: expiredAdmins.length, expiredAdmins };
  } catch (error) {
    console.error('[CRON ERROR] Failed to process subscription expiry check:', error);
    throw error;
  }
};

/**
 * Schedules daily midnight sweep ('0 0 * * *').
 * Also runs on initial start.
 */
const initSubscriptionCron = () => {
  // Run once on server startup
  checkSubscriptionExpiryNow().catch(err => console.error('Initial subscription check error:', err));

  // Run everyday at midnight (00:00)
  cron.schedule('0 0 * * *', () => {
    console.log('[CRON SUBSCRIPTION] Triggering scheduled midnight subscription expiry verification...');
    checkSubscriptionExpiryNow();
  });
};

module.exports = { initSubscriptionCron, checkSubscriptionExpiryNow };

`

---

### File: backend\src\middleware\auth.js
`javascript
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const JWT_SECRET = process.env.JWT_SECRET || 'commercial-saas-super-secret-key-2026';

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized', message: 'No authentication token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        businessName: true,
        adminId: true,
        isBlocked: true,
        shiftStart: true,
        shiftEnd: true,
        subscriptionPlan: true,
        subscriptionEndDate: true
      }
    });

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized', message: 'User account does not exist or has been removed.' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'TokenExpired', message: 'Session expired. Please log in again.' });
    }
    return res.status(401).json({ error: 'Unauthorized', message: 'Invalid authentication token.' });
  }
};

const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Forbidden',
        message: `Access denied. Requires one of roles: [${allowedRoles.join(', ')}]. Your role is ${req.user ? req.user.role : 'none'}.`
      });
    }
    next();
  };
};

module.exports = { authenticate, requireRole, JWT_SECRET };

`

---

### File: backend\src\middleware\geoFenceCheck.js
`javascript
/**
 * IP and Geo-fencing verification middleware for Employee Attendance Terminal.
 * Prevents remote / out-of-office fake check-ins.
 */
const verifyOfficeNetwork = (req, res, next) => {
  // If geofencing is bypassed via request setting (for testing/demo flexibility) or disabled:
  const enforceGeofence = process.env.ENFORCE_GEOFENCE === 'true' || req.headers['x-enforce-geofence'] === 'true';

  if (!enforceGeofence) {
    return next();
  }

  const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const trustedOfficeIPs = (process.env.OFFICE_TRUSTED_IPS || '127.0.0.1,::1,::ffff:127.0.0.1,192.168.1.50').split(',');

  const isLocalOrTrusted = trustedOfficeIPs.some(ip => clientIP.includes(ip.trim()));

  // Optional Geolocation coordinate check if client sent latitude/longitude
  const { latitude, longitude } = req.body;
  if (latitude && longitude && process.env.OFFICE_LAT && process.env.OFFICE_LNG) {
    const officeLat = parseFloat(process.env.OFFICE_LAT);
    const officeLng = parseFloat(process.env.OFFICE_LNG);
    const maxRadiusMeters = parseFloat(process.env.OFFICE_RADIUS_METERS || '200');

    // Haversine distance formula
    const R = 6371e3; // metres
    const phi1 = (latitude * Math.PI) / 180;
    const phi2 = (officeLat * Math.PI) / 180;
    const deltaPhi = ((officeLat - latitude) * Math.PI) / 180;
    const deltaLambda = ((officeLng - longitude) * Math.PI) / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    if (distance > maxRadiusMeters) {
      return res.status(403).json({
        error: 'Location Restriction',
        message: `Check-in denied: You are ${Math.round(distance)}m away from office headquarters. Maximum allowed range is ${maxRadiusMeters}m.`
      });
    }
  } else if (!isLocalOrTrusted && process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      error: 'Network Restriction',
      message: 'Check-in denied: You must be connected to the authorized Office Wi-Fi / Corporate Network to mark attendance.'
    });
  }

  next();
};

module.exports = { verifyOfficeNetwork };

`

---

### File: backend\src\middleware\licenseCheck.js
`javascript
const prisma = require('../config/prisma');

const verifyLicenseStatus = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized', message: 'User not authenticated' });
    }

    // DEVELOPER has unconditional master platform access
    if (user.role === 'DEVELOPER') {
      return next();
    }

    // ADMIN verification
    if (user.role === 'ADMIN') {
      if (user.isBlocked) {
        return res.status(403).json({
          error: 'Account Suspended',
          code: 'SUSPENDED',
          message: 'Your software license access has been restricted by the SaaS platform administrator due to pending billing or policy restrictions.'
        });
      }

      // Check subscription expiry date
      if (user.subscriptionEndDate && new Date(user.subscriptionEndDate) < new Date()) {
        // Automatically persist blocked state
        await prisma.user.update({
          where: { id: user.id },
          data: { isBlocked: true }
        });

        return res.status(403).json({
          error: 'Subscription Expired',
          code: 'EXPIRED',
          message: 'Your SaaS subscription has expired. Please contact your SaaS provider to renew your license.'
        });
      }

      return next();
    }

    // EMPLOYEE verification
    if (user.role === 'EMPLOYEE') {
      // Check employee personal status
      if (user.isBlocked) {
        return res.status(403).json({
          error: 'Account Deactivated',
          code: 'DEACTIVATED',
          message: 'Your employee profile has been deactivated by your company administrator.'
        });
      }

      // Check organization (Admin) parent status
      if (user.adminId) {
        const organizationAdmin = await prisma.user.findUnique({
          where: { id: user.adminId },
          select: { isBlocked: true, subscriptionEndDate: true, businessName: true }
        });

        if (organizationAdmin) {
          if (organizationAdmin.isBlocked || (organizationAdmin.subscriptionEndDate && new Date(organizationAdmin.subscriptionEndDate) < new Date())) {
            return res.status(403).json({
              error: 'Company Subscription Suspended',
              code: 'COMPANY_SUSPENDED',
              message: `Access for ${organizationAdmin.businessName || 'your organization'} is currently suspended due to pending subscription billing. Please consult your business administrator.`
            });
          }
        }
      }

      return next();
    }

    next();
  } catch (error) {
    console.error('License check error:', error);
    return res.status(500).json({ error: 'Server Error during license verification' });
  }
};

module.exports = { verifyLicenseStatus };

`

---

### File: backend\src\routes\adminRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const {
  getAdminDashboardStats,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getLeaveRequests,
  updateLeaveStatus
} = require('../controllers/adminController');
const { getFinancialAnalytics, recordSale } = require('../controllers/financialController');
const { getPayrollSummary } = require('../controllers/payrollController');
const { authenticate, requireRole } = require('../middleware/auth');
const { verifyLicenseStatus } = require('../middleware/licenseCheck');

// Require authentication, ADMIN role, and active license (Kill-Switch check)
router.use(authenticate, requireRole('ADMIN'), verifyLicenseStatus);

// Core Dashboard & Employees
router.get('/stats', getAdminDashboardStats);
router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

// Leave Requests
router.get('/leaves', getLeaveRequests);
router.put('/leaves/:id/status', updateLeaveStatus);

// Profit & Loss, Sales Financials
router.get('/financials', getFinancialAnalytics);
router.post('/sales', recordSale);

// Payroll & Performance
router.get('/payroll', getPayrollSummary);

module.exports = router;

`

---

### File: backend\src\routes\attendanceRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const {
  checkIn,
  checkOut,
  getAdminAttendance,
  overrideAttendance,
  deleteAttendance,
  getMyTodayAttendance,
  getMyAttendanceHistory
} = require('../controllers/attendanceController');
const { authenticate, requireRole } = require('../middleware/auth');
const { verifyLicenseStatus } = require('../middleware/licenseCheck');
const { verifyOfficeNetwork } = require('../middleware/geoFenceCheck');

// Base authentication & license verification
router.use(authenticate, verifyLicenseStatus);

// Employee terminal endpoints
router.post('/check-in', verifyOfficeNetwork, checkIn);
router.post('/check-out', checkOut);
router.get('/my-today', getMyTodayAttendance);
router.get('/my-history', getMyAttendanceHistory);

// Admin-only attendance management endpoints
router.get('/admin', requireRole('ADMIN'), getAdminAttendance);
router.put('/admin/override/:id', requireRole('ADMIN'), overrideAttendance);
router.delete('/admin/:id', requireRole('ADMIN'), deleteAttendance);

module.exports = router;

`

---

### File: backend\src\routes\authRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, forgotPassword, resetPassword, getProfile } = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/profile', authenticate, getProfile);

module.exports = router;

`

---

### File: backend\src\routes\developerRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const {
  getPlatformStats,
  getAllClients,
  toggleAdminBlockStatus,
  updateClientSubscription,
  getSystemAuditLogs,
  triggerManualSubscriptionCheck
} = require('../controllers/developerController');
const { authenticate, requireRole } = require('../middleware/auth');

// All developer routes require authentication and DEVELOPER role
router.use(authenticate, requireRole('DEVELOPER'));

router.get('/stats', getPlatformStats);
router.get('/clients', getAllClients);
router.post('/toggle-block', toggleAdminBlockStatus);
router.post('/update-subscription', updateClientSubscription);
router.get('/audit-logs', getSystemAuditLogs);
router.post('/trigger-cron-check', triggerManualSubscriptionCheck);

module.exports = router;

`

---

### File: backend\src\routes\employeeRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const {
  submitLeaveRequest,
  getMyLeaves,
  getMyDetails
} = require('../controllers/employeeController');
const { authenticate, requireRole } = require('../middleware/auth');
const { verifyLicenseStatus } = require('../middleware/licenseCheck');

// Require authentication, EMPLOYEE role, and license check
router.use(authenticate, requireRole('EMPLOYEE'), verifyLicenseStatus);

router.get('/profile', getMyDetails);
router.post('/leave', submitLeaveRequest);
router.get('/leaves', getMyLeaves);

module.exports = router;

`

---

### File: backend\src\routes\inventoryRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const {
  getInventory,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  getItemAuditHistory
} = require('../controllers/inventoryController');
const { authenticate, requireRole } = require('../middleware/auth');
const { verifyLicenseStatus } = require('../middleware/licenseCheck');

// Require authentication, ADMIN role, and license check
router.use(authenticate, requireRole('ADMIN'), verifyLicenseStatus);

router.get('/', getInventory);
router.post('/', createInventoryItem);
router.put('/:id', updateInventoryItem);
router.delete('/:id', deleteInventoryItem);
router.get('/audit', getItemAuditHistory);
router.get('/audit/:id', getItemAuditHistory);

module.exports = router;

`

---

### File: backend\src\routes\notificationRoutes.js
`javascript
const express = require('express');
const router = express.Router();
const { getNotifications, markAsRead, markAllAsRead } = require('../controllers/notificationController');
const { authenticate } = require('../middleware/auth');

router.use(authenticate);

router.get('/', getNotifications);
router.put('/:id/read', markAsRead);
router.put('/read-all', markAllAsRead);

module.exports = router;

`

---

### File: backend\src\seed.js
`javascript
const bcrypt = require('bcryptjs');
const prisma = require('./config/prisma');

async function main() {
  console.log('Seeding initial SaaS database with Developer, Admins, Employees, Inventory, and Attendance...');

  // Clear existing data for fresh clean seed
  await prisma.systemAuditLog.deleteMany();
  await prisma.auditTrail.deleteMany();
  await prisma.leaveRequest.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.inventory.deleteMany();
  await prisma.user.deleteMany();

  const devPassword = await bcrypt.hash('Developer123!', 10);
  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const empPassword = await bcrypt.hash('Employee123!', 10);

  // 1. Create SaaS Developer (1 of 2 max allowed)
  const developer = await prisma.user.create({
    data: {
      name: 'Kamran (SaaS Platform Owner)',
      email: 'developer@saas.com',
      password: devPassword,
      role: 'DEVELOPER',
      isBlocked: false
    }
  });
  console.log('✔ Seeded Developer:', developer.email);

  // 2. Create Active Business Client Admin (Apex Logistics)
  const subEndDate = new Date();
  subEndDate.setDate(subEndDate.getDate() + 30); // 30 days active

  const activeAdmin = await prisma.user.create({
    data: {
      name: 'Robert Vance',
      email: 'admin@corporate.com',
      password: adminPassword,
      role: 'ADMIN',
      businessName: 'Apex Global Logistics & Distribution',
      phone: '+1 (555) 234-8900',
      subscriptionPlan: 'ENTERPRISE_PRO',
      subscriptionEndDate: subEndDate,
      isBlocked: false
    }
  });
  console.log('✔ Seeded Active Admin:', activeAdmin.email);

  // 3. Create a Blocked / Overdue Business Client Admin (to demonstrate SaaS Kill-Switch!)
  const expiredDate = new Date();
  expiredDate.setDate(expiredDate.getDate() - 5); // 5 days overdue

  const blockedAdmin = await prisma.user.create({
    data: {
      name: 'Marcus Sterling',
      email: 'blocked@retail.com',
      password: adminPassword,
      role: 'ADMIN',
      businessName: 'Sterling Retail Chain',
      phone: '+1 (555) 888-9999',
      subscriptionPlan: 'BASIC_TIER',
      subscriptionEndDate: expiredDate,
      isBlocked: true
    }
  });
  console.log('✔ Seeded Blocked Admin (Kill-Switch Active):', blockedAdmin.email);

  // 4. Create System Audit Logs by Developer
  await prisma.systemAuditLog.createMany({
    data: [
      {
        developerId: developer.id,
        targetAdminId: activeAdmin.id,
        action: 'PROVISION_CLIENT',
        details: `Platform Developer provisioned new enterprise tenant "${activeAdmin.businessName}" with 30-day active license.`,
        createdAt: new Date(Date.now() - 7 * 86400000)
      },
      {
        developerId: developer.id,
        targetAdminId: blockedAdmin.id,
        action: 'BLOCK_ADMIN',
        details: `Platform Developer executed SaaS Kill-Switch on "${blockedAdmin.businessName}" (${blockedAdmin.email}) due to overdue invoice #INV-9201.`,
        createdAt: new Date(Date.now() - 2 * 86400000)
      }
    ]
  });

  // 5. Create Employees under activeAdmin
  const emp1 = await prisma.user.create({
    data: {
      name: 'Sarah Connor',
      email: 'sarah@corporate.com',
      password: empPassword,
      role: 'EMPLOYEE',
      adminId: activeAdmin.id,
      department: 'Supply Chain Operations',
      shiftStart: '09:00',
      shiftEnd: '17:00',
      phone: '+1 (555) 101-2020',
      salary: 4800.00
    }
  });

  const emp2 = await prisma.user.create({
    data: {
      name: 'David Miller',
      email: 'david@corporate.com',
      password: empPassword,
      role: 'EMPLOYEE',
      adminId: activeAdmin.id,
      department: 'Warehouse Management',
      shiftStart: '09:00',
      shiftEnd: '17:00',
      phone: '+1 (555) 303-4040',
      salary: 4200.00
    }
  });

  const emp3 = await prisma.user.create({
    data: {
      name: 'Elena Rostova',
      email: 'elena@corporate.com',
      password: empPassword,
      role: 'EMPLOYEE',
      adminId: activeAdmin.id,
      department: 'Inventory Quality Control',
      shiftStart: '10:00',
      shiftEnd: '18:00',
      phone: '+1 (555) 505-6060',
      salary: 5100.00
    }
  });
  console.log('✔ Seeded 3 Employees for Apex Global Logistics');

  // 6. Create Inventory for activeAdmin
  const inv1 = await prisma.inventory.create({
    data: {
      adminId: activeAdmin.id,
      itemName: 'Industrial Laser Barcode Scanner 2D',
      sku: 'SKU-SCN-2001',
      category: 'Hardware',
      quantity: 18,
      minStockLevel: 5,
      costPrice: 85.00,
      sellingPrice: 145.00,
      lastUpdatedBy: activeAdmin.name
    }
  });

  const inv2 = await prisma.inventory.create({
    data: {
      adminId: activeAdmin.id,
      itemName: 'Direct Thermal Shipping Labels (Box of 5000)',
      sku: 'SKU-LBL-5040',
      category: 'Packaging',
      quantity: 3, // LOW STOCK ALERT! (<= 10)
      minStockLevel: 10,
      costPrice: 22.00,
      sellingPrice: 45.00,
      lastUpdatedBy: activeAdmin.name
    }
  });

  const inv3 = await prisma.inventory.create({
    data: {
      adminId: activeAdmin.id,
      itemName: 'Heavy Duty Packaging Tape 72mm',
      sku: 'SKU-TPE-900',
      category: 'Packaging',
      quantity: 2, // LOW STOCK ALERT! (<= 8)
      minStockLevel: 8,
      costPrice: 4.50,
      sellingPrice: 9.99,
      lastUpdatedBy: activeAdmin.name
    }
  });

  const inv4 = await prisma.inventory.create({
    data: {
      adminId: activeAdmin.id,
      itemName: 'RFID Asset Tracking Pallet Tags (Pack of 100)',
      sku: 'SKU-RFID-100',
      category: 'Hardware',
      quantity: 45,
      minStockLevel: 10,
      costPrice: 40.00,
      sellingPrice: 79.00,
      lastUpdatedBy: activeAdmin.name
    }
  });

  // Inventory Audit Trails
  await prisma.auditTrail.createMany({
    data: [
      {
        adminId: activeAdmin.id,
        action: 'CREATED',
        details: 'Initial bulk inventory intake during system setup.',
        userId: activeAdmin.id,
        inventoryId: inv1.id
      },
      {
        adminId: activeAdmin.id,
        action: 'SOLD/ADJUSTED',
        details: 'Dispatched 7 units for Warehouse B outbound shipment.',
        userId: activeAdmin.id,
        inventoryId: inv2.id
      }
    ]
  });
  console.log('✔ Seeded Inventory & Audit Trails');

  // 7. Seed Attendance records for today & yesterday
  const today = new Date();
  today.setHours(9, 5, 0, 0); // Sarah: Present at 9:05

  const todayLate = new Date();
  todayLate.setHours(9, 45, 0, 0); // David: Late at 9:45

  await prisma.attendance.create({
    data: {
      userId: emp1.id,
      adminId: activeAdmin.id,
      date: new Date(),
      checkIn: today,
      status: 'Present',
      notes: 'On time check-in'
    }
  });

  await prisma.attendance.create({
    data: {
      userId: emp2.id,
      adminId: activeAdmin.id,
      date: new Date(),
      checkIn: todayLate,
      status: 'Late',
      notes: 'Traffic delay on highway'
    }
  });

  // Yesterday complete attendance record
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yIn = new Date(yesterday);
  yIn.setHours(8, 58, 0, 0);
  const yOut = new Date(yesterday);
  yOut.setHours(17, 12, 0, 0);

  await prisma.attendance.create({
    data: {
      userId: emp1.id,
      adminId: activeAdmin.id,
      date: yesterday,
      checkIn: yIn,
      checkOut: yOut,
      totalHours: 8.23,
      status: 'Present'
    }
  });

  // 8. Seed Leave Request
  await prisma.leaveRequest.create({
    data: {
      userId: emp3.id,
      adminId: activeAdmin.id,
      reason: 'Attending annual logistics & supply chain conference.',
      startDate: new Date(Date.now() + 86400000 * 3),
      endDate: new Date(Date.now() + 86400000 * 5),
      status: 'Pending'
    }
  });

  console.log('=======================================================');
  console.log('🎉 Seed Completed Successfully!');
  console.log('Demo Credentials:');
  console.log('1. DEVELOPER (SaaS Platform Owner):');
  console.log('   Email:    developer@saas.com');
  console.log('   Password: Developer123!');
  console.log('');
  console.log('2. ADMIN (Active Client Organization):');
  console.log('   Email:    admin@corporate.com');
  console.log('   Password: Admin123!');
  console.log('');
  console.log('3. ADMIN (Suspended / Blocked by SaaS Kill-Switch):');
  console.log('   Email:    blocked@retail.com');
  console.log('   Password: Admin123!');
  console.log('');
  console.log('4. EMPLOYEE (Apex Global Staff):');
  console.log('   Email:    sarah@corporate.com');
  console.log('   Password: Employee123!');
  console.log('=======================================================');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

`

---

### File: backend\src\server.js
`javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initSubscriptionCron } = require('./jobs/subscriptionCron');

const authRoutes = require('./routes/authRoutes');
const developerRoutes = require('./routes/developerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-enforce-geofence']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging in development
app.use((req, res, next) => {
  console.log(`[API] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/developer', developerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/notifications', notificationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Commercial SaaS Business Suite API',
    version: '1.1.0'
  });
});

// Global 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint Not Found', path: req.originalUrl });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Application Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred.' : err.message
  });
});

// Start Express server and background cron
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 SaaS Business Suite Backend running on port ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);

  // Initialize automated subscription expiry background cron
  initSubscriptionCron();
});

module.exports = app;

`

---

### File: backend\test-suite.js
`javascript
const BASE_URL = 'http://localhost:5000/api';

async function req(url, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, ok: res.ok, data };
}

async function runTests() {
  console.log('🧪 Starting Full SaaS Commercial Test Suite (v2.5 Enterprise Edition)...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✔ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    // 1. Health Check
    console.log('--- Test 1: API Health Check ---');
    const health = await req('/health');
    assert(health.data.status === 'online', 'Server is online and responding at /api/health');

    // 2. Developer Limit Check (Max 2 Rule)
    console.log('\n--- Test 2: Developer Registration Limits (Max 2 rule) ---');
    const dev3 = await req('/auth/register', {
      method: 'POST',
      body: {
        name: 'Third Developer (Forbidden)',
        email: 'dev3_test2@saas.com',
        password: 'Developer123!',
        role: 'DEVELOPER'
      }
    });
    assert(
      dev3.status === 403 && dev3.data.code === 'DEV_LIMIT_REACHED',
      `Correctly rejected 3rd Developer with code DEV_LIMIT_REACHED: "${dev3.data.message}"`
    );

    // 3. SaaS Kill-Switch Test (Blocked Admin Attempting Login)
    console.log('\n--- Test 3: SaaS Kill-Switch on Suspended/Non-Paying Admin ---');
    const blockedLogin = await req('/auth/login', {
      method: 'POST',
      body: {
        email: 'blocked@retail.com',
        password: 'Admin123!'
      }
    });
    assert(
      blockedLogin.status === 403,
      `Correctly blocked login for suspended client with 403 Forbidden: "${blockedLogin.data.message}"`
    );

    // 4. Active Admin Login & Dashboard Stats
    console.log('\n--- Test 4: Active Admin Login & Dashboard Stats ---');
    const adminLogin = await req('/auth/login', {
      method: 'POST',
      body: {
        email: 'admin@corporate.com',
        password: 'Admin123!'
      }
    });
    assert(adminLogin.data.success && adminLogin.data.user.role === 'ADMIN', 'Active Admin logged in successfully');
    const adminToken = adminLogin.data.token;

    const adminStats = await req('/admin/stats', {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert(
      adminStats.data.success && adminStats.data.stats.totalEmployees >= 3,
      `Admin retrieved stats: ${adminStats.data.stats.totalEmployees} employees, ${adminStats.data.stats.presentToday} present today.`
    );

    // 5. Inventory Dynamic Search, CRUD & Audit Trail
    console.log('\n--- Test 5: Inventory CRUD with Automatic Audit Trail Logging ---');
    const newSku = `SKU-POS-${Date.now()}`;
    const createInv = await req('/inventory', {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: {
        itemName: 'Enterprise Handheld PDA Scanner',
        sku: newSku,
        category: 'Hardware',
        quantity: 20,
        minStockLevel: 5,
        costPrice: 150,
        sellingPrice: 280
      }
    });
    assert(createInv.data.success, 'Created new inventory stock item');
    const createdItemId = createInv.data.item.id;

    // 6. Sales Dispatch & Profit/Loss Auto-Computation
    console.log('\n--- Test 6: Sales Dispatch & Profit/Loss Financial Analytics ---');
    const saleRes = await req('/admin/sales', {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` },
      body: {
        inventoryId: createdItemId,
        quantity: 5,
        customSellingPrice: 300, // Revenue = 5 * 300 = $1500; Cost = 5 * 150 = $750; Profit = $750
        customerName: 'Metro Logistics Distribution'
      }
    });
    assert(
      saleRes.data.success && saleRes.data.remainingStock === 15,
      `Recorded sale: Deducted 5 units (15 left). Revenue: $1500, Profit: $750.`
    );

    const financialsRes = await req('/admin/financials', {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert(
      financialsRes.data.success && financialsRes.data.summary.grossProfit > 0,
      `Financials computed: Total Revenue: $${financialsRes.data.summary.totalRevenue}, Net Profit: $${financialsRes.data.summary.grossProfit} (${financialsRes.data.summary.profitMargin}% margin).`
    );

    // 7. Payroll & Performance Computation
    console.log('\n--- Test 7: Staff Attendance Hours & Payroll Computation ---');
    const payrollRes = await req('/admin/payroll', {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert(
      payrollRes.data.success && payrollRes.data.payroll.length >= 3,
      `Calculated payroll for ${payrollRes.data.payroll.length} staff. Total disbursement: $${payrollRes.data.summary.totalPayrollDisbursement}.`
    );

    // 8. In-App Notification Center
    console.log('\n--- Test 8: Real-Time In-App Notification Center ---');
    const notifRes = await req('/notifications', {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert(notifRes.data.success, `Retrieved ${notifRes.data.count} notifications for admin (${notifRes.data.unreadCount} unread).`);

    const readAllRes = await req('/notifications/read-all', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert(readAllRes.data.success, 'Successfully marked all notifications as read.');

    // 9. Developer Platform Authority & Kill-Switch Toggle
    console.log('\n--- Test 9: Developer Platform Authority & Kill-Switch ---');
    const devLogin = await req('/auth/login', {
      method: 'POST',
      body: {
        email: 'developer@saas.com',
        password: 'Developer123!'
      }
    });
    assert(devLogin.data.success && devLogin.data.user.role === 'DEVELOPER', 'Developer logged in successfully');
    const devToken = devLogin.data.token;

    const clientsRes = await req('/developer/clients', {
      headers: { Authorization: `Bearer ${devToken}` }
    });
    const blockedClient = clientsRes.data.clients.find(c => c.email === 'blocked@retail.com');

    // Developer renews/extends subscription by 30 days and clears block
    const renewRes = await req('/developer/update-subscription', {
      method: 'POST',
      headers: { Authorization: `Bearer ${devToken}` },
      body: {
        adminId: blockedClient.id,
        daysToAdd: 30,
        planName: 'ENTERPRISE_PRO'
      }
    });
    assert(renewRes.data.success, 'Developer extended subscription and unblocked client');

    // Re-block for demonstration showcase
    await req('/developer/toggle-block', {
      method: 'POST',
      headers: { Authorization: `Bearer ${devToken}` },
      body: {
        adminId: blockedClient.id,
        isBlocked: true,
        reason: 'Re-blocked for demonstration showcase'
      }
    });

    // 10. Automated Subscription Expiry Sweep
    console.log('\n--- Test 10: Automated Subscription Expiry Cron Sweep ---');
    const sweepRes = await req('/developer/trigger-cron-check', {
      method: 'POST',
      headers: { Authorization: `Bearer ${devToken}` }
    });
    assert(sweepRes.data.success, `Subscription cron sweep triggered successfully: ${sweepRes.data.message}`);

    console.log('\n=======================================================');
    console.log(`🏆 ALL ENTERPRISE TESTS COMPLETE: ${passed} PASSED, ${failed} FAILED`);
    console.log('=======================================================');

  } catch (error) {
    console.error('Test suite error:', error);
  }
}

runTests();

`

---

### File: frontend\.gitignore
`
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

`

---

### File: frontend\.oxlintrc.json
`json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}

`

---

### File: frontend\index.html
`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

`

---

### File: frontend\package-lock.json
`json
{
  "name": "frontend",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "frontend",
      "version": "0.0.0",
      "dependencies": {
        "@tailwindcss/postcss": "^4.3.3",
        "axios": "^1.20.0",
        "lucide-react": "^1.48.0",
        "react": "^19.2.8",
        "react-dom": "^19.2.8",
        "react-router-dom": "^7.18.4",
        "xlsx": "^0.18.5"
      },
      "devDependencies": {
        "@types/react": "^19.2.18",
        "@types/react-dom": "^19.2.7",
        "@vitejs/plugin-react": "^6.1.1",
        "autoprefixer": "^10.6.1",
        "oxlint": "^1.81.0",
        "postcss": "^8.5.28",
        "tailwindcss": "^4.3.3",
        "vite": "^8.3.0"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.3.0.tgz",
      "integrity": "sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.151.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.151.0.tgz",
      "integrity": "sha512-J1yXrIlNDZVzE3ada310xeAw7nH8yCAyLPuUIsjKatFPmfn5bS1oW+cM+QsGOtVWd5nhSpbwZWx/rue+r5Z+PA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/oxc-project"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.85.0.tgz",
      "integrity": "sha512-q2KO/Zso9UT+OMn0NF9ywn4E4t0MI3yxiDhNyhsQ7DyQJrC4FhFE4TXOi4bktFnOWXTMds8qZSbpv2XwRaNOBg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.85.0.tgz",
      "integrity": "sha512-SxLN3ALjoT9NNdvpjEevGeHvfzTAFrF0NBYB5tzK7/GtCKMze3j1e/m/X2ozqGj2U9hfGG/dg/OG8vpVK4PiDA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.85.0.tgz",
      "integrity": "sha512-Y/Sup/J4f0f9UGsSd/xyCNTeWL+gepO63GBdEDAfue9nBsnk9zMmnIXx1O6b1V8C90vB5nucYNZ0pbMXAp8zJA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.85.0.tgz",
      "integrity": "sha512-ApOSNC04ynpDTwvBD+//0wyfODRSbEzvRoKpX8teffmc27z8AockwSNeMXGJXn5KP85eahDgR/2llICWLkzcnw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.85.0.tgz",
      "integrity": "sha512-bNrVrCOA/kHky3Tu79IXWXe5bhIgLXfUuUEDHlAGOHUk96MkvDZ1ecaQF19rwstrnaqfP1o9nBTqzIr9+ZHkUg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.85.0.tgz",
      "integrity": "sha512-NUrzOJ1s/EqsVvfn2L/1D8Wro2LPIZUbihL8kOJLh5fEdGEN3rdOGUYq3HwnUIL8sjpoP+4N6RaGrgmMJnaMPw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.85.0.tgz",
      "integrity": "sha512-UJXrAT3E/RWkEqXLIs2ehETja1qfgkPb+5gwLIIS+o/6cf+grHvoOXTa5997a/YNQfcJS0DRBTOfZt95cvOI1g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.85.0.tgz",
      "integrity": "sha512-lK40QLjI0HxigO7CjDDshEtfYIeiYS0020v5BHFPqN4uuQBQxd2K9LNom2dW15o9F1937quSCRVp4ZsVhdbYdg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.85.0.tgz",
      "integrity": "sha512-c2zbdBwGKreHXwRx3gWBuFGJxLhxgsg6YlZ+3H+RgRusU/UEV9jNwJ3HGYK+nRo0LvBa7mt6Kj86xoVotUo8cw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.85.0.tgz",
      "integrity": "sha512-tlt/Hy8lZ97/lCPmCgw/B3k/mwh+BzaIPbPkldZEly7TwLmx0xe2CQcaW2g/rR0dOgS9JNGCZsMEqLhUNMGvaw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.85.0.tgz",
      "integrity": "sha512-3tNR9Xey82X0zKuY1d8hJ6Rc9gwRDurmqGLnQZa5xqOXy8/YyiqFXjAtugkKLY82obOlpK1eSiDRlgcNPuxtIg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.85.0.tgz",
      "integrity": "sha512-wbGRd5PqCcjkJFHhZuZ2OBSUQY9czlQsoA/cQQB9JK/L9mC5MQgGoKAh+xd8QjA5V+0D3j+Qd1lAWn1I8zlelA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.85.0.tgz",
      "integrity": "sha512-3Sn0kSrE4DPZCWV/8o+n4x3aFZxI9ulMnkYlwCbJ8eUVkwRK2IerohE/A/z3SNbCwoPFOCJmGE5Avrq0rrvdvQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.85.0.tgz",
      "integrity": "sha512-JY2pxxYfB62bAGfejljVCqc44etItehPuAyaeSAdMuEMtwNA00ggMnS66lC1oIhos6oOXUkuU6mZ9bpFh3BqWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.85.0.tgz",
      "integrity": "sha512-5k74vZ6qJBjBHEOlBk9B/iv68Yu0F1Afw/vvT2ar6OGCqEeXLaSjXz2n/IPCbhLG22UoKoYEJTzpYraRdcp6PA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.85.0.tgz",
      "integrity": "sha512-GbAl5qt5TCkPLXTaIISZJnugrcBhra6rodcXc9jYt620UtdsTt71NlNmJmm0frxzFpd54x/G+MkitEJA8I/BoA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.85.0.tgz",
      "integrity": "sha512-kjmws5MK0et2swk4ND85D7NVQyDHw162i6whtZDLUA/lo6FQyBZDcmMRCMcVZcNrAhIaftVb00x9ChGDOjjNJA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.85.0.tgz",
      "integrity": "sha512-eSsIJx9n4yxvOqYTZyPEMyEXRmE60XH7xGAU7i0Qbsn1lf6Za3CWJ9aRd82oSFKXaxhp+sA6/yMJVRIpLpna6A==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.85.0.tgz",
      "integrity": "sha512-pBebIPUpKKhWrhSMWhy8TdAZBewiXnfxmaAGxhzxM1068GagqFaTwgKlU6e+UyJ2sPR+VoHouhXuGJkQjsrDvA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm-eabi": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm-eabi/-/binding-android-arm-eabi-1.2.10.tgz",
      "integrity": "sha512-bp9svZb+QurZeh+8H4BhrZkifEB0YBNvTVzNSJnJQkj4NrRwmQoDUCGP0vSN7PbvLeM7l1tK6GXL8mrTiH2myg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.10.tgz",
      "integrity": "sha512-wm6Dld3RXUAZ/gRWKyUy+4W1B5CB5UeFaOzsSWJWEdxZXHH8rCYiZ5dGe6oJmhsunAPWzL7FZV+VtvmN5Ye2eA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.10.tgz",
      "integrity": "sha512-UbEfXq/AqGNgRTV3ik+X/iR6mUxu2QdYAadwRxJWquUGnW6gDqdP1FtLtFXRow7RJx0ssRwi80XAPr4r+4DtsA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.10.tgz",
      "integrity": "sha512-7f5h17q5KZVx/ji1vb8OTq31ch1O2I7K8NPIr44GkyWTApXMIsmhWqZfgpOH10xeauqghDAvGlZktasCkcF6Eg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.10.tgz",
      "integrity": "sha512-ynOk/eEYhC6ZB2xCGvKrEOwE58oBy9LnrAqtkrDF9Fz1VTaNdGZTsV0VarJdhPwb+sOJTGjCLwcuyRJZ1dnMcQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.10.tgz",
      "integrity": "sha512-ERrAs185meZZhGan7a4l3RiiJK1ArSDlHdST++uvSxe+FDbR4TwUPahT/cbZJvaG6fIpDpF78surN+tX708Y4Q==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.10.tgz",
      "integrity": "sha512-KN7OHKD0J3jy1UzBwZWPxpwhODf9IARUIJcrH+yLYKOcmegZ8luEUM38lDP1bDVj40yP6PsSzCqOJF76vljFnQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.10.tgz",
      "integrity": "sha512-8l9wP8O+wa8zD6iw6egSfzVtu7oZVfH3hlUsMM4MwbLMhxleqeoXbZzjddyK3YyNlwLhqznq3tF7PkNJ8T/V2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.10.tgz",
      "integrity": "sha512-SeXNKeQzA5kLhz/J0CH6ZP0/HJ3v1xm/0YbiYpE0kK7emfRC2OIGGIaE14xzkISEGv2aYuUSpiLiU5Gbq+OI0A==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.10.tgz",
      "integrity": "sha512-mtht0nR+y8/hart4175Ll15w7lY8dg7CtQ+j2FDNTsDRspOWTK/2V3l0aj9sIj7XmvqxT8Yli/wq22e7feTTWg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.10.tgz",
      "integrity": "sha512-FSM94nGd55NYo48usCyM/nHfUKRnqc9+b0vJNuKV0oCCpIp/OGims7rO1Nv/DkFkt0S/s2rxsJ2kkS8J3HcpeA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.10.tgz",
      "integrity": "sha512-C3YxNB16myRLs7o+B+6PnQ6jBsdIS4+AE4Ah8glVGhDpEv9AOvxhZ/1duAb4B0UGczEK/lBbccksd8VI+p6zfw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.10.tgz",
      "integrity": "sha512-571TlE/F1eeTjjdjYAMMMPs1Mfv3MtX6s3+ZKVU6HiUjZ5Njc6c/qzNy/8K3zALTZnaw3JQVYrHxvNfjm43KAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.10.tgz",
      "integrity": "sha512-QXW+ZWaiqs2c7Fi++D/SsW07LTPcUrncxcskJGfGNBoaLik1IU6fJymz4HsqwEO0u5Iq11yTO0B/mc4cPk7jrQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.10.tgz",
      "integrity": "sha512-5FQFGgah17YeMtG1Yd5a+rMxQpTksyNXxRtKz06FVTaQw3RKYUJQbUoKk0/5jrXBpDo+7makNP7UHA2LQyH64A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.3.tgz",
      "integrity": "sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==",
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "postcss": "^8.5.16",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.1.1.tgz",
      "integrity": "sha512-yxLaQV9gkhS8ezJqCM6+ndU7mDY6gqAg75NQ+0IjwEI8IYOmQCgkRwHKVSfWXW076DsqMo0Dk+0FK1U+M5RgFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "oxc-transform-react": "^0.145.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "oxc-transform-react": {
          "optional": true
        }
      }
    },
    "node_modules/adler-32": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/adler-32/-/adler-32-1.3.1.tgz",
      "integrity": "sha512-ynZ4w/nUUv5rrsR8UUGoe1VC9hZj6V5hU9Qw1HlMDJGEJw5S7TfTErWTjMys6M7vr0YWcPqs3qAr4ss0nDfP+A==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.6.1",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.6.1.tgz",
      "integrity": "sha512-cL1Qz6ADZhcEbny/8HPfe99J6HhNoYtpX2LFLIbhgGE7Q1hlQVkYFdetDN7Id3KiQxhDrHwzlHr/YQCnZ8+xSA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.9",
        "caniuse-lite": "^1.0.30001810",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.20.0.tgz",
      "integrity": "sha512-r8aOh8j9cGKpgQAqpzrUHnSIc6a59Y3Xf/cv8sy1DrHCkZHzQGEuoq1tARk6qSyDdtQGSDgpb9kFlruzPvrgwg==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.16.0",
        "form-data": "^4.0.6",
        "https-proxy-agent": "^5.0.1",
        "proxy-from-env": "^2.1.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.25",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.25.tgz",
      "integrity": "sha512-gMmEShwwq7FJqMwvfRwvCl00v4kN+KOfJqXn+f4nrufak5gNHJOksd/60Dvjuz7sI8Y5WiSFBa8FEYr+zoyqCw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/browserslist": {
      "version": "4.29.0",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.29.0.tgz",
      "integrity": "sha512-3GSvyjvDI4Dur1Meg2BekJquu5uF+9R9a1+5M1Mde192eZoXbeXjzgOsgqPS2V8D5wrrip0gR5Hf/GhWQ9ZzaA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.23",
        "caniuse-lite": "^1.0.30001810",
        "electron-to-chromium": "^1.5.427",
        "node-releases": "^2.0.55",
        "update-browserslist-db": "^1.3.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001812",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001812.tgz",
      "integrity": "sha512-qN+QNNBr93TCmFrmte0bBCjSDMuRvt78VlHT99qIGPszm4QsqCX8lnyWUFkHi8B7ZBAPq8SH+UqyXNy/odMdng==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/cfb": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cfb/-/cfb-1.2.2.tgz",
      "integrity": "sha512-KfdUZsSOw19/ObEWasvBP/Ac4reZvAGauZhs6S/gqNhXhI7cKwvlH7ulj+dOEYnca4bm4SGo8C1bTAQvnTjgQA==",
      "license": "Apache-2.0",
      "dependencies": {
        "adler-32": "~1.3.0",
        "crc-32": "~1.2.0"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/codepage": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/codepage/-/codepage-1.15.0.tgz",
      "integrity": "sha512-3g6NUTPd/YtuuGrhMnOMRjFc+LJw/bnMp3+0r/Wcz3IXUuCosKRJvMphm5+Q+bvTVGcJJuRvVLuYba+WojaFaA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/crc-32": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz",
      "integrity": "sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==",
      "license": "Apache-2.0",
      "bin": {
        "crc32": "bin/crc32.njs"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.438",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.438.tgz",
      "integrity": "sha512-AN9xMU1hJiT65LkCUPL1DZm5TCbOPb2Qsm5pYwFLEXp6/qj9SdT4yMiqs7Qqstwvkn1zF7l36SRGt+s6XcJ0FA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.25.1",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.25.1.tgz",
      "integrity": "sha512-nGXts5znJzmWPu+mIE9izCOzdg63oJca2mDzGWWTth7sr4aCToKcoyFVBQwN75Ij5Pf6p510EwkTqViTRzDV+w==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/follow-redirects": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.16.0.tgz",
      "integrity": "sha512-y5rN/uOsadFT/JfYwhxRS5R7Qce+g3zG97+JrtFZlC9klX/W5hD7iiLzScI4nZqUS7DNUdhPgw4xI8W2LuXlUw==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.6.tgz",
      "integrity": "sha512-vKatAh4SlVfgbv+YtmhiRjhEMJsYpsG1Y2rMQtR+SVSbytsSD1YGzDIcrAJmdFec88u/+VoGmxnl+80gL1tRCQ==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.4",
        "mime-types": "^2.1.35"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/frac": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/frac/-/frac-1.1.2.tgz",
      "integrity": "sha512-w/XBfkibaTl3YDqASwfDUqkna4Z2p9cFSr1aHDt0WoMTECnRfBOv2WArlZILlqgWlmdIlALXGpM2AOhEk5W3IA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.48.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.48.0.tgz",
      "integrity": "sha512-R0CIKY/fXiC6y9xRBADgsK+VW2p/pcTJOMhLZf1T+uG+vJUvyUR02nGOgmIIC7MPkiNK4Ox8QDnbqF8rJYWPZQ==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.19",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.19.tgz",
      "integrity": "sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.57",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.57.tgz",
      "integrity": "sha512-kQK9LGGFiHtrWiNhZtA7Qbw17AQz+dmsEKODRIVTXA9+e5MS/2gZEBhYJt13GrAz5/IOZKddH/0Z3TP/Zgo+yw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/oxlint": {
      "version": "1.85.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.85.0.tgz",
      "integrity": "sha512-bc26s97nuvPj1ViyPsqmKecVkUWFMEdtayO8MaQ6oiLfs1pj94cQlZZhrh4BPNlr9HQosjhIlwgZKsfcwmcNgg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/oxc-project"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.85.0",
        "@oxlint/binding-android-arm64": "1.85.0",
        "@oxlint/binding-darwin-arm64": "1.85.0",
        "@oxlint/binding-darwin-x64": "1.85.0",
        "@oxlint/binding-freebsd-x64": "1.85.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.85.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.85.0",
        "@oxlint/binding-linux-arm64-gnu": "1.85.0",
        "@oxlint/binding-linux-arm64-musl": "1.85.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.85.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.85.0",
        "@oxlint/binding-linux-riscv64-musl": "1.85.0",
        "@oxlint/binding-linux-s390x-gnu": "1.85.0",
        "@oxlint/binding-linux-x64-gnu": "1.85.0",
        "@oxlint/binding-linux-x64-musl": "1.85.0",
        "@oxlint/binding-openharmony-arm64": "1.85.0",
        "@oxlint/binding-win32-arm64-msvc": "1.85.0",
        "@oxlint/binding-win32-ia32-msvc": "1.85.0",
        "@oxlint/binding-win32-x64-msvc": "1.85.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=7.0.2001",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/proxy-from-env": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-2.1.0.tgz",
      "integrity": "sha512-cJ+oHTW1VAEa8cJslgmUZrc+sjRKgAKl3Zyse6+PV38hZe/V6Z14TbCuXcan9F9ghlz4QrFr2c92TNF82UkYHA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.0.tgz",
      "integrity": "sha512-E8LUcbtBWt20bbl2YoHfx4ZDBdxVTfOKtCZn9cDSJ4l6/nuoApcpIBcj47t2wZoVX8g2ZHuMHbiShgCR1T5Sog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-JDk8dgif51OjFoDE70+OT9ICyYr+69HlmihNwp1+Nsfbna3t5sIiCa9ZJktDmQ4/1b/rn26hIAR2uYXDMr5r0Q==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.18.4",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.18.4.tgz",
      "integrity": "sha512-PUPQcMhMGRAslLcvtlPz/kmzBEWPhLdgLFrL7pLNepBL6dX0lWj4WD2cUYVgYCuT3jxvghYFg81cDTj44DhetQ==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.18.4",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.18.4.tgz",
      "integrity": "sha512-yrfmJHIpDG7taCpqKjT1G5B6q3O2K+RN8/fgNf0lTjCwiPbQ0ei6vXX9ZjQR+7ld8Tr7Z5xmyMnZ8YJrphWQUw==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.18.4"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.10.tgz",
      "integrity": "sha512-OxkA08pSryMK7B3XiFA09B4OJ1xJMPgIYCBMY2xchzpqgBGsV1o0DetPAE+Sl3N3L4oCPiEzmHVSOj7iR04Zog==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.151.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm-eabi": "1.2.10",
        "@rolldown/binding-android-arm64": "1.2.10",
        "@rolldown/binding-darwin-arm64": "1.2.10",
        "@rolldown/binding-darwin-x64": "1.2.10",
        "@rolldown/binding-freebsd-x64": "1.2.10",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.10",
        "@rolldown/binding-linux-arm64-gnu": "1.2.10",
        "@rolldown/binding-linux-arm64-musl": "1.2.10",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.10",
        "@rolldown/binding-linux-s390x-gnu": "1.2.10",
        "@rolldown/binding-linux-x64-gnu": "1.2.10",
        "@rolldown/binding-linux-x64-musl": "1.2.10",
        "@rolldown/binding-openharmony-arm64": "1.2.10",
        "@rolldown/binding-win32-arm64-msvc": "1.2.10",
        "@rolldown/binding-win32-x64-msvc": "1.2.10"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ssf": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/ssf/-/ssf-0.11.2.tgz",
      "integrity": "sha512-+idbmIXoYET47hH+d7dfm2epdOMUDjqcB4648sTZ+t2JwoyBFL/insLfB/racrDmsKB3diwsDA696pZMieAC5g==",
      "license": "Apache-2.0",
      "dependencies": {
        "frac": "~1.1.2"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.3.3.tgz",
      "integrity": "sha512-pJ2sYawQS0R/WI928Gj5GlPhTGzbMelq0+4INtSYNDV9ErKJcX6xjGWkoG/VnB3dpUm00zALaqkrUD77pO5TDQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/vite": {
      "version": "8.3.1",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.3.1.tgz",
      "integrity": "sha512-/bvH9E9tmCXRGp2uXY3WbOldqpTwFkbha/8ANaEQ6VkxhH60KyqLwgZq6lG2y+4uT55x9+9eUHMpQ7uGnOCKjA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.7",
        "postcss": "^8.5.28",
        "rolldown": "~1.2.9",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.7.1",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/wmf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wmf/-/wmf-1.0.2.tgz",
      "integrity": "sha512-/p9K7bEh0Dj6WbXg4JG0xvLQmIadrner1bi45VMJTfnbVHsc7yIajZyoSoK60/dtVBs12Fm6WkUI5/3WAVsNMw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/word": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/word/-/word-0.3.0.tgz",
      "integrity": "sha512-OELeY0Q61OXpdUfTp+oweA/vtLVg5VDOXh+3he3PNzLGG/y0oylSOC1xRVj0+l4vQ3tj/bB1HVHv1ocXkQceFA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/xlsx": {
      "version": "0.18.5",
      "resolved": "https://registry.npmjs.org/xlsx/-/xlsx-0.18.5.tgz",
      "integrity": "sha512-dmg3LCjBPHZnQp5/F/+nnTa+miPJxUXB6vtk42YjBBKayDNagxGEeIdWApkYPOf3Z3pm3k62Knjzp7lMeTEtFQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "adler-32": "~1.3.0",
        "cfb": "~1.2.1",
        "codepage": "~1.15.0",
        "crc-32": "~1.2.1",
        "ssf": "~0.11.2",
        "wmf": "~1.0.1",
        "word": "~0.3.0"
      },
      "bin": {
        "xlsx": "bin/xlsx.njs"
      },
      "engines": {
        "node": ">=0.8"
      }
    }
  }
}

`

---

### File: frontend\package.json
`json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.3.3",
    "axios": "^1.20.0",
    "lucide-react": "^1.48.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "autoprefixer": "^10.6.1",
    "oxlint": "^1.81.0",
    "postcss": "^8.5.28",
    "tailwindcss": "^4.3.3",
    "vite": "^8.3.0"
  }
}

`

---

### File: frontend\postcss.config.js
`javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

`

---

### File: frontend\public\favicon.svg
`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
`

---

### File: frontend\public\icons.svg
`
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>

`

---

### File: frontend\README.md
`
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

`

---

### File: frontend\src\App.css
`css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

`

---

### File: frontend\src\App.jsx
`javascript
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SubscriptionBlocked from './pages/SubscriptionBlocked';

import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

// Protected Route Component
const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, token, loading, getDashboardRoute } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // If user is directly blocked or expired, redirect to Subscription Blocked
  if (user.isBlocked && user.role !== 'DEVELOPER') {
    return <Navigate to="/subscription-blocked" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }

  return children;
};

// Root index redirector
const RootRedirect = () => {
  const { user, token, loading, getDashboardRoute } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (token && user) {
    if (user.isBlocked && user.role !== 'DEVELOPER') {
      return <Navigate to="/subscription-blocked" replace />;
    }
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }

  return <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public & Authentication Routes */}
          <Route path="/" element={<RootRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/subscription-blocked" element={<SubscriptionBlocked />} />

          {/* 1. Developer Dashboard (SaaS Owner - Max 2) */}
          <Route
            path="/developer/dashboard"
            element={
              <ProtectedRoute allowedRoles={['DEVELOPER']}>
                <DeveloperDashboard />
              </ProtectedRoute>
            }
          />

          {/* 2. Admin Dashboard (Business Client) */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* 3. Employee Self-Service Terminal */}
          <Route
            path="/employee/dashboard"
            element={
              <ProtectedRoute allowedRoles={['EMPLOYEE']}>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

`

---

### File: frontend\src\assets\hero.png
`
�PNG

   IHDR  W  i   ���  �PLTE   ���~v�~v�pdu���������dZl���}u����~v�����������~v����w�\̀x����~w����������Q�}v�~v����V�~v����x��F����R����TNZ�~����g^p|u�OHU�x�I�YQ^���������|v�˱�}v�Z�|�x�xC�����x��a԰��\-�g�m�|Ċ��f4�}u�B�LEQ���q5��a�h�iׁHǟc�k�V(��X�r!ܯo�}.�m7��M�O��_�t۴}�[�o3����q�V�Y%�o�Q�Q�s0�fጅ�E�@9FX�J�h,äh�pE��H�:	�B�O��<�=��_ڋ5�r�O��d\j~:�g`mË�8	��H�:	�w�4{�O�~F��m�P�>
�=
��TϏS�@��[�LćM��I�}v��Q�4
u�m��w�]�x>�{E��YΓW�w?��Kܘ[�v@�;|q7��g�a�iބB�G�A��N�U�0p}?ԅJ�~B��_�[(��_߮t�v:��Rܡf�Yɡe�d-�j5�D�p<�L��r��I�T�p9�v1�a-����^�Z�S �U%�K��D�Q�m�f�L��e�C��?�bތO�_�T�X"�Ì�|>ŝc�e4��V�k2�k5�J��o�D�D΁DƔU�N�t�:�]%�P��k�}�v9΄I�F��P�}�L�,gG~�J�_!��[�g,�ɔ��r��M̦c�p/�}+�h'�u7�{�n1�i ԰�����0�B   |tRNS ��p#� ��T�;é���*`YJA�C�d� �S#�20�>� �|c�A��߻���s��|u�o^Y_]���?�٤?�Ǯ���}d�kecۢ8��¬�s�����������Т����Ð�}4  /:IDATx���[��0�a�	!�DH���:m�HTQ%��f_�knݛ�� �6�tV`E��g �0�0c��S�٫��r�������l����6����u��-�Uvc'����n�т?��� �4�x�PS��у�x�[��� �.i[���DX�͏��S���>�\��d{��Ճ�,�mn�E����
���H���Wؘ0x��'{b������W�X�`�3X�7�-21����`'��Ԅ��ݪ�G�?"�����V�`�pM�B#����9���J�=L�5��(Z]��(mW�>٬�`��K�Y��jϱ��Y擂s�IϳO��"X?��T.�K+mI��Oa���=��Cs�D�y)a�8�a.1[H��J`F����1K
Z�`^^�{̆)O0�|�R}���[<Z�
�Q߇�[��5���i��tt7p|iK@/a�I�v���s��J`-�c�9٬����׺�,I1ـ<6[,�� :����z/V~ѱK�t|�� ��]=��U��j{�>�"�|�f�Yqz�)��h�@n�K���|�H�k��R��?FXԐ+3#�V�����1�(FX�[���$���0}Ո�V�bxn�	�{�����@��V1�ʹ^G*iѪr��4�Am"f�
g�%xfoO�z���>�@��:R�z�XWL��S&q7p�M���:g�U*Z��^��|+i�ꍵ��bs�W�@�o�]v[���0��n�1��@�k���!|��_B�UVRź��|���������%��� ��V�`�k��;fZh��5K������>{�H=��/*tEѪ�3�x{�gŬ����yR����xO�	ST��e��哮�9v�{�ڏ��]:,���w�*m	cղ��^MQچ�.�h����p��åXh��?r�.+T����E6���i�M."fO��T��K<�]���K��1�h�Z�`�??b�	z���D@?1���=�ʔW}�QK��a<2������m���u�8���8�Xu��%��[ěD�b3o0O2D@��O����.`ӫ�����A�����evM��R`T֭��p2�j���]�X�xfuKz^�.8��&-c��T�����[���Ղ4���6ÞJS�բ����QGV��5�!u4a#�k�ڭ�f�J[WPG�����b�&�,jꪺ�v|)����	A2U��Jv���Me�|�A���ᩯ5u��hE�6_������E/bMC����%gd��q�xk�X萡�����-[u!,�[n�ȩ�Yv����,;cy��P@]�U�)�O�z�j�C�î�c�.��Y�3�aoY։�;daLD�zU�j���a8n�{�ׁF*�{����xJ;��:#.�N���{�_)Y��3�X־�r�{�B�蠺��7�-�:�����?���������/	������}�w�kw
��1��,����e���l�=�����$��\V9O�1�N�J����5��~ r�@6b�8*յ!ˮ�r;c�#���ݿi޹���٫�fo�*�ґ�[���CZ�klmӞ�I����==���i��g<��Qx��g}�֕|V+5�5%��Ƕ3�c{7�;����ZD�eȩv���VX�]��U�l2)b�DDz����'�T6�x1�̅k#e寇U�t߭O�YD9��evɗ�ڛҳ	-+��|��5����n��^��l�`�Q�����n�����O�\�EI�"��x`ծ׏���eD^��D�{̝av����ׇ�K�Wa�b�.�\��a�VR���o'�ؔ �K��t1���{.��F��)����b��J~4� �JT r���>�E��,d�S��J��KW(f�,�5>k��R�8
�������@�d.���B��È�0���{���V�wS)Z�}�k�ɬcY{/����u v�]��[�����w��f�[� �+��X+$$3�[�e���En@2�Q�|PXUtK�c���ڊ^ڲX�������&�F��s�
vy�]	�I ���0�2� d�yB��0�!�\{����]Lmk[`���Znǚ�}4��nI[�eӺV9�
11�x�*40a��Ƥ���64�aUvu�c�M5�
������xk[������`!i���<�}CQ���1�͓#�@<A���r,q��u����@���D�R���ZۙW�lLX�����|P3uϩ�5\6����`�dX(M�x����O	a4�ֈ��>om�f)���x]մހ�
6�x]q���Щ���n6v����n�rL]�)��2�Ҟ��0М�s�8�[��&���k�M0��_4AL���C����g�M���Z�QPbi��Oa=̾�іe3z~�:�O���2m�_�A�䩁yB��2k�M+�n�V��~�M�C����̏|'����������̊���[[;��@u��ޣum2��@��=7�����$u5��=6+y����&=�:Vq��,t$�q��j�����t���Λ���#�YV>ih`{��{'璝�c��\����ӽ�ilJTX����y �+� `��T2��{=�i�+^��2[���'�I NZc�hԴb�����e�b9׶�b:%�h#K�wUU[�^w[�1����#gAz�L���`pB�^Ko���wN5i�,px��c:�S�om1�t��$�Q��K�sI��w6�IDQ>�2|�������&�� lp �$U2:�A�	��)"�FMX�ʭ+����]�c�O0čw4j�`<̝;-򬚒��x8��3�V�(���pe������dm�"�\��6�!)�6P/��m`0���QA�^�ŷ�������ϕ_��<�;�9�n`���|����mU��uFt�TٕV9.�Pw
�����k_�4��Е	U�w
s�w����曑�U[��b���6�m����ΑYS�AD~d՚����yh��[���.�Y��R�� CZ�]9�6 S��I�B~h�Y8Dƚ�n�a����S�-�J�[���s�.U-�kSp��ӎ�dYr��o=�������Z9��I��P�3F��'T�e[����� �x��+S��U�_`��A�SZ&���ucG�6�MY����z�\��(�%�}�d�É�p�s}hYL���u�Q�j�,��q#i��岼U���J�)�J~8me���?�ڳZ̀2�nAD�vm�/�>��,b�U$��Ԭ�t��Jj ��b��Ӭy6[Yn��N��732UR��'�-��pӬ#VG�ɪ��d��buIv�)A ����uں���@�F��I�Δ�t/Dr�>�َ#VE[MFA ;	�z�m��X��b�X�(`q4~#���.V7͚ͳ����V4u���O�Bڦ��6�t��s_��Q#s�I�?������-�h8	��d
7j����a�#ֹ��3� ���Њ�lڏiV.8m��/ƭ,�A����@4�H�ɴ��T�1b�x~���f�S��.�j���\����\���|x �(�eS�'�A��U�a�"Wm ?΅o��,8�V~�-�s��u5���Cm�a.�Ī�/Ѓ���o��~���p�^��{�ѓm ?ѫ�������X������G �TR_��wO��m[�.�V�V���g���o*���,��ޘ��b�I� ��H��R�  zu��A��k�3ab�V'jjG�%��	b+Q�� �}�kx5���r��PVX�$�;�����֦d�)B�:��[��G��%�x���*u����u5�P�)5�b_b�������/��,�WQb=nT 8h�����躮hQ
zu��S?r��
�l�`Y���7��l{�{g��,�||V�4���EX.V����/4���A�z�ճ�����6��a9�t��Y�c��~�m�o/�S	�?��_�?z�n����޳d1��_-u���(�/�ݿkSQ���V� ox�>�K!��:h
Qj���D$��/ĩ8��!"�"����dPi#c�G#�-��B����ڸ���֓�������\�9��6�Հռ;09|b���2����_2�LZ�v�g�g�<�3z���5�x�֙?��������pz���-wW�F�_9PKkN���(����|d��u_q�1ݓ쮉�L�l��D3{+�y=3fl����������n�#T�=j�h�{+�@�����Ļ �u�8��VA�%���\4�tX�vn4�/֝5k �
C7�y�j=�Xn	磽���S��[̞a�h֠] �C��1��2Ҍ58W�+��f�F��g�1�؇#���aow�
;��9��b��:�H�ZS�w]mu��_z����nboY�5�s-�k����x��g؝e�B�f���,ѶJv͵ݹ�HpG�Q��A�4rh���[�5P6��֗S�q��D<,�k�W�z�#�čF��Z*�vb4�o�@�}챠��^.ק)� ����c�u��V��;�H�ΖP
���uGt�	F�1X(o ����\�b�ن�j�:�HOW�r�K��ॱ~]�r��6(o���ӻl���-��y �#,ז�K�͕���	��B�D��ZH%(ٍa��niUKO	O�j�F�7`��p�XAsm�<�8��|�v-1M�2���|���Oj����	O���Jp��T�W�q*�=N�3K])uW��W�k�	,�Y�k�u�<��+����X������V���-����@�>I��n4�ݡ�G�qOr^����"fњ��xaIki[���+JJY|�C�uƄju���b���V�5�]KYT��;�X�8��ag��ta��X���XI�!^��HDb#�N�V[�p8s\3c8L�cΠ͐��z�i��嶣�C���^�c�x���4�.�I~�����9?k���c��������R0>g���
�V�?/�����A'^�b/�1���V#�,2��)���^��3���A�}G�GR�#O�;+c�<��  .9X����[���==�`���F`pG�A��K�����p�x>oB� � )�$`�t���C|�f���3��!T0��ᧅ�0B��`���㸕8m�ru�Slpg%p��P����N>l�������t��C�z��Wr�\|�@(�ou�z]|V~Z��4����nx�!T`���#�9C5͎�-���՜߆���!��P��P6^Jt�:�(�֠jn�{��BD�>��SqG�7�d�>yɵ�=&<�;�E0�.��01��ǲ֘t���
	1ZTf�M�=z���2j,���]�)�9��\k;%v��\��ʙ��5"@�� �qh�!&���&�����ʔ�J�?:p{��^�� P�H�4������76eH��%��7�jw�����0����N�\tN$���6��A[�N�C��]L\�4h�`���gN.�0dȎ�ܥ�K_��jι�l���yQtyA�1�����@G�^O��5���b:q��j�Q��[�U�g�68�dhd��c�R�Ӄ�;{��z�_c�!�� ��@'���<��˵s�ŻEcg�ǀ�y5���\�ɣ��8=;ؗO�آ!���i���R��ԷfgȦ��C��.A��+�ʑ�];פ�Ԙ/��x#d�bj�5W�4��i��~K�����*�
��l��.x�z$Rl6�}0'[��GY�B��wJ��-�� �nV�B��M��}Np)����0�?`4���+6�3׈�]�o
�[�r��n��4�T�
���O��K���lχ忴���T����(�i��F�h�j�{��QӹO��b$}��>h�N��L:�J�"�b�J�;���:M}���cv}.�l�c�%����n�(��m#�q������Qh�+���T*��w�?�b�sq��.y�� )�������JR�Uf���aLC�5s���bC�2����o� �ڒ�"��^Ӳ��?h���ݔ |<�5����͞��r"%$bkL��l�-�j�1��hRU��� ��X=�wN}�����&��{��I�ЫF�2�S�]*�s�� g�A�P3r������	�X"u$-���l��(��{{�P5MeHI��=��w����j6wU	iR���T�oYw*p7�r)Ҋ
B:���g�I�	]�r�v{!r�&���Ŭ�i��L�4� �F�4��F�����޲�*�T@�$��$����W<��{�X,��τ��һV�$ؔ�S�m��.����l̘b��7�Q���GUUMڪ�Ju��c��l�E5.�s6'�䤽��#��{�T,�<��������NV�}�R~��A0����e�<��X��(�ǄV��,�Q�MEiﳩ�� �%�Ҽ�|�������hRJ�S��{G��V��x��D��i�H"!�������_�e^Jp�ǎ�/8�t*}7����K����*U5ն9�w�a.�G9�Cj��Iɖ�������[Ҋ�xI�9X1�[�ٽh�?��N�}�UA����R��e�U��z]��o�W%��h/M����!�_�;��8�����>���x� "�8#Dq߄!� ��5#�XuO��s�[���Zt�`���jK#���o�����vڷ�7��|��v{4���յƆL������4X���tK'���w���\]����ڜ#�.�nS�#���$��K+R�L�T:�c�Z����9?A�/`v����v�5`��N�)�Sמ<ִ�fY!j٘���]��O����zN��U��l�#xb�`RKj����4[fv�a<߶�'��"���4�P�w��?^֊��'ٔ�0��Ƚ����Z��ye�T� �����T_�9pr����3�����`��]�9d��-�üW�_�;׭�/?֒QhJ|�#X���%gw���`��ɉ�R�+�W�t���
��N�x� U:Vz�<7g1���n��l�0����ͩ�k�?y�����a��0b^-��W��O��U�����6Ǩ�k�[&ԯiH�[҇�~���h�1 ��[��8�n>w���Ѓ}p��˗�I�'�B(���E�J�����f������7���\�6�+ >׉U�i��'WAIP.?�qoȟ��{�!;�9��t&����cj5_�p�ub�}��f�Q�|���E��2��	�����X�c��:GuH�8����u��}ǎev��3W���_*�?�6����A�E��c�x�1�P��go��M����y�!����j���Ӯ����B����S����3�O����b���r�\޽��X�5+$�<!��@%d�4*$�����m�}�j���5*l�WT�a��0L/�Y�%�ʼ9�şU�!�>?ؕٻ�b���h����)<,b����wwu��A��ߤm�E���D0d[:�\�-Ř���0�O��M=X2�ş��%/ʥMG�E�A)�8���'�Gⲱ�(j�}wY�fu���W�]W�	?<i|RBp�D`�Hb���d���q;5�[���n=J�ӏ�_�\,|	�pP��� aJ=Bi�["��"7VwhFt�7���O�8yhW X�K�0��V_�z�f	���Ǉ��X���u(-_{�q1YL��e!쁡�
`���5�zK�H��]�t�zw�;��k��KڪQ����b�(C��u �#lY?0 ���������P��h%>���O��V�|"�%�����2W����=�f�H��08c\�b�)���C� ��Z���[����D@,ߣ�gI*Œz��+�%Hhy\2.l�<�zwy`�ڵ�Ϊs��F��[�HQ�U�	�B(�X�~�,�����n*$�dE����"P�� P� �%������U���&�A���;L��<����D �lo0��l[q�h�"�6cZ��vbc-	�r�#,)��U�� aKS�D.�����}i�v��]��Ugmv�ge�)��ۍJ]���aTy�����?��Y�"ؓEO!��J\)8=�Г���_���?��;�|��sӄ��7˒y�����K��u��v�+�(����e�Tf�2BI��= ����/�tYN�������_�q��~g��6�Uϙٷ�f��Opՠޓ�{$cL�犻B�*�r4����y���
b�b����(�o��|#�2��{u⟝��}�t�y~����k��םs�ܫ��w�a�\<?��W$�Mk��<ۣ��)��I��׸x$h�����	���<u�ի����6c�߹���ۨ޻i�W���Ͻo�\(y�}�� t�.�@-7�l���1%�.] A��c����o��O��s7رn.�?�����9�˨�ɫ;w�|���ͪ�����~��S!>5*�Vnl��߀y*!��-����z�wy��x��\''qA���X�EA��Ny�6Dh��bգU���+���]��(�M�z�
-�4��V��7N�l���#�'�'��;f>`����hi��Ǐ��p[�aFD�P�����g��+�μ�8��g�\����v�eJ���}�*!7�f�KG/�[[�j�j��M(��5Bb�YAF\�3�<���u0��ȫ{��|��2g��)�5��g�G�ˆ��ג��um=����\.��U_�
���q�O�
Gi^$"�.�������s�b���
�����fCw�E�~Y/��d�+ ��Y����-��V�2��پ� UR�L�(ǈG�k�n�ˬ\�/�O��]0v�|n:N�1������ix�o/��_&r���'���Xj�ێ��*B8s�J�\Pf���@��g^ֿ���4���I��8fѝ6Ɠ�e�dG.�E	ɮX�ƬbJIdφ�.4K"E�#�1�Er�"
�-��GN���;{㥪���:2]w����*bq�w������j㲯E$[��2V��pR��  [ۜ>�{��=�n�jk��T�
�4����w�hN����5��r���Q��jf7h�roɄ\|�U"�bS!B��6j�6��) S�-ίeWr��p�մ0N>�OG�nZ[�` �:s���7��DdI�f'I���oȥ�K;�J+�0�A�YMSk��!,x����V����'q�p=�?=��=�ۭ<9_�imͦ3�=Ej�%����s�ݣ�g$��9Q
+�6G�TT�?|�y�4�R�-4��<�]��?��ξ��@����:n��������3݄Bm����Ffwi�z�+S��� �%�~H�<|UBa���a
$hZ��K�^ʵ 9��Ք�[o��Vo�=�
���d>�'���
�]�:����]��0�����~@�EAP�xCguvʐX�!i֤��/`i>[���G5�Bi���l�(�%g�����'�;�>�A���'�����ͧ���^v�$���(��ۼ�|�������v2���z ӬY�������j��3Im��[�9ĵ �:����۳�w�����y����p�5���	o#Q���������aD�������ε� Z�ȳF���n?��z����
�6���3��$����o� ��~Z �6��)A:�>b�\)6�"#uw:5���}��y<c[��%��aL�ޛxR��W�����g���X��e뷘��6C�&M��H�}��Q�#L�&Vr8�絆����\��5�2���`'�g`%6Q�i5�4��^��|>L>f�О�@��[}W-d��Qʈ*�u�Cj9=b����������g���c�^��[�a��%	���X^6pҸ�'[��
x�[��-��E�&��
 D���f�G��+ؘB`��yѹ����[�S�z4r���Q���WZ�3g��5������e5t�fA<��)DVRuNʙ�N+��T�E�LK�0�As�#���]��$�cSx�K� �8��Q���ǃ�j|��d<�=�xd���غ�K�Hx�Q�X��FH��(f�>���S���܅j�X�z ��cS�&ʍ���V��״e����sK�X���*q:�%N"���ZqC��E.W�97����p{Q�ȕ��=}�����$k&$��@{��7��մ�d�K���9�zeU�fP*��OU�0�e9�ϊy��]��\��p���q�Jy�ѵ�{u�����o=(���{�������|���v�U����Vʁ���s5ձ����$eU�>�ˢ,�o�9��,�r7�'x\�w̠,���U8�~�3lM���g���<��^�0�ީ�YdU�y������8��^������윻��0����8�(N�� ���88H� �$�6$J
5K�&�Gɠ\>���.]�.".�����<>thׇ����M�����e�$�@��A²l)���{�.lo�[�CC�N)VG�8�o�"���{s����,[۸��=��Z�6�-��Q�~��h�Y��r��׺�j�^���mUF6�1PJ%��O������n����2Z�a'�	;��?t���@9�U��[C��!����%���'��W�~�#�?C�/-���\�l�m�B��/7�7���	CM�F����*��ց�{��p�����9����i��d���<�N���z]bK����[w�<y�p5�گ?��ӵ��(��"�c:�i|��p�z�y��wg"	9g�}ad�B��##��	�`���h�괫�ܹ��!�b��ww7�_�OY�n�7���Mf[I0�鉤�wo=ؾ�]���u|�R���J  4F�aB�vKq"`�81�����l}N�c\�5V�OZO!��O��׳C����%rp�iI��av	�cy^n��6�q���!4�Vhc!���$�@6(t�)��j$]}����e�:��WϮ�����^��m�9kj�9��,����b�>h7y��um�H�V�F!`�(�JZ��P����@rJV��������̏x��o*Z��D�<�>��X�-6��e*��:h�sTP�'� �j�D@T�B���E=OS���u��8'/u�B���M�_Ю�.����Iϝ�w߮��
���L�R����piB@�%a܋��#,'�s�Ma��M�\���g=�pRc�+v�mrLZt����.6�:챷I��g\�0 ��o�&0ƛr.��yܭ���M��
��`�og�����U�n��MWnV_�~�=��4�Ć�7��@�q �;��U�҅s��@��M:t�Z��N!}~ǿ��W���]����j�K��͚nJ�mT8 $�rB�V�-����4-sW�uYt�E���m����.Gp��z-����x^m�4((���Y64�� + \9+�0@�BU#4�1y�הu뎋����~&�{Sz����
�F����1aeC��$"@�VCc ,o�`�"�AE����S�}���5m�q�v.W�|�8y<N)��5p�`��0�~B�*��Х��H��J�%-�<ۮX� �'���-��m���s�<نF�!  ϊ�V�@Ҳ�e �8�-r[P��S�������#`Pw���}�b���P�HEi�mK �lc� 1؈ �@��)G?y_��m����6wǢC����'��ɉj���{�:��G %��t��uL��p�_�V���k���.��ian0V��ŭ�,�9e���ȁ[F�P<�e��f���Y�+��ߢc�%�k����`�l$@����,����"H5Goihcz����h�Z�v���b��%1V����J:8�IH�s�"bZh��֯�=�k7�51Rܛ�C�m�m 7 (����Zv��/�?Xߵoƨ1=�q�2ur nB��*u�2۩�X��Ѡ"(,3���n!��ʇH����G�qc�R�G��<k�͇���
�� ��"�$Po	=�c�!�1B���z�7{X���, y!PA%C�葆	s�婪z	��9���i1�mv�/��t�cL,��� ���,�y�j��
��9�%��Ie:�n�%x����z,�Q5)P����k��M��;i���1;�߮�nw�C��^��lt�*7�    IEND�B`�
`

---

### File: frontend\src\assets\react.svg
`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`

---

### File: frontend\src\assets\vite.svg
`
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>

`

---

### File: frontend\src\components\CheckInButton.jsx
`javascript
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, LogOut, AlertCircle, Wifi, ShieldCheck } from 'lucide-react';
import api from '../services/api';

export default function CheckInButton({ onAttendanceUpdated, todayRecord, shiftInfo }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [enforceGeofence, setEnforceGeofence] = useState(false);

  // Live Clock Tick
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isCheckedIn = Boolean(todayRecord && todayRecord.checkIn);
  const isCheckedOut = Boolean(todayRecord && todayRecord.checkOut);

  const handleAttendance = async (actionType) => {
    setLoading(true);
    setMessage(null);

    try {
      const endpoint = actionType === 'in' ? '/attendance/check-in' : '/attendance/check-out';
      const headers = {};
      if (enforceGeofence) {
        headers['x-enforce-geofence'] = 'true';
      }

      const response = await api.post(endpoint, {}, { headers });

      setMessage({
        type: 'success',
        text: response.data.message
      });

      if (onAttendanceUpdated) {
        onAttendanceUpdated();
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.response?.data?.error || 'Attendance action failed';
      setMessage({
        type: 'error',
        text: errorMsg
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
      {/* Top Banner with Clock & Shift */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live Attendance Terminal</span>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {currentTime.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 sm:text-right">
          <div className="text-xs text-slate-500 font-medium">Assigned Shift Timing</div>
          <div className="text-sm font-bold text-slate-800 mt-0.5">
            {shiftInfo?.shiftStart || '09:00'} - {shiftInfo?.shiftEnd || '17:00'}
          </div>
          <div className="text-xs text-slate-500 mt-0.5">
            Department: <span className="font-medium text-slate-700">{shiftInfo?.department || 'Operations'}</span>
          </div>
        </div>
      </div>

      {/* Today's Status Overview */}
      <div className="my-6 p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
            isCheckedOut
              ? 'bg-slate-400'
              : isCheckedIn
              ? 'bg-emerald-500 ring-4 ring-emerald-100'
              : 'bg-amber-400 ring-4 ring-amber-100'
          }`} />
          <span className="text-sm font-semibold text-slate-700">
            Today's Log Status:
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${
            isCheckedOut
              ? 'bg-slate-200 text-slate-700'
              : isCheckedIn
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-amber-100 text-amber-800'
          }`}>
            {isCheckedOut ? 'Shift Completed' : isCheckedIn ? (todayRecord?.status || 'Present') : 'Not Checked In'}
          </span>
        </div>

        {todayRecord?.checkIn && (
          <div className="text-xs text-slate-500">
            Checked in at: <span className="font-semibold text-slate-800">{new Date(todayRecord.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            {todayRecord.checkOut && (
              <> | Checked out at: <span className="font-semibold text-slate-800">{new Date(todayRecord.checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></>
            )}
            {todayRecord.totalHours ? (
              <span className="ml-2 font-bold text-emerald-600">({todayRecord.totalHours} hrs worked)</span>
            ) : null}
          </div>
        )}
      </div>

      {/* Network / Geo-fencing Security Indicator */}
      <div className="mb-6 flex items-center justify-between p-3 rounded-lg bg-slate-100/60 border border-slate-200 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-emerald-600" />
          <span>Office Network & Geo-Fence Validation:</span>
          <span className="font-medium text-slate-800">{enforceGeofence ? 'Strict Geofence Active' : 'Automatic Corporate IP Verified'}</span>
        </div>
        <button
          type="button"
          onClick={() => setEnforceGeofence(!enforceGeofence)}
          className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${
            enforceGeofence ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {enforceGeofence ? 'Enforced' : 'Standard Mode'}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* CHECK-IN BUTTON */}
        <button
          onClick={() => handleAttendance('in')}
          disabled={loading || isCheckedIn}
          className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base transition-all shadow-sm ${
            isCheckedIn
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.99]'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{loading ? 'Processing...' : isCheckedIn ? 'Checked In Today' : 'Punch Check-In'}</span>
        </button>

        {/* CHECK-OUT BUTTON */}
        <button
          onClick={() => handleAttendance('out')}
          disabled={loading || !isCheckedIn || isCheckedOut}
          className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base transition-all shadow-sm ${
            !isCheckedIn || isCheckedOut
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : 'bg-slate-800 hover:bg-slate-900 text-white shadow-slate-900/20 hover:shadow-slate-900/30 active:scale-[0.99]'
          }`}
        >
          <LogOut className="w-5 h-5" />
          <span>{loading ? 'Processing...' : isCheckedOut ? 'Checked Out' : 'Punch Check-Out'}</span>
        </button>
      </div>

      {/* Alerts / Feedback Message */}
      {message && (
        <div className={`mt-4 p-4 rounded-xl flex items-start gap-3 text-sm ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          {message.type === 'success' ? <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />}
          <div>{message.text}</div>
        </div>
      )}
    </div>
  );
}

`

---

### File: frontend\src\components\Navbar.jsx
`javascript
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Shield, Building2, User, LogOut, Sparkles, Bell, Check, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  const fetchNotifications = async () => {
    if (!user) return;
    try {
      const res = await api.get('/notifications');
      if (res.data.success) {
        setNotifications(res.data.notifications);
        setUnreadCount(res.data.unreadCount);
      }
    } catch {
      // Ignored for unauthenticated or non-admin
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 15000); // 15s poll
    return () => clearInterval(interval);
  }, [user]);

  const handleMarkAsRead = async (id) => {
    try {
      await api.put(`/notifications/${id}/read`);
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await api.put('/notifications/read-all');
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getRoleBadge = (role) => {
    switch (role?.toUpperCase()) {
      case 'DEVELOPER':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
            <Sparkles className="w-3 h-3 text-purple-600" /> Platform Developer
          </span>
        );
      case 'ADMIN':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            <Building2 className="w-3 h-3 text-blue-600" /> Business Owner / Admin
          </span>
        );
      case 'EMPLOYEE':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <User className="w-3 h-3 text-emerald-600" /> Staff Member
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <header className="bg-primary text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shadow-inner">
              <Shield className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                NexusSaaS <span className="text-xs bg-slate-800 text-slate-300 font-normal px-1.5 py-0.5 rounded">v2.5 Pro</span>
              </span>
              <p className="text-xs text-slate-400 hidden sm:block">Enterprise Attendance, Financials & Business Suite</p>
            </div>
          </div>

          {/* User Profile & Actions */}
          {user && (
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-slate-100">{user.name}</div>
                <div className="text-xs text-slate-400">
                  {user.businessName || user.email}
                </div>
              </div>

              <div>{getRoleBadge(user.role)}</div>

              {/* Notification Bell Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowNotifMenu(!showNotifMenu)}
                  className="relative p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition border border-slate-700"
                  title="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {showNotifMenu && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50">
                    <div className="p-3 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                        Notifications ({notifications.length})
                      </span>
                      {unreadCount > 0 && (
                        <button
                          onClick={handleMarkAllRead}
                          className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-slate-800">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-xs text-slate-400">
                          No notifications yet.
                        </div>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n.id}
                            className={`p-3.5 text-xs transition flex items-start gap-3 ${
                              !n.isRead ? 'bg-slate-800/50' : 'hover:bg-slate-800/30'
                            }`}
                          >
                            <div className="mt-0.5">
                              {n.type === 'WARNING' ? (
                                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                              ) : n.type === 'SUCCESS' ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              ) : (
                                <Info className="w-4 h-4 text-blue-400 shrink-0" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-slate-200">{n.title}</div>
                              <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{n.message}</p>
                              <span className="text-[10px] text-slate-500 block mt-1">
                                {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} &bull; {new Date(n.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            {!n.isRead && (
                              <button
                                onClick={() => handleMarkAsRead(n.id)}
                                title="Mark read"
                                className="text-slate-500 hover:text-emerald-400 p-1"
                              >
                                <Check className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                title="Sign out of system"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition border border-slate-700"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

`

---

### File: frontend\src\components\StatCard.jsx
`javascript
import React from 'react';

export default function StatCard({ title, value, subtext, icon: Icon, color = 'blue', alert = false }) {
  const colorStyles = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-100',
      glow: 'shadow-blue-500/5'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-100',
      glow: 'shadow-emerald-500/5'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200 ring-1 ring-amber-300/40',
      glow: 'shadow-amber-500/10'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100',
      glow: 'shadow-purple-500/5'
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-100',
      glow: 'shadow-rose-500/5'
    }
  };

  const style = colorStyles[color] || colorStyles.blue;

  return (
    <div className={`bg-white rounded-xl p-5 border ${style.border} shadow-sm ${style.glow} hover:shadow-md transition-shadow relative overflow-hidden`}>
      {alert && (
        <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-amber-500 m-3 animate-ping" />
      )}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-slate-900 tracking-tight">{value}</p>
          {subtext && <p className="text-xs text-slate-500">{subtext}</p>}
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.bg} ${style.text}`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </div>
    </div>
  );
}

`

---

### File: frontend\src\context\AuthContext.jsx
`javascript
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const res = await api.get('/auth/profile');
          if (res.data.success) {
            setUser(res.data.user);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        } catch {
          // If token invalid, logout
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userToken);
    sessionStorage.removeItem('killSwitchReason');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const getDashboardRoute = (role) => {
    switch (role?.toUpperCase()) {
      case 'DEVELOPER':
        return '/developer/dashboard';
      case 'ADMIN':
        return '/admin/dashboard';
      case 'EMPLOYEE':
        return '/employee/dashboard';
      default:
        return '/login';
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, getDashboardRoute }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

`

---

### File: frontend\src\index.css
`css
@import "tailwindcss";

body {
  margin: 0;
  min-height: 100vh;
  background-color: #0f172a;
  color: #f8fafc;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #1e293b;
}
::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

`

---

### File: frontend\src\main.jsx
`javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

`

---

### File: frontend\src\pages\AdminDashboard.jsx
`javascript
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import api from '../services/api';
import * as XLSX from 'xlsx';
import {
  Users,
  Clock,
  AlertTriangle,
  Package,
  Plus,
  FileSpreadsheet,
  Search,
  Calendar,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  FileText,
  DollarSign,
  TrendingUp,
  History,
  ShieldCheck,
  Building2,
  Briefcase,
  ShoppingCart,
  Percent,
  BadgeDollarSign
} from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState('attendance'); // 'attendance' | 'inventory' | 'financials' | 'payroll' | 'employees' | 'leaves'
  const [loading, setLoading] = useState(true);

  // Attendance state
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    return d.toISOString().split('T')[0];
  });
  const [endDate, setEndDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showOverrideModal, setShowOverrideModal] = useState(false);
  const [overrideData, setOverrideData] = useState({ checkIn: '', checkOut: '', status: 'Present', notes: '' });

  // Inventory state
  const [inventoryItems, setInventoryItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [lowStockFilter, setLowStockFilter] = useState(false);
  const [showAddInventoryModal, setShowAddInventoryModal] = useState(false);
  const [newInventory, setNewInventory] = useState({
    itemName: '',
    sku: '',
    category: 'Hardware',
    quantity: 10,
    minStockLevel: 5,
    costPrice: 0,
    sellingPrice: 0
  });
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [auditTrails, setAuditTrails] = useState([]);
  const [selectedAuditItem, setSelectedAuditItem] = useState(null);

  // Financials & Sales state
  const [financials, setFinancials] = useState(null);
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [saleForm, setSaleForm] = useState({
    inventoryId: '',
    quantity: 1,
    customSellingPrice: '',
    customerName: '',
    notes: ''
  });

  // Payroll state
  const [payrollData, setPayrollData] = useState(null);

  // Employees state
  const [employees, setEmployees] = useState([]);
  const [showAddEmpModal, setShowAddEmpModal] = useState(false);
  const [newEmp, setNewEmp] = useState({
    name: '',
    email: '',
    password: '',
    department: 'Operations',
    phone: '',
    shiftStart: '09:00',
    shiftEnd: '17:00',
    salary: 4000
  });

  // Leave Requests state
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Notifications
  const [notification, setNotification] = useState(null);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [statsRes, attRes, invRes, empRes, leavesRes, finRes, payRes] = await Promise.all([
        api.get('/admin/stats'),
        api.get(`/attendance/admin?startDate=${startDate}&endDate=${endDate}`),
        api.get('/inventory'),
        api.get('/admin/employees'),
        api.get('/admin/leaves'),
        api.get('/admin/financials'),
        api.get('/admin/payroll')
      ]);

      if (statsRes.data.success) setStats(statsRes.data.stats);
      if (attRes.data.success) setAttendanceRecords(attRes.data.records);
      if (invRes.data.success) setInventoryItems(invRes.data.items);
      if (empRes.data.success) setEmployees(empRes.data.employees);
      if (leavesRes.data.success) setLeaveRequests(leavesRes.data.leaveRequests);
      if (finRes.data.success) setFinancials(finRes.data);
      if (payRes.data.success) setPayrollData(payRes.data);
    } catch (err) {
      console.error('Error fetching admin dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [startDate, endDate]);

  // Export Attendance to Excel (.xlsx) using SheetJS
  const exportToExcel = () => {
    if (!attendanceRecords || attendanceRecords.length === 0) {
      alert('No attendance records available for the selected date range.');
      return;
    }

    const excelData = attendanceRecords.map((r, index) => ({
      'S.No': index + 1,
      'Employee Name': r.user?.name || 'Unknown',
      'Department': r.user?.department || 'Operations',
      'Assigned Shift': `${r.user?.shiftStart || '09:00'} - ${r.user?.shiftEnd || '17:00'}`,
      'Log Date': new Date(r.date).toLocaleDateString(),
      'Check-In Time': r.checkIn ? new Date(r.checkIn).toLocaleTimeString() : 'N/A',
      'Check-Out Time': r.checkOut ? new Date(r.checkOut).toLocaleTimeString() : 'N/A',
      'Total Hours Worked': r.totalHours ? `${r.totalHours} hrs` : '0',
      'Status': r.status,
      'Adjusted By': r.overriddenBy || 'Automatic Punch',
      'Notes': r.notes || ''
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance Report');

    const fileName = `Attendance_Report_${startDate}_to_${endDate}.xlsx`;
    XLSX.writeFile(workbook, fileName);

    setNotification({
      type: 'success',
      text: `Successfully exported ${excelData.length} records to ${fileName}`
    });
  };

  // Export Payroll to Excel (.xlsx)
  const exportPayrollToExcel = () => {
    if (!payrollData || !payrollData.payroll.length) {
      alert('No payroll data to export.');
      return;
    }

    const exportRows = payrollData.payroll.map((p, idx) => ({
      'S.No': idx + 1,
      'Employee Name': p.name,
      'Department': p.department,
      'Days Present': p.totalDaysPresent,
      'Late Occurrences': p.totalLateDays,
      'Total Hours Worked': `${p.totalHoursWorked} hrs`,
      'Attendance Rate': `${p.attendanceRate}%`,
      'Base Monthly Salary': `$${p.baseSalary}`,
      'Late Penalty Deductions': `-$${p.lateDeduction}`,
      'Net Payable Salary': `$${p.netSalary}`
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Payroll Summary');

    const fileName = `Payroll_${payrollData.period.monthName}_${payrollData.period.year}.xlsx`;
    XLSX.writeFile(workbook, fileName);

    setNotification({
      type: 'success',
      text: `Payroll report exported to ${fileName}`
    });
  };

  // Override Attendance Handler
  const handleOverrideSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRecord) return;

    try {
      const res = await api.put(`/attendance/admin/override/${selectedRecord.id}`, overrideData);
      setNotification({ type: 'success', text: res.data.message });
      setShowOverrideModal(false);
      setSelectedRecord(null);
      fetchAllData();
    } catch (err) {
      setNotification({ type: 'error', text: err.response?.data?.message || 'Override failed' });
    }
  };

  // Delete duplicate attendance record
  const handleDeleteAttendance = async (id) => {
    if (!window.confirm('Are you sure you want to delete this attendance log?')) return;

    try {
      const res = await api.delete(`/attendance/admin/${id}`);
      setNotification({ type: 'success', text: res.data.message });
      fetchAllData();
    } catch (err) {
      setNotification({ type: 'error', text: 'Failed to delete attendance log' });
    }
  };

  // Create Inventory Item
  const handleCreateInventory = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/inventory', newInventory);
      setNotification({ type: 'success', text: res.data.message });
      setShowAddInventoryModal(false);
      setNewInventory({
        itemName: '',
        sku: '',
        category: 'Hardware',
        quantity: 10,
        minStockLevel: 5,
        costPrice: 0,
        sellingPrice: 0
      });
      fetchAllData();
    } catch (err) {
      setNotification({ type: 'error', text: err.response?.data?.error || 'Failed to create inventory item' });
    }
  };

  // Record Sale & Deduct Inventory
  const handleRecordSale = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/admin/sales', saleForm);
      setNotification({ type: 'success', text: res.data.message });
      setShowSaleModal(false);
      setSaleForm({
        inventoryId: '',
        quantity: 1,
        customSellingPrice: '',
        customerName: '',
        notes: ''
      });
      fetchAllData();
    } catch (err) {
      setNotification({ type: 'error', text: err.response?.data?.message || err.response?.data?.error || 'Failed to record sale' });
    }
  };

  // View Item Audit History
  const handleViewAudit = async (item) => {
    setSelectedAuditItem(item);
    try {
      const res = await api.get(`/inventory/audit/${item.id}`);
      if (res.data.success) {
        setAuditTrails(res.data.trails);
        setShowAuditModal(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Create Employee
  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/admin/employees', newEmp);
      setNotification({ type: 'success', text: res.data.message });
      setShowAddEmpModal(false);
      setNewEmp({
        name: '',
        email: '',
        password: '',
        department: 'Operations',
        phone: '',
        shiftStart: '09:00',
        shiftEnd: '17:00',
        salary: 4000
      });
      fetchAllData();
    } catch (err) {
      setNotification({ type: 'error', text: err.response?.data?.error || 'Failed to create employee' });
    }
  };

  // Approve / Reject Leave
  const handleReviewLeave = async (id, status) => {
    try {
      const res = await api.put(`/admin/leaves/${id}/status`, { status });
      setNotification({ type: 'success', text: res.data.message });
      fetchAllData();
    } catch (err) {
      setNotification({ type: 'error', text: 'Failed to update leave request' });
    }
  };

  // Filtered inventory based on live search & filter
  const filteredInventory = inventoryItems.filter(item => {
    const matchesSearch = item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    const matchesLowStock = !lowStockFilter || item.quantity <= item.minStockLevel;

    return matchesSearch && matchesCategory && matchesLowStock;
  });

  const selectedSaleItem = inventoryItems.find(i => i.id === saleForm.inventoryId);
  const estimatedRevenue = selectedSaleItem ? (parseFloat(saleForm.customSellingPrice || selectedSaleItem.sellingPrice) * (parseInt(saleForm.quantity) || 0)) : 0;
  const estimatedCost = selectedSaleItem ? (selectedSaleItem.costPrice * (parseInt(saleForm.quantity) || 0)) : 0;
  const estimatedProfit = estimatedRevenue - estimatedCost;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/90 p-6 rounded-2xl border border-slate-700 shadow-xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Client Business Management</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              Corporate Operations & Profit Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Live tracking for workforce attendance, inventory stock levels, profit & loss, payroll disbursements, and leave approvals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowSaleModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-lg shadow-purple-600/20 active:scale-[0.98]"
            >
              <ShoppingCart className="w-4 h-4" /> Record New Sale
            </button>
            <button
              onClick={exportToExcel}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
            >
              <FileSpreadsheet className="w-4 h-4" /> Export Attendance (.xlsx)
            </button>
            <button
              onClick={() => setShowAddEmpModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" /> Add Employee
            </button>
            <button
              onClick={() => setShowAddInventoryModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold transition active:scale-[0.98]"
            >
              <Package className="w-4 h-4" /> Add Stock Item
            </button>
          </div>
        </div>

        {/* Notification Alert */}
        {notification && (
          <div className={`p-4 rounded-xl flex items-center justify-between text-sm ${
            notification.type === 'success'
              ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
          }`}>
            <div className="flex items-center gap-2 font-medium">
              {notification.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <AlertTriangle className="w-5 h-5 text-rose-400" />}
              {notification.text}
            </div>
            <button onClick={() => setNotification(null)} className="text-xs opacity-75 hover:opacity-100">Dismiss</button>
          </div>
        )}

        {/* 1. VISUAL WIDGETS & REAL-TIME STATS */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Present Today"
              value={stats.presentToday}
              subtext={`${stats.absentToday} absent of ${stats.totalEmployees} total staff`}
              icon={Users}
              color="emerald"
            />
            <StatCard
              title="Late Comers"
              value={stats.lateComers}
              subtext="Arrived past shift start time"
              icon={Clock}
              color="amber"
              alert={stats.lateComers > 0}
            />
            <StatCard
              title="Low Stock Alerts"
              value={stats.lowStockCount}
              subtext="Catalog items below min threshold"
              icon={AlertTriangle}
              color="amber"
              alert={stats.lowStockCount > 0}
            />
            <StatCard
              title="Gross Profit Generated"
              value={financials ? `$${financials.summary.grossProfit.toLocaleString()}` : `$0`}
              subtext={financials ? `${financials.summary.profitMargin}% margin on $${financials.summary.totalRevenue.toLocaleString()} sales` : 'Sales revenue'}
              icon={TrendingUp}
              color="purple"
            />
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-xl overflow-hidden">
          <div className="flex flex-wrap border-b border-slate-700/80 px-6 pt-3 gap-2 sm:gap-6">
            <button
              onClick={() => setActiveTab('attendance')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'attendance'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="w-4 h-4" /> Attendance & Shifts
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'inventory'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Package className="w-4 h-4" /> Inventory & Stock
              {stats?.lowStockCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {stats.lowStockCount} low
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'financials'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-4 h-4" /> Profit & Loss / Sales
            </button>
            <button
              onClick={() => setActiveTab('payroll')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'payroll'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BadgeDollarSign className="w-4 h-4" /> Payroll & Performance
            </button>
            <button
              onClick={() => setActiveTab('employees')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'employees'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users className="w-4 h-4" /> Team Directory ({employees.length})
            </button>
            <button
              onClick={() => setActiveTab('leaves')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'leaves'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" /> Leaves ({leaveRequests.length})
            </button>
          </div>

          {/* TAB 1: ATTENDANCE MANAGEMENT */}
          {activeTab === 'attendance' && (
            <div className="p-6 space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Date Range Filter:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                      <span className="text-xs text-slate-400">to</span>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={exportToExcel}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50 border border-emerald-500/40 text-xs font-semibold transition"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" /> Export Range (.xlsx)
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Employee</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Shift</th>
                      <th className="py-3 px-4">Check-In</th>
                      <th className="py-3 px-4">Check-Out</th>
                      <th className="py-3 px-4">Hours</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Notes / Override</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {attendanceRecords.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="py-8 text-center text-slate-500">
                          No attendance records found for the selected date range.
                        </td>
                      </tr>
                    ) : (
                      attendanceRecords.map((rec) => (
                        <tr key={rec.id} className="hover:bg-slate-700/30 transition">
                          <td className="py-3.5 px-4 font-bold text-white">
                            {rec.user?.name || 'Employee'}
                            <div className="text-[11px] font-normal text-slate-400">{rec.user?.department || 'Operations'}</div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {new Date(rec.date).toLocaleDateString()}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400">
                            {rec.user?.shiftStart || '09:00'} - {rec.user?.shiftEnd || '17:00'}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-medium text-slate-200">
                            {rec.checkIn ? new Date(rec.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-medium text-slate-200">
                            {rec.checkOut ? new Date(rec.checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-200">
                            {rec.totalHours ? `${rec.totalHours} hrs` : '-'}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              rec.status === 'Present'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : rec.status === 'Late'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            }`}>
                              {rec.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                            {rec.overriddenBy ? (
                              <span className="text-purple-300 font-medium">Adjusted by {rec.overriddenBy}</span>
                            ) : (
                              rec.notes || 'Normal'
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => {
                                setSelectedRecord(rec);
                                setOverrideData({
                                  checkIn: rec.checkIn ? new Date(rec.checkIn).toISOString().slice(0, 16) : '',
                                  checkOut: rec.checkOut ? new Date(rec.checkOut).toISOString().slice(0, 16) : '',
                                  status: rec.status,
                                  notes: rec.notes || ''
                                });
                                setShowOverrideModal(true);
                              }}
                              title="Manual Override"
                              className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteAttendance(rec.id)}
                              title="Delete Record"
                              className="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/40 transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: INVENTORY & STOCK */}
          {activeTab === 'inventory' && (
            <div className="p-6 space-y-5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Live search by Item Name, SKU, or Category..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setLowStockFilter(!lowStockFilter)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                      lowStockFilter
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Low Stock Only</span>
                  </button>

                  <button
                    onClick={() => setShowAddInventoryModal(true)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-lg shadow-emerald-600/20"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Stock Item
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Item Name</th>
                      <th className="py-3 px-4">SKU</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Stock Quantity</th>
                      <th className="py-3 px-4">Unit Pricing</th>
                      <th className="py-3 px-4">Last Updated By</th>
                      <th className="py-3 px-4 text-right">Audit & Controls</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {filteredInventory.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="py-8 text-center text-slate-500">
                          No items match your search filter.
                        </td>
                      </tr>
                    ) : (
                      filteredInventory.map((item) => {
                        const isLowStock = item.quantity <= item.minStockLevel;
                        return (
                          <tr key={item.id} className="hover:bg-slate-700/30 transition">
                            <td className="py-3.5 px-4 font-bold text-white text-sm">
                              {item.itemName}
                              {isLowStock && (
                                <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                  <AlertTriangle className="w-2.5 h-2.5" /> Low Stock
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-slate-300 font-semibold">
                              {item.sku}
                            </td>
                            <td className="py-3.5 px-4 text-slate-400">
                              {item.category}
                            </td>
                            <td className="py-3.5 px-4">
                              <span className={`font-bold text-sm ${isLowStock ? 'text-amber-400' : 'text-emerald-400'}`}>
                                {item.quantity} units
                              </span>
                              <span className="text-[10px] text-slate-400 block">Min: {item.minStockLevel}</span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-300">
                              <div>Cost: <span className="font-semibold text-slate-200">${item.costPrice}</span></div>
                              <div>Selling: <span className="font-semibold text-emerald-400">${item.sellingPrice}</span></div>
                            </td>
                            <td className="py-3.5 px-4 text-slate-400">
                              <div className="font-medium text-slate-300">{item.lastUpdatedBy}</div>
                              <div className="text-[10px]">{new Date(item.updatedAt).toLocaleString()}</div>
                            </td>
                            <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                              <button
                                onClick={() => handleViewAudit(item)}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition inline-flex items-center gap-1"
                              >
                                <History className="w-3.5 h-3.5 text-blue-400" /> Audit Log
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PROFIT & LOSS / SALES FINANCIALS */}
          {activeTab === 'financials' && (
            <div className="p-6 space-y-6">
              {/* Financial KPI Cards */}
              {financials && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Gross Sales Revenue</span>
                    <div className="text-2xl font-black text-white mt-1">${financials.summary.totalRevenue.toLocaleString()}</div>
                    <span className="text-[11px] text-slate-400">{financials.summary.totalSalesCount} completed orders</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Cost of Goods Sold (COGS)</span>
                    <div className="text-2xl font-black text-slate-300 mt-1">${financials.summary.totalCost.toLocaleString()}</div>
                    <span className="text-[11px] text-slate-400">Direct inventory acquisition cost</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Net Gross Profit</span>
                    <div className="text-2xl font-black text-emerald-400 mt-1">${financials.summary.grossProfit.toLocaleString()}</div>
                    <span className="text-[11px] text-emerald-300/80">Revenue minus product costs</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30">
                    <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">Profit Margin Ratio</span>
                    <div className="text-2xl font-black text-purple-400 mt-1">{financials.summary.profitMargin}%</div>
                    <span className="text-[11px] text-purple-300/80">Return on gross sales</span>
                  </div>
                </div>
              )}

              {/* Sales Log Table */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Completed Sales Transactions</h3>
                  <button
                    onClick={() => setShowSaleModal(true)}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Dispatch / Sell Item
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-700">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                      <tr>
                        <th className="py-3 px-4">Transaction Date</th>
                        <th className="py-3 px-4">Item Dispatched</th>
                        <th className="py-3 px-4">Customer</th>
                        <th className="py-3 px-4">Quantity</th>
                        <th className="py-3 px-4">Sale Price</th>
                        <th className="py-3 px-4">Total Revenue</th>
                        <th className="py-3 px-4">Net Profit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/60">
                      {!financials || financials.recentTransactions.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="py-8 text-center text-slate-500">
                            No sales transactions recorded yet. Click "Record New Sale" to dispatch inventory.
                          </td>
                        </tr>
                      ) : (
                        financials.recentTransactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-slate-700/30 transition">
                            <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                              {new Date(tx.createdAt).toLocaleString()}
                            </td>
                            <td className="py-3 px-4 font-bold text-white">
                              {tx.itemName}
                            </td>
                            <td className="py-3 px-4 text-slate-300">
                              {tx.customerName || 'Walk-in'}
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-200">
                              {tx.quantity} units
                            </td>
                            <td className="py-3 px-4 text-slate-300">
                              ${tx.sellingPrice}
                            </td>
                            <td className="py-3 px-4 font-bold text-white">
                              ${tx.totalRevenue}
                            </td>
                            <td className="py-3 px-4 font-bold text-emerald-400">
                              +${tx.totalProfit}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PAYROLL & PERFORMANCE */}
          {activeTab === 'payroll' && (
            <div className="p-6 space-y-6">
              {payrollData && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                  <div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Payroll Period</span>
                    <h3 className="text-lg font-bold text-white">
                      {payrollData.period.monthName} {payrollData.period.year}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Total Disbursable: <span className="font-bold text-emerald-400">${payrollData.summary.totalPayrollDisbursement.toLocaleString()}</span> across {payrollData.summary.totalStaffCount} staff
                    </p>
                  </div>

                  <button
                    onClick={exportPayrollToExcel}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/20"
                  >
                    <FileSpreadsheet className="w-4 h-4" /> Export Payroll Sheet (.xlsx)
                  </button>
                </div>
              )}

              {/* Payroll Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Staff Member</th>
                      <th className="py-3 px-4">Department</th>
                      <th className="py-3 px-4">Days Present</th>
                      <th className="py-3 px-4">Late Arrivals</th>
                      <th className="py-3 px-4">Hours Worked</th>
                      <th className="py-3 px-4">Attendance Rate</th>
                      <th className="py-3 px-4">Base Salary</th>
                      <th className="py-3 px-4">Late Deductions</th>
                      <th className="py-3 px-4">Net Payout</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {!payrollData || payrollData.payroll.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="py-8 text-center text-slate-500">
                          No staff payroll records generated.
                        </td>
                      </tr>
                    ) : (
                      payrollData.payroll.map((p) => (
                        <tr key={p.employeeId} className="hover:bg-slate-700/30 transition">
                          <td className="py-3.5 px-4 font-bold text-white">
                            {p.name}
                            <span className="block text-[11px] font-normal text-slate-400">{p.email}</span>
                          </td>
                          <td className="py-3.5 px-4 font-medium text-slate-300">
                            {p.department}
                          </td>
                          <td className="py-3.5 px-4 text-slate-200">
                            {p.totalDaysPresent} days
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`font-semibold ${p.totalLateDays > 2 ? 'text-amber-400' : 'text-slate-300'}`}>
                              {p.totalLateDays} late
                            </span>
                            {p.excessiveLateDays > 0 && (
                              <span className="text-[10px] text-rose-400 block font-bold">(-${p.lateDeduction})</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-200">
                            {p.totalHoursWorked} hrs
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${p.attendanceRate >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                  style={{ width: `${Math.min(100, p.attendanceRate)}%` }}
                                ></div>
                              </div>
                              <span className="text-[11px] font-bold">{p.attendanceRate}%</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-300">
                            ${p.baseSalary.toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-rose-400 font-bold">
                            {p.lateDeduction > 0 ? `-$${p.lateDeduction}` : '$0'}
                          </td>
                          <td className="py-3.5 px-4 font-black text-emerald-400 text-sm">
                            ${p.netSalary.toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: TEAM DIRECTORY */}
          {activeTab === 'employees' && (
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Workforce Directory & Shifts</h3>
                  <p className="text-xs text-slate-400">Manage team profiles, assigned shift schedules, and operational departments.</p>
                </div>
                <button
                  onClick={() => setShowAddEmpModal(true)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-lg shadow-blue-600/20"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Staff Member
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Staff Name</th>
                      <th className="py-3 px-4">Email Address</th>
                      <th className="py-3 px-4">Department</th>
                      <th className="py-3 px-4">Assigned Shift</th>
                      <th className="py-3 px-4">Salary</th>
                      <th className="py-3 px-4">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {employees.map((emp) => (
                      <tr key={emp.id} className="hover:bg-slate-700/30 transition">
                        <td className="py-3.5 px-4 font-bold text-white text-sm">
                          {emp.name}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300 font-mono">
                          {emp.email}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-200">
                          {emp.department}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-950/60 text-blue-300 border border-blue-800">
                            {emp.shiftStart} - {emp.shiftEnd}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-emerald-400">
                          ${emp.salary?.toLocaleString() || '0'}
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">
                          {emp.phone || 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: LEAVE INQUIRIES */}
          {activeTab === 'leaves' && (
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-base font-bold text-white">Employee Leave Inquiries</h3>
                <p className="text-xs text-slate-400">Review time-off submissions and mark approvals or rejections.</p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Employee</th>
                      <th className="py-3 px-4">Reason</th>
                      <th className="py-3 px-4">Duration Range</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Review Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {leaveRequests.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="py-8 text-center text-slate-500">
                          No leave applications pending review.
                        </td>
                      </tr>
                    ) : (
                      leaveRequests.map((lr) => (
                        <tr key={lr.id} className="hover:bg-slate-700/30 transition">
                          <td className="py-3.5 px-4 font-bold text-white">
                            {lr.user?.name}
                            <span className="block text-[11px] font-normal text-slate-400">{lr.user?.department}</span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-200">
                            {lr.reason}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                            {new Date(lr.startDate).toLocaleDateString()} - {new Date(lr.endDate).toLocaleDateString()}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              lr.status === 'Approved'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : lr.status === 'Rejected'
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            }`}>
                              {lr.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2 whitespace-nowrap">
                            {lr.status === 'Pending' ? (
                              <>
                                <button
                                  onClick={() => handleReviewLeave(lr.id, 'Approved')}
                                  className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white inline-flex items-center gap-1 shadow-sm"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                                </button>
                                <button
                                  onClick={() => handleReviewLeave(lr.id, 'Rejected')}
                                  className="px-3 py-1 rounded-lg text-xs font-bold bg-rose-600/80 hover:bg-rose-600 text-white inline-flex items-center gap-1 shadow-sm"
                                >
                                  <XCircle className="w-3.5 h-3.5" /> Reject
                                </button>
                              </>
                            ) : (
                              <span className="text-xs text-slate-400">Reviewed by {lr.reviewedBy || 'Admin'}</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* MODAL 1: RECORD NEW SALE */}
        {showSaleModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">Record New Inventory Sale</h3>
              <p className="text-xs text-slate-400 mb-4">Stock will be automatically deducted, revenue computed, and audit logged.</p>

              <form onSubmit={handleRecordSale} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Select Item</label>
                  <select
                    required
                    value={saleForm.inventoryId}
                    onChange={(e) => setSaleForm({ ...saleForm, inventoryId: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="">-- Choose Stock Item --</option>
                    {inventoryItems.map((item) => (
                      <option key={item.id} value={item.id} disabled={item.quantity <= 0}>
                        {item.itemName} (Stock: {item.quantity} | Cost: ${item.costPrice} | Retail: ${item.sellingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      max={selectedSaleItem?.quantity || 999}
                      required
                      value={saleForm.quantity}
                      onChange={(e) => setSaleForm({ ...saleForm, quantity: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Custom Unit Price ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder={selectedSaleItem ? `$${selectedSaleItem.sellingPrice}` : '$0'}
                      value={saleForm.customSellingPrice}
                      onChange={(e) => setSaleForm({ ...saleForm, customSellingPrice: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                {selectedSaleItem && (
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-slate-400">Total Revenue:</span>
                      <div className="font-bold text-white text-sm">${estimatedRevenue.toFixed(2)}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Est. Gross Profit:</span>
                      <div className="font-bold text-emerald-400 text-sm">+${estimatedProfit.toFixed(2)}</div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Customer / Client Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Outbound Fleet"
                    value={saleForm.customerName}
                    onChange={(e) => setSaleForm({ ...saleForm, customerName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowSaleModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20"
                  >
                    Confirm & Record Sale
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 2: OVERRIDE ATTENDANCE */}
        {showOverrideModal && selectedRecord && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">Manual Attendance Adjustment</h3>
              <p className="text-xs text-slate-400 mb-4">
                Employee: <span className="font-semibold text-slate-200">{selectedRecord.user?.name}</span> ({new Date(selectedRecord.date).toLocaleDateString()})
              </p>

              <form onSubmit={handleOverrideSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Check-In Timestamp
                  </label>
                  <input
                    type="datetime-local"
                    value={overrideData.checkIn}
                    onChange={(e) => setOverrideData({ ...overrideData, checkIn: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Check-Out Timestamp
                  </label>
                  <input
                    type="datetime-local"
                    value={overrideData.checkOut}
                    onChange={(e) => setOverrideData({ ...overrideData, checkOut: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Attendance Status
                  </label>
                  <select
                    value={overrideData.status}
                    onChange={(e) => setOverrideData({ ...overrideData, status: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="Present">Present</option>
                    <option value="Late">Late</option>
                    <option value="Half-Day">Half-Day</option>
                    <option value="Absent">Absent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Override Reason / Notes
                  </label>
                  <input
                    type="text"
                    value={overrideData.notes}
                    onChange={(e) => setOverrideData({ ...overrideData, notes: e.target.value })}
                    placeholder="e.g. Employee forgot to punch out due to offsite client delivery"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowOverrideModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                  >
                    Save Override
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 3: ADD INVENTORY ITEM */}
        {showAddInventoryModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Add New Inventory Stock</h3>
              <form onSubmit={handleCreateInventory} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Item Name</label>
                  <input
                    type="text"
                    required
                    value={newInventory.itemName}
                    onChange={(e) => setNewInventory({ ...newInventory, itemName: e.target.value })}
                    placeholder="e.g. Wireless Thermal Receipt Printer"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">SKU Code</label>
                    <input
                      type="text"
                      required
                      value={newInventory.sku}
                      onChange={(e) => setNewInventory({ ...newInventory, sku: e.target.value })}
                      placeholder="e.g. SKU-PRN-901"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Category</label>
                    <input
                      type="text"
                      value={newInventory.category}
                      onChange={(e) => setNewInventory({ ...newInventory, category: e.target.value })}
                      placeholder="e.g. Hardware, Packaging"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Initial Quantity</label>
                    <input
                      type="number"
                      required
                      value={newInventory.quantity}
                      onChange={(e) => setNewInventory({ ...newInventory, quantity: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Min Alert Level</label>
                    <input
                      type="number"
                      required
                      value={newInventory.minStockLevel}
                      onChange={(e) => setNewInventory({ ...newInventory, minStockLevel: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Cost Price ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={newInventory.costPrice}
                      onChange={(e) => setNewInventory({ ...newInventory, costPrice: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Selling Price ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={newInventory.sellingPrice}
                      onChange={(e) => setNewInventory({ ...newInventory, sellingPrice: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddInventoryModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                  >
                    Create Stock Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 4: INVENTORY AUDIT TRAIL */}
        {showAuditModal && selectedAuditItem && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Item Modification Audit Trail</h3>
                  <p className="text-xs text-slate-400">{selectedAuditItem.itemName} ({selectedAuditItem.sku})</p>
                </div>
                <button onClick={() => setShowAuditModal(false)} className="text-slate-400 hover:text-white text-xs font-bold">Close</button>
              </div>

              <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                {auditTrails.length === 0 ? (
                  <p className="text-xs text-slate-500">No modification trail recorded yet for this item.</p>
                ) : (
                  auditTrails.map((trail) => (
                    <div key={trail.id} className="p-3 rounded-xl bg-slate-900 border border-slate-700/70 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          trail.action === 'CREATED' ? 'bg-emerald-950 text-emerald-300' : 'bg-blue-950 text-blue-300'
                        }`}>
                          {trail.action}
                        </span>
                        <span className="text-[10px] text-slate-400">{new Date(trail.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="text-slate-200">{trail.details}</p>
                      <p className="text-[10px] text-slate-400">By user: <span className="text-slate-300 font-semibold">{trail.user?.name}</span></p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* MODAL 5: ADD EMPLOYEE */}
        {showAddEmpModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Register New Staff Member</h3>
              <form onSubmit={handleCreateEmployee} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={newEmp.name}
                    onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
                    placeholder="e.g. Jason Bourne"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={newEmp.email}
                      onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
                      placeholder="jason@company.com"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Initial Password</label>
                    <input
                      type="password"
                      required
                      value={newEmp.password}
                      onChange={(e) => setNewEmp({ ...newEmp, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Department</label>
                    <input
                      type="text"
                      value={newEmp.department}
                      onChange={(e) => setNewEmp({ ...newEmp, department: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Phone</label>
                    <input
                      type="text"
                      value={newEmp.phone}
                      onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Shift Start Time</label>
                    <input
                      type="time"
                      value={newEmp.shiftStart}
                      onChange={(e) => setNewEmp({ ...newEmp, shiftStart: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Shift End Time</label>
                    <input
                      type="time"
                      value={newEmp.shiftEnd}
                      onChange={(e) => setNewEmp({ ...newEmp, shiftEnd: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Monthly Salary ($)</label>
                  <input
                    type="number"
                    value={newEmp.salary}
                    onChange={(e) => setNewEmp({ ...newEmp, salary: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddEmpModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                  >
                    Add Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

`

---

### File: frontend\src\pages\DeveloperDashboard.jsx
`javascript
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import api from '../services/api';
import {
  ShieldAlert,
  Users,
  Building2,
  Package,
  Sparkles,
  Lock,
  Unlock,
  Calendar,
  Clock,
  RefreshCw,
  Search,
  CheckCircle2,
  AlertTriangle,
  History,
  FileSpreadsheet
} from 'lucide-react';

export default function DeveloperDashboard() {
  const [stats, setStats] = useState(null);
  const [clients, setClients] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('clients'); // 'clients' | 'audit'
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'ACTIVE' | 'BLOCKED'

  // Modal states for Kill-Switch & Subscription renewal
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [blockReason, setBlockReason] = useState('');
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [daysToAdd, setDaysToAdd] = useState('30');
  const [selectedPlan, setSelectedPlan] = useState('ENTERPRISE_PRO');
  const [actionLoading, setActionLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [statsRes, clientsRes, logsRes] = await Promise.all([
        api.get('/developer/stats'),
        api.get('/developer/clients'),
        api.get('/developer/audit-logs')
      ]);

      if (statsRes.data.success) setStats(statsRes.data.stats);
      if (clientsRes.data.success) setClients(clientsRes.data.clients);
      if (logsRes.data.success) setAuditLogs(logsRes.data.logs);
    } catch (err) {
      console.error('Error fetching developer data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleToggleBlock = async () => {
    if (!selectedAdmin) return;
    setActionLoading(true);

    try {
      const willBlock = !selectedAdmin.isBlocked;
      const res = await api.post('/developer/toggle-block', {
        adminId: selectedAdmin.id,
        isBlocked: willBlock,
        reason: blockReason || (willBlock ? 'Unpaid subscription balance' : 'Payment confirmed')
      });

      setNotification({
        type: 'success',
        text: res.data.message
      });

      setShowBlockModal(false);
      setBlockReason('');
      setSelectedAdmin(null);
      fetchDashboardData();
    } catch (err) {
      setNotification({
        type: 'error',
        text: err.response?.data?.message || 'Failed to toggle kill-switch'
      });
    } finally {
      setActionLoading(false);
    }
  };

  const handleExtendSubscription = async () => {
    if (!selectedAdmin) return;
    setActionLoading(true);

    try {
      const res = await api.post('/developer/update-subscription', {
        adminId: selectedAdmin.id,
        daysToAdd: parseInt(daysToAdd),
        planName: selectedPlan
      });

      setNotification({
        type: 'success',
        text: res.data.message
      });

      setShowExtendModal(false);
      setSelectedAdmin(null);
      fetchDashboardData();
    } catch (err) {
      setNotification({
        type: 'error',
        text: err.response?.data?.message || 'Failed to update subscription'
      });
    } finally {
      setActionLoading(false);
    }
  };

  const handleTriggerCronSweep = async () => {
    try {
      const res = await api.post('/developer/trigger-cron-check');
      setNotification({
        type: 'success',
        text: res.data.message
      });
      fetchDashboardData();
    } catch (err) {
      setNotification({
        type: 'error',
        text: 'Failed to run automated subscription check'
      });
    }
  };

  const filteredClients = clients.filter(c => {
    const matchesSearch = (c.businessName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (c.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (statusFilter === 'ACTIVE') return matchesSearch && !c.isBlocked;
    if (statusFilter === 'BLOCKED') return matchesSearch && c.isBlocked;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Developer Header Banner */}
        <div className="bg-gradient-to-r from-purple-900/60 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-purple-800/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5" /> SaaS Platform Master Command
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Developer & Platform Architect Portal
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Full authority to monitor tenant organizations, execute the commercial SaaS Kill-Switch for non-paying clients, manage recurring subscriptions, and inspect system audit logs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleTriggerCronSweep}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-lg shadow-purple-600/20"
            >
              <RefreshCw className="w-4 h-4" /> Trigger Subscription Expiry Sweep
            </button>
          </div>
        </div>

        {/* Feedback Notification */}
        {notification && (
          <div className={`p-4 rounded-xl flex items-center justify-between text-sm ${
            notification.type === 'success'
              ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
          }`}>
            <div className="flex items-center gap-2 font-medium">
              {notification.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <AlertTriangle className="w-5 h-5 text-rose-400" />}
              {notification.text}
            </div>
            <button onClick={() => setNotification(null)} className="text-xs opacity-75 hover:opacity-100">Dismiss</button>
          </div>
        )}

        {/* Platform Analytics Cards */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Business Clients"
              value={stats.totalAdmins}
              subtext={`${stats.activeAdmins} active tenants running`}
              icon={Building2}
              color="blue"
            />
            <StatCard
              title="Kill-Switch Suspended"
              value={stats.blockedAdmins}
              subtext="Restricted non-paying clients"
              icon={ShieldAlert}
              color="rose"
              alert={stats.blockedAdmins > 0}
            />
            <StatCard
              title="Platform Employees"
              value={stats.totalEmployees}
              subtext="Across all client businesses"
              icon={Users}
              color="emerald"
            />
            <StatCard
              title="Developer Security Rule"
              value={`${stats.totalDevelopers} / 2`}
              subtext={`${stats.developerSlotsRemaining} developer slots remaining`}
              icon={Sparkles}
              color="purple"
            />
          </div>
        )}

        {/* Tabs: Clients vs System Audit Logs */}
        <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-xl overflow-hidden">
          <div className="flex border-b border-slate-700/80 px-6 pt-4 gap-4">
            <button
              onClick={() => setActiveTab('clients')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'clients'
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" /> Client Organizations ({clients.length})
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition border-b-2 ${
                activeTab === 'audit'
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <History className="w-4 h-4" /> System Audit Logs ({auditLogs.length})
            </button>
          </div>

          {/* TAB 1: CLIENTS TABLE */}
          {activeTab === 'clients' && (
            <div className="p-6 space-y-4">
              {/* Search & Status Filters */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by company, name, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
                  <span className="text-slate-400">Filter:</span>
                  {['ALL', 'ACTIVE', 'BLOCKED'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg font-medium transition ${
                        statusFilter === st
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Business / Client Admin</th>
                      <th className="py-3 px-4">Plan & Expiry</th>
                      <th className="py-3 px-4">Employees</th>
                      <th className="py-3 px-4">Inventory</th>
                      <th className="py-3 px-4">SaaS Status</th>
                      <th className="py-3 px-4 text-right">Kill-Switch & Subscription</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {filteredClients.map((client) => {
                      const isExpired = client.subscriptionEndDate && new Date(client.subscriptionEndDate) < new Date();
                      return (
                        <tr key={client.id} className="hover:bg-slate-700/30 transition">
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-white text-sm">
                              {client.businessName || 'Business Client'}
                            </div>
                            <div className="text-slate-400">{client.name} &bull; {client.email}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-slate-200">{client.subscriptionPlan || 'STANDARD'}</div>
                            <div className={`text-[11px] ${isExpired ? 'text-rose-400 font-bold' : 'text-slate-400'}`}>
                              {client.subscriptionEndDate ? new Date(client.subscriptionEndDate).toLocaleDateString() : 'Lifetime'}
                              {isExpired && ' (EXPIRED)'}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-medium text-slate-200">
                            {client.employeeCount} staff
                          </td>
                          <td className="py-3.5 px-4 font-medium text-slate-200">
                            {client.inventoryCount} items
                          </td>
                          <td className="py-3.5 px-4">
                            {client.isBlocked ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                                <Lock className="w-3 h-3 text-rose-400" /> BLOCKED
                              </span>
                            ) : isExpired ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                <Clock className="w-3 h-3 text-amber-400" /> EXPIRED
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> ACTIVE
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2">
                            {/* Toggle Block Button */}
                            <button
                              onClick={() => {
                                setSelectedAdmin(client);
                                setShowBlockModal(true);
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition inline-flex items-center gap-1.5 ${
                                client.isBlocked
                                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                  : 'bg-rose-600/80 hover:bg-rose-600 text-white'
                              }`}
                            >
                              {client.isBlocked ? (
                                <>
                                  <Unlock className="w-3.5 h-3.5" /> Unblock Access
                                </>
                              ) : (
                                <>
                                  <Lock className="w-3.5 h-3.5" /> Block Client
                                </>
                              )}
                            </button>

                            {/* Extend Subscription */}
                            <button
                              onClick={() => {
                                setSelectedAdmin(client);
                                setShowExtendModal(true);
                              }}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 transition inline-flex items-center gap-1.5"
                            >
                              <Calendar className="w-3.5 h-3.5" /> Manage License
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM AUDIT LOGS */}
          {activeTab === 'audit' && (
            <div className="p-6">
              <div className="overflow-x-auto rounded-xl border border-slate-700">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                    <tr>
                      <th className="py-3 px-4">Timestamp</th>
                      <th className="py-3 px-4">Action</th>
                      <th className="py-3 px-4">Executed By</th>
                      <th className="py-3 px-4">Audit Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-700/30 transition">
                        <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                          {new Date(log.createdAt).toLocaleString()}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            log.action.includes('BLOCK')
                              ? 'bg-rose-900/60 text-rose-300 border border-rose-700'
                              : log.action.includes('UNBLOCK')
                              ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                              : 'bg-purple-900/60 text-purple-300 border border-purple-700'
                          }`}>
                            {log.action}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-200">
                          {log.developer?.name || 'SaaS Platform Engine'}
                        </td>
                        <td className="py-3 px-4 text-slate-300 leading-relaxed">
                          {log.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* MODAL 1: KILL-SWITCH TOGGLE */}
        {showBlockModal && selectedAdmin && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selectedAdmin.isBlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                }`}>
                  {selectedAdmin.isBlocked ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {selectedAdmin.isBlocked ? 'Unblock Client Account' : 'Activate SaaS Kill-Switch'}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedAdmin.businessName || selectedAdmin.name}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {selectedAdmin.isBlocked
                  ? 'Restoring access will instantly allow this client and all their linked staff to sign in, use attendance terminals, and manage inventory.'
                  : 'Blocking this client will immediately revoke their access. Their dashboard and all staff terminals will display the Subscription Blocked screen. They will not be able to log in or create new accounts.'}
              </p>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Audit Reason / Note:
                </label>
                <input
                  type="text"
                  value={blockReason}
                  onChange={(e) => setBlockReason(e.target.value)}
                  placeholder={selectedAdmin.isBlocked ? 'e.g. Invoice #2034 Cleared' : 'e.g. Non-payment of March SaaS bill'}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowBlockModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={handleToggleBlock}
                  className={`px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg transition ${
                    selectedAdmin.isBlocked
                      ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'
                      : 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
                  }`}
                >
                  {actionLoading ? 'Processing...' : selectedAdmin.isBlocked ? 'Confirm Unblock' : 'Confirm Kill-Switch Lock'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 2: EXTEND SUBSCRIPTION */}
        {showExtendModal && selectedAdmin && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Renew / Extend Subscription</h3>
                  <p className="text-xs text-slate-400">{selectedAdmin.businessName || selectedAdmin.name}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Plan Tier:
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="STARTER_PRO">Starter Business ($49/mo)</option>
                    <option value="ENTERPRISE_PRO">Enterprise Corporate Suite ($199/mo)</option>
                    <option value="UNLIMITED_TIER">Unlimited Multi-Branch ($499/mo)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Extension Period:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['30', '90', '365'].map((days) => (
                      <button
                        key={days}
                        type="button"
                        onClick={() => setDaysToAdd(days)}
                        className={`p-2 rounded-xl text-xs font-bold border transition ${
                          daysToAdd === days
                            ? 'bg-purple-600/30 border-purple-500 text-purple-200'
                            : 'bg-slate-900 border-slate-700 text-slate-400'
                        }`}
                      >
                        +{days} Days
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowExtendModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={handleExtendSubscription}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20"
                >
                  {actionLoading ? 'Updating...' : 'Save & Renew Access'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

`

---

### File: frontend\src\pages\EmployeeDashboard.jsx
`javascript
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CheckInButton from '../components/CheckInButton';
import api from '../services/api';
import {
  Clock,
  Calendar,
  FileText,
  User,
  Building2,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Send,
  History,
  ShieldCheck
} from 'lucide-react';

export default function EmployeeDashboard() {
  const [profile, setProfile] = useState(null);
  const [todayRecord, setTodayRecord] = useState(null);
  const [history, setHistory] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  // Leave Form
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveStartDate, setLeaveStartDate] = useState('');
  const [leaveEndDate, setLeaveEndDate] = useState('');
  const [leaveSubmitting, setLeaveSubmitting] = useState(false);
  const [leaveNotice, setLeaveNotice] = useState(null);

  const fetchEmployeeData = async () => {
    try {
      const [profRes, todayRes, histRes, leavesRes] = await Promise.all([
        api.get('/employee/profile'),
        api.get('/attendance/my-today'),
        api.get('/attendance/my-history'),
        api.get('/employee/leaves')
      ]);

      if (profRes.data.success) setProfile(profRes.data.employee);
      if (todayRes.data.success) setTodayRecord(todayRes.data.record);
      if (histRes.data.success) setHistory(histRes.data.history);
      if (leavesRes.data.success) setLeaves(leavesRes.data.leaves);
    } catch (err) {
      console.error('Error fetching employee data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    setLeaveSubmitting(true);
    setLeaveNotice(null);

    try {
      const res = await api.post('/employee/leave', {
        reason: leaveReason,
        startDate: leaveStartDate,
        endDate: leaveEndDate
      });

      setLeaveNotice({ type: 'success', text: res.data.message });
      setLeaveReason('');
      setLeaveStartDate('');
      setLeaveEndDate('');
      setShowLeaveForm(false);
      fetchEmployeeData();
    } catch (err) {
      setLeaveNotice({ type: 'error', text: err.response?.data?.error || 'Failed to submit leave request' });
    } finally {
      setLeaveSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Employee Banner */}
        <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xl font-bold">
              {profile?.name ? profile.name.charAt(0) : 'E'}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider mb-1">
                Staff Self-Service Portal
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Welcome back, {profile?.name || 'Staff Member'}
              </h1>
              <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{profile?.employerName || 'Corporate Workspace'}</span>
                <span>&bull;</span>
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                <span>{profile?.department || 'Operations'}</span>
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right bg-slate-900/60 p-3.5 rounded-xl border border-slate-700 text-xs">
            <div className="text-slate-400">Regular Work Schedule</div>
            <div className="font-bold text-slate-200 mt-0.5">
              {profile?.shiftStart || '09:00'} AM - {profile?.shiftEnd || '17:00'} PM
            </div>
            <div className="text-[10px] text-emerald-400 mt-0.5">10-min grace period allowed</div>
          </div>
        </div>

        {/* 1. PRIMARY ATTENDANCE CHECK-IN/OUT TERMINAL */}
        <CheckInButton
          onAttendanceUpdated={fetchEmployeeData}
          todayRecord={todayRecord}
          shiftInfo={profile}
        />

        {/* Leave Notice Banner */}
        {leaveNotice && (
          <div className={`p-4 rounded-xl flex items-center gap-2 text-sm ${
            leaveNotice.type === 'success'
              ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
          }`}>
            {leaveNotice.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-rose-400" />}
            {leaveNotice.text}
          </div>
        )}

        {/* 2. ATTENDANCE HISTORY TABLE */}
        <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-xl overflow-hidden p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-emerald-400" />
              <h2 className="text-base font-bold text-white">My Attendance Log History</h2>
            </div>
            <span className="text-xs text-slate-400">{history.length} records</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Check-In</th>
                  <th className="py-3 px-4">Check-Out</th>
                  <th className="py-3 px-4">Total Hours</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {history.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-6 text-center text-slate-500">
                      No attendance logs recorded yet. Punch check-in above to start.
                    </td>
                  </tr>
                ) : (
                  history.map((h) => (
                    <tr key={h.id} className="hover:bg-slate-700/30 transition">
                      <td className="py-3 px-4 font-semibold text-slate-200">
                        {new Date(h.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-slate-200">
                        {h.checkIn ? new Date(h.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-slate-200">
                        {h.checkOut ? new Date(h.checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-400">
                        {h.totalHours ? `${h.totalHours} hrs` : '-'}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          h.status === 'Present'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : h.status === 'Late'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        }`}>
                          {h.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400 text-[11px]">
                        {h.overriddenBy ? `Manual override by ${h.overriddenBy}` : (h.notes || 'Normal punch')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. LEAVE REQUESTS SELF-SERVICE */}
        <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-xl overflow-hidden p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <div>
                <h2 className="text-base font-bold text-white">Leave Submissions & Status</h2>
                <p className="text-xs text-slate-400">Submit time-off requests directly to your supervisor.</p>
              </div>
            </div>

            <button
              onClick={() => setShowLeaveForm(!showLeaveForm)}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              {showLeaveForm ? 'Close Form' : 'Apply for Leave'}
            </button>
          </div>

          {/* Form */}
          {showLeaveForm && (
            <form onSubmit={handleLeaveSubmit} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Reason for Time-Off / Absence
                </label>
                <textarea
                  required
                  rows="2"
                  value={leaveReason}
                  onChange={(e) => setLeaveReason(e.target.value)}
                  placeholder="e.g. Medical appointment, family event..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    required
                    value={leaveStartDate}
                    onChange={(e) => setLeaveStartDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    required
                    value={leaveEndDate}
                    onChange={(e) => setLeaveEndDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={leaveSubmitting}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white"
                >
                  {leaveSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}

          {/* Leaves List */}
          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/90 uppercase tracking-wider text-[11px] text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4">Reason</th>
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4">Applied Date</th>
                  <th className="py-3 px-4">Review Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {leaves.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-6 text-center text-slate-500">
                      No leave requests submitted yet.
                    </td>
                  </tr>
                ) : (
                  leaves.map((lr) => (
                    <tr key={lr.id} className="hover:bg-slate-700/30 transition">
                      <td className="py-3 px-4 font-medium text-slate-200">{lr.reason}</td>
                      <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                        {new Date(lr.startDate).toLocaleDateString()} - {new Date(lr.endDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-slate-400">{new Date(lr.createdAt).toLocaleDateString()}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          lr.status === 'Approved'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : lr.status === 'Rejected'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {lr.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

`

---

### File: frontend\src\pages\ForgotPassword.jsx
`javascript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Shield, Mail, KeyRound, ArrowRight, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await api.post('/auth/forgot-password', { email });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to request password reset.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 mb-4">
          <KeyRound className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Recover Password</h2>
        <p className="mt-2 text-sm text-slate-400">
          Enter your registered email to generate a secure recovery token
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800/90 py-8 px-6 shadow-2xl rounded-2xl border border-slate-700/80 sm:px-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          {result ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  {result.message}
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  In a production environment, this link is delivered directly via Nodemailer SMTP. For immediate demo verification, your 15-minute token is:
                </p>
                <div className="mt-3 p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-400 break-all border border-slate-700 select-all">
                  {result.resetToken}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate(`/reset-password?token=${result.resetToken}`)}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20"
              >
                Proceed to Reset Password
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Account Email
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? 'Generating Token...' : 'Send Recovery Token'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

`

---

### File: frontend\src\pages\Login.jsx
`javascript
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { Shield, Lock, Mail, AlertTriangle, ArrowRight, Sparkles, Building2, User, Check } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login, getDashboardRoute } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/login', { email, password });
      const { user, token } = response.data;

      login(user, token);
      navigate(getDashboardRoute(user.role));
    } catch (err) {
      const resp = err.response?.data;
      if (resp?.code === 'BLOCKED' || resp?.code === 'SUSPENDED' || resp?.code === 'EXPIRED') {
        sessionStorage.setItem('killSwitchReason', JSON.stringify({
          error: resp.error,
          message: resp.message,
          code: resp.code
        }));
        navigate('/subscription-blocked');
      } else {
        setError(resp?.message || 'Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Quick switch credentials helper for evaluation
  const setDemoUser = (demoEmail, demoPassword) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 mb-4">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">NexusSaaS Business Suite</h2>
        <p className="mt-2 text-sm text-slate-400">
          Commercial Attendance, Inventory & Multi-Role SaaS Platform
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800/90 py-8 px-6 shadow-2xl rounded-2xl border border-slate-700/80 sm:px-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Corporate Email
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition">
                  Forgot password?
                </Link>
              </div>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-5 h-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition shadow-lg shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In to Portal'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Instant 1-Click Role Switcher for Demonstration */}
          <div className="mt-8 pt-6 border-t border-slate-700/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 text-center">
              Quick 1-Click Demo Accounts
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setDemoUser('developer@saas.com', 'Developer123!')}
                className="p-2.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/40 text-purple-300 text-left transition flex items-center justify-between"
              >
                <div>
                  <div className="font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Developer
                  </div>
                  <div className="text-[10px] text-purple-400/80">SaaS Owner</div>
                </div>
                {email === 'developer@saas.com' && <Check className="w-3.5 h-3.5 text-purple-400" />}
              </button>

              <button
                type="button"
                onClick={() => setDemoUser('admin@corporate.com', 'Admin123!')}
                className="p-2.5 rounded-lg bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/40 text-blue-300 text-left transition flex items-center justify-between"
              >
                <div>
                  <div className="font-bold flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" /> Active Admin
                  </div>
                  <div className="text-[10px] text-blue-400/80">Apex Logistics</div>
                </div>
                {email === 'admin@corporate.com' && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </button>

              <button
                type="button"
                onClick={() => setDemoUser('blocked@retail.com', 'Admin123!')}
                className="p-2.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800/40 text-rose-300 text-left transition flex items-center justify-between"
              >
                <div>
                  <div className="font-bold flex items-center gap-1 text-rose-400">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Blocked Admin
                  </div>
                  <div className="text-[10px] text-rose-400/80">Test Kill-Switch</div>
                </div>
                {email === 'blocked@retail.com' && <Check className="w-3.5 h-3.5 text-rose-400" />}
              </button>

              <button
                type="button"
                onClick={() => setDemoUser('sarah@corporate.com', 'Employee123!')}
                className="p-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/40 text-emerald-300 text-left transition flex items-center justify-between"
              >
                <div>
                  <div className="font-bold flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-emerald-400" /> Employee
                  </div>
                  <div className="text-[10px] text-emerald-400/80">Staff Terminal</div>
                </div>
                {email === 'sarah@corporate.com' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-400">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-semibold text-emerald-400 hover:text-emerald-300 transition">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

`

---

### File: frontend\src\pages\Register.jsx
`javascript
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { Shield, Lock, Mail, User, Building2, AlertTriangle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'ADMIN',
    businessName: '',
    department: 'Operations',
    shiftStart: '09:00',
    shiftEnd: '17:00'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login, getDashboardRoute } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/register', formData);
      const { user, token } = response.data;

      login(user, token);
      navigate(getDashboardRoute(user.role));
    } catch (err) {
      const resp = err.response?.data;
      setError(resp?.message || 'Registration failed. Please check the inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 mb-4">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Create an Account</h2>
        <p className="mt-2 text-sm text-slate-400">
          Select your role to access the dedicated SaaS workspace
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800/90 py-8 px-6 shadow-2xl rounded-2xl border border-slate-700/80 sm:px-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Role Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Account Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'ADMIN' })}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    formData.role === 'ADMIN'
                      ? 'bg-blue-600/30 border-blue-500 text-blue-200 ring-2 ring-blue-500/40'
                      : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                  <div className="text-xs font-bold">Admin</div>
                  <div className="text-[10px] text-slate-400">Client Owner</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'EMPLOYEE' })}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    formData.role === 'EMPLOYEE'
                      ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40'
                      : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                  <div className="text-xs font-bold">Employee</div>
                  <div className="text-[10px] text-slate-400">Staff Portal</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'DEVELOPER' })}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    formData.role === 'DEVELOPER'
                      ? 'bg-purple-600/30 border-purple-500 text-purple-200 ring-2 ring-purple-500/40'
                      : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                  <div className="text-xs font-bold">Developer</div>
                  <div className="text-[10px] text-purple-400 font-semibold">Max 2 Limit</div>
                </button>
              </div>

              {formData.role === 'DEVELOPER' && (
                <div className="mt-2 p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-purple-300 text-[11px] leading-relaxed">
                  🛡️ <strong>Platform Rule:</strong> Strict security constraint permits only <strong>2 Developers</strong> across the entire system. Any further registrations will be blocked automatically.
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="h-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {formData.role === 'ADMIN' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Business / Company Name
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="h-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Global Corp"
                    className="block w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Corporate Email
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 6 characters"
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition shadow-lg shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Register Account'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-emerald-400 hover:text-emerald-300 transition">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

`

---

### File: frontend\src\pages\ResetPassword.jsx
`javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { Lock, Shield, ArrowRight, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await api.post('/auth/reset-password', {
        token,
        newPassword
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed. Token may be expired.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 mb-4">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Set New Password</h2>
        <p className="mt-2 text-sm text-slate-400">
          Enter your verification token and define your new secure password
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800/90 py-8 px-6 shadow-2xl rounded-2xl border border-slate-700/80 sm:px-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          {success ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">Password Updated!</h3>
              <p className="text-sm text-slate-300">
                Your credentials have been securely updated. You can now log into your dashboard.
              </p>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition"
              >
                Sign In Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Reset Token
                </label>
                <input
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Paste 64-char token"
                  className="block w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 font-mono text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  New Password
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="block w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Confirm Password
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className="block w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? 'Updating Password...' : 'Save New Password'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

`

---

### File: frontend\src\pages\SubscriptionBlocked.jsx
`javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, AlertTriangle, PhoneCall, Mail, ArrowRight, LogOut, RefreshCw } from 'lucide-react';

export default function SubscriptionBlocked() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  let blockInfo = {
    error: 'Commercial SaaS License Suspended',
    message: 'Your organization access has been restricted due to overdue billing or platform administrative suspension.',
    code: 'SUSPENDED'
  };

  try {
    const cached = sessionStorage.getItem('killSwitchReason');
    if (cached) {
      blockInfo = JSON.parse(cached);
    }
  } catch (e) {
    console.error(e);
  }

  const handleLogout = () => {
    logout();
    sessionStorage.removeItem('killSwitchReason');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        {/* Kill-Switch Pulsing Visual */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-rose-500/10 border border-rose-500/30 text-rose-500 mb-6 shadow-2xl shadow-rose-900/40">
          <ShieldAlert className="w-10 h-10 animate-pulse" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-800">
          <AlertTriangle className="w-3.5 h-3.5" /> SaaS Kill-Switch Triggered
        </span>

        <h1 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
          {blockInfo.error || 'Access Temporarily Suspended'}
        </h1>

        <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-md mx-auto">
          {blockInfo.message}
        </p>

        {/* Resolution Steps Box */}
        <div className="mt-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 text-left shadow-xl">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
            How to Restore Software Access:
          </h3>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400 shrink-0 mt-0.5">1</span>
              <span>Settle any outstanding SaaS subscription invoices or monthly license fees with your provider.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400 shrink-0 mt-0.5">2</span>
              <span>Contact the SaaS Platform Developers to unlock and renew your enterprise tenant profile.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400 shrink-0 mt-0.5">3</span>
              <span>Once confirmed, all employee attendance logs and inventory data will be instantaneously restored.</span>
            </li>
          </ul>

          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>billing@nexussaas.com</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+1 (800) 555-SAAS</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition border border-slate-700"
          >
            <RefreshCw className="w-4 h-4" /> Check Restoration Status
          </button>

          <button
            onClick={handleLogout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-lg shadow-rose-600/20"
          >
            <LogOut className="w-4 h-4" /> Switch / Exit Account
          </button>
        </div>
      </div>
    </div>
  );
}

`

---

### File: frontend\src\services\api.js
`javascript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle Kill-Switch 403 & 401 Session Expiry
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // SaaS Kill-Switch Detection
      if (status === 403 && (data.code === 'SUSPENDED' || data.code === 'EXPIRED' || data.code === 'COMPANY_SUSPENDED' || data.code === 'BLOCKED')) {
        // Store block details in sessionStorage so SubscriptionBlocked page can display exact reason
        sessionStorage.setItem('killSwitchReason', JSON.stringify({
          error: data.error,
          message: data.message,
          code: data.code
        }));

        if (!window.location.pathname.includes('/subscription-blocked')) {
          window.location.href = '/subscription-blocked';
        }
      }

      if (status === 401 && !window.location.pathname.includes('/login')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

`

---

### File: frontend\tailwind.config.js
`javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Slate / Dark Blue
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        sidebar: '#1E293B',    // Lighter Slate
        success: {
          DEFAULT: '#10B981', // Vibrant Emerald Green
          hover: '#059669',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B', // Soft Amber
          hover: '#D97706',
          light: '#FEF3C7',
        },
        danger: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
          light: '#FEE2E2',
        }
      }
    },
  },
  plugins: [],
}

`

---

### File: frontend\vite.config.js
`javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

`

---

### File: README.md
`
# NexusSaaS Business Management & Attendance Suite 🚀

> **Production-Grade Commercial SaaS Platform** featuring 3 strictly isolated role dashboards (**Platform Developer**, **Client Admin / Business Owner**, and **Staff Employee**), automated background subscription billing & kill-switch, inventory audit trails, and SheetJS Excel attendance reports.

---

## 🌟 Key Architecture & Capabilities

### 1. 🛡️ Three Distinct Roles & Isolated Workspaces
| Role | Portal Route | Primary Capabilities & Authorities | Restrictions & Security Guardrails |
| :--- | :--- | :--- | :--- |
| **DEVELOPER** *(SaaS Owner)* | `/developer/dashboard` | Platform metrics, tenant oversight, **SaaS Kill-Switch** (block/unblock clients), subscription renewal (+30/90/365 days), system audit logs, and on-demand cron sweeps. | **Strict Limit:** Maximum of **2 Developers** globally across the platform. System rejects a 3rd registration. |
| **ADMIN** *(Business Client)* | `/admin/dashboard` | Live attendance tracking, shift definitions, manual punch adjustments/overrides, **SheetJS `.xlsx` Excel export**, dynamic inventory search/CRUD, audit trails, staff directory, and leave approvals. | Subject to **SaaS Kill-Switch** & automated subscription expiry. If blocked by developer or overdue, access is locked across the entire tenant. |
| **EMPLOYEE** *(Staff Member)* | `/employee/dashboard` | Self-Service Terminal with live clock punch-in/out, automatic late detection based on shift, attendance history, and leave requests. | Isolated exclusively to their personal records. Optional **Office Network / Geo-fencing** validation. |

---

### 2. ⚡ The SaaS Kill-Switch & Automated Subscription Engine
- **Manual Kill-Switch:** A Developer can instantly toggle an Admin's `isBlocked` flag. When blocked, neither the Admin nor their staff can log in or create accounts.
- **Automated Expiry (`node-cron`):** A daily background cron job sweeps the database. Any Admin whose `subscriptionEndDate` has passed is automatically marked `isBlocked = true` with a permanent record in `SystemAuditLog`.
- **Interception Screen (`/subscription-blocked`):** Non-paying clients and their employees receive an immediate `403 Forbidden` response and are routed to a branded suspension screen with provider contact details.

---

### 3. 📊 Inventory Management with Audit Trail
- **Live Search & Filter:** Instant dynamic search by Item Name, SKU, or Category as the user types.
- **Stock Tracking:** Soft-amber warning badges automatically trigger whenever `quantity <= minStockLevel`.
- **Automatic Audit Trail:** Every stock modification (creation, restock, dispatch, price edit) records a permanent entry into `AuditTrail` capturing the exact changes, timestamp, and *Last Updated By* user name.

---

### 4. 🕒 Attendance Management & SheetJS Export
- **Live Clock Terminal:** Records exact check-in and check-out timestamps, calculates net hours worked, and flags late arrivals beyond the 10-minute grace window.
- **Manual Adjustments:** Admins can adjust punch times, correct logs, or delete duplicates.
- **Instant Excel Export:** Admins select any date range (`startDate` to `endDate`) and generate a formatted `.xlsx` workbook via SheetJS with a single click.

---

### 5. 🔑 Token-Based Password Recovery Flow
- Secure `crypto.randomBytes(32)` single-use tokens hashed with SHA-256 and stored with a 15-minute expiration timestamp.
- Dedicated `/forgot-password` and `/reset-password` UI workflows.

---

## 🚀 Quick Start Guide

### 1. Default Demo Credentials
Use these pre-seeded accounts to test all roles immediately:

| Role | Email | Password | Details |
| :--- | :--- | :--- | :--- |
| **Developer (SaaS Owner)** | `developer@saas.com` | `Developer123!` | Master platform command (Slot 1/2) |
| **Active Client Admin** | `admin@corporate.com` | `Admin123!` | Apex Global Logistics (Active 30 days) |
| **Suspended Client Admin** | `blocked@retail.com` | `Admin123!` | Test the **SaaS Kill-Switch** screen |
| **Staff Employee** | `sarah@corporate.com` | `Employee123!` | Dedicated terminal & check-in punch |

*(Tip: The login page includes 1-click quick credentials switcher buttons for rapid testing.)*

---

### 2. Starting the Services

#### Backend (Node.js & Express)
```bash
cd backend
npm install
npx prisma db push
node src/seed.js        # Seeds demo users, inventory & logs
node src/server.js       # Starts API server on port 5000
```

#### Frontend (React + Vite + Tailwind CSS)
```bash
cd frontend
npm install
npm run dev              # Starts Vite dev server on port 5173
```

- **Frontend App:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

### 3. Running the Automated Test Suite
To execute the automated test suite verifying all 8 core features (15 passing assertions):
```bash
cd backend
node test-suite.js
```

`

---

