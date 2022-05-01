# First run

Require npm v16, firebase-tools


``` 
npm run setup 
cd packages/invoice-web
firebase login
```

# Build

``` npm run build-workspaces ```

# Local run

``` 
cd packages/invoice-web
firebase emulators:start
npm run start
```

# Read more

Testing: https://www.freecodecamp.org/news/testing-react-hooks/