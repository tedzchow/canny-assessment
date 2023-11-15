# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

## Getting Started

1. **Initialize your environment**

We recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

Terminal tab #2:

```sh
npm run frontend
```

Once everything is running, you should see the app running http://127.0.0.1:8080.

## Customer Issues

For each of the following issues:

1. Identify the issue
1. Apply the fix
1. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.
- SSO token was generated wrongly with the property `unyme` though the backend dos do the validation checking with the property name `name`.
- Generated a new SSO token. I've added a util in [utils-for-bug-fix](./server/utils-for-bug-fix/generateSSOToken.js).
- Hi customer, we're sorry for that. We were using a wrong SSO token for you but fixed it.

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.
- In the `onChangeSort` method, it's updatig the component's state to close the menu before dispatching `changeSort(sort)` action.
- Updated the `onChangeSort` method to dispatch the `changeSort` action first and then update the component's state.
- Thanks for flagging that issue, there was a minor issue in the frontend but it's fixed already. You can see that fix by refreshing the page.

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!
- In `sortBy` method, it didn't consider descending when the array length is 2.
- Updated to reverse the result array when the length is 2 and descending is true.
- Thank you reaching out to us! We've investigated the issue and fixed the issue by updating the sorting algorithm.

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.
- In `PostList.js`, when fetching posts after clicking the page number, it may dispatch the `recountVotes` earlier than `fetchPosts` because they are all asynchronouse functions.
- Updated fetchPosts method to dispatch `fetchPosts` and `recountVotes` in order by using `async/await`.
- Thank you for your bug report. We've just fixed the issue to recount the votes after getting posts.

**Customer 5:** When I navigate the page with the sort type `Top`, it shows the posts in a different sort type (more exactly `Old`) without the sort type update.

## 🎉 You're Done 🎉

Congrats on completing our assessment. All that is left for you to do is submit your assessment. We made a command that will zip your submission and send it to us. Send us an email to confirm that we got it.

```sh
npm run submit
```
