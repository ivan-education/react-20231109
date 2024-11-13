# React + TypeScript + Vite

## Init Project:

Установка проекта на React Typescript с пом. Vite:

1. `npm create vite@latest`
2. название папки проекта (либо '.' для текущий папки)
3. Выбрать `typescript + SWC`
4. cd folder
5. `pnpm install` (или `npm install`)

## Run the project

### develop

`npm run dev` - для запуска сервера c React
`npm run start-server` - для запуска сервера с API в `./simple_api`

### production

`npm run build` и затем `npm run preview` - для запуска сервера c React
`npm run start-server` - для запуска сервера с API в `./simple_api`

Для загрузки данных используется Express сервер в папке `./simple_api` с данными по ресторанам, блюдам и т.д.
Деплоил проект на Beget VPS с Node.js (см. соотв.секцию). Для этого были созданы два файла `.env` и `.env.production`. При дев сборке `npm run dev` Vite использует `VITE_API_URL` из файла `.env` - урл для АПИ (достается в коде как `import.meta.env.VITE_API_URL`, где в имени `VITE_` префикс важен). Тогда для данных из API нужно будет запустить локальный Express: `npm run start-server`.

При сборке на VPS используется прод сборка `npm run build` и затем `npm run preview`, где Vite использует `VITE_API_URL` из файла `.env.production`.

Для тестирования прод сборки локально поменять `VITE_API_URL` в файле `.env.production` на localhost (значение из `.env`). Более подробно см. https://vitejs.dev/guide/env-and-mode.html

## Deploy to VPS

см. документ `/Users/ibursky/Documents/programming/Deploy to VPS.odt` (пункты "Как работать с VPS", "Как запустить простое Node приложение на VPS", "Как запустить React на VPS")

---

## Ниже текст по умолчанию:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
