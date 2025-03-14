# 😂 JokeApp

JokeApp is a mobile application that fetches random jokes from the **JokeAPI** and allows users to save their favorite jokes.  
It features **two main screens**:  
✅ **Home Screen** – Displays random jokes with an option to save them as favorites.  
✅ **Favorites Screen** – Lists saved jokes and allows users to remove them.

This app was developed using **React Native** and built with **Expo** for easy deployment.

---

## 📥 Installation & Running the Project

To run the app on your local machine, follow these steps:

### 1️⃣ Clone the repository
```sh
git clone git@gitlab.com:jtierradev1/JokeApp.git
cd JokeApp
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the app
```sh
npx expo start
```
Then, **scan the QR code with the Expo Go app** on your phone to run the application. 📱

---

## 🏗️ Project Structure

```
JokeApp/
│── assets/             # App icons, images, and splash screen
│── components/         # UI components like JokeCard and Header
│── context/            # Context API for managing favorites
│── navigation/         # React Navigation configuration
│── screens/            # Main app screens (Home, Favorites, Welcome)
│── services/           # API service to fetch jokes
│── App.js              # Main application file
│── package.json        # Project dependencies
│── README.md           # Project documentation (this file)
```

---

## 📌 Features

- Fetches random jokes from [JokeAPI](https://sv443.net/jokeapi/v2/)
- Allows saving jokes as favorites
- Favorites are stored using React Context API
- Clean UI with Material Icons for better user experience
- Built-in **help modal** with app information
- Simple navigation using **React Navigation**

---

## 🎯 How to Use the App

1. Open the app, and a **random joke** will be displayed.
2. Tap **"Give me more"** to get a new joke.
3. Tap the ⭐ **star icon** to save a joke as a favorite.
4. Go to **Favorites** tab to view saved jokes.
5. Tap the **star icon** again in the favorites screen to remove a joke.

---

## 📦 Generating the APK (Android Package)

This app was built using **Expo EAS Build** for easy APK generation.

To generate the APK:

1. Install Expo CLI globally:
   ```sh
   npm install -g expo-cli
   ```

2. Run the build command:
   ```sh
   eas build --platform android
   ```

3. Expo will provide a **download link** once the build is complete.

---

## 🚀 Future Improvements

Some possible enhancements for future versions:

- 🌍 **Multi-language support** (currently only English).
- 🔎 **Search jokes by category** (Programming, Christmas, etc.).
- 🎨 **Dark mode support** for better UX.

---

## 👨‍💻 Author

- **Developer:** Jaime Tierra (JTierraDev)
- 📅 **Release Date:** March 14, 2025
- ✉️ **Contact:** [jtierra.dev@outlook.com](mailto:jtierra.dev@outlook.com)
- 🌐 **GitLab Repository:** [JokeApp](https://gitlab.com/jtierradev1/JokeApp)

---

## 🛠️ Technologies Used

| Tech Stack  | Description |
|-------------|------------|
| **React Native** ⚛️ | Mobile app development framework |
| **Expo** 🚀 | Simplifies deployment and development |
| **React Navigation** 🔄 | Handles navigation between screens |
| **JokeAPI** 😂 | Fetches jokes from an open-source API |
| **Context API** 📂 | Manages global state for favorites |
