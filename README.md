# Kirill Panfilov CV Landing

Статический сайт-визитка для GitHub Pages.

## Что внутри

- Главная страница: краткое позиционирование, опыт, подход, кейсы, публикации, контакты.
- Отдельные страницы кейсов:
  - `/cases/ispring-learn/`
  - `/cases/stream-telecom/`
  - `/cases/sendsay/`
- Контент кейсов лежит в `src/content/cases`.
- Контакты и навигация лежат в `src/data/site.ts`.
- Публикации и артефакты лежат в `src/data/artifacts.ts`.

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

Сайт настроен под публикацию из репозитория `kirill-panfilov-cv`:

```text
https://kripanker-tech.github.io/kirill-panfilov-cv/
```

Публикация выполняется через `.github/workflows/deploy.yml`.
