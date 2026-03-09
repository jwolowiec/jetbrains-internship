import type {Route} from "./+types/home";
import { OverviewPage } from "../ui/page/index/index.jsx";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return (
        <OverviewPage />
    );
}
