/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const SCRIPT_ID = "google-translate-script";
const CONTAINER_ID = "google_translate_element";
const GOOGLE_TRANSLATE_COOKIE = "googtrans";

const HIGHLIGHT_SELECTORS = [
  ".goog-text-highlight",
  "font[style*='background-color']",
  "span[style*='background-color']",
  "font[style*='background:']",
  "span[style*='background:']",
  "[style*='background-color: rgb(255, 255, 0)']",
  "[style*='background-color: yellow']",
  "[style*='background: yellow']",
];

const OVERLAY_SELECTORS = [
  "iframe.VIpgJd-ZVi9od-ORHb-OEVmcd",
  "iframe.skiptranslate",
  "iframe[id$='.container']",
  "iframe[id*='.container']",
  ".VIpgJd-ZVi9od-ORHb-OEVmcd",
  ".goog-te-balloon-frame",
  "#goog-gt-tt",
];

type TranslateElementConstructor = {
  new (
    options: {
      pageLanguage: string;
      includedLanguages: string;
      autoDisplay: boolean;
      layout: number;
    },
    elementId: string
  ): unknown;
  InlineLayout: {
    SIMPLE: number;
  };
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: TranslateElementConstructor;
      };
    };
  }
}

export function GoogleTranslateWidget() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "es">("en");

  const cookieDomain = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return window.location.hostname.includes("localhost")
      ? ""
      : `;domain=${window.location.hostname}`;
  }, []);

  const readLanguageFromCookie = () => {
    const cookie = document.cookie
      .split(";")
      .map((item) => item.trim())
      .find((item) => item.startsWith(`${GOOGLE_TRANSLATE_COOKIE}=`));

    if (!cookie) {
      return "en" as const;
    }

    return cookie.includes("/es") ? ("es" as const) : ("en" as const);
  };

  useEffect(() => {
    setActiveLanguage(readLanguageFromCookie());

    const hideOverlayNode = (node: Element) => {
      if (!(node instanceof HTMLElement)) {
        return;
      }

      node.style.setProperty("display", "none", "important");
      node.style.setProperty("visibility", "hidden", "important");
      node.style.setProperty("opacity", "0", "important");
      node.style.setProperty("pointer-events", "none", "important");
      node.style.setProperty("width", "0", "important");
      node.style.setProperty("height", "0", "important");
    };

    const clearHighlightStyles = (node: Element) => {
      if (!(node instanceof HTMLElement)) {
        return;
      }

      node.classList.remove("goog-text-highlight");
      node.style.removeProperty("background");
      node.style.removeProperty("background-color");
      node.style.removeProperty("box-shadow");
      node.style.setProperty("background-color", "transparent", "important");
      node.style.setProperty("box-shadow", "none", "important");
      node.style.setProperty("color", "inherit", "important");
    };

    const unwrapTranslateFonts = () => {
      document.querySelectorAll("font").forEach((node) => {
        if (!(node instanceof HTMLElement)) {
          return;
        }

        if (node.id === CONTAINER_ID || node.closest(`#${CONTAINER_ID}`)) {
          return;
        }

        const parent = node.parentNode;

        if (!parent) {
          return;
        }

        while (node.firstChild) {
          parent.insertBefore(node.firstChild, node);
        }

        parent.removeChild(node);
      });
    };

    const neutralizeTextHighlight = () => {
      HIGHLIGHT_SELECTORS.forEach((selector) => {
        document.querySelectorAll(selector).forEach((node) => {
          clearHighlightStyles(node);
        });
      });

      unwrapTranslateFonts();
    };

    const removeTranslateOverlays = () => {
      OVERLAY_SELECTORS.forEach((selector) => {
        document.querySelectorAll(selector).forEach((node) => {
          hideOverlayNode(node);
        });
      });

      neutralizeTextHighlight();
    };

    removeTranslateOverlays();

    const overlayObserver = new MutationObserver(() => {
      removeTranslateOverlays();
    });

    overlayObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "id"],
    });

    const cleanupInterval = window.setInterval(removeTranslateOverlays, 120);

    const onMouseOver = (event: Event) => {
      const target = event.target;

      if (target instanceof HTMLElement) {
        if (
          target.classList.contains("goog-text-highlight") ||
          target.getAttribute("style")?.includes("background-color")
        ) {
          neutralizeTextHighlight();
        }
      }
    };

    document.addEventListener("mouseover", onMouseOver, true);

    window.googleTranslateElementInit = () => {
      const translateApi = window.google?.translate;
      const translateElement = translateApi?.TranslateElement;

      if (!translateElement) {
        return;
      }

      new translateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          autoDisplay: false,
          layout: translateElement.InlineLayout.SIMPLE,
        },
        CONTAINER_ID
      );
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit?.();
    }

    return () => {
      overlayObserver.disconnect();
      window.clearInterval(cleanupInterval);
      document.removeEventListener("mouseover", onMouseOver, true);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const setTranslateCookie = (value: string | null) => {
    if (value) {
      document.cookie = `${GOOGLE_TRANSLATE_COOKIE}=${value};path=/${cookieDomain}`;
      return;
    }

    document.cookie = `${GOOGLE_TRANSLATE_COOKIE}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/${cookieDomain}`;
  };

  const applyLanguage = (language: "en" | "es") => {
    if (language === activeLanguage) {
      return;
    }

    setActiveLanguage(language);

    if (language === "en") {
      setTranslateCookie(null);
      window.location.reload();
      return;
    }

    setTranslateCookie("/auto/es");

    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (combo) {
      combo.value = "es";
      combo.dispatchEvent(new Event("change"));
      return;
    }

    window.location.reload();
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/70 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => applyLanguage("en")}
        aria-label="Switch language to English"
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors sm:px-3 sm:py-1.5 sm:text-xs",
          activeLanguage === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => applyLanguage("es")}
        aria-label="Switch language to Spanish"
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors sm:px-3 sm:py-1.5 sm:text-xs",
          activeLanguage === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        ES
      </button>

      {/* Keep the Google container mounted but hidden. */}
      <div id={CONTAINER_ID} className="sr-only" />
    </div>
  );
}
