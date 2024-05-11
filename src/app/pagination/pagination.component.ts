// pagination.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'] 
})

export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 0;

  constructor() { }

  ngOnChanges() {
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  onNext() {
    this.onPageChange(this.currentPage + 1);
  }

  onPrevious() {
    this.onPageChange(this.currentPage - 1);
  }

  onPageSizeChange(event: any) {
    const size = parseInt((event.target as HTMLSelectElement)?.value, 10);
    if (!isNaN(size)) {
      this.pageSize = size;
      this.pageSizeChange.emit(this.pageSize);
    }
  }
}
