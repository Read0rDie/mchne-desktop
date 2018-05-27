import { Pipe, PipeTransform } from '@angular/core';

const isAlphaNumeric = ch => {
	return ch.match(/^[a-z0-9]+$/i) !== null;
}

@Pipe({name: 'lineBreak'})


export class LineBreakPipe implements PipeTransform {
  transform(text: string): string {
    var index = 300;

    var trim = text.substr(0, index);
    trim = trim.substr(0, Math.min(trim.length, trim.lastIndexOf(" ")))

    return trim;    
  }
}