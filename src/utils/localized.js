// بيرجّع النص بالعربي لو اللغة عربي والحقل موجود (name_ar) وإلا بيرجّع الإنجليزي
export function localized(item, field, lang) {
  if (!item) return "";
  if (lang && lang.startsWith("ar") && item[`${field}_ar`]) return item[`${field}_ar`];
  return item[field];
}
