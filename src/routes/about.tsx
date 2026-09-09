import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: AboutComponent,
})

function AboutComponent () {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}