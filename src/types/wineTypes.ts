export interface Wine {
    Alcohol: number;
    'Malic Acid': number;
    Ash: number;
    'Alcalinity of ash': number;
    Magnesium: number;
    'Total phenols': number;
    Flavanoids: number;
    'Nonflavanoid phenols': number;
    Proanthocyanins: number;
    'Color intensity': number;
    Hue: number;
    'OD280/OD315 of diluted wines': number;
    Unknown: number;
    Gamma?: number;
}

export interface RawWineDataItem {
    Alcohol: string;
    'Malic Acid': string;
    Ash: string;
    'Alcalinity of ash': string;
    Magnesium: string;
    'Total phenols': string;
    Flavanoids: string;
    'Nonflavanoid phenols': string;
    Proanthocyanins: string;
    'Color intensity': string;
    Hue: string;
    'OD280/OD315 of diluted wines': string;
    Unknown: string;
}

export interface Statistics {
    category: string;
    mean: number;
    median: number;
    mode: number;
}
