import { ChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  let component: ChartsComponent;

  beforeEach(() => {
    component = new ChartsComponent();
  });

  it('the component successfully had the data when intialized', () => {
    expect(component.data).not.toBeNull();
  });

  it('the color schema is set successfully', () => {
    component.ngOnInit();
    expect(component.colorScheme.domain.length).toBeGreaterThan(0);
  });

});
