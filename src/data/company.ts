export const company = {
  name: "Kalimates Private Limited",
  brand: "Kalimates",
  phone: "96338 06333",
  phoneTel: "+919633806333",
  email: "contact@kalimates.in",
  website: "https://www.kalimates.in",
  address: {
    line1: "4/1922, Varikkodan, Market road 4th",
    line2: "Kottakkal, Tirur, Malappuram — 676503",
    line3: "Kerala, India",
    full: "4/1922, Varikkodan, Market road 4th, Kottakkal, Tirur, Malappuram- 676503, Kerala",
  },
  leadership: [
    { name: "Adhil NC", role: "Managing Director & CEO" },
    { name: "Ajmal Varikodan", role: "Director & CFO" },
  ],
  products: [
    {
      name: "Picknick",
      summary:
        "Find picnic spots near you — discover outdoor places for gatherings, day trips, and easy escapes into nature.",
      focus: "Picnic discovery app",
    },
  ],
} as const;
