import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  url = "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/v4/games";
  header = new HttpHeaders({"Client-ID": "56pmsmf23lb6a8rn0z6t8vvg47r0a2" , 'Authorization' : "Bearer ud22j0xr53lb06mep6au7m8mxcogx3"})
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.post(this.url, {headers: this.header}).subscribe(data => console.log(data));
  }
}

//d 