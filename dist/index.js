"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_extra_1.default.launch({ headless: false });
    const page = yield browser.newPage();
    yield page.goto("https://fill.dev/form/credit-card-simple");
    let selector_pay_btn = "button[class='btn btn-primary']";
    let selector_name = "input[id='cc-name']";
    yield page.waitForSelector(selector_name);
    let selector_card_type = "select[id='cc-type']";
    let selector_card_number = "input[id='cc-number']";
    let selector_cvv = "input[id='cc-csc']";
    let selector_expiry_month = "select[id='cc-exp-month']";
    let selector_expiry_year = "select[id='cc-exp-year']";
    yield page.type(selector_name, "Abhinav Raj");
    yield page.select(selector_card_type, "visa");
    yield page.type(selector_card_number, "4242424242424242");
    yield page.type(selector_cvv, "234");
    yield page.select(selector_expiry_month, "1");
    yield page.select(selector_expiry_year, "2020");
    yield page.click(selector_pay_btn);
});
main();
