import { Pipe, PipeTransform } from "@angular/core";
import { Inventary } from "./models/inventary.model";

@Pipe({
  name: "filterInventary"
})
export class FilterInventaryPipe implements PipeTransform {
  transform(inventary: any, term?: any): Inventary[] {
    if (!inventary || !inventary) {
      return inventary;
    }

    return inventary.filter(
      inventary,
      row =>
        row.InvetaryDescription && row.InvetaryDescription.indexOf(term) > -1
    );
  }
}
