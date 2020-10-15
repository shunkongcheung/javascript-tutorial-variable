const stations = ['Fanling', 'Sheung Shui', 'Tai Po']

const stnCount = stations.length 
console.log(`Number of stations: ${stnCount}`)

const firstItem = stations[0] // note that index starts from 0
console.log(`First Item: ${firstItem}`)

const lastItem = stations[stnCount -1] // last index === length -1
console.log(`Last Item: ${lastItem}`)


for(let index = 0; index < stnCount; index++){
	console.log(`Item ${index} is: ${stations[index]}`)
}

