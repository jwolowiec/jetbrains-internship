import type {Route} from "./+types/home";
import { OverviewPage } from "../ui/page/index/index.jsx";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Kotlin Programming Language"},
    ];
}

export default function Home() {
    return (
        <OverviewPage />
    );
}
