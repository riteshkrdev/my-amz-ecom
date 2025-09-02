import { Component, ViewChild } from '@angular/core';
import { Loader } from 'src/app/common/components/loader/loader';
import { NgClass } from '@angular/common';
import { ClickOutside } from 'src/app/common/directive/click-outside';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'shop-dashboard',
  imports: [Loader, NgClass, ClickOutside, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  openDropdownSales: boolean = false;
  openDropdownTarget: boolean = false;
  isLoaded = false;
  constructor() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
  }

  public doughnutChartOption: ChartConfiguration<'doughnut'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // hides vertical grid lines
          offset: true,
        },
      },
      y: {
        grid: {
          display: false, // hides horizontal grid lines
          offset: true,
        },
      },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        barPercentage: 0.5,
        borderColor: 'rgb(70, 95, 255)',
        backgroundColor: 'rgb(70, 95, 255)',
        borderRadius: 20,
        barThickness: 20,
        maxBarThickness: 25,
        minBarLength: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 40, 100, 10, 12, 15],
      },
    ],
  };

  public doughnutChartLabels: string[] = ['Monthly Targets'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [75, 25],
        borderColor: ['rgb(70, 95, 255)', '#e8ebef'],
        backgroundColor: ['rgb(70, 95, 255)', '#e8ebef'],
        rotation: -90,
        circumference: 180,
      },
    ],
  };
  public doughnutChartType = 'doughnut' as const;

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }

  onClickSalesMenu(event: Event) {
    event.stopPropagation();
    this.openDropdownSales = !this.openDropdownSales;
  }

  onClickOutsideSalesMenu() {
    this.openDropdownSales = !this.openDropdownSales;
  }

  onMonthlyTarget(event: Event) {
    event.stopPropagation();
    this.openDropdownTarget = !this.openDropdownTarget;
  }
  onOutsideMonthlyTarget() {
    this.openDropdownTarget = !this.openDropdownTarget;
  }
}
