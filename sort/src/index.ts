import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([12, -4, 5, 0, 2, -1]);
let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ASDCXzxczxasdASDxazc');
sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-5);
linkedList.add(10);
linkedList.add(3);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
