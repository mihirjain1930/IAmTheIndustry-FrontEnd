import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css'],
  providers: [LoginService]
})
export class LeftBarComponent implements OnInit {

  getDetail: Promise<any>;
  name: string;
  constructor(
    private service: LoginService
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    let id = localStorage.getItem('id');
    this.getDetail = this.service.getDetails(id).then(
      (res: any) => {
        if (res.status == 200) {
          this.name = res.data.name;
        }
      }
    )
  }

}
