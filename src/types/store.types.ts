export interface Store {
    apiKey?: string;
    setApiKey?: (val: string) => void;
    fetchSubjects?: () => void;
    subjects?: Collection<SubjectData>;
}

export interface Pages {
    perPage?: number,
    nextUrl?: string,
    previousUrl?: string,
}

export interface Collection<T> {
    pages: Pages,
    url: string,
    totalCount: number,
    dataUpdatedAt: string,
    data: CollectionObject<T>[]
}

export interface CollectionObject<T> {
    id: number,
    object: "kanji" | "radical",
    url: string,
    dataUpdatedAt: string,
    data: T,
}

export interface SubjectData {
    level: number,
    slug: string,
    documentUrl: string,
    characters: string,
    meanings: Meaning[],
    meaningMnemonic: string,
    lessonPosition: number,
    spacedRepetitionSystemId: number,
}

export interface RadicalData extends SubjectData {
    characterImages: CharacterImage[],
}

export interface KanjiData extends SubjectData {
    readings: KanjiReading[],
    componentSubjectIds: number[],
    amalgamationSubjectIds: number[],
    visuallySimilarSubjectIds: number[],
    meaningHint: string,
    readingMnemonic: string,
    readingHint: string,
}

export interface Meaning {
    meaning: string,
    primary: boolean,
    acceptedAnswer: boolean,
}

export interface KanjiReading {
    type: "kunyomi" | "onyomi",
    primary: boolean,
    reading: string,
    acceptedAnswer: boolean,
}

export interface CharacterImage {
    url: string,
    metadata: {
        inlineStyles: boolean,
    }
    contentType: string,
}