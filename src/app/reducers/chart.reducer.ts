import { Chart } from "../models/chart.model"
import * as ChartActions from "../actions/chart.actions"

export const ADD_CHART = 'ADD_CHART';

export function addChartReducer(state: Chart[] = [], action: any): any {
    switch (action.type) {
        case ChartActions.ADD_CHART:
            return [...state, action.payload];
        default:
            return state;
    }
}

