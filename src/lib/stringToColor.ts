

const stringToColor = (str: string | undefined | null) => {
    if (!str) {
      console.warn("stringToColor received an undefined or empty string. Returning default color.");
      return "#000000"; // Default color
    }
      let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + (hash << 5) - hash;
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();
    return "#" + "000000".substring(0, 6 - c.length) + c;
}
export default stringToColor
  