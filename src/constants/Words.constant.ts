
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
    around = 'around',
    as = 'as',
    at = 'at',
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
    outside = 'outside',
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
    walk = 'walk',
    inspect = 'inspect',
    take = 'take',
    drop = 'drop',
    use = 'use',
    move = 'move',
    eat = 'eat',
    search = 'search'
}

export function getVerbSynonyms(verb: string): string[] {
    const synonyms: { [key in string]: string[] } = {
        walk: ['walk', 'go', 'travel'],
        inspect: ['inspect', 'examine', 'observe', 'look'],
        take: ['take', 'grab', 'pick up'],
        drop: ['drop', 'discard', 'release'],
        use: ['use', 'utilize'],
        move: ['move', 'push', 'pull'],
        eat: ['eat', 'consume', 'ingest'],
        search: ['search', 'explore', 'investigate']
    };

    return synonyms[verb] || [verb];
}

export enum Directions {
    north = 'north',
    east = 'east',
    south = 'south',
    west = 'west',
    up = 'up', // z axis
    down = 'down'
}
