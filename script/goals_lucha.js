const data = [{"Typ":0,"Amount":{"Valid":true,"Int32":8},"Entity":3},{"Typ":0,"Amount":{"Valid":true,"Int32":4},"Entity":60},{"Typ":0,"Amount":{"Valid":true,"Int32":10},"Entity":33},{"Typ":0,"Amount":{"Valid":true,"Int32":4},"Entity":59},{"Typ":0,"Amount":{"Valid":true,"Int32":500},"Entity":73},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":48},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":7},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":23},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":16},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":55},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":4},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":34},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":25},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":62},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":10},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":61},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":9},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":2},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":8},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":5},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":64},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":13},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":32},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":26},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":22},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":49},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":52},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":6},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":21},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":27},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":112},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":28},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":35},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":69},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":58},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":12},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":18},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":57},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":63},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":15},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":50},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":20},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":19},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":29},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":24},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":14},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":65},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":68},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":51},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":53},{"Typ":0,"Amount":{"Valid":false,"Int32":0},"Entity":54},{"Typ":4,"Custom":{"Valid":true,"String":"Faire une seule ville"},"last":true}];

for (const goal of data) {
    bindGoal(goal);
    if (!goal.last) {
        addAGoal(true);
    }
}