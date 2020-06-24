import { Component } from '@angular/core';
//import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
//import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
 
    columnDefs = [
        {headerName: 'Make', field: 'make', resizable: true },
        {headerName: 'Model', field: 'model', resizable: true },
        {headerName: 'Price', field: 'price', resizable: true }
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Citroen', model: '2CV', price: 1200 }
    ];

    selectedNodes = [];
    selectData = {};

    onRowSelected(event) {
        console.log('selected:' + event.node.selected);
        //console.log('selected node:' + Object.keys(event.node));
        if(event.node.selected){ 
         console.log('selected row index:' + event.rowIndex);
         console.log('selected data:' + Object.keys(event));
         console.log('selected data items:'+
          event.data.make + " " + event.data.model + " $" + event.data.price);
         //event.api.getSelected();
        }
        if(event.node.selected) {
            //this.selectedNodes.push(event.data);
            this.selectedNodes = [event.data];
            this.selectData = event.data;
        }
    }

        kf1 (rowV:any): any { 
            let r=[]; 
            let k0=Object.keys(rowV);
            for(let i=0; i<k0.length; i++) {
              let kk = k0[i];
              r.push([kk , rowV[kk] ]);
            }
            return(r);
        }

}
