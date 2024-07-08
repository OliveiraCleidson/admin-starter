import type { Config } from "tailwindcss";

const config: Config = {
  "content": [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  "theme": {
    "extend": {
      "fontFamily": {
        "sans": [
          "var(--font-sans)",
          "sans-serif"
        ]
      },
      "colors": {
        "background": "#FAF8F0",
        "foreground": "#000000",
        "neutral": {
          "50": "#fcfaf2",
          "100": "#f6f5ed",
          "200": "#e8e6e0",
          "300": "#d6d4cf",
          "400": "#a4a39e",
          "500": "#73726f",
          "600": "#545351",
          "700": "#41403e",
          "800": "#282726",
          "900": "#181818"
        },
        "brand": {
          "50": "#edf2ff",
          "100": "#dee7fe",
          "200": "#c4d1fc",
          "300": "#a0b3f8",
          "400": "#7b8cf2",
          "500": "#5b68e8",
          "600": "#464bda",
          "700": "#3b3dc3",
          "800": "#31339f",
          "900": "#2d2f80"
        },
        "highlight": {
          "50": "#effdfc",
          "100": "#ccf8f5",
          "200": "#a2efea",
          "300": "#7cdfda",
          "400": "#68c6c3",
          "500": "#5da9a7",
          "600": "#448a8a",
          "700": "#306f71",
          "800": "#225a5c",
          "900": "#194c4e"
        }
      },
      "borderRadius": {
        "sm": "0.0833rem",
        "default": "0.1667rem",
        "md": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.875rem",
        "2xl": "1.1667rem",
        "3xl": "1.75rem"
      },
      "keyframes": {
        "accordion-down": {
          "from": {
            "height": "0"
          },
          "to": {
            "height": "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          "from": {
            "height": "var(--radix-accordion-content-height)"
          },
          "to": {
            "height": "0"
          }
        }
      },
      "animation": {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  "plugins": []
};

export default config;
