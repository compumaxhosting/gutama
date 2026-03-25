"use client";

import { useEffect } from "react";

const TRANSLATE_SCRIPT_ID = "google-translate-script";
const TRANSLATE_CONTAINER_ID = "google_translate_element";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages?: string;
              autoDisplay: boolean;
              layout: number;
            },
            elementId: string
          ): unknown;
          InlineLayout: { SIMPLE: number };
        };
      };
    };
  }
}

export function GoogleTranslateWidget() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      const Widget = window.google?.translate?.TranslateElement;

      if (!Widget) {
        return;
      }

      new Widget(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,pt,it",
          autoDisplay: false,
          layout: Widget.InlineLayout.SIMPLE,
        },
        TRANSLATE_CONTAINER_ID
      );
    };

    if (!document.getElementById(TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = TRANSLATE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id={TRANSLATE_CONTAINER_ID} className="translate-widget" />;
}