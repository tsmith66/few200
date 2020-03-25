import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BookListItem } from 'src/app/features/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() books: BookListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
