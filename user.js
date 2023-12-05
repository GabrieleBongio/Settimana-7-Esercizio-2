class User {
  constructor(firstName, lasteName, age, location) {
    this.firstName = firstName;
    this.lasteName = lasteName;
    this.age = age;
    this.location = location;
  }

  isOlderThan(otherUser) {
    if (otherUser.age > this.age) {
      return otherUser.firstName + " is older than " + this.firstName;
    } else if (otherUser.age === this.age) {
      return otherUser.firstName + " and " + this.firstName + " are the same age";
    } else if (otherUser.age < this.age) {
      return this.firstName + " is older than " + otherUser.firstName;
    }
  }
}

const user1 = new User("Gabriele", "Bongio", 20, "Morbegno");
const user2 = new User("Federico", "Lucia", 34, "Milano");
const user3 = new User("Gianni", "Morandi", 78, "Bologna");
const user4 = new User("Gareth", "Bale", 34, "Cardiff");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user1.isOlderThan(user2));
console.log(user2.isOlderThan(user3));
console.log(user3.isOlderThan(user4));
console.log(user2.isOlderThan(user4));
