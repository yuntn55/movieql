export const people = [
    {
        id: 1,
        name: "JunSoo",
        age: 30,
        gender: "male"
    },
    {
        id: 2,
        name: "경희",
        age: 28,
        gender: "female"
    },
    {
        id: 3,
        name: "test3",
        age: 28,
        gender: "female"
    }
];

export const getById = id => {
    const filterdPeople = people.filter(person => id === person.id);
    return filterdPeople[0];
}
