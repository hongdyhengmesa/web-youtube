import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {

  protected title = "Welcome angular lesson";

  // binding propertie
  protected isDisabled = true;

  // Event propertie
  protected onclick(){
    this.isDisabled = !this.isDisabled;
  }

}
