import { Component, OnInit } from '@angular/core';
import { Page, User } from './app-interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  responsePage: Page[] = [
    {
      numberPage: 1,
      selected: false,
      user: [
        {
          name: 'emin',
          surname: 'meral',
          birthday: 1993,
          userLine: 1,
        },
        {
          name: 'oğuzhan',
          surname: 'yalçınkaya',
          birthday: 1993,
          userLine: 2,
        },
        {
          name: 'ebru',
          surname: 'aslan',
          birthday: 1993,
          userLine: 3,
        },
      ],
    },
    {
      numberPage: 2,
      selected: false,
      user: [
        {
          name: 'batuhan',
          surname: 'ayçiçek',
          birthday: 1993,
          userLine: 4,
        },
        {
          name: 'mine',
          surname: 'çetin',
          birthday: 1993,
          userLine: 5,
        },
        {
          name: 'deniz',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 6,
        },
      ],
    },
    {
      numberPage: 3,
      selected: false,
      user: [
        {
          name: 'gökhan',
          surname: 'gümüşboğa',
          birthday: 1993,
          userLine: 7,
        },
        {
          name: 'kübra',
          surname: 'turfan',
          birthday: 1993,
          userLine: 8,
        },
        {
          name: 'oğuz',
          surname: 'turfan',
          birthday: 1993,
          userLine: 9,
        },
      ],
    },
    {
      numberPage: 4,
      selected: false,
      user: [
        {
          name: 'berra',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 10,
        },
        {
          name: 'büşra',
          surname: 'akyıldız',
          birthday: 1993,
          userLine: 11,
        },
        {
          name: 'hanife',
          surname: 'akyıldız',
          birthday: 1993,
          userLine: 12,
        },
      ],
    },
    {
      numberPage: 5,
      selected: false,
      user: [
        {
          name: 'ceyda',
          surname: 'oğuz',
          birthday: 1993,
          userLine: 13,
        },
        {
          name: 'soner',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 14,
        },
        {
          name: 'sinan',
          surname: 'oğuz',
          birthday: 1993,
          userLine: 15,
        },
      ],
    },
    {
      numberPage: 6,
      selected: false,
      user: [
        {
          name: 'eren',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 16,
        },
        {
          name: 'ali',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 17,
        },
        {
          name: 'irem',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 18,
        },
      ],
    },
    {
      numberPage: 7,
      selected: false,
      user: [
        {
          name: 'berk',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 19,
        },
        {
          name: 'yaren',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 20,
        },
        {
          name: 'ela',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 21,
        },
      ],
    },
    {
      numberPage: 8,
      selected: false,
      user: [
        {
          name: 'çınar',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 22,
        },
        {
          name: 'taylan',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 23,
        },
        {
          name: 'cemre',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 24,
        },
      ],
    },
    {
      numberPage: 9,
      selected: false,
      user: [
        {
          name: 'toprak',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 25,
        },
        {
          name: 'mine',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 26,
        },
        {
          name: 'seher',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 27,
        },
      ],
    },
    {
      numberPage: 10,
      selected: false,
      user: [
        {
          name: 'elvin',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 28,
        },
        {
          name: 'soner',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 29,
        },
        {
          name: 'atlas',
          surname: 'sumaktaş',
          birthday: 1993,
          userLine: 30,
        },
      ],
    },
  ];
  selectedPage: Page;
  currentPage: number = 1;
  pageSize: number;
  lastIndexPage: number;
  nextPage: number;
  previousPage: number;
  lastPage: Page;
  firstPage: Page;
  users: User[];

  constructor() {}

  ngOnInit() {
    this.pageSize = this.responsePage.length;
    this.lastIndexPage = this.pageSize - 1;
    console.warn('this.lastIndexPage', this.lastIndexPage);
    console.warn('this.pageSize)', this.pageSize);
    this.defaultSelected();
  }

  defaultSelected() {
    this.selectedPage = this.responsePage[0];
    this.users = this.responsePage[0].user;
    this.selectedPage.selected = true;
    this.currentPage = 1;
    this.nextPage = 2;
    this.previousPage = 0;
    console.warn(this.selectedPage);
  }

  next() {
    if (this.selectedPage === this.responsePage[0]) {
      this.selectedPage.selected = false;
      this.currentPage++;
      this.selectedPage = this.responsePage[1];
      this.users = this.responsePage[1].user;

      this.selectedPage.selected = true;
      this.nextPage++;
      this.previousPage++;
    } else if (
      this.selectedPage.numberPage <
      this.responsePage[this.lastIndexPage].numberPage
    ) {
      this.currentPage++;

      this.responsePage.filter((item) => {
        if (item.numberPage === this.currentPage) {
          this.selectedPage.selected = false;
          this.selectedPage = item;
          item.selected = true;
          this.users = item.user;

          this.nextPage++;
          this.previousPage++;
        }
      });
    } else if (
      this.selectedPage.numberPage ===
      this.responsePage[this.lastIndexPage].numberPage
    ) {
      this.currentPage = this.pageSize;
      this.nextPage = this.pageSize + 1;
      this.previousPage = this.pageSize - 1;
    }
    console.warn('this.currentPage', this.currentPage);
    console.warn('this.nextPage', this.nextPage);
    console.warn('this.previousPage', this.previousPage);
  }

  previous() {
    if (this.selectedPage === this.responsePage[0]) {
      this.selectedPage = this.responsePage[0];
      this.selectedPage.selected = true;
      this.users = this.responsePage[0].user;
      this.nextPage = 2;
      this.previousPage = 0;
    } else if (
      this.selectedPage.numberPage > 1 &&
      this.selectedPage.numberPage <
        this.responsePage[this.lastIndexPage].numberPage
    ) {
      this.currentPage--;
      this.responsePage.filter((item) => {
        if (item.numberPage === this.currentPage) {
          this.selectedPage.selected = false;
          this.selectedPage = item;
          item.selected = true;
          this.users = item.user;

          this.nextPage--;
          this.previousPage--;
        }
      });
    } else if (
      this.selectedPage.numberPage ===
      this.responsePage[this.lastIndexPage].numberPage
    ) {
      this.currentPage = this.lastIndexPage;
      this.nextPage = this.currentPage + 1;
      this.previousPage = this.currentPage - 1;
      this.responsePage.filter((item) => {
        if (item.numberPage === this.currentPage) {
          console.warn(item);
          this.selectedPage.selected = false;
          this.selectedPage = item;
          item.selected = true;
          this.users = item.user;
        }
      });
    }
    console.warn('this.currentPage', this.currentPage);
    console.warn('this.nextPage', this.nextPage);
    console.warn('this.previousPage', this.previousPage);
  }

  last() {
    this.selectedPage = this.responsePage[this.lastIndexPage];
    this.selectedPage.selected = true;
    this.currentPage = this.pageSize;
    this.nextPage = this.currentPage + 1;
    this.previousPage = this.currentPage - 1;

    this.responsePage.filter((item) => {
      item.numberPage === this.currentPage ? (this.users = item.user) : '';
    });

    console.warn(this.selectedPage);
  }

  selectPage(selectPage: number) {
    console.warn('click', selectPage);
    console.warn('this.selectedPage', this.selectedPage);
  }
}
