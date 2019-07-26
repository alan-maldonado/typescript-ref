import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([12, -4, 5, 0, 2, -1]);
let sorter = new Sorter(numbersCollection);
sorter.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('ASDCXzxczxasdASDxazc');
sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data)