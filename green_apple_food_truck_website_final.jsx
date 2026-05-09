import React from "react";

function GreenAppleLogo({ small = false }) {
  const sizeClass = small ? "h-20 w-40" : "h-[360px] w-full max-w-[640px] md:h-[500px]";

  return (
    <div className={`relative mx-auto flex items-center justify-center ${sizeClass}`} aria-label="Green Apple Gourmet Sandwiches logo">
      <svg viewBox="0 0 1000 780" className="h-full w-full overflow-visible" role="img">
        <defs>
          <radialGradient id="appleBodyGradient" cx="48%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#8fd12a" />
            <stop offset="48%" stopColor="#68b817" />
            <stop offset="100%" stopColor="#3f760f" />
          </radialGradient>
          <linearGradient id="bannerGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#bd1515" />
            <stop offset="50%" stopColor="#a30909" />
            <stop offset="100%" stopColor="#7d0505" />
          </linearGradient>
          <filter id="softShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="7" dy="9" stdDeviation="3" floodColor="#000" floodOpacity="0.38" />
          </filter>
          <filter id="roughShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="6" dy="7" stdDeviation="0" floodColor="#000" floodOpacity="0.95" />
          </filter>
        </defs>

        <g filter="url(#softShadow)">
          <path
            d="M497 166 C419 88 276 98 193 190 C111 282 96 430 132 541 C167 650 263 708 362 706 C420 705 465 681 501 654 C537 681 582 705 640 706 C739 708 835 650 870 541 C906 430 891 282 809 190 C726 98 583 88 506 166 C503 169 500 169 497 166 Z"
            fill="none"
            stroke="#050505"
            strokeWidth="50"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M497 166 C419 88 276 98 193 190 C111 282 96 430 132 541 C167 650 263 708 362 706 C420 705 465 681 501 654 C537 681 582 705 640 706 C739 708 835 650 870 541 C906 430 891 282 809 190 C726 98 583 88 506 166 C503 169 500 169 497 166 Z"
            fill="url(#appleBodyGradient)"
            stroke="#111"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <path
          d="M480 150 C453 98 468 45 530 39 C556 37 579 49 599 68 C563 64 540 78 531 108 C524 132 531 155 547 176 C520 176 498 169 480 150 Z"
          fill="#050505"
        />
        <path
          d="M406 177 C452 204 523 208 586 177"
          fill="none"
          stroke="#050505"
          strokeWidth="23"
          strokeLinecap="round"
        />

        <path
          d="M838 252 C889 366 874 503 819 608"
          fill="none"
          stroke="#ffcf23"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M845 259 C883 366 867 495 825 590"
          fill="none"
          stroke="#fff6b8"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {!small && (
          <>
            <text
              x="500"
              y="310"
              textAnchor="middle"
              fontFamily="'Baloo Bhai 2', 'Arial Rounded MT Bold', system-ui, sans-serif"
              fontSize="138"
              fontWeight="800"
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
              paintOrder="stroke"
            >
              Green
            </text>
            <text
              x="500"
              y="642"
              textAnchor="middle"
              fontFamily="'Baloo Bhai 2', 'Arial Rounded MT Bold', system-ui, sans-serif"
              fontSize="142"
              fontWeight="800"
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
              paintOrder="stroke"
            >
              Apple
            </text>
          </>
        )}

        <g filter="url(#softShadow)">
          <rect x="34" y="350" width="932" height="142" rx="48" fill="url(#bannerGradient)" stroke="#650606" strokeWidth="8" />
          <path d="M70 375 H930" stroke="#d02a2a" strokeWidth="4" opacity="0.55" />
        </g>

        <text
          x="500"
          y="443"
          textAnchor="middle"
          fontFamily="Impact, 'Arial Black', 'Trebuchet MS', sans-serif"
          fontSize={small ? "66" : "92"}
          fontStyle="italic"
          fontWeight="900"
          letterSpacing="1"
          fill="#ffc91f"
          stroke="#111"
          strokeWidth="5"
          paintOrder="stroke"
          transform={small ? "skewX(-8)" : "skewX(-8)"}
          filter="url(#roughShadow)"
        >
          GOURMET SANDWICHES
        </text>

        <text
          x="500"
          y="438"
          textAnchor="middle"
          fontFamily="Impact, 'Arial Black', 'Trebuchet MS', sans-serif"
          fontSize={small ? "66" : "92"}
          fontStyle="italic"
          fontWeight="900"
          letterSpacing="1"
          fill="#ffd744"
          stroke="#fff0a8"
          strokeWidth="1"
          paintOrder="stroke"
          transform={small ? "skewX(-8)" : "skewX(-8)"}
        >
          GOURMET SANDWICHES
        </text>
      </svg>
    </div>
  );
}

const menuSections = [
  {
    title: "Signature Sandwiches",
    items: [
      {
        name: "The Green Apple",
        badge: "Signature",
        price: "TBD",
        description:
          "Warm, tender turkey paired with applewood smoked bacon, fresh green apple slices, melted smoked gouda, and sautéed red onions, finished with smooth cream cheese on toasted sourdough.",
      },
      {
        name: "The Gobbler",
        badge: "Turkey",
        price: "TBD",
        description:
          "Warm, roasted turkey layered with applewood smoked bacon, melted provolone cheese, fresh tomato slices, and savory sautéed onions, topped with zesty cilantro mayo, all on toasted sourdough.",
      },
      {
        name: "The Green Apple Club",
        badge: "Club",
        price: "TBD",
        description:
          "A hearty double-decker with tender ham, roasted turkey, and crispy applewood smoked bacon, complemented by Swiss cheese, crisp lettuce, juicy tomato, and fresh onion, finished with zesty cilantro mayo and a hint of mustard, all on toasted marbled rye.",
      },
      {
        name: "Uncle Victor’s Sassy Roast Beef",
        badge: "Spicy",
        price: "TBD",
        description:
          "Savor hot roast beef seasoned with Cajun spices, paired with sautéed onions, crisp lettuce, and juicy tomato, topped with melted Monterey Jack, smoky BBQ sauce, and a zesty chipotle secret sauce, all served on a toasted Kaiser roll.",
      },
      {
        name: "The Pastrami Reuben",
        badge: "Classic",
        price: "TBD",
        description:
          "Hot pastrami layered with tangy cooked sauerkraut and melted Swiss cheese, drizzled with spicy Thousand Island dressing, all nestled on warm toasted marbled rye.",
      },
      {
        name: "Chicken Cordon Bleu",
        badge: "Warm",
        price: "TBD",
        description:
          "Warm, seasoned chicken layered with savory ham and melted Swiss cheese, complemented by honey mustard and mayo, all nestled on a toasted Kaiser roll.",
      },
      {
        name: "Santa Fe Chicken Wrap",
        badge: "Wrap",
        price: "TBD",
        description:
          "Cajun-spiced chicken, sautéed onions, melted Monterey Jack, crisp lettuce, and juicy tomato, all drizzled with bold chipotle sauce, wrapped in a warm tomato basil tortilla.",
      },
      {
        name: "The Italian",
        badge: "Italian",
        price: "TBD",
        description:
          "A savory combination of sliced salami and ham, melted provolone, crisp lettuce, fresh tomato, and thinly sliced onions, drizzled with balsamic vinaigrette and mayo on a toasted Kaiser roll.",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Kettle Chips",
        badge: "Side",
        price: "TBD",
        description: "Crisp kettle chips served as the perfect quick side for any sandwich or wrap.",
      },
      {
        name: "Seasonal Side",
        badge: "Rotating",
        price: "TBD",
        description: "A rotating side built around seasonal ingredients, event needs, and service speed.",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Bottled Drinks",
        badge: "Cold",
        price: "TBD",
        description: "Cold bottled sodas, tea, lemonade, and water for fast lunch and event service.",
      },
      {
        name: "Combo Upgrade",
        badge: "Value",
        price: "TBD",
        description: "Add chips and a drink to any sandwich or wrap.",
      },
    ],
  },
  {
    title: "Specials",
    items: [
      {
        name: "Weekly Feature Sandwich",
        badge: "Limited",
        price: "TBD",
        description: "A rotating special announced on the truck, website, and social media pages.",
      },
      {
        name: "Event Menu",
        badge: "Catering",
        price: "Quote",
        description: "A streamlined menu package designed for festivals, private events, school events, and corporate lunches.",
      },
    ],
  },
];

const routeStops = [
  {
    day: "Monday",
    area: "Ringgold, GA",
    time: "11:00 AM - 2:00 PM",
    location: "Catoosa County lunch stop / business district",
    note: "Office lunch service and quick pickup orders.",
    map: "https://www.google.com/maps/search/Ringgold+GA",
  },
  {
    day: "Tuesday",
    area: "Fort Oglethorpe, GA",
    time: "11:00 AM - 2:00 PM",
    location: "Battlefield Parkway / retail corridor",
    note: "Lunch service near shopping, medical, and office traffic.",
    map: "https://www.google.com/maps/search/Fort+Oglethorpe+GA+Battlefield+Parkway",
  },
  {
    day: "Wednesday",
    area: "East Ridge, TN",
    time: "11:00 AM - 2:00 PM",
    location: "Camp Jordan / East Ridge business area",
    note: "Watch social media for dinner pop-ups and special events.",
    map: "https://www.google.com/maps/search/Camp+Jordan+East+Ridge+TN",
  },
  {
    day: "Thursday",
    area: "Chattanooga, TN",
    time: "11:00 AM - 2:30 PM",
    location: "UTC / downtown Chattanooga lunch route",
    note: "Built for students, office workers, and downtown lunch crowds.",
    map: "https://www.google.com/maps/search/UTC+Chattanooga+TN",
  },
  {
    day: "Friday",
    area: "Ooltewah / Hamilton County, TN",
    time: "11:00 AM - 2:00 PM / 5:00 PM - 8:00 PM",
    location: "Corporate parks, schools, and evening pop-ups",
    note: "Dinner route may rotate based on bookings and weather.",
    map: "https://www.google.com/maps/search/Ooltewah+TN",
  },
  {
    day: "Saturday",
    area: "Catoosa + Hamilton County Events",
    time: "Event hours vary",
    location: "Festivals, schools, markets, and private events",
    note: "Book early for weekend events and festival dates.",
    map: "https://www.google.com/maps/search/Catoosa+County+GA+events",
  },
];

const serviceAreas = [
  "Ringgold",
  "Fort Oglethorpe",
  "Catoosa County",
  "Chattanooga",
  "East Ridge",
  "Ooltewah",
  "Red Bank",
  "Hamilton County",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodTruck",
  name: "Green Apple Gourmet Sandwiches",
  description:
    "Green Apple Gourmet Sandwiches is a mobile food truck serving gourmet sandwiches in Catoosa County, Georgia and Hamilton County, Tennessee.",
  servesCuisine: ["Gourmet Sandwiches", "American", "Food Truck"],
  areaServed: serviceAreas,
  telephone: "+1-706-555-0125",
  email: "hello@greenapplefoodtruck.com",
  url: "https://greenapplefoodtruck.com",
  sameAs: [
    "https://www.facebook.com/greenapplefoodtruck",
    "https://www.instagram.com/greenapplefoodtruck",
  ],
};

function ButtonLink({ href, children, variant = "green", external = false }) {
  const styles = {
    green: "bg-[#3f760f] text-white shadow-[0_7px_0_#152807] hover:bg-[#315f0b]",
    yellow: "bg-[#f4c21d] text-[#211400] shadow-[0_7px_0_#9b6400] hover:bg-[#ffd447]",
    red: "bg-[#a80f0f] text-[#ffd447] shadow-[0_7px_0_#4f0707] hover:bg-[#c51515]",
    cream: "bg-[#fff7d6] text-[#233111] shadow-[0_7px_0_#96b75a] hover:bg-white",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl border-2 border-[#111] px-6 py-3 text-center text-base font-black uppercase tracking-wide transition active:translate-y-1 ${
        styles[variant] || styles.green
      }`}
    >
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={light ? "text-white" : "text-[#18220c]"}>
      <p className={`text-sm font-black uppercase tracking-[0.25em] ${light ? "text-[#f4c21d]" : "text-[#5d8f1a]"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">{title}</h2>
      {description && <p className={`mt-5 max-w-3xl text-lg leading-8 ${light ? "text-white/80" : "text-[#4a5736]"}`}>{description}</p>}
    </div>
  );
}

function PhotoBox({ label }) {
  return (
    <div className="rounded-[2rem] border-4 border-[#111] bg-white p-4 shadow-[10px_10px_0_#a80f0f]">
      <div className="flex aspect-square items-center justify-center rounded-[1.3rem] bg-[radial-gradient(circle,_#fffbd8,_#dceca6)] p-5 text-center text-sm font-black uppercase tracking-wide text-[#3f760f]">
        Photo placement: {label}
      </div>
    </div>
  );
}

function MenuCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border-4 border-[#111] bg-[#fff7d6] shadow-[10px_10px_0_#c9df83] transition hover:-translate-y-1 hover:shadow-[12px_12px_0_#f4c21d]">
      <div className="flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_center,_#fffde8,_#d9eca1_55%,_#9ebe43)] p-5">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#111] bg-white text-3xl shadow-[5px_5px_0_#a80f0f]">🥪</div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#355f10]">Food photo</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black leading-tight text-[#345f10]">{item.name}</h3>
          <span className="shrink-0 rounded-full border-2 border-[#111] bg-[#f4c21d] px-3 py-1 text-sm font-black text-[#211400] shadow-[3px_3px_0_#111]">
            {item.price}
          </span>
        </div>
        <p className="mt-3 text-base leading-7 text-[#44522e]">{item.description}</p>
        <span className="mt-5 inline-flex rounded-full border-2 border-[#111] bg-[#a80f0f] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#f4c21d]">
          {item.badge}
        </span>
      </div>
    </article>
  );
}

function ContactInput({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border-2 border-[#111] bg-white px-4 py-3 font-bold text-[#18220c] outline-none focus:ring-4 focus:ring-[#f4c21d]"
    />
  );
}

export default function GreenAppleFoodTruckWebsite() {
  return (
    <main className="min-h-screen bg-[#fff7d6] text-[#18220c]" style={{ fontFamily: "'Baloo Bhai 2', 'Arial Rounded MT Bold', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .splash-bg {
          background:
            radial-gradient(circle at center, rgba(255,255,235,.95), rgba(229,242,174,.82) 38%, rgba(141,179,48,.35) 70%),
            radial-gradient(circle at 14% 22%, #9fbd4e 0 4px, transparent 5px),
            radial-gradient(circle at 80% 18%, #9fbd4e 0 6px, transparent 7px),
            radial-gradient(circle at 22% 78%, #9fbd4e 0 5px, transparent 6px),
            linear-gradient(135deg, #d9ec9d, #fff7d6 42%, #c6df82);
        }
      `}</style>

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

      <header className="sticky top-0 z-50 border-b-4 border-[#111] bg-[#fff7d6]/95 shadow-md backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <GreenAppleLogo small />
            <span className="hidden text-2xl font-black leading-none text-[#3f760f] sm:block">Green Apple</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-black uppercase tracking-wide md:flex">
            <a href="#menu" className="hover:text-[#a80f0f]">Menu</a>
            <a href="#route" className="hover:text-[#a80f0f]">Route</a>
            <a href="#catering" className="hover:text-[#a80f0f]">Catering</a>
            <a href="#social" className="hover:text-[#a80f0f]">Social</a>
            <a href="#contact" className="hover:text-[#a80f0f]">Contact</a>
          </div>
          <ButtonLink href="#book" variant="red">Book Us</ButtonLink>
        </nav>
      </header>

      <section id="home" className="splash-bg relative overflow-hidden border-b-4 border-[#111]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-[1fr_.95fr] md:px-8 md:py-24">
          <div>
            <p className="inline-flex rounded-full border-2 border-[#111] bg-white/80 px-4 py-2 text-sm font-black uppercase tracking-wide text-[#3f760f] shadow-[5px_5px_0_#a80f0f]">
              Serving Catoosa County, GA + Hamilton County, TN
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[.95] text-[#17220c] md:text-7xl">
              Bold gourmet sandwiches with a Green Apple twist.
            </h1>
            <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-[#3d4c28]">
              Fresh, stacked sandwiches rolling through Ringgold, Fort Oglethorpe, Chattanooga, East Ridge, Ooltewah, Red Bank, and nearby communities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#menu" variant="yellow">View Menu</ButtonLink>
              <ButtonLink href="#route" variant="green">This Week’s Route</ButtonLink>
              <ButtonLink href="#book" variant="red">Book Us</ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border-4 border-[#111] bg-[#fff7d6] p-3 shadow-[16px_16px_0_#a80f0f]">
            <GreenAppleLogo />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[.95fr_1.05fr] md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <PhotoBox label="truck exterior" />
            <PhotoBox label="service window" />
            <PhotoBox label="signature sandwich" />
            <PhotoBox label="event crowd" />
          </div>
          <div>
            <SectionHeading
              eyebrow="About the truck"
              title="Restaurant roots. Road-ready flavor."
              description="Green Apple Gourmet Sandwiches brings the feel of a neighborhood sandwich shop to the streets of North Georgia and Southeast Tennessee. The menu is built around warm sandwiches, fresh toppings, bold sauces, and a bright sweet-savory identity inspired by the Green Apple name."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Fresh ingredients', 'Fast service', 'Community focused'].map((value) => (
                <div key={value} className="rounded-3xl border-4 border-[#111] bg-white p-5 text-center text-lg font-black text-[#3f760f] shadow-[7px_7px_0_#f4c21d]">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Menu"
              title="Eight sandwiches built for the truck."
              description="Use real food photos here when they are ready. Each menu card is designed for fast scanning on mobile and easy updates when prices are finalized."
            />
            <ButtonLink href="#menu" variant="red">Download Menu PDF</ButtonLink>
          </div>

          <div className="space-y-14">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 inline-block rounded-2xl border-4 border-[#111] bg-[#a80f0f] px-5 py-2 text-2xl font-black uppercase tracking-wide text-[#f4c21d] shadow-[6px_6px_0_#111]">
                  {section.title}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => <MenuCard key={item.name} item={item} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="route" className="splash-bg px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <SectionHeading
              eyebrow="Weekly route"
              title="Find us this week."
              description="Daily stops can be updated here for Catoosa County, GA and Hamilton County, TN. Weather changes, sell-outs, and private bookings should be posted here and on social media."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {routeStops.map((stop) => (
              <article key={stop.day} className="rounded-[2rem] border-4 border-[#111] bg-white p-6 shadow-[9px_9px_0_#a80f0f]">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-[#a80f0f]">{stop.day}</p>
                    <h3 className="mt-1 text-2xl font-black text-[#3f760f]">{stop.area}</h3>
                    <p className="mt-2 font-semibold text-[#4a5736]">📍 {stop.location}</p>
                    <p className="mt-2 font-black text-[#18220c]">🕒 {stop.time}</p>
                    <p className="mt-3 text-sm leading-6 text-[#5a6844]">{stop.note}</p>
                  </div>
                  <ButtonLink href={stop.map} external variant="green">Get Directions</ButtonLink>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border-4 border-[#111] bg-[#fff7d6] p-6 text-center shadow-[9px_9px_0_#f4c21d]">
            <h3 className="text-3xl font-black text-[#3f760f]">Last-minute updates</h3>
            <p className="mx-auto mt-2 max-w-2xl text-lg font-semibold text-[#4a5736]">
              Weather delay? Private event? Sold out early? This box is built for quick updates that customers can see before driving over.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border-4 border-[#111] bg-white shadow-[9px_9px_0_#a80f0f]">
            <iframe
              title="Green Apple Food Truck service area map"
              src="https://www.google.com/maps?q=Ringgold%20GA%20to%20Chattanooga%20TN&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="catering" className="bg-[#17220c] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Catering & events"
              title="Bring Green Apple to your next crowd."
              light
              description="Book Green Apple Gourmet Sandwiches for corporate lunches, weddings, festivals, schools, church events, employee appreciation days, neighborhood events, and private parties."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Corporate lunches', 'Weddings', 'Festivals', 'Schools', 'Sports events', 'Private parties'].map((eventType) => (
                <div key={eventType} className="rounded-3xl border-4 border-white/30 bg-white/10 p-5 text-xl font-black shadow-[6px_6px_0_#a80f0f]">
                  {eventType}
                </div>
              ))}
            </div>
          </div>

          <div id="book" className="rounded-[2rem] border-4 border-[#111] bg-white p-6 text-[#18220c] shadow-[14px_14px_0_#a80f0f] md:p-8">
            <h3 className="text-4xl font-black text-[#3f760f]">Request a Quote</h3>
            <p className="mt-2 text-lg font-semibold text-[#4a5736]">Send the date, location, guest count, and event type. We will help build the right menu and service plan.</p>
            <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <ContactInput placeholder="Name" />
              <ContactInput placeholder="Email or phone" />
              <ContactInput placeholder="Event date and location" />
              <textarea className="min-h-28 w-full rounded-2xl border-2 border-[#111] bg-white px-4 py-3 font-bold outline-none focus:ring-4 focus:ring-[#f4c21d]" placeholder="Tell us about your event" />
              <button type="submit" className="w-full rounded-2xl border-2 border-[#111] bg-[#3f760f] px-6 py-4 text-lg font-black uppercase tracking-wide text-white shadow-[0_7px_0_#152807] hover:bg-[#315f0b] active:translate-y-1">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="social" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Social media"
              title="Specials, pop-ups, and route alerts."
              description="Use this area for live Instagram or Facebook feeds, weekly announcements, pop-up locations, sell-out notices, and new sandwich specials."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#social" variant="red">Follow Instagram</ButtonLink>
              <ButtonLink href="#social" variant="green">Follow Facebook</ButtonLink>
            </div>
          </div>
          <div className="rounded-[2rem] border-4 border-[#111] bg-white p-5 shadow-[10px_10px_0_#f4c21d]">
            <div className="grid gap-4 md:grid-cols-3">
              {['Instagram Feed', 'Facebook Post', 'Weekly Special'].map((label) => (
                <div key={label} className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle,_#fffde8,_#d9eca1)] p-5 text-center text-xl font-black text-[#3f760f]">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Questions, bookings, or route requests?"
              description="Reach out for catering, route stops, event availability, school lunches, corporate service, private parties, or general questions."
            />
            <div className="mt-8 space-y-4 text-xl font-black text-[#3f760f]">
              <p>✉️ hello@greenapplefoodtruck.com</p>
              <p>☎️ (706) 555-0125</p>
              <p>💬 Text APPLE to 55555 for route alerts</p>
              <p>🕒 Typical hours: Monday-Friday lunch, Friday dinner, Saturday events</p>
            </div>
          </div>

          <div className="rounded-[2rem] border-4 border-[#111] bg-[#fff7d6] p-6 shadow-[10px_10px_0_#a80f0f] md:p-8">
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <ContactInput placeholder="Name" />
              <ContactInput placeholder="Email" type="email" />
              <ContactInput placeholder="Phone" type="tel" />
              <select className="w-full rounded-2xl border-2 border-[#111] bg-white px-4 py-3 font-bold outline-none focus:ring-4 focus:ring-[#f4c21d]">
                <option>General question</option>
                <option>Book catering</option>
                <option>Request a route stop</option>
                <option>Festival or school event</option>
              </select>
              <textarea className="min-h-32 w-full rounded-2xl border-2 border-[#111] bg-white px-4 py-3 font-bold outline-none focus:ring-4 focus:ring-[#f4c21d]" placeholder="Message" />
              <button type="submit" className="w-full rounded-2xl border-2 border-[#111] bg-[#a80f0f] px-6 py-4 text-lg font-black uppercase tracking-wide text-[#f4c21d] shadow-[0_7px_0_#4f0707] hover:bg-[#c51515] active:translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="splash-bg px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border-4 border-[#111] bg-white/85 p-6 shadow-[10px_10px_0_#f4c21d] md:p-10">
          <SectionHeading
            eyebrow="SEO + local optimization"
            title="Built for local food truck searches."
            description="Primary local phrases: food truck Chattanooga, food truck Ringgold GA, food truck Fort Oglethorpe, gourmet sandwiches Chattanooga, catering Catoosa County, food truck Hamilton County TN, East Ridge food truck, Ooltewah lunch catering, Red Bank food truck."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-black text-[#3f760f]">Meta description</h3>
              <p className="mt-2 font-semibold text-[#4a5736]">Green Apple Gourmet Sandwiches serves bold gourmet sandwiches across Catoosa County, GA and Hamilton County, TN, including Ringgold, Fort Oglethorpe, Chattanooga, East Ridge, Ooltewah, and Red Bank.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#3f760f]">Image placement</h3>
              <p className="mt-2 font-semibold text-[#4a5736]">Use your logo in the hero and header. Add food photos to each menu card, plus truck, team, and event photos in the About and Catering sections.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#3f760f]">Newsletter / SMS</h3>
              <p className="mt-2 font-semibold text-[#4a5736]">Connect the route-alert box to Mailchimp, Square, Klaviyo, or an SMS tool when you are ready to collect subscribers.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#17220c] px-4 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <GreenAppleLogo small />
            <div>
              <h2 className="text-2xl font-black">Green Apple Gourmet Sandwiches</h2>
              <p className="text-white/70">Serving North Georgia and Southeast Tennessee.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#social" className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 font-black text-white hover:bg-white hover:text-[#17220c]">Instagram</a>
            <a href="#social" className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 font-black text-white hover:bg-white hover:text-[#17220c]">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
