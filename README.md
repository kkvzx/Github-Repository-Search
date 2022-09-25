Github repository search
Website was made using Gatsby, typescript, styled-components & github api
I also implemented sorting function.

Website consists of:
->404 page
->bookmarks page
->index page
->search result page

Index and Search result page both use SearchBar component.
After submiting the user input 'Index page' navigates to ./search/{serachInput} - numer of pages are stored as states.
Search result page is taking address and use it to make right url for api call.
After fetching the data from API it shows Explore component which renders SingleRepository components.

Data are fetched in [searchInput].tsx.

Bookmarks uses localStorage to store data about favorites repositories.
