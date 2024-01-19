import { Component, OnInit, ViewChild } from '@angular/core';
import { DatetimeChangeEventDetail, IonModal } from '@ionic/angular';
import { IonDatetimeCustomEvent, IonModalCustomEvent, IonSearchbarCustomEvent, OverlayEventDetail, SearchbarInputEventDetail } from '@ionic/core';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent  implements OnInit {

  public matches : any[] = [];
  public allMatches : any[] = [];
  public filteredMatches : any[] = [];
  public date: any ;
  public searchInput : string = "";

  public hasFilters : boolean = false;

  @ViewChild(IonModal) modal: IonModal | undefined;

  constructor(private service : LaligaapimockService) { }

  ngOnInit() {

    this.service.getMatches().subscribe((response : any) =>{ this.matches = response.response; this.allMatches = [...this.matches];});

  }

  onSelectDate($event: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
    this.date = $event.detail.value;
  }

  applyFilter() {
    console.log(this.date);
    this.matches = this.allMatches.filter(match => this.isSameDay(match.fixture.date, this.date));
    this.filteredMatches = [...this.matches];
    this.hasFilters = true;
    this.searchInput = "";
    this.modal?.dismiss();
  }

  cancel() {
    this.modal?.dismiss();
  }

  private isSameDay(date1 : string , date2 : string){

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return (d1.getFullYear() === d2.getFullYear()) && (d1.getMonth() === d2.getMonth()) && (d1.getDate() === d2.getDate());
  }

  onClearFilters() {

    this.hasFilters = false;
    this.matches = this.allMatches;
  }

  onSearch($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    if(this.hasFilters)
      this.matches = [...this.filteredMatches].filter(match => this.doesTeamNameContainsSearch($event.target.value, match) );
    else 
      this.matches = [...this.allMatches].filter(match => this.doesTeamNameContainsSearch($event.target.value, match) );
  }

  private doesTeamNameContainsSearch(search : any, match : any){
    return (match.teams.away.name.toLowerCase().includes(search.toLowerCase()) || match.teams.home.name.toLowerCase().includes(search.toLowerCase()));
  }

}
