import { Chart } from "./models/chart.model";

export interface AppState {
    readonly chartValues: Chart[];
}