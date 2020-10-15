const tom = {
	name:'Tom',
	age: 25,
	address: {
		street:'171 Some Street',
		country: 'Canada'
	}
}

const tomName = tom.name
console.log(`Tom's name: ${tomName}`)

const tomAge = tom['age']
console.log(`Tom's age: ${tomAge}`)

const tomAddrStreet = tom.address['street']
console.log(`Tom's address: ${tomAddrStreet}`)


