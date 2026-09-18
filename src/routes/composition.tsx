import { createFileRoute } from "@tanstack/react-router";
import { Tag } from "../components/Tag";
import { Divider } from "../components/Divider";

export const Route = createFileRoute("/composition")({
  component: Composition,
});

function Composition() {
  return (
    <div>
      <Tag text="React" />
      <Divider />
    </div>
  );
}
