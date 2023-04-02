# React News App
This is a React-based news application that fetches data from the NewsAPI.org API and displays news articles in the form of cards. Each card contains a small photo, a brief description, a link to the full article, and the date and time the article was published.

The application uses the React-DOM-Router to allow users to switch between different news categories, such as business, sports, technology, and entertainment. The application also includes an infinite scroll bar React component that allows users to keep scrolling through articles without having to manually load new pages.

## Getting Started
To run this application on your local machine, follow these steps:

1. Clone the repository from GitHub:
```bash
git clone https://github.com/yourusername/ReactNewsApp.git
```

2. Navigate to the project directory:
```bash
cd ReactNewsApp
```

3. Install the necessary dependencies:
```npm install```

4. Obtain an API key from NewsAPI.org and add it to a .env.local file in the root directory of the project:
```makefile
REACT_APP_API_KEY=yourapikeyhere
```

5. Start the development server:
```bash
npm start
```

6. Open your web browser and navigate to [http://localhost:3000] to view the application.


## How to Use
Once the application is running, you can switch between news categories by clicking on the appropriate link in the navigation bar. You can also scroll through articles endlessly using the infinite scroll bar.

Each news article is displayed in a card that includes a small photo, a brief description, a link to the full article, and the date and time the article was published.

## Contributing
Contributions to this project are welcome. If you find a bug or have a feature request, please create an issue on GitHub. If you would like to contribute code to the project, please fork the repository and create a pull request.