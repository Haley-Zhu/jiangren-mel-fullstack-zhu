// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get} from '@loopback/rest';


export class ToppingsController {
  // constructor() {}
  @get('/Toppings')
  Toppings(): string {
    return 'Hello world!';
  }
}
