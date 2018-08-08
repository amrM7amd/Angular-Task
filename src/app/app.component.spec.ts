import { AppComponent } from './app.component';
describe('AppComponent', () => {
  it('The chart type updated successfully', () => {
    let app = new AppComponent();
    app.select({id: 1, type: 'pie-chart'});
    expect(app.selection).toBe('pie-chart');
  });
});
