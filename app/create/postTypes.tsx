export enum VolumeRating {
    ENORMOUS = 'Enormous',
    LARGE = 'Large',
    MEDIUM = 'Medium',
    SMALL = 'Small',
    HIGHLY_THEORETICAL = 'Highly Theoretical'
}

export enum DifficultyRating {
    EXPLOSIVE = 'explosive',
    EAGER = 'eager',
    RELAXED = 'relaxed',
    STRENUOUS = 'strenuous',
    IMMOVABLE = 'immovable',
}

export type DurationMinutes  = 1 | 5 | 10 | 20 | 30 | 60;
export type Consistency = 1 | 2 | 3 | 4 | 5 // TODO : get more descriptive values here, Emoji?
 
// export type Geolocation = {  // TODO: implement Geolocation
//     latitude: number,
//     longitude: number
// }

export enum ConsistencyRating {
    EXPLOSIVE = 'explosive', // TODO : come up with better scale
    EAGER = 'eager',
    RELAXED = 'relaxed',
    STRENUOUS = 'strenuous',
    IMMOVABLE = 'immovable',
}

export interface Post {
    userId: string;
    datetime: string;
    feelings: string;
    geolocation: string; //Geolocation;
    location: string;
    duration: DurationMinutes;
    volume: VolumeRating;
    color: string;
    consistency: string;
    difficulty: DifficultyRating;
    doorOpen: boolean
}