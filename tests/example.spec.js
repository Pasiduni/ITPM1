const { test, expect } = require('@playwright/test');

test('Convert Singlish to Sinhala - 1 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama paadam karanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම');
});

test('Convert Singlish to Sinhala - 2 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('naetum puhuNu venna yanavaa, taavaeyi puhuNu viim valin passee naatYA uLela balanna yanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('යනවා');
});

test('Convert Singlish to Sinhala - 3 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('nivaadu kaalaya nisaa potha nidhahasee kiyevvaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('නිවාඩු');
});

test('Convert Singlish to Sinhala - 4 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('oyaata sammuKa pariikShaNaya thiyenne kavadhaadha?');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('ඔයාට');
});

test('Convert Singlish to Sinhala - 5', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('vahaama dhuvanna.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('දුවන්න');
});

test('Convert Singlish to Sinhala - 6 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama rasakaevili hadhanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('හදනවා');
});

test('Convert Singlish to Sinhala - 7 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama dhaen redhi mahannee naee.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම');
});

test('Convert Singlish to Sinhala - 8 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('aayuSha bohoo veevaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('ආයුෂ');
});

test('Convert Singlish to Sinhala - 9 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('api ikmanata beheth ganna yamu.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('යමු');
});

test('Convert Singlish to Sinhala - 10 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('hari, mama ikmanata ennam.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('ඉක්මනට');
});

test('Convert Singlish to Sinhala - 11 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('karuNaakaralaa mata paevaruma kiyala dhenna puluvandha?');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('කරුණාකරලා මට පැවරුම කියල දෙන්න පුලුවන්ද?');
});

test('Convert Singlish to Sinhala - 12 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('thava aDApan ethakota okkoma hari.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('තව අඬපන් එතකොට ඔක්කොම හරි');
});

test('Convert Singlish to Sinhala - 13 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('adha rasneyi.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('අද රස්නෙයි.');
});

test('Convert Singlish to Sinhala - 14 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('ahagena inna.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('අහගෙන ඉන්න.');
});

test('Convert Singlish to Sinhala - 15 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama gedhara athu gaanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම ගෙදර අතු ගානවා.');
});

test('Convert Singlish to Sinhala - 16 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('Mama 2026/01/30, 9:45 AM venakota Rs. 2,500 pay karalaa 5 km travel karanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම 2026/01/30, 9:45 AM වෙනකොට Rs. 2,500 pay කරලා 5 km travel කරනවා.');
});

test('Convert Singlish to Sinhala - 17 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('dhuvanna dhuvanna.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('දුවන්න දුවන්න.');
});

test('Convert Singlish to Sinhala - 18 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('ovun iiye lassanata sindhuva gaayanaa kalaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('ඔවුන් ඊයෙ ලස්සනට සින්දුව ගායනා කලා.');
});

test('Convert Singlish to Sinhala - 19 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama paththara vikuNanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම පත්තර විකුණනවා.');
});

test('Convert Singlish to Sinhala - 20 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama heta rachanaa tharagayata sahaBhaagi venavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම හෙට රචනා තරගයට සහභාගි වෙනවා.');
});

test('Convert Singlish to Sinhala - 21 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mata eeka balanna baee.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මට ඒක බලන්න බෑ.');
});

test('Convert Singlish to Sinhala - 22 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('ballaa hapanna hadhannee.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('බල්ලා හපන්න හදන්නේ.');
});

test('Convert Singlish to Sinhala - 23 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('niveedhikaavoo mee vaedasatahanata innavadha?');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('නිවේදිකාවෝ මේ වැඩසටහනට ඉන්නවද?');
});

test('Convert Singlish to Sinhala - 24 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('puluvannam mata eeka liyalaa dhenna.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('පුලුවන්නම් මට ඒක ලියලා දෙන්න');
});

//Failed Test Cases
test('Convert Singlish to Sinhala - 25 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('Mama LinkedIn eken aluth dheYak igena gannavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('පමම LinkedIn එකෙන් අලුත් දෙYඅක් ඉගෙන ගන්නවා.');
});

test('Convert Singlish to Sinhala - 26 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('nQgii hostel innavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('නQගී hostel ඉන්නවා..');
});

test('Convert Singlish to Sinhala - 27 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('Mama ASAP report eka submit karanawaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම ASAP report එක submit කරනwආ..');
});

test('Convert Singlish to Sinhala - 28 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('Alert message eKa run venakota pop-up venavaa—error: 404!');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('Alert message එඛ run වෙනකොට පොප්-up වෙනවා—error: 404!..');
});

test('Convert Singlish to Sinhala - 29 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mamamalvalatavathuradaanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මමමල්වලටවතුරඩානවා..');
});

test('Convert Singlish to Sinhala - 30 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('adoo karana vaedee hariyata karaPanko baQQ.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('අඩෝ කරන වැඩේ හරියට කරඵන්කො බං..');
});

test('Convert Singlish to Sinhala - 31 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('mama giya sathiye iridhaa dhaLadhaa maaligaavata yaaluvath ekka giyaa. ehidhii api aththu dhennek dhaekkaa.Edhaa senaga godaak hitiyaa.api pichcha mal puujaa kaLaa.mata mathakayi edhaa hoDHAta ira paayapu lassana nivaadu dhavasak.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('මම ගිය සතියෙ ඉරිදා දළදා මාලිගාවට යාලුවත් එක්ක ගියා. එහිදී අපි අත්තු දෙන්නෙක් දැක්කා.එදා සෙනග ගොඩාක් හිටියා.අපි පිච්ච මල් පූජා කළා.මට මතකයි එදා හොඳට ඉර පායපු ලස්සන නිවාඩු දවසක්..');
});

test('Convert Singlish to Sinhala - 32 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('Oya github ekata push karanna dhannavadha?. mama dhanne naene.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('ඔය ගිතුබ් එකට push කරන්න දන්නවද?. මම දන්නෙ නැනෙ..');
});

test('Convert Singlish to Sinhala - 33 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('vibhaagayata suba paethum.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('පවිබ්හාගයට සුබ පැතුම්.');
});

test('Convert Singlish to Sinhala - 34 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('vishvavidhYaalayee upaadhi pradhaanoothsavaya kavadhadha?');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('විශ්වවිද්‍යාලයේ උපාදි ප්‍රදානෝත්සවය කවදද?');
});

test('Convert Singlish to Sinhala - 35 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea');
  await input.fill('course web ekee password eka vaeradhi nam "password is incorrect" kiyala pennanavaa.');
  await page.waitForTimeout(3000);

  const output = page.locator('body');
  await expect(output).toContainText('course web එකේ password එක වැරදි නම් "password ඉස් incorrect" කියල පෙන්නනවා.');
});