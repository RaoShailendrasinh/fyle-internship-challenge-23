// app.component.ts
import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';
  repositories: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  isLoading: boolean = false;

  constructor(private githubService: GithubService) {}

  searchRepositories() {
    if (!this.username) return;
    this.isLoading = true;
    this.githubService.getRepositories(this.username, this.currentPage, this.pageSize)
      .subscribe(
        (repos) => {
          this.repositories = repos;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching repositories:', error);
          this.isLoading = false;
        }
      );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchRepositories();
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.searchRepositories();
  }

  errorMessage: string | undefined;
}


