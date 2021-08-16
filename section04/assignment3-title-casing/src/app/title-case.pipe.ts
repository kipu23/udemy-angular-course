import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  private static isPreposition(word: string): boolean {

    const prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());

  }

  private toTitleCase(word: string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
  transform(value: string): any {
    if (!value) {return null};



    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {

      let word = words[i];

      if (i > 0 && TitleCasePipe.isPreposition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

}
