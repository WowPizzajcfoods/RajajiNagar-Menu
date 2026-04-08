"use client";
import { Switch } from "@/components/ui/switch";
import { useNonVegToggle } from "@/context/nonVegToggle";
import { filterMenuItems } from "@/lib/menu";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import AddOns, { addOnItems } from "./Categories/AddOns";
import Beverages, { beverageItems } from "./Categories/Beverages";
import Desserts, { desserItems } from "./Categories/Desserts";
import MealBox, { mealBoxItems } from "./Categories/MealBox";
import Pizza, { pizzaClassic, pizzaSupreme } from "./Categories/Pizza";
import Starters, { starterItems } from "./Categories/Starters";
import ScrollFadeObserver from "./ScrollFadeObserver";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("Pizzas");
  const [searchQuery, setSearchQuery] = useState("");
  const { toggle, toggleMode } = useNonVegToggle();
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const navRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLSpanElement>(null);

  const filteredItems = useMemo(
    () => ({
      pizzaClassic: filterMenuItems(pizzaClassic, deferredSearchQuery, toggle),
      pizzaSupreme: filterMenuItems(pizzaSupreme, deferredSearchQuery, toggle),
      starters: filterMenuItems(starterItems, deferredSearchQuery, toggle),
      desserts: filterMenuItems(desserItems, deferredSearchQuery, toggle),
      beverages: filterMenuItems(beverageItems, deferredSearchQuery, toggle),
      addOns: filterMenuItems(addOnItems, deferredSearchQuery, toggle),
      mealBox: filterMenuItems(mealBoxItems, deferredSearchQuery, toggle),
    }),
    [deferredSearchQuery, toggle],
  );

  const hasResults = useMemo(
    () => Object.values(filteredItems).some((items) => items.length > 0),
    [filteredItems],
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Increase/decrease this value to control how far below the sticky nav sections land.
    const topOffset = 120;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - topOffset,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  useEffect(() => {
  if (activeRef.current && navRef.current) {
    activeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}, [activeSection]);

  return (
    <>
      <div className="px-4 flex flex-col justify-center">
        <nav className="flex flex-col items-cente gap-1 sticky top-0 z-2 bg-white py-2 ">
          <div ref={navRef} className="flex-1 flex items-center gap-4 sm:gap-6 md:gap-8 py-2 overflow-x-auto ">
            <span
              className={`cursor-pointer text-base font-semibold sm:text-lg md:text-xl transition-all pb-2 shrink-0 ${activeSection === "Pizzas" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Pizzas")}
              ref={activeSection === "Pizzas" ? activeRef : null}
            >
              Pizzas
            </span>
            <span
              className={`cursor-pointer text-base font-semibold sm:text-lg md:text-xl transition-all pb-2 shrink-0 ${activeSection === "Starters" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Starters")}
              ref={activeSection === "Starters" ? activeRef : null}
            >
              Starters
            </span>
            <span
              className={`cursor-pointer text-base font-semibold sm:text-lg md:text-xl transition-all pb-2 shrink-0 ${activeSection === "Desserts" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Desserts")}
              ref={activeSection === "Desserts" ? activeRef : null}

              
            >
              Desserts
            </span>
            <span
              className={`cursor-pointer text-base font-semibold sm:text-lg md:text-xl transition-all pb-2 shrink-0 ${activeSection === "Beverages" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Beverages")}
              ref={activeSection === "Beverages" ? activeRef : null}

              
            >
              Beverages
            </span>
            <span
              className={`cursor-pointer text-base font-semibold sm:text-lg md:text-xl transition-all pb-2 shrink-0 ${activeSection === "Add-Ons" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Add-Ons")}
              ref={activeSection === "Add-Ons" ? activeRef : null}

            >
              
              Add Ons
            </span>
            <span
              className={`cursor-pointer text-base font-semibold sm:text-lg md:text-xl transition-all pb-2 shrink-0 ${activeSection === "Meal-Box" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Meal-Box")}
              ref={activeSection === "Meal-Box" ? activeRef : null}

              
            >
              Meal Box
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-full cursor-pointer self-end">
            <div className="flex items-center justify-between gap-4 w-full">
              <input
                type="text"
                className="flex-1 px-4 py-2 rounded-lg bg-[#fff6f6] border-2 border-transparent outline-none text-gray-800 placeholder-gray-400 transition-all focus:border-[#ed5a5a] focus:shadow-md text-base"
                placeholder="Find your meal 😋..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
            </div>
            <div className="flex items-center gap-1" onClick={toggleMode}>
              <Switch checked={toggle} className="cursor-pointer" />
              <span className="text-sm sm:text-base md:text-xl font-semibold text-gray-600 whitespace-nowrap">
                Veg mode
              </span>
            </div>
          </div>
        </nav>
        {!hasResults && searchQuery !== "" && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <p className="text-xl text-gray-500 font-semibold">
                Oh no! Your meal isn't here 😟
              </p>
            </div>
          </div>
        )}
        <span className="text-center mt-2 font-semibold">
     We’ll be right there once you’re ready to order!
      </span>
        <main
          className="flex flex-col gap-6 py-4"
          style={{ display: hasResults ? "flex" : "none" }}
        >
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Pizzas"
          >
            <Pizza
              classicItems={filteredItems.pizzaClassic}
              supremeItems={filteredItems.pizzaSupreme}
            />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Starters"
          >
            <Starters items={filteredItems.starters} />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Desserts"
          >
            <Desserts items={filteredItems.desserts} />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Beverages"
          >
            <Beverages items={filteredItems.beverages} />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Add-Ons"
          >
            <AddOns items={filteredItems.addOns} />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Meal-Box"
          >
            <MealBox items={filteredItems.mealBox} />
          </section>
        </main>
      </div>
      <ScrollFadeObserver />
    </>
  );
};

export default MainContent;
