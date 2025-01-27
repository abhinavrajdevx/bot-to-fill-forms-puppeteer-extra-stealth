import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://fill.dev/form/credit-card-simple");

  let selector_pay_btn = "button[class='btn btn-primary']";
  let selector_name = "input[id='cc-name']";
  await page.waitForSelector(selector_name);
  let selector_card_type = "select[id='cc-type']";
  let selector_card_number = "input[id='cc-number']";
  let selector_cvv = "input[id='cc-csc']";
  let selector_expiry_month = "select[id='cc-exp-month']";
  let selector_expiry_year = "select[id='cc-exp-year']";
  await page.type(selector_name, "Abhinav Raj");
  await page.select(selector_card_type, "visa");
  await page.type(selector_card_number, "4242424242424242");
  await page.type(selector_cvv, "234");
  await page.select(selector_expiry_month, "1");
  await page.select(selector_expiry_year, "2020");
  await page.click(selector_pay_btn);
};

main();
