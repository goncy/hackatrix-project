const professionals = [
  {
    id: 0,
    name: "Esteban Quito",
    bio: "Lorem ipsum",
    ratings: 1,
    comments: [],
    location: "Quilmes",
    skills: ["matrimoniales"]
  },
  {
    id: 1,
    name: "Elvio Todo",
    bio: "Lorem ipsum",
    ratings: 3,
    comments: [],
    location: "Bernal",
    skills: ["laborales"]
  },
  {
    id: 2,
    name: "Aquiles Canto",
    bio: "Lorem ipsum",
    ratings: 4,
    comments: [],
    location: "Capital",
    skills: ["sexologia"]
  },
  {
    id: 4,
    name: "Uno mas",
    bio: "Lorem ipsum",
    ratings: 1,
    comments: [],
    location: "Moron",
    skills: ["matrimoniales"]
  },
  {
    id: 5,
    name: "Dos Todo",
    bio: "Lorem ipsum",
    ratings: 3,
    comments: [],
    location: "Bernal",
    skills: ["laborales"]
  },
  {
    id: 6,
    name: "Tres Canto",
    bio: "Lorem ipsum",
    ratings: 4,
    comments: [],
    location: "Capital",
    skills: ["sexologia"]
  }
]

const initialState = {
  professionals
}

const users = (state = initialState, { type, payload }) => state

export default users
