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
 - This module for the app is about managing state across multiple screens using `Redux`.
 - The first step was to add `Redux` to the project and set up a `store`. We then created an `action` and `reducer` to be able to manage `Meals`, `Favorite Meals`, and `Filtered Meals`. We then replaced the use of `Meals` in the app and instead pointed it to the `Redux store`. We then added functionality to manage `Favorite Meals` using `Redux`.
 - The second step was to update the favorites button to show if the meal was a favorite meal or not using `redux`. We also added some fallback text to inform the user they didn't have any favorites at that time.
 - The last step was to add logic to filter meals using `redux`. We also added fallback text if there was no meals in a category due to the filtering.
# Some notes
 - This app is complete. 
 - There was no focus on make this app responsive (smaller screens, etc).
 - The module was mostly to teach different styles of navigation `(screen, tab, and drawer)`, state managment using `Redux`, and how to manipulate and use state through the app and through navigation options.

