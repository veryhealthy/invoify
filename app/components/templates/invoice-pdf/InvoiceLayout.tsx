import { ReactNode } from "react";

// Types
import { InvoiceType } from "@/types";

type InvoiceLayoutProps = {
    data: InvoiceType;
    children: ReactNode;
};

export default function InvoiceLayout({ data, children }: InvoiceLayoutProps) {
    const { details } = data;

    const fontHref = details.signature?.fontFamily
        ? `https://fonts.googleapis.com/css2?family=${details?.signature?.fontFamily}&display=swap`
        : "";

    const fontFaceCSS = `
        @font-face {
            font-family: 'Open Sauce Sans';
            font-weight: 300;
            font-style: normal;
            src: url('/fonts/open-sauce-sans-latin-300-normal.woff') format('woff');
        }
        @font-face {
            font-family: 'Open Sauce Sans';
            font-weight: 400;
            font-style: normal;
            src: url('/fonts/open-sauce-sans-latin-400-normal.woff') format('woff');
        }
        @font-face {
            font-family: 'Open Sauce Sans';
            font-weight: 500;
            font-style: normal;
            src: url('/fonts/open-sauce-sans-latin-500-normal.woff') format('woff');
        }
        @font-face {
            font-family: 'Open Sauce Sans';
            font-weight: 600;
            font-style: normal;
            src: url('/fonts/open-sauce-sans-latin-600-normal.woff') format('woff');
        }
        @font-face {
            font-family: 'Open Sauce Sans';
            font-weight: 700;
            font-style: normal;
            src: url('/fonts/open-sauce-sans-latin-700-normal.woff') format('woff');
        }
    `;

    const head = (
        <>
            <style dangerouslySetInnerHTML={{ __html: fontFaceCSS }} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            {details.signature?.fontFamily && <link href={fontHref} rel="stylesheet" />}
        </>
    );

    return (
        <>
            {head}
            <section style={{ fontFamily: "'Open Sauce Sans', sans-serif" }}>
                <div className="bg-[#f8f6f2] text-black flex flex-col p-4 sm:p-10 min-h-[60rem]">{children}</div>
            </section>
        </>
    );
}
