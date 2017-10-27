import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'financeFilter',
  pure: false
})
export class FinanceFilterPipe implements PipeTransform {
  transform(items: any, filter: any) {
    if (!items || !filter) {
      return items;
    }
    var startDate: Date
    var endDate: Date
    if (filter.month == '12') {
      startDate = new Date(filter.year, 0, 1)
      endDate = new Date(filter.year, 11, 31)
    } else {
      var nextMonth = parseInt(filter.month) + 1
      startDate = new Date(filter.year, filter.month, 1)
      endDate = new Date(filter.year, nextMonth, 0)
    }
    return items.filter(item => item.type_name == filter.type_name && new Date(item.date) > startDate && new Date(item.date) < endDate)
  }
}
