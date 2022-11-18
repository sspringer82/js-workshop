import User from './User';

export default class Collection<T extends { lastname: string }> {
  constructor(private items: T[]) {}

  addItem(item: T): void {
    this.items.push(item);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

const newColl = new Collection<User>([]);
newColl.addItem(new User('klaus', 'müller'));
newColl.addItem(new User('lisa', 'meier'));
console.log(newColl.getAllItems());

const newPersons = new Collection<{ id: number; lastname: string }>([]);
newPersons.addItem({ id: 1, lastname: 'xxx' });
