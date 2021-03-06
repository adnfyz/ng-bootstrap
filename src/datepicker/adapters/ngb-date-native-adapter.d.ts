import { NgbDateAdapter } from './ngb-date-adapter';
import { NgbDateStruct } from '../ngb-date-struct';
export declare class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
    fromModel(date: Date): NgbDateStruct;
    toModel(date: NgbDateStruct): Date;
}
