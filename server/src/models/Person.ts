import ModelImpl from './ModelImpl';

interface PersonI {

}

class Person extends ModelImpl<PersonI>{
    

    person: PersonI;

    constructor(person: PersonI){
        super();
        this.person = person;
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    read(): PersonI {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}