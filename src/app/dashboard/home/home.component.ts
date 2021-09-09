import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EFilterChart } from 'src/app/shared/enums/filter-chart.enum';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          width: '70px',
        })
      ),
      state(
        'out',
        style({
          width: '150px',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
    trigger('slideLayout', [
      state(
        'in',
        style({
          marginLeft: '150px',
        })
      ),
      state(
        'out',
        style({
          marginLeft: '70px',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isCollapsed = true;
  eFilterChart = EFilterChart;
  typeFilterStation: string = EFilterChart.week;
  typeFilterFuel: string = EFilterChart.week;
  dataSource: any = [
    {
      id: 1,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'Selaut Budi Sdn Bhd',
          desETA: 1570104657,
          compartments: {
            number: 1,
            price: 5000,
            title: 'B10-DIESEL',
          },
        },
        {
          orderStatus: 'Delivered',
          desName: 'FS Megah Gemilang Sdn Bhd',
          desETA: 1570104657,
          compartments: {
            number: 2,
            price: 4000,
            title: 'EURO4-97',
          },
        },
        {
          orderStatus: 'Delivered',
          desName: 'Pusat Servis Hanim Sdn Bhd (S/S)',
          desETA: 1570104657,
          compartments: {
            number: 3,
            price: 0,
            title: 'EMPTY',
          },
        },
      ],
    },
    {
      id: 2,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'Swee Hup Sdn Bhd',
          desETA: 1570079434,
          compartments: {
            number: 1,
            price: 39000,
            title: 'EURO5-B7',
          },
        },
      ],
    },
    {
      id: 3,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'A G Service Station',
          desETA: 1570086634,
          compartments: {
            number: 1,
            price: 22000,
            title: 'PREMIUM-95',
          },
        },
      ],
    },
    {
      id: 4,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'Hong Bros Service Station',
          desETA: 1570086634,
          compartments: {
            number: 1,
            price: 33000,
            title: 'EURO4-97',
          },
        },
      ],
    },
    {
      id: 5,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'Selaut Budi Sdn Bhd',
          desETA: 1570104657,
          compartments: {
            number: 1,
            price: 5000,
            title: 'B10-DIESEL',
          },
        },
        {
          orderStatus: 'Delivered',
          desName: 'FS Megah Gemilang Sdn Bhd',
          desETA: 1570104657,
          compartments: {
            number: 2,
            price: 4000,
            title: 'EURO4-97',
          },
        },
        {
          orderStatus: 'Delivered',
          desName: 'Pusat Servis Hanim Sdn Bhd (S/S)',
          desETA: 1570104657,
          compartments: {
            number: 3,
            price: 0,
            title: 'EMPTY',
          },
        },
      ],
    },
    {
      id: 6,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'Swee Hup Sdn Bhd',
          desETA: 1570079434,
          compartments: {
            number: 1,
            price: 39000,
            title: 'EURO5-B7',
          },
        },
      ],
    },
    {
      id: 7,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'A G Service Station',
          desETA: 1570086634,
          compartments: {
            number: 1,
            price: 22000,
            title: 'PREMIUM-95',
          },
        },
      ],
    },
    {
      id: 8,
      child: [
        {
          orderStatus: 'Delivered',
          desName: 'Hong Bros Service Station',
          desETA: 1570086634,
          compartments: {
            number: 1,
            price: 33000,
            title: 'EURO4-97',
          },
        },
      ],
    },
  ];

  public options1: any = {
    marginLeft: 100,
    chart: {
      type: 'column',
      marginRight: 30,
      marginLeft: 70,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Station',
      align: 'left',
      x: 13,
      y: 20,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      height: '93%',
      width: '97%',
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          color: '#576d86',
          fontSize: 11,
        },
      },
    },
    yAxis: {
      height: '78%',
      top: '15%',
      title: {
        text: '',
      },
      labels: {
        format: '{value:.0f}',
        style: {
          color: '#a3afbd',
          fontSize: 9,
        },
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: false,
          // format: '{point.y:.1f}%',
        },
      },
      column: {
        pointWidth: 22,
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: 'Station',
        colorByPoint: false,
        data: [
          {
            name: 'Station A',
            y: 21000,
            drilldown: 'Station A',
            color: '#5b9bd5',
          },
          {
            name: 'Station B',
            y: 18000,
            drilldown: 'Station B',
            color: '#5b9bd5',
          },
          {
            name: 'Station C',
            y: 16000,
            drilldown: 'Station C',
            color: '#5b9bd5',
          },
          {
            name: 'Station D',
            y: 17000,
            drilldown: 'Station D',
            color: '#5b9bd5',
          },
          {
            name: 'Station E',
            y: 39000,
            drilldown: 'Station E',
            color: '#5b9bd5',
          },
          {
            name: 'Station F',
            y: 38000,
            drilldown: 'Station F',
            color: '#5b9bd5',
          },
          {
            name: 'Station G',
            y: 41000,
            drilldown: 'Station G',
            color: '#5b9bd5',
          },
          {
            name: 'Station H',
            y: 38000,
            drilldown: 'Station H',
            color: '#5b9bd5',
          },
          {
            name: 'Station I',
            y: 20000,
            drilldown: 'Station I',
            color: '#5b9bd5',
          },
          {
            name: 'Station K',
            y: 18000,
            drilldown: 'Station K',
            color: '#5b9bd5',
          },
          {
            name: 'Station L',
            y: 22000,
            drilldown: 'Station L',
            color: '#5b9bd5',
          },
          {
            name: 'Station M',
            y: 19000,
            drilldown: 'Station M',
            color: '#5b9bd5',
          },
          {
            name: 'Station N',
            y: 38500,
            drilldown: 'Station N',
            color: '#5b9bd5',
          },
        ],
      },
    ],
  };

  public options2: any = {
    chart: {
      // renderTo: 'container',
      type: 'column',
      marginRight: 30,
      marginLeft: 70,
    },
    title: {
      text: 'Fuel',
      align: 'left',
      x: 13,
      y: 20,
    },
    credits: {
      enabled: false,
    },
    legend: {},
    plotOptions: {
      series: {
        shadow: false,
        borderWidth: 0,
        pointPadding: 0,
      },
    },
    xAxis: {
      height: '93%',
      width: '97%',
      // subtitles: ['2', '-1', '4', '-3', '7'],
      categories: ['Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03'],
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#576d86',
          fontSize: 11,
        },
      },
    },
    yAxis: {
      height: '78%',
      top: '15%',
      title: {
        text: '',
      },
      labels: {
        format: '{value:.0f}',
        style: {
          color: '#a3afbd',
          fontSize: 9,
        },
      },
    },
    series: [
      {
        //	y: 0,
        //	mydata: 10,
        name: 'EURO4-97',
        data: [20100, 39700, 20000, 38000, 16000, 39500],
        color: '#e8646e',
      },
      {
        //	y: 0,
        //	mydata: 20,
        name: 'PREMIUM-95',
        data: [18000, 38000, 18000, 18000, 18500, 40500],
        color: '#ffe600',
      },
      {
        //	y: 0,
        //	mydata: 30,
        name: 'B10-DIESEL',
        data: [16000, 40500, 21000, 40000, 19200, 40000],
        color: '#c19669',
      },
      {
        //	mydata: 13,
        name: 'EURO5-B7',
        data: [17000, 39000, 19000, 22000, 22000, 21000],
        color: '#2496c9',
      },
    ],
  };

  public optionATM: any = {
    chart: {
      type: 'area',
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 70,
      backgroundColor: '#1f2b43',
    },
    title: {
      text: null,
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#2f405d',
      // itemStyle: {
      //   color: 'white', // change legend text color of definition label
      // },
    },
    xAxis: {
      tickmarkPlacement: 'on',
      type: 'category',
      startOnTick: true,
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      accessibility: {
        enabled: true,
        rangeDescription: 'Range: Monday to Sunday',
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      visible: true,
      enabled: true,
      labels: {
        enabled: false,
      },
      gridLineColor: '#30425f',
    },
    // xAxis: {
    //   allowDecimals: false,
    //   labels: {
    //     formatter: function () {
    //       return this.value; // clean, unformatted number for year
    //     },
    //   },
    //   accessibility: {
    //     rangeDescription: 'Range: 1940 to 2017.',
    //   },
    // },
    // yAxis: {
    //   title: {
    //     text: 'Nuclear weapon states',
    //   },
    //   labels: {
    //     formatter: function () {
    //       return this.value / 1000 + 'k';
    //     },
    //   },
    // },
    tooltip: {
      shared: true,
      valueSuffix: ' units',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointPlacement: 'on',
        marker: {
          enabled: false,
        },
      },
      area: {
        lineColor: '#2495c8',
      },
    },
    series: [
      {
        name: 'Forecast',
        data: [3, 4.5, 5, 4.5, 5, 8, 12],
        color: '#2f405d ',
        // type: 'arearange',
      },
    ],
  };

  public optionPie: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Quota summary',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        // name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Approved',
            y: 61.41,
            sliced: true,
            selected: true,
            color: '#1592e6',
          },
          {
            name: 'Spent',
            y: 11.84,
            color: '#62e8c8',
          },
          {
            name: 'Remaining',
            y: 10.85,
            color: '#fee43f',
          },
        ],
      },
    ],
  };

  public optionPieChart2: any = {
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Quota Summary',
      align: 'left',
      x: 13,
      y: 20,
      style: {
        color: 'red',
      },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      itemStyle: {
        color: 'red', // change legend text color of definition label
      },
    },
    series: [
      {
        innerSize: '32%',
        borderWidth: 8,
        borderColor: '#fff',
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Approved',
            y: 50,
            color: '#1592e6',
          },
          {
            name: 'Spent',
            y: 40,
            color: '#62e8c8',
          },
          {
            name: 'Remaining',
            y: 10,
            color: '#fee43f',
          },
        ],
      },
    ],
  };

  public optionLineChart: any = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Sales Forecast Vs Actual',
      align: 'left',
      x: 13,
      y: 20,
      style: {
        color: 'red',
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      // layout: 'vertical',
      align: 'left',
      style: {
        fontFamily: 'circle',
        fontSize: '1.2em',
      },
      symbolWidth: 5,
      symbolHeight: 20,
      squareSymbol: false,
      // verticalAlign: 'top',
      // x: -150,
      // y: 100,
      // floating: true,
      // borderWidth: 1,
      // backgroundColor: '#2f405d',
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: '%e. %b',
        year: '%b',
      },
      title: {
        text: null,
      },
      plotBands: [
        {
          from: Date.UTC(2021, 0, 1),
          to: Date.UTC(2021, 3, 5),
          color: '#1d2b43',
          borderColor: '#7d8f9f',
          borderWidth: 1,
          label: {
            text: 'Current Time',
            style: {
              color: '#1d2b43',
              fontSize: '0.9em',
              // position: 'absolute',
              // fontFamily: 'monospace',
            },
            verticalAlign: 'top',
            x: 125,
            y: 40,
            rotation: 270,
          },
        },
      ],
    },
    yAxis: {
      title: {
        text: null,
      },
      min: 0,
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} m',
    },

    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [
      {
        marker: {
          enabledThreshold: 3,
          symbol: 'circle',
        },
        name: 'Actual',
        data: [
          [Date.UTC(2021, 0, 1), 60],
          [Date.UTC(2021, 0, 20), 45],
          [Date.UTC(2021, 1, 1), 50],
          [Date.UTC(2021, 1, 15), 65],
          [Date.UTC(2021, 2, 3), 85],
          [Date.UTC(2021, 2, 15), 50],
          [Date.UTC(2021, 3, 1), 9],
          [Date.UTC(2021, 3, 5), 0],
        ],
        color: '#5ddabe',
      },
      {
        marker: {
          enabledThreshold: 3,
          symbol: 'circle',
        },
        name: 'Forecast',
        data: [
          [Date.UTC(2021, 0, 1), 42],
          [Date.UTC(2021, 0, 20), 25],
          [Date.UTC(2021, 1, 1), 30],
          [Date.UTC(2021, 1, 15), 40],
          [Date.UTC(2021, 2, 3), 45],
          [Date.UTC(2021, 2, 15), 42],
          [Date.UTC(2021, 3, 1), 40],
          [Date.UTC(2021, 3, 10), 38],
          [Date.UTC(2021, 4, 15), 41],
          [Date.UTC(2021, 4, 20), 46],
          [Date.UTC(2021, 5, 25), 60],
          [Date.UTC(2021, 5, 30), 50],
          [Date.UTC(2021, 6, 5), 47],
          [Date.UTC(2021, 6, 11), 41],
          [Date.UTC(2021, 7, 17), 47],
          [Date.UTC(2021, 7, 20), 42],
          [Date.UTC(2021, 8, 10), 35],
          [Date.UTC(2021, 8, 30), 38],
          [Date.UTC(2021, 9, 5), 48],
          [Date.UTC(2021, 9, 26), 42],
          [Date.UTC(2021, 10, 19), 40],
          [Date.UTC(2021, 10, 20), 45],
          [Date.UTC(2021, 11, 2), 47],
          [Date.UTC(2021, 11, 7), 60],
        ],
        color: '#2391c3',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            plotOptions: {
              series: {
                marker: {
                  enabled: false,
                },
              },
            },
          },
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {
    // Highcharts.chart('stationChart', this.options1);
    // Highcharts.chart('fuelChart', this.options2);
    Highcharts.chart('ATMChart', this.optionATM);
    // Highcharts.chart('pieChart', this.optionPieChart2);
    Highcharts.chart('lineChart', this.optionLineChart);
  }

  filterChartStation(type: string): void {
    this.typeFilterStation = type;
  }

  filterChartFuel(type: string): void {
    this.typeFilterFuel = type;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
