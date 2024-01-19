import { Component } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

lang: any = "es";


  constructor(private translate : TranslateService) {
    translate.setDefaultLang(this.lang);
  }

  onLanguageChange($event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    this.translate.setDefaultLang(this.lang);
  }
  
}
