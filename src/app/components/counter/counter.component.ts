import { CommonModule } from '@angular/common';
import { counterReducer } from './../../ngrx/reducers/counter.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: any;

  constructor(private store: Store) {
    this.count$ = this.store.select((state: any) => state.counterReducer);
  }

  incrementCount() {
    // Dispatch 'increment' Action
    this.store.dispatch(increment());
  }
  decrementCount() {
    this.store.dispatch(decrement());
  }
  resetCount() {
    this.store.dispatch(reset());
  }

}
