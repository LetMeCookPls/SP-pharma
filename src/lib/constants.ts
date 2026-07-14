export const COMPANY_DATA = {
  name: "SP Pharmaceuticals",
  address: "Plot No. 6-B, KIADB Export Promotion Industrial Park I Phase, Ganjimata, Mangalore, Karnataka, 574144",
  phone: "+91 70192 81250",
  whatsapp: "917019281250",
  email: "salessppharmaceuticals18@gmail.com",
  gstin: "29AUCPS5147E1ZG",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Quality", href: "/quality" },
];

export const PRODUCT_CATEGORIES = [
  "Pure Nicotine",
  "Nicotine Sulphate",
  "Nicotine Alkaloids"
];

export const CERTIFICATIONS = [
  "[Certification — e.g. GMP]",
  "[Certification — e.g. ISO 9001]",
  "[Certification — e.g. WHO-GMP]"
];

export const COMPANY_START_YEAR = 2017;

export const COMPANY_STATS = {
  get years() {
    return new Date().getFullYear() - COMPANY_START_YEAR;
  },
  clients: "100+",
};

export const REGULATORY_NOTICE = "SP Pharmaceuticals supplies nicotine and nicotine derivatives to licensed businesses, formulators, and institutional buyers for lawful industrial and pharmaceutical use. [Insert applicable regulatory/export compliance statement — confirm exact wording with legal/compliance counsel before publishing].";
