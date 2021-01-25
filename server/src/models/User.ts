import ModelImpl from './ModelImpl';

interface UserI {

}

class User extends ModelImpl<UserI>{
    
    user: UserI;

    constructor(user: UserI){
        super();
        this.user = user;
    }
    

    create(): void {
        throw new Error('Method not implemented.');
    }

    read(): UserI {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}