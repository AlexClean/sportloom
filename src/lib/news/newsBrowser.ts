import { chromium } from "playwright";

export async function resolveOriginalUrl(googleRssUrl: string) {
  // Запускаем браузер в фоновом режиме (headless: true)
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // 1. Переходим по зашифрованной ссылке из RSS
    await page.goto(googleRssUrl);

    // 2. Ждем, пока URL изменится и больше не будет содержать домен Google.
    // Это критически важно, так как редирект происходит через JS внутри страницы.
    await page.waitForURL((url) => !url.href.includes('google.com'), {
      timeout: 10000 // таймаут 10 секунд на случай долгого ответа целевого сайта
    });

    // 3. Получаем финальный чистый URL оригинального сайта
    const originalUrl = page.url();

    // 4. Получаем HTML-код уже оригинальной страницы
    const content = await page.content();

    console.log('Оригинальный URL:', originalUrl);
    
    return { originalUrl, content };
  } catch (error) {
    console.error('Ошибка при переходе по ссылке:', error);
  } finally {
    await browser.close();
  }
}