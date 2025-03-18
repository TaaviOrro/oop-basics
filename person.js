class Person {
    constructor(name){
        this.name = name;
        this.yearOfBirth = null;
    }
    setdateofBirth(year){
        this.birthyear = year;
    }

    getDateofBirth(){
        return this.yearOfBirth;
        
    }

    age(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    getName(){
        return this.name;
    }

    description(){
        return `${this.name} is a person`;
    }

}

module.exports = Person;