import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-jira-login',
  templateUrl: './jira-login.component.html',
  styleUrls: ['./jira-login.component.css']
})
export class JiraLoginComponent implements OnInit {

  url: string;
  username: string;
  password: string;

  jsessionid: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public login() {
    let fullUrl = this.url.startsWith("http") ? this.url : "https://" + this.url;
    let authUrl = fullUrl + "/rest/auth/1/session";

    console.log("Logging in to [" + fullUrl + "] using username [" + this.username + "] with password [*****]");

    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set("Access-Control-Allow-Origin", "*");

    this.http.post(authUrl, { "username": this.username, "password": this.password }, { headers: httpHeaders })
      .subscribe(data => {
        console.log(data);
      });

    // let queryUrl = fullUrl + "/rest/api/2/search";
    // this.http.post(queryUrl, { "jql": "issuetype = \"Code Blue\"", "maxResults": 5, "fields": ["key", "created", "customfield_13202", "reporter", "assignee", "status", "summary", "customfield_12603", "customfield_13203", "customfield_13302", "customfield_13207", "customfield_13206", "issuelinks"] })
    //   .subscribe(data => {
    //     console.log(data);
    //   });

  }
}
