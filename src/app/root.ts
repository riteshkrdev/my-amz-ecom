import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'shop-root',
  imports: [RouterOutlet],
  template: `<router-outlet/>`,
})
export class Root {
  protected title = 'my-amz-ecom';
}
