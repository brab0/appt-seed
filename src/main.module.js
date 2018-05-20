import { 
   ApptModule, 
   ApptBootstrap 
} from '@appt/core';

@ApptModule()
export class MainModule {
   constructor(){
      console.log('Hello Appt');
   }
}

ApptBootstrap.module('MainModule');
