import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

// import { Header } from "./ui/ktl-component/header/index.jsx";
// import { Footer } from "./ui/ktl-component/footer/index.jsx";

import type {Route} from "./+types/root";
import "../app/css/styles-v2.scss";


export const links: Route.LinksFunction = () => [

];

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="page_restyled_2021">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className="page_js_yes page__index-new">
        <div className="global-layout">
            <main className="g-layout global-content">
                {children}
            </main>
        </div>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}

