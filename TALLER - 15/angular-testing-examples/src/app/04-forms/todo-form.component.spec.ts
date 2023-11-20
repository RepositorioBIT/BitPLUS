import { FormBuilder, Validators } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    component = new TodoFormComponent(formBuilder);
  });

  it('should create a form with name field as required', () => {
    const nameControl = component.form.get('name');
    expect(nameControl).toBeDefined();
    expect(nameControl?.validator).toEqual(Validators.required);
  });

  it('should create a form with email field without required validator', () => {
    const emailControl = component.form.get('email');
    expect(emailControl).toBeDefined();
    expect(emailControl?.validator).toBeNull();
  });

  it('should initialize form with default values', () => {
    const defaultValues = {
      name: '',
      email: ''
    };
    expect(component.form.value).toEqual(defaultValues);
  });

  // You can add more specific tests for form validation behaviors here
});