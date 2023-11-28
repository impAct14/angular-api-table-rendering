import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data: { id: number; name: string; email: string }[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getData().subscribe((data: { id: number; name: string; email: string; }[]) => {
      this.data = data;
      console.log(data);
    });
  }
}
