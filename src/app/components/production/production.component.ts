import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../api.service";
import { Productions } from 'src/app/models/Productions';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  data: Productions[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getProduction().subscribe((data: Productions[]) => {
      this.data = data;
      console.log(data);
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
