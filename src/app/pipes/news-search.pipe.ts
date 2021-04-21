import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsSearch'
})
export class NewsSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(typeof(args[0] === 'undefined')) return value;
    
    return value.filter((news:any) => {
      return news.description.toUpperCase().indexOf(args[0].toUpperCase()) > -1;
    });
  }

}
