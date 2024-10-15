var name = "Grzegorz"
let lastName = "Brzęczyszczykiewicz"
const nationality = "Pole"
const dish = "Pierogi"

const line = [name, lastName, nationality, dish]

export const text = () => {
  return line.join(", ")
}