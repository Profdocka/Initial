import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  url = "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/";
  //header = new HttpHeaders({'Client-ID': '56pmsmf23lb6a8rn0z6t8vvg47r0a2' , 'Authorization': "Bearer ud22j0xr53lb06mep6au7m8mxcogx3"});
  header = new HttpHeaders()
  .set('Client-ID','56pmsmf23lb6a8rn0z6t8vvg47r0a2')
  .set('Authorization', "Bearer ud22j0xr53lb06mep6au7m8mxcogx3")
  params = new HttpParams().set("fields", "*").set("search", "Valorant");

  constructor(private http: HttpClient) {
    this.http.get(this.url, {headers :this.header, params: this.params}).subscribe(data => console.log(data));
  }

  ngOnInit() {
    
  }
}
//Hier hat Kaiwen 17 Stifte, eine Karotte und ein USB Kabel ins Anus gesteckt
//d 
// 