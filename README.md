Дизайн + Конфигурация + Разработка + тесты (UI-тест[Chromatic])+ CI/CD + Deploy(Netlify ) <br>
Стэк:
TS
Сборщик Vite(pnpm)
Стили SC + Twin macro - мне нравится tailwind, не смог от него отказаться, возможно некоторые решения из=за этого будут овердхед
Состояние ReduxToolKit/Query
Роутинг Routev6
Запросы Axios
Утилиты Lodash
<br>
CI: build, test:unit, test:e2e, lint, type:check,

<hr>
В идеале вынести UI библиотеку вне этого проекта и подключать через link, но для того чтобы не перемещаться между проектами,закинул все в одно

# Drop-in Replacement for [CRA](http://create-react-app.dev/) but powered by [Vite](https://vitejs.dev/)

### Things in CRA, supported here:

- Import SVG's directly as React Component via SVGR
- Unit Testing via Jest & React Testing Library
- ESLint Rules & Prettier
- Tailwind
- Absolute imports within `src` directory

---

### Extra Additions

- Conventional Commits using `Commitlint`
- Run Lint Checks, TS Checks, Formatting & Unit Tests in Pre-commit via `lintstaged` & `husky`

---
https://github.com/uchihamalolan/vite-react-ts