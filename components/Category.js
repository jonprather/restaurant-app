import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCategoryStore } from "@/store/index.js";

export default function Category({ category }) {
  const activeCategory =
    useCategoryStore((state) => state.activeCategory) || "all";

  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );
  const router = useRouter();
  const checkIsActiveTab = () => {
    if (activeCategory === "all" && category?.slug === "all") return true;
    return category?.slug?.toLowerCase() === activeCategory;
  };

  const [isActiveTab, setIsActiveTab] = useState(() => checkIsActiveTab());

  const handleClick = () => {
    setActiveCategory(category.slug);
    setIsActiveTab(checkIsActiveTab(category.slug));
  };
  useEffect(() => {
    //purpose slug changes in any of these so should the tab
    setIsActiveTab(() => checkIsActiveTab());
  }, [router?.query?.slug, activeCategory, category.slug]);

  useEffect(() => {
    //this is so if you type in the URL it should still work
    if (!router.isReady) return;
    setActiveCategory(router.query.slug);
  }, [router?.query?.slug]);
  return (
    <Link key={category?.slug} href={`/menu/${category?.slug}`} scroll={false}>
      <a onClick={() => handleClick()}>
        <li className={` ${isActiveTab ? "menu__categories--tab-active" : ""}`}>
          {category?.name}
        </li>
      </a>
    </Link>
  );
}
