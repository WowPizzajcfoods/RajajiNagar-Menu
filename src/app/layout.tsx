import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NonVegToggleProvider } from "@/context/nonVegToggle";
import type { Metadata, Viewport } from "next";
import { Overlock } from "next/font/google";
import "./globals.css";

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Wow Pizza Menu | Rajajinagar",
  description: "Check out our menu on your device!",
  themeColor: "#ffffff",
  keywords: [
    "Wow Pizza",
    "pizza menu",
    "pizza near me",
    "classic pizza",
    "supreme pizza",
    "paneer tikka pizza",
    "chicken tikka pizza",
    "garlic bread",
    "meal box",
    "pizza Bangalore",
    "Margherita",
    "Simple Veggie",
    "Country Fresh",
    "Garden Fresh",
    "Indian Hot",
    "Garlic Mashroom",
    "Sausage Crunch",
    "Checken Salamri",
    "Sheek Special",
    "Veg Feast",
    "Red Devil",
    "Jugal Bandi",
    "Paneer Tikka",
    "Peppery Paneer Special",
    "Veg Supreme",
    "Chicken Tikka",
    "Super Combo",
    "Spicy Peri Peri",
    "Chicken Supreme",
    "Chicken Pepper Special",
    "Meaty Feast",
    "Starters",
    "French Fries",
    "Potato Chilli Pops",
    "Cheese Garlic Bread",
    "Peri Peri Fries",
    "Potato Wedges",
    "Veg Fingers",
    "Onion Rings",
    "Chicken Fingers",
    "Chicken Nuggets",
    "Chicken Cheese Balls",
    "Chicken Popcorn",
    "Veg Stuffed Calzone",
    "Non-Veg Stuffed Calzone",
    "Desserts",
    "Brownie",
    "Choco Lava",
    "Dutch Truffle Cake",
    "Beverages",
    "Water",
    "Coke",
    "Fanta",
    "Sprite",
    "Thumbs-Up",
    "Goli Soda",
    "BBQ Paneer",
    "Mushroom",
    "Non-Veg Toppings",
    "Veg Toppings",
    "Cheese",
    "Veg Classic",
    "Veg Supreme Meal Box",
    "Non Veg Classic",
    "Non Veg Supreme Meal Box",
    "Rajajinagar",
    "fresh pizza",
    "pizza delivery",
    "pizza restaurant",
    "family meal",
    "soft drinks",
    "soda",
    "veg pizza",
    "non-veg pizza",
  ],
  openGraph: {
    title: "Wow Pizza Menu | Fresh Pizzas, Starters & More",
    description:
      "Explore Wow Pizza's full menu — classic & supreme pizzas, starters, desserts, beverages, add-ons and meal boxes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overlock.variable} font-sans antialiased`}>
        <NonVegToggleProvider>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </NonVegToggleProvider>
      </body>
    </html>
  );
}
