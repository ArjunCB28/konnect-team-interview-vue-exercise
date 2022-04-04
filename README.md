# Welcome

Goal: make this vue app as close to this mock https://www.figma.com/file/zeaWiePnc3OCe34I4oZbzN/Service-Card-List?node-id=0%3A1 as possible.

The styling should be responsive and look good different browser window sizes.

You may use the component docs to help style your components: https://kongponents.netlify.app/components/card.html

## Functional Requirements

- Ability to view and search services: Default Services List page shows the list of services and provides option to search

- Working pagination: Pagination works and the state is preserved when navigating across pages. Example: Search or navigate to different page number. Click on a service and the app takes to the service info page. Now, when you go back to the home page, the search/ pagination information is restored from the Vuex.

- Responsive layout: Pages are responsive across different layouts

### Additional Considerations

- TypeScript: Typescript has been used. Some types are defined in type-def folder
- Tests: Both unit and e2e tests are implemented. I have not implemented all use-cases and edge case testing due to time constrain
- Routing and views: Provided
- Other items covered in Panel 1


## Get started by running

```shell
yarn install --ignore-optional
yarn serve
```

or

```shell
npm install --no-optional
npm run serve
```

#### Start Dev Server in Separate Terminal

```shell
yarn server
```

or

```shell
npm run server
```

## Compiles and minifies for production

```shell
yarn build
```

or

```shell
npm run build
```

## Run your unit tests

In order to run unit or e2e tests you must first run install without the ignore optional flag.

```
yarn test:unit
```

or

```shell
npm run test:unit
```

## Run your end-to-end tests

```
yarn test:e2e
```

or

```shell
npm run test:e2e
```

## Lints and fixes files

```
yarn lint
```

or

```shell
npm run lint
```
