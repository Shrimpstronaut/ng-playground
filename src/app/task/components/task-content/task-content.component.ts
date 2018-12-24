import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.sass']
})
export class TaskContentComponent implements OnInit {
  taskId: number;
  tabs = ['detail', 'notes', 'history'];
  selectedTab = new FormControl(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // check for updates on the route parameters
    this.route.params.subscribe(params => {
      this.taskId = Number(params.id);
    });

    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.hasOwnProperty('tab')) {
        this.selectedTab.setValue( this.tabs.indexOf(queryParams.tab));
      } else {
        this.selectedTab.setValue(0);
      }
    });
  }

  onTabSelect(selectedTabIndex) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: this.tabs[selectedTabIndex]
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });
  }

}
