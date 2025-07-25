/**
 * Formats a number by inserting commas as thousand separators.
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The value to format.
 * @return {string} The formatted string with commas, or an empty string if no value is provided.
 */
export default function Comma({ children }) {
  return children
      ? children.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";
}
