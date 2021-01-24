import ModelImpl from './ModelImpl';

interface EventI {

}

class Event extends ModelImpl<EventI>{
    

    event: EventI;

    constructor(event: EventI){
        super();
        this.event = event;
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    read(): EventI {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}