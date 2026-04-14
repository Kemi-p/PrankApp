import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'brewCoins'})
export class BrewCoinsPipe implements PipeTransform {
  transform(rand: number): string {
    return `🪙 ${(rand * 3.7).toFixed(2)} BrewCoins™`; //need to replace emojis with icons
  }
}