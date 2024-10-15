import { text } from "./program";

export default function test() {
  const result = text().trim()
  if (result === "Grzegorz, Brzęczyszczykiewicz, Polak, Pierogi") return true
  return false
}