import { Injectable } from "@angular/core";
declare var toastr: any;
@Injectable()
export class ToastServiceService {
  constructor() {}

  Success(title: string, message?: string) {
    toastr.success(title, message);
  }
  Warning(title: string, message?: string) {
    toastr.warning(message, title);
  }
  Error(title: string, message: string) {
    toastr.error(message, title);
  }
  Info(message: string) {
    toastr.info(message);
  }
}
