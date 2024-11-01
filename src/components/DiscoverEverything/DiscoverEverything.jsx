import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "baby",
    items: [
      "baby clothes", "rompers", "box suits", 
      "sleeping bags for babies", "baby pajamas", 
      "newborn clothes", "hydrophilic cloths"
    ],
  },
  {
    title: "child",
    items: [
      "children's clothing", "girls clothes", "girls underwear", 
      "girls pajamas", "boys clothes", "boys underwear", "boys pajamas"
    ],
  },
  {
    title: "ladies",
    items: [
      "women's clothing", "shirts and tops for women", "lingerie", 
      "bras", "tights", "pajamas for women", "camisoles for women"
    ],
  },
  {
    title: "Gentlemen",
    items: [
      "menswear", "men's socks", "men's pajamas", 
      "t-shirts for men", "underwear for men", 
      "boxer shorts for men", "shirts for men"
    ],
  },
  {
    title: "living and sleeping",
    items: [
      "duvet covers", "fitted sheets", "custom made curtains", 
      "garden supplies", "storage", "home accessories", "candles"
    ],
  },
  {
    title: "cake, food and drinks",
    items: ["pastry", "cake", "photo cake", "treats", "coffee", "wine", "beer"],
  },
  {
    title: "leisure and office",
    items: [
      "school supplies", "agendas", "calendars", 
      "planners", "notebooks", "craft supplies", "photo albums"
    ],
  },
  {
    title: "cooking and dining",
    items: [
      "crockery", "specifications", "tea towels", 
      "kitchen appliances", "pans", "casserole dishes", "baking tins"
    ],
  },
  {
    title: "party and gift",
    items: [
      "party supplies", "party decoration", "giveaways", 
      "gifts", "gift for her", "gift for him", "toys"
    ],
  },
  {
    title: "beautiful and healthy",
    items: [
      "make up", "foundation", "mascara", 
      "jugs", "sunburn", "vitamins", "intimacy"
    ],
  },
  {
    title: "toys",
    items: [
      "children's toys", "baby toys", "educational toys", 
      "wooden toys", "outdoor toys", "bath toys", "hugs"
    ],
  },
  {
    title: "photo service",
    items: [
      "create photo book", "print photos", "print posters", 
      "photo gifts", "wall decoration", "photo on canvas", "t-shirt printing"
    ],
  },
];

const DiscoverEverything = () => {
  return (
    <div className="p-8 bg-white text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">discover everything</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold text-lg">{category.title}</h3>
            <ul className="space-y-1">
              {category.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-black transition-colors">
                  <Link href={`/${category.title}/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverEverything;
