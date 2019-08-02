# Favorite-things-ui

[![Maintainability](https://api.codeclimate.com/v1/badges/79ae4c09c16d56cb9159/maintainability)](https://codeclimate.com/github/nzediegwu1/favorite-things-ui/maintainability)

A full stack web an application that allows the user to track their favorite things.
- Backend Repo: [Click here](https://github.com/nzediegwu1/favorite-things)

## Table of Contents

    1. Features
    2. Technologies
    3. Project Setup

## Features
  #### Users can perform the following actions with this application
    
      - Create a Category for saving favourite things
      - Edit a category
      - Delete a category (Soft-delete)
      - View a list of categories and the count of favourites under each
      - Add favourite things under a category
      - Add metadata to a favourite thing
      - Remove metadata from a favourite thing
      - Edit an existing Favourite thing
      - Delete a favourite thing (Soft-delete)
      - View list of favourite things under a category
      - View list of metadata under a Favourite thing
      - View Audit-logs for mutations (create, update, delete) to a Favourite thing
      - Veiw Audit-logs  for mutations (create, update, delete) to a Category
      - Search for Favourite things under a selected Category
  
  
## Technologies
    1. Vue.js
    2. Vue-CLI
    3. Axios - For making http requests
    4. Bootstrap CSS Library
    5. Bootstrap-vue - Bootstrap styled components for Vuejs
    6. Yup - For form-data validation



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
