import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ToDoComponent } from "./to-do.component";
import { ToDoService } from "./service/to-do-service.service";
import { toDoServiceMock } from "./service/mocks/to-do-service-mock";

describe("ToDoListComponent", () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;
  let saveSpy: jasmine.Spy<() => void>;
  let editSpy: jasmine.Spy<() => void>;
  let clearSpy: jasmine.Spy<() => void>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToDoComponent],
    }).compileComponents();

    TestBed.overrideProvider(ToDoService, {
      useFactory: () => toDoServiceMock,
    });

    const service = TestBed.inject(ToDoService);

    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    component.vm = service.vm;

    saveSpy = spyOn(toDoServiceMock, "save");
    editSpy = spyOn(toDoServiceMock, "edit");
    clearSpy = spyOn(toDoServiceMock, "clear");

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("onSave", () => {
    it("should call save on the ToDoService", () => {
      component.onSave();

      expect(saveSpy).toHaveBeenCalled();
    });
  });
  describe("onEdit", () => {
    it("should call edit on the ToDoService", () => {
      component.onEdit();

      expect(editSpy).toHaveBeenCalled();
    });
  });
  describe("onClear", () => {
    it("should call clear on the ToDoService", () => {
      component.onClear();

      expect(clearSpy).toHaveBeenCalled();
    });
  });
});
