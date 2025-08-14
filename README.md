# 🎬 Movie Search App

An application for searching movies by title. Adaptive layout, client-side routing, and dynamic pages (movie details, cast, reviews).

## ⚙️ Technologies

🖥 Framework & Core
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)  
[![React DOM](https://img.shields.io/badge/React_DOM-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)  
[![React Router DOM](https://img.shields.io/badge/React_Router_DOM-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)

#### 🛠 Utils

[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat)](https://axios-http.com/)
[![clsx](https://img.shields.io/badge/clsx-2F4F4F?style=flat)](https://github.com/lukeed/clsx)

#### 🎨 UI & Styling

[![modern-normalize](https://img.shields.io/badge/modern--normalize-000000?style=flat)](https://github.com/sindresorhus/modern-normalize)  
[![CSS Modules](https://img.shields.io/badge/CSS%20Modules-264de4?style=flat&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

## 📦 Installation

```bash
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
npm install
npm run dev
```

If the app uses The Movie Database (TMDB) API, create a .env file in the project root:

```ini
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can get an API key at https://www.themoviedb.org/.

## 💡 Usage

Pages & Routes
/ — Home: trending/popular movies list.

/movies — Search: search field + results list (persists query in URL).

/movies/:movieId — Movie Details: poster, title, score, overview, genres; links to nested pages.

/movies/:movieId/cast — Cast: movie cast list (lazy-loaded).

/movies/:movieId/reviews — Reviews: user reviews (lazy-loaded).

Features
Search by movie title with results list.

URL-based state (keeps your search query on refresh and navigation).

Lazy loading for nested routes (Cast/Reviews).

Responsive design for mobile/desktop.

Back navigation (preserves previous search state).

### 🔌 API

Data source: The Movie Database (TMDB)
Docs: https://developer.themoviedb.org/reference/intro/getting-started

#### Typical endpoints used:

Search Movies: /search/movie

Trending/Popular: /trending/movie/day or /movie/popular

Movie Details: /movie/{movie_id}

Credits (Cast): /movie/{movie_id}/credits

Reviews: /movie/{movie_id}/reviews

### 🚀 Scripts

```bash

npm run dev # start dev server
npm run build # production build
npm run preview # locally preview the production build
```

#### 👨‍💻 Author

Diana Zinevych — [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diana-zinevych/)

#### 🔗 Demo

Deployed: https://goit-react-hw-05-gold-five.vercel.app/
