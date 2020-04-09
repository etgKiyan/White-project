import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
    // This function is the logic of the filter
    transform(value: any, args?: any): any {
      if(!value) return null;
      if(!args) return value;
      
      args = args.toLowerCase();
      return value.filter((item) => {
          return JSON.stringify(item).toLowerCase().includes(args);
      });
  }

}
