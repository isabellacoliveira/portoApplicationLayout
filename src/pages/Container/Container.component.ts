import { ContainerService } from './../../Services/Container/container.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContainer } from 'src/interfaces/Container/IContainer';

@Component({
  selector: 'app-Container',
  templateUrl: './Container.component.html',
  styleUrls: ['./Container.component.css']
})
export class ContainerComponent implements OnInit {
  subscriptions$ = new Subscription();
  containers: IContainer[];

  constructor(private containerService: ContainerService) { }
  ngOnInit() {
    this.getContainer();
  }

  async getContainer() {
    this.subscriptions$.add(
      this.containerService
        .getContainer({
          skip: 1,
          take: 20
        })
        .subscribe({
          next: ({ data }) => {
            this.containers = data;
          }
        })
    );
  }

}
