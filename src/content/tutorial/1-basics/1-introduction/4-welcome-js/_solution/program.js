var name = "Grzegorz"
let lastName = "Brzęczyszczykiewicz"
const nationality = "Pole"
const dish = "Pierogi"

const line = [name, lastName, nationality, dish]

const text = () => {
  return line.join(", ")
}

export {text}