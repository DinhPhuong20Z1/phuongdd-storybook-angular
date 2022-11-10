import {Input, Component, Injectable, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';

@Injectable()
export class FiveDayRangeSelectionStrategy<D>
  implements MatDateRangeSelectionStrategy<D>
{
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'lib-component-date-picker',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Enter a date range</mat-label>
      <mat-date-range-input [rangePicker]="picker">
        <input matStartDate placeholder="Start date" />
        <input matEndDate placeholder="End date" />
      </mat-date-range-input>
      <mat-hint> {{label}} </mat-hint>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker nextYearLabel="abc" #picker></mat-date-range-picker>
    </mat-form-field>

  `,
  styles: [],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
  ],
})
export class ComponentDatePickerComponent implements OnInit {
  @Input() label = 'MM/DD/YYYY – MM/DD/YYYY';

  constructor() {}

  ngOnInit(): void {}
}
