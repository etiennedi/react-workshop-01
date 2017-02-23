# Lessons

## Lesson 1

- Implement a Likes component
  - with a likes prop
  - shows a BlueLike component when likes > 0
  - shows a GreyLike component when likes <= 0
- For BlueLike / GreyLike:
  - renders a button with a specific background-color
- Add the Likes component to the FirstComponent twice
  - once with likes > 0
  - once without likes

## Lesson 2

- Remove the 'likes' prop from Likes component
- Add a likes state which is initially 0 (Hint: You need a stateful component now)
- Add a click-handler which increases the state
- Pass the click-handler to Grey/Blue Like Button
- Make sure the Button components pass the click handler to the html element
- Display the amount of likes inside the Button text
