import { Pipe, PipeTransform } from '@angular/core';
type Product = { title: string };

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  public transform(value: Product[], text?: string): any {
    if (!text) {
      return value;
    }
    return value.filter((item: Product) => item.title.toLowerCase().trim().includes(text.toLowerCase().trim()));
  }
}
