import ModelImpl from './ModelImpl';

interface PeopelsI {

}

class Peopels extends ModelImpl<PeopelsI>{
    

    Peoples: PeopelsI;

    constructor(peopels: PeopelsI){
        super();
        this.Peoples = peopels;
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    read(): PeopelsI {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}