import { Ambient } from "./Ambient";
import { LearningResult } from "./LearningResult";

export class LimitationEnviroment {
    private _id: number;
    private _learningResultList: Array<LearningResult>;
    private _ambientList: Array<Ambient>;
}