import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ToDoService } from "./to-do/service/to-do-service.service";
import { toDoServiceMock } from "./to-do/service/mocks/to-do-service-mock";

describe("AppComponent", () => {
  beforeEach(async () => {
    let service: ToDoService;

    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    TestBed.overrideProvider(ToDoService, {
      useFactory: () => toDoServiceMock,
    });

    service = TestBed.inject(ToDoService);
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
