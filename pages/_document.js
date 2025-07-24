import {Html, Head, Main, NextScript} from "next/document";

/**
 * Customizes the base HTML document structure for the Next.js application.
 *
 * Sets the root HTML language to English and includes the main application content and Next.js scripts.
 * This component is used to augment the default document markup during server-side rendering.
 */
export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
