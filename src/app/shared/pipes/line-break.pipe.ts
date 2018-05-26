import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'lineBreak'})

export class LineBreakPipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/(\\r\\n)|([\r\n])/gmi, '<br/>');
  }
}