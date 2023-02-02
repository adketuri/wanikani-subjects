export interface Store {
    apiKey?: string;
    setApiKey?: (val: string) => void;
    fetchSubjects?: () => void;
    subjects?: any;
}