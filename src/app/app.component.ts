import {Component, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {GridOptions} from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aggridbug';

  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  gridOptions: GridOptions = {};

  columnDefs = [
    {
      field: 'id',
    },
    {
      field: 'name',
      wrapText: true,
      width: 150,
      autoHeight: true,
    },
    {
      field: 'price',
    },
  ];

  rowData = this.fillData(50);

  tableWidth = 500;

  tableHeight = 600;

  rowHeight = 60;

  onGridReady(params: any) {}

  fillData(rows: number): any[] {
    const data = [];
    for (let i = 0; i < rows; i++) {
      data.push({
        id: i,
        name: 'Long long long long long long long long long name' + i,
        price: i * 1000,
      });
    }
    return data;
  }
}
