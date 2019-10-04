import React from 'react'
import Person from '../component/Person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Pugal',
            age: 55,
            skill: "Angular"
        },
        {
            id: 2,
            name: 'Mukundan',
            age: 54,
            skill: "React"
        },
        {
            id: 3,
            name: 'Shekar',
            age: 35,
            skill: "Java"
        }
    ]
    const personList =  persons.map( (person,index) => <Person key={index} person={person}/>)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
