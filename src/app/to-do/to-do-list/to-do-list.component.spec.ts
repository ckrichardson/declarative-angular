import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ToDoListComponent } from "./to-do-list.component";
import { ToDoService } from "../service/to-do-service.service";
import { toDoServiceMock } from "../../mocks/to-do-service-mock";
import { ToDoModel } from "../service/model/to-do-model";
import { Observable } from "rxjs";

describe("ToDoListComponent", () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;
  let removeSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListComponent],
    }).compileComponents();

    TestBed.overrideProvider(ToDoService, {
      useFactory: () => toDoServiceMock,
    });

    const service = TestBed.inject(ToDoService);

    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;

    component.vm = service.vm;

    removeSpy = spyOn(service, "removeItem");

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("onClick", () => {
    it("should create copy of array with one less item", () => {
      component.onClick(0);

      expect(toDoServiceMock.removeItem).toHaveBeenCalled();
    });
  });
});
