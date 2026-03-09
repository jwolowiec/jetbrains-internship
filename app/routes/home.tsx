import type {Route} from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return <div id="react-app" className="overview-page">
        <h1>Ready to migrate</h1>
    </div>;
}
