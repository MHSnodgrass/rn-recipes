# Recipe App
 - This is the Second React-Native app I created with Expo following the course `React Native - The Practical Guide [2021 Edition]` on Udemy by Maximilian Schwarzmüller.
 - This app is about proper screen navigation using `react-navigation`.
 - The first step was to create multiple screens and learn how to navigate through them via a self created navigator component: `MealsNavigator.js`. We also created dummy-data using a model via a JavaScript class.
 - The second step was to add default styles, along with the `Platform` API to create device specific styles, to each navigation header.
 - The third step was to learn how to pass data between screens, inside and outside of rendered components, via the navigation params. We also added `enabledScreens` from `react-native-screens` for possible future performance (forcing native UI elements where possible).
 - The fourth step was to create details for each meal using a model via a JavaScript class. We added more dummy-data to be used. We added navigation to the meal details from each meal item so now we have `Categories -> Meals -> Meal Details`. We also added a custom header button using `react-navigation-header-buttons` and added a favorite icon in the meal details for future use.
 - The fifth step was to create a tab navigation stack within the application. We also created another navigation stack just for favorites and nested both stacks within the tab navigation.
 - COURSE IS ONGOING
