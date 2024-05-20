export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly REACT = new Tag('React', 'orange')
    static readonly TYPESCRIPT = new Tag('Typescript', 'darked');
    static readonly JAVASCRIPT = new Tag('Javascript', 'blue');
    static readonly NODEJS = new Tag('NodeJS', 'green');

    private constructor(private readonly key: string, public readonly color: string) {
        
    }
    toString() {
        return this.key;
    }
 }