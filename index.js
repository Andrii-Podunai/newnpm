// Імпорт необхідних бібліотек з Playwright
const { chromium } = require("playwright");

// Асинхронна функція для запуску браузера, відкриття сторінки та зроблення скріншоту
async function run() {
  // Запуск браузера
  const browser = await chromium.launch();

  // Створення нової сторінки (вкладки)
  const page = await browser.newPage();

  // Відкриття веб-сторінки
  await page.goto("https://example.com");

  // Зроблення скріншоту сторінки і збереження у файл
  await page.screenshot({ path: "example.png" });

  // Закриття браузера
  await browser.close();
}

// Виклик функції run
run().catch((err) => console.error(err));
