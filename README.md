# Recipe App - First Module
 - This is the Second React-Native app I created with Expo following the course `React Native - The Practical Guide [2021 Edition]` on Udemy by Maximilian Schwarzmüller.
 - This app is about proper screen navigation using `react-navigation`.
 - The first step was to create multiple screens and learn how to navigate through them via a self created navigator component: `MealsNavigator.js`. We also created dummy-data using a model via a JavaScript class.
 - The second step was to add default styles, along with the `Platform` API to create device specific styles, to each navigation header.
 - The third step was to learn how to pass data between screens, inside and outside of rendered components, via the navigation params. We also added `enabledScreens` from `react-native-screens` for possible future performance (forcing native UI elements where possible).
 - The fourth step was to create details for each meal using a model via a JavaScript class. We added more dummy-data to be used. We added navigation to the meal details from each meal item so now we have `Categories -> Meals -> Meal Details`. We also added a custom header button using `react-navigation-header-buttons` and added a favorite icon in the meal details for future use.
 - The fifth step was to create a tab navigation stack within the application. We also created another navigation stack just for favorites and nested both stacks within the tab navigation.
 - The sixth step was to add drawer navigation and nest the the rest of the navigation stack inside of it. I Also added a status bar height check to fix issues of the drawer going into the status bar as it seems a different version of the package was used in the course that didn't have this issue.
 - The final step was to add actual data inside `MealDetailScreen` and add togglable options in `FiltersScreen`. Also added a save button inside the header in `FiltersScreen` and was able to pass the state of the options to the save icon using state, `useEffect`, and `useCallback`. Created custom components for styling in both `MealDetailScreen` and `FiltersScreen` but left them inside those components as they were only used there.
# Recipe App - Second Module
 - COURSE IS ONGOING
