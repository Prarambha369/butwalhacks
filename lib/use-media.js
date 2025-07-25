import {useState, useEffect} from "react";

/**
 * React hook that tracks whether a given media query matches the current viewport.
 * @param {string} query - The media query string to evaluate.
 * @return {{matches: boolean}} An object indicating if the media query currently matches.
 */
export default function useMedia(query) {
    const [matches, setMatches] = useState(false);

  useEffect(() => {
      const onChange = (e) => setMatches(e.matches);
      const mq = window.matchMedia(query);
      setMatches(mq.matches);
      mq.addEventListener("change", onChange);

      return () => mq.removeEventListener("change", onChange);
  }, [query]);

    return {matches};
}
