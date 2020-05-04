import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, Input } from '@angular/core';
import { DISPLAYED_FINNACE_COLUMNS } from '../../../data/data';
import { FinanceAction } from '../../../model/model';

@Component({
  selector: 'finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss']
})
export class FinanceTableComponent implements OnInit {

  financeColumns = DISPLAYED_FINNACE_COLUMNS;

  constructor() { }

  dataSource: MatTableDataSource<any>;

  public _dataArray: any[];

  @Input()
  public get dataArray(): FinanceAction[] {
    return this._dataArray;
  }
  public set dataArray(value: FinanceAction[]) {
    this._dataArray = value;
    this.dataSource = new MatTableDataSource(this._dataArray);
  }

  ngOnInit(): void {
  }

}
