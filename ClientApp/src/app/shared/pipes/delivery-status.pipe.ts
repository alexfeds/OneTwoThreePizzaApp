
import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class OrderStatusPipe implements PipeTransform {
  public transform(statusCode: number): string {
    console.log("from pipe", statusCode)
    let result: string = "";

    if (statusCode) {
      if (statusCode === 1) {
        result = "Registered";
      } else if (statusCode === 2) {
        result = "Preparation";
      } else if (statusCode === 3) {
        result = "Ready To Deliver";
      } else if (statusCode === 4) {
         result = "Delivered";
      }
  
    }
    return result
  }
}

