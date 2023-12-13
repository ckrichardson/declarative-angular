import { TestBed } from "@angular/core/testing";

import { ToDoService } from "./to-do-service.service";
import { Observable } from "rxjs";
import { ToDoModel } from "./model/to-do-model";

describe("ToDoService", () => {
  let service: ToDoService;
  let vm: ToDoModel;

  beforeEach(async () => {
    service = new ToDoService();

    service.vm$.subscribe((_vm) => (vm = _vm));
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("vm$", () => {
    it("should return view model observable", () => {
      expect(service.vm$).toBeInstanceOf(Observable);
    });
  });

  describe("vm", () => {
    it("should return the value of the observable", () => {
      expect(service.vm).toBeInstanceOf(Object);
    });
  });

  describe("Add Item", () => {
    it("should add item to list of items", () => {
      service.addItem("test");

      expect(vm.toDoItems().length).toBe(1);
    });
  });

  describe("Remove Item", () => {
    it("should remove an item from list of items", () => {
      service.addItem("test");
      service.removeItem(0);

      expect(vm.toDoItems().length).toBe(0);
    });
  });

  describe("Save List", () => {
    it("should set showDelete to false", () => {
      service.save();

      expect(vm.showDelete()).toBeFalse();
    });
  });

  describe("Edit List", () => {
    it("should set showDelete to true", () => {
      service.edit();

      expect(vm.showDelete()).toBeTrue();
    });
  });

  describe("Clear List", () => {
    it("should set showDelete to true and empty the item list", () => {
      service.addItem("test");
      service.save();

      service.clear();

      expect(vm.showDelete()).toBeTrue();
      expect(vm.toDoItems().length).toBe(0);
    });
  });
});
