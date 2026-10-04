// أول لينك في كل مجموعة هو الأساسي، ولو مظهرش بيجرب اللي بعده تلقائي
const p = (name) => `/images/${name}`;

// صور Pexels (مجانية)
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

// الصور الأساسية (كل واحدة مستخدمة مرة واحدة بس)
const MAIN = {
  serum:       px(2566853),   // سيروم بين شرايح الخيار
  cream:       "https://images.pexels.com/photos/30979444/pexels-photo-30979444/free-photo-of-minimalist-skincare-product-on-white-plate.jpeg?cs=tinysrgb&dpr=1&w=500",
  sunscreen:   px(11741343),  // زجاجة بيضاء على صينية سودا
  mask:        px(8167115),   // زجاجة بني على حجر
  best1:       "https://images.pexels.com/photos/15569182/pexels-photo-15569182/free-photo-of-bottle-with-a-cosmetic-product.jpeg?cs=tinysrgb&dpr=1&w=500",
  best2:       px(16378450),  // زجاجة صفرا على حرير
  best3:       "https://images.pexels.com/photos/16378447/pexels-photo-16378447/free-photo-of-bottle-of-cosmetic-on-tray.jpeg?cs=tinysrgb&dpr=1&w=500",
  best4:       "https://images.pexels.com/photos/29176565/pexels-photo-29176565/free-photo-of-oranges-and-lotion-bottle-on-white-sheets.jpeg?cs=tinysrgb&dpr=1&w=500",
  best5:       px(11188236),  // زجاجة بيضاء بين ورق أخضر
  cleansers:   px(16378440),  // رغوة غسول + بامب
  serums:      px(15569179),  // سيروم على نبات أخضر
  moisturizers:px(7815016),   // بامب أبيض خلفية بيج
  sunscreens:  px(27544685),  // لوشن أبيض وورقة خضرا
  masks:       px(7795792),   // زجاجة بني على طبق خشب
};

// صور بديلة لو الأساسية ما اشتغلتش
const BK = [
  px(15569180), px(16378448), px(16378444), px(16378445),
  px(16378443), px(15569178), px(15569176), px(16378442), px(11217204),
];
const withBackup = (main, i) => [main, BK[i % BK.length], BK[(i + 4) % BK.length]];

export const IMG = {
  hero: p("hero.jpg"),
  quiz: p("quiz-woman.jpg"),
  offers: {
    serum: withBackup(MAIN.serum, 0),
    cream: withBackup(MAIN.cream, 1),
    sunscreen: withBackup(MAIN.sunscreen, 2),
    mask: withBackup(MAIN.mask, 3),
  },
  best: [MAIN.best1, MAIN.best2, MAIN.best3, MAIN.best4, MAIN.best5].map(withBackup),
  cats: {
    cleansers: withBackup(MAIN.cleansers, 5),
    serums: withBackup(MAIN.serums, 6),
    moisturizers: withBackup(MAIN.moisturizers, 7),
    sunscreens: withBackup(MAIN.sunscreens, 8),
    masks: withBackup(MAIN.masks, 0),
  },
};
