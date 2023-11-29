import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import { Users } from 'src/app/models/Users';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data: Users[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getData().subscribe((data: Users[]) => {
      this.data = data;
      console.log(data);
    },
      (error) => {
        console.error(error);
      }
    );
  }
}
