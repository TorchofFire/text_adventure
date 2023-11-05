
export enum Articles {
    a = 'a',
    an ='an',
    the = 'the'
}

export enum Prepositions {
    aboard = 'aboard',
    about = 'about',
    above = 'above',
    acros = 'across',
    after = 'after',
    again = 'against',
    along = 'along',
    amid = 'amid',
    among = 'among',
    aroun = 'around',
    as = 'as',
    before = 'before',
    behind = 'behind',
    below = 'below',
    beneath = 'beneath',
    beside = 'beside',
    besides = 'besides',
    between = 'between',
    beyon = 'beyond',
    but = 'but',
    by = 'by',
    down = 'down',
    during = 'during',
    except = 'except',
    for = 'for',
    from = 'from',
    in = 'in',
    inside = 'inside',
    into = 'into',
    like = 'like',
    near = 'near',
    of = 'of',
    off = 'off',
    on = 'on',
    onto = 'onto',
    over = 'over',
    than = 'than',
    through = 'through',
    to = 'to',
    toward = 'toward',
    towards = 'towards',
    under = 'under',
    underneath = 'underneath',
    until = 'until',
    up = 'up',
    upon = 'upon',
    with = 'with',
    within = 'within',
    without = 'without'
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

export function getStandardVerb(verb: string): Verbs | string {
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
            return verb;
    }
}
