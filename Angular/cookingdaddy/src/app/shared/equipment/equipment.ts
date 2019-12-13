import { Quality } from '../ingredient/quality';

export class Equipment {
    id: number;
    quality: Quality;
    name: string;
    minTemp: number;
    maxTemp: number;
    minTime: number;
    maxTime: number;
}