import { useState, useEffect, useRef } from "react";
import useMobile from "./IsMobile";
import { usePathname } from "next/navigation";
const useScrollDirection = () => {
  const router = usePathname();

  const isMobile = useMobile();
  const pathName = usePathname();
  const scrollDirection = useRef("top");
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    console.log("Setting up scroll listener...");
    const handleScroll = () => {
      console.log('Scroll direction - '+scrollDirection.current)
      console.log(lastScrollTopRef.current);
      console.log(`isMobile: ${isMobile.current}`);
      const contentBody = document.querySelector("#content")!;
      const header = document.querySelector("#header")!;
      const secondColumn = document.querySelector("#second-column")!;

      const currentScrollTop = contentBody.scrollTop;
      console.log(`${currentScrollTop} x ${lastScrollTopRef.current}`);
      // Skip scroll animations effects for the first 400 pixels of scroll
      // if (isMobile.current && currentScrollTop < 400) {
      //   return;
      // }

      // Skip scroll animations effects for about-me page
      if (pathName.includes('/about')) {
        return;
      }

      if (currentScrollTop <= 0) {
        scrollDirection.current = "top";

        header.classList.remove("hide-header");
        header.classList.remove("show-header");
        // contentBody.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        if (isMobile.current) {
          contentBody.classList.remove("move-body");
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.remove("show-header");
        }
      } else if (currentScrollTop > lastScrollTopRef.current) {
        scrollDirection.current = "down";
        header.classList.remove("show-header");
        header.classList.add("hide-header");
        if (isMobile.current) {
          contentBody.classList.add("move-body");
          secondColumn.classList.remove("show-header");
          secondColumn.classList.add("hide-posts");
        }
      } else if (currentScrollTop < lastScrollTopRef.current) {
        scrollDirection.current = "up";
        header.classList.remove("hide-header");
        header.classList.add("show-header");
        if (isMobile.current) {
          contentBody.classList.remove("move-body");
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.add("show-header");
        }
      }
      if (isMobile.current) {
        if (currentScrollTop + window.outerHeight >= contentBody.scrollHeight) {
          //This line makes the posts show if one has scrolled to the bottom.
          // lastScrollTopRef.current = contentBody.scrollHeight;
        } else {
          lastScrollTopRef.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }
      } else {
        lastScrollTopRef.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
      }
    };
    console.log(
      "!@#!@#!@# "+lastScrollTopRef.current)
    
    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const contentBody = document.querySelector("#content")!;
    if(!window.location.hash) {
      //Scroll to top if url doesn't have hash (linked headers in article)
      contentBody.scroll({ top: 0, behavior: "smooth" });
    }    
  }, [router]);

  return scrollDirection;
};

export default useScrollDirection;
