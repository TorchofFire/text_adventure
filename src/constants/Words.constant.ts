
export enum Articles {
    a = 'a',
    an ='an',
    the = 'the'
}

export enum Verbs {
    go = 'go',
    inspect = 'inspect',
    take = 'take',
    drop = 'drop',
    use = 'use',
    move = 'move',
    eat = 'eat',
    search = 'search'
}

export function getStandardVerb(verb: string): Verbs | null {
    switch (verb.toLowerCase()) {
        case 'go':
        case 'walk':
        case 'travel':
            return Verbs.go;
        case 'inspect':
        case 'examine':
        case 'observe':
        case 'read':
            return Verbs.inspect;
        case 'take':
        case 'grab':
        case 'pick up':
            return Verbs.take;
        case 'drop':
        case 'discard':
        case 'release':
            return Verbs.drop;
        case 'use':
        case 'utilize':
            return Verbs.use;
        case 'move':
        case 'push':
        case 'pull':
            return Verbs.move;
        case 'eat':
        case 'consume':
        case 'injest':
            return Verbs.eat;
        case 'search':
        case 'explore':
        case 'investigate':
            return Verbs.search;
        default:
            return null; // Unknown verb
    }
}
