import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nflsearch',
  templateUrl: './nflsearch.component.html',
  styleUrls: ['./nflsearch.component.css']
})
export class NflsearchComponent implements OnInit {
	currentSeason;
	currentWeek;	
	playersArray = [];
	seasonPts; 
	nflSearch(season, week){
		//let url = //"http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&week=3&position=QB&name=" + firstName + lastName + "&season=2017&format=json" + d;//
		let url = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&week=" + week + "&position=QB&playerid=2552466&season="+ season + "&format=json";
		this.http.get(url).toPromise().then( data  =>{
			this.currentSeason = data["season"];
			this.currentWeek = data["week"];
			this.playersArray = data["players"];
			this.seasonPts = data["seasonPts"];
			console.log(this.playersArray);


		});
	}

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
