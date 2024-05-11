// search-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  username: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.username);
  }
}
