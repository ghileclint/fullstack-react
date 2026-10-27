import { createFileRoute } from "@tanstack/react-router";
import { Stopwatch } from "../features/stopwatch/components/Stopwatch";

export const Route = createFileRoute("/effect-challenge")({
  component: Stopwatch,
});
