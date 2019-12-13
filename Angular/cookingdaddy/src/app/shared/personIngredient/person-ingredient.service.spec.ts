import { TestBed } from '@angular/core/testing';

import { PersonIngredientService } from './person-ingredient.service';

describe('PersonIngredientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonIngredientService = TestBed.get(PersonIngredientService);
    expect(service).toBeTruthy();
  });
});
