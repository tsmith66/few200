import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ListComponent } from './components/list/list.component';
import { EntityComponent } from './components/entity/entity/entity.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './effects/books.effects';

@NgModule({
  declarations: [BooksComponent, ListComponent, EntityComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([BooksEffects])
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
