"use client";

import { useEffect, useRef, useState } from "react";

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
  const [shouldLoadScript, setShouldLoadScript] = useState(false);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (shouldLoadScript) {
      return;
    }

    // Load the script only when users show intent to translate.
    const onFirstInteraction = () => {
      setShouldLoadScript(true);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("focusin", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    window.addEventListener("focusin", onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("focusin", onFirstInteraction);
    };
  }, [shouldLoadScript]);

  useEffect(() => {
    if (!shouldLoadScript || hasInitializedRef.current) {
      return;
    }

    hasInitializedRef.current = true;

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
  }, [shouldLoadScript]);

  return (
    <>
      <div id={TRANSLATE_CONTAINER_ID} className="translate-widget" />
      <style jsx global>{`
        .translate-widget .goog-te-gadget {
          font-size: 0;
        }

        .translate-widget .goog-te-gadget-simple {
          border: 1px solid hsl(0 0% 25%) !important;
          background: hsl(0 0% 12%) !important;
          border-radius: 9999px !important;
          padding: 0.25rem 0.5rem !important;
        }

        .translate-widget .goog-te-menu-value {
          color: hsl(0 0% 100%) !important;
          font-size: 0.75rem !important;
          font-weight: 600 !important;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .translate-widget .goog-te-menu-value span {
          color: hsl(0 0% 100%) !important;
          border: 0 !important;
        }

        .translate-widget .goog-te-gadget-simple a,
        .translate-widget .goog-te-gadget-simple a span {
          color: hsl(0 0% 100%) !important;
        }

        .translate-widget img {
          display: none !important;
        }
      `}</style>
    </>
  );
}