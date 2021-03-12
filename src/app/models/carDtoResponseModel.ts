import { CarDTO } from "./carDtoModel";
import { ResponseModel } from "./responseModel";

export interface CarDTOResponseModel extends ResponseModel {
    data:CarDTO[];
}