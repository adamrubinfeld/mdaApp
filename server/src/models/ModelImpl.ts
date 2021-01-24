export default abstract class Model<T>{


    abstract create(): void;

    abstract read(): T;

    abstract update(): void;

    abstract delete(): void;

}