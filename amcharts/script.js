/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(100, 20, 50, 20);
chart.levelCount = 2;
chart.yAxisRadius = am4core.percent(20);
chart.yAxisInnerRadius = am4core.percent(2);
chart.maskBullets = false;

var colorSet = new am4core.ColorSet();

chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
chart.dateFormatter.dateFormat = "yyyy-MM-dd";

chart.data = [{
    "category": "",
    "start": "2019-01-12",
    "end": "2019-03-15",
    "color": colorSet.getIndex(15),
    "text": "Ideation, Market Research",
    "textDisabled": false,
    "icon": ""
}, {
    "category": "",
    "start": "2019-03-12",
    "end": "2019-04-14",
    "text": "Product, market fit",
    "textDisabled": false,
    "color": colorSet.getIndex(14),
    "icon": "/wp-content/uploads/assets/timeline/timeline1.svg"
},
{
    "category": "",
    "start": "2019-04-12",
    "end": "2019-07-12",
    "text": "MVP launch",
    "textDisabled": false,
    "color": colorSet.getIndex(13),
    "icon": "https://www.flaticon.com/free-icon/gantt-chart_2657900"
},
{
    "category": "",
    "start": "2019-06-12",
    "end": "2019-09-12",
    "text": "Reported MVP results",
    "textDisabled": false,
    "color": colorSet.getIndex(12),
    "icon": "/wp-content/uploads/assets/timeline/timeline2.svg"
},
{
    "category": "",
    "start": "2019-09-12",
    "end": "2019-11-12",
    "color": colorSet.getIndex(9),
    "text": "10.000 user target accomplished",
    "textDisabled": false,
    "textDisabled": false,
    "icon": "/wp-content/uploads/assets/timeline/timeline3.svg"
},
{
    "category": "",
    "start": "2019-11-12",
    "end": "2020-01-12",
    "text": "Exit 1 ",
    "textDisabled": false,
    "color": colorSet.getIndex(8),
    "icon": "/wp-content/uploads/assets/timeline/timeline2.svg"
},
{
    "category": "",
    "start": "2020-01-12",
    "end": "2020-03-12",
    "text": "Exit 2",
    "textDisabled": false,
    "color": colorSet.getIndex(7),
    "icon": "/wp-content/uploads/assets/timeline/timeline4.svg"
},
{
    "category": "",
    "start": "2020-03-12",
    "end": "2020-03-16",
    "text": "Exit 3 ",
    "textDisabled": false,
    "color": colorSet.getIndex(8),
    "icon": "/wp-content/uploads/assets/timeline/timeline2.svg"
}];

chart.fontSize = 16;
chart.tooltipContainer.fontSize = 11;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.minGridDistance = 10;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 30, timeUnit: "day" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.5;
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
dateAxis.tooltip.label.paddingTop = 7;
dateAxis.endLocation = 0;
dateAxis.startLocation = -0.5;

var labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.4;
labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);

var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(15);

series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.baseAxis = categoryAxis;
series.columns.template.propertyFields.fill = "color"; // get color from data
series.columns.template.propertyFields.stroke = "color";
series.columns.template.strokeOpacity = 0;
series.columns.template.fillOpacity = 0.6;

var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.locationX = 1;
imageBullet1.propertyFields.stroke = "color";
imageBullet1.background.propertyFields.fill = "color";
imageBullet1.image = new am4core.Image();
imageBullet1.image.propertyFields.href = "icon";
imageBullet1.image.scale = 0.5;
imageBullet1.circle.radius = am4core.percent(100);
imageBullet1.dy = -5;


var textBullet = series.bullets.push(new am4charts.LabelBullet());
textBullet.label.propertyFields.text = "text";
textBullet.disabled = true;
textBullet.propertyFields.disabled = "textDisabled";
textBullet.label.strokeOpacity = 0;
textBullet.locationX = 1;
textBullet.dy = - 100;
textBullet.label.textAlign = "middle";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.align = "center"
chart.scrollbarX.width = am4core.percent(75);
chart.scrollbarX.opacity = 0.5;

var cursor = new am4plugins_timeline.CurveCursor();
chart.cursor = cursor;
cursor.xAxis = dateAxis;
cursor.yAxis = categoryAxis;
cursor.lineY.disabled = true;
cursor.lineX.strokeDasharray = "1,4";
cursor.lineX.strokeOpacity = 1;

dateAxis.renderer.tooltipLocation2 = 0;
categoryAxis.cursorTooltipEnabled = false;


var label = chart.createChild(am4core.Label);
label.text = "Flowmagic, Time tracking tool for freelancers and teams."
label.isMeasured = false;
label.y = am4core.percent(50);
label.x = am4core.percent(50);
label.horizontalCenter = "middle";
label.fontSize = 20;