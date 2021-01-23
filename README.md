# ClarisightsAssignment

See it working [here](https://rohchakr.github.io/ClarisightsAssignment).

Tested in Mozilla Firefox 78.6.1esr (64-bit)

In Google chrome, it is throwing CORS error

## Library Used
D3.js
Reason - SVG - the quickest of all

## High Level Idea
User will not see 1000 rows at a time in a page. So, break down the problem to load 10 rows and display only 5 rows.
### Naive Solution
Pagination
### Better Solution
As the user scrolls, load the rows progressively.