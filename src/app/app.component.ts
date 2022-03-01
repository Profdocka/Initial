import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient) {
    let url = "https://api.igdb.com/v4/games";
    let header = new HttpHeaders({"Client-ID": "56pmsmf23lb6a8rn0z6t8vvg47r0a2" , Authorization : "Bearer ud22j0xr53lb06mep6au7m8mxcogx3"})
    http.post(url, {headers: header}).subscribe( => { data.log(data)});
  }
}

//d 