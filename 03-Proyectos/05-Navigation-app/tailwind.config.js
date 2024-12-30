/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./presentation/**/*.{js,jsx,ts,tsx}",
    ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#B40086",
        secondary: {
          DEFAULT: "#B40005",
          100: "#C51297",
          200: "#C51200"

        },

      },
      fontFamily: { //* ponemos los nombres que queremos usar en tailwind
        "work-black": ["WorkSans-Black", "sans-serif"], //? taildwind le añade el "font-work-black"
        "work-light": ["WorkSans-Light", "sans-serif"], //! tiene que ser el nombre literal del archivo (sin el .ttf)
        "work-medium": ["WorkSans-Medium", "sans-serif"], // ponemos la funte en caso de no encontrala (sans-serif)
      }
    }
  },
  plugins: [],
}

