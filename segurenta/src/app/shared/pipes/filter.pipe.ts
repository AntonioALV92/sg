import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    let filteredList = [];
    if (items.length > 0) {
      searchText = searchText.toLowerCase();
      items.forEach(item => {
        // Object.values(item) => gives the list of all the property values of the 'item' object
        const propValueList = Object.values(item);
        for (let i = 0; i < propValueList.length; i++) {
          if (propValueList[i]) {
            if (propValueList[i].toString().toLowerCase().indexOf(searchText) > -1) {
              filteredList.push(item);
              break;
            }
          }
        }
        // for (let item of propValueList) {
        //   debugger;
        //   if (item) {
        //     console.log(item);
        //     if (item.toString().toLowerCase().indexOf(searchText) > -1) {
        //       console.log(item);
        //       filteredList.push(item);
        //       break;
        //     }
        //   }
        // }
      });
    }
    return filteredList;
    // return items.filter( it => {
    //   return it.toLowerCase().includes(searchText);
    // });
   }
}
