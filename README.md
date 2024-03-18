# Top Headlines

A Next.js/React application that displays the top 5 news headlines for the UK, US, France, Australia and India.

## Getting Started

Create a `.env.local` file in the root of the directory, copying the contents of `.env.example`. Add your News API key here.

To run the application:
```
yarn dev
```
The application will run on `http://localhost:3000`.

To run the tests:
```
yarn test
```

## Decisions

* I decided to use styled components in order to use breakpoint variables, to be able to dynamically style components and to not have to worry too much about classnames. With hindsight, I could have probably used plain CSS as it would have allowed for a lot more of the components to be Server components which would be better for performance reasons. 
* I also considered libraries like TailwindCSS and component libraries like ChakraUI, however I decided that I wanted to focus on simplicity and readability of the CSS for this exercise.


## Future Work/Improvements

* Create another dropdown in the Filters component that allows the user to change the news category as well.
* Write browser tests using Playwright to end to end test the application.
* Improve the design. The design is fairly basic so it would be great to spend more time on this. There is a lot of blank space especially on larger screens.

