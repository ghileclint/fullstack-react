import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "../features/shopping-cart/components/Shopping-cart";

export const Route = createFileRoute("/state-challenge")({
  component: ShoppingCart,
});
