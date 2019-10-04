import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'file'
})
export class FilePipe implements PipeTransform {
  transform(value: string): string {
      if (!value) {
        return value;
      }
      for (let i = 0; i <= value.length; i=i+2) {

      return value.replace(/\w\S/g, function(str) {

        return str.charAt(i).toUpperCase() + str.substr(i+1).toLowerCase();
        // };
      })
    // if (!value) {
    //     return value;
    // }
    // return value.replace(/\w\S*/g, function (str) {
    //     return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    // });
  }


}
 // transform(value:number, multiply:string): number {
  //   let multi=parseFloat(multiply);
  //   return multi*value;
   }
