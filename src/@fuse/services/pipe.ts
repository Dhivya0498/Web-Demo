import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'convertFrom24To12Format' ,
    pure: false
})
export class TimeFormatPipe implements PipeTransform {
    transform(time: any): any {
        if(time !=  "" && time != null && time != undefined){
            let hour = (time.split(':'))[0]
            let min = (time.split(':'))[1]
            let part = hour > 12 ? 'PM' : 'AM';
            min = (min + '').length == 1 ? `0${min}` : min;
            hour = hour > 12 ? hour - 12 : hour;
            hour = (hour + '').length == 1 ? `0${hour}` : hour;
            return `${hour}:${min} ${part}`
        }
        else{
            return ""; 
        }
    }
}

@Pipe({
    name: 'filterClientNameData',
    pure: false
})
export class FilterClientNamePipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Client Name') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.customer_name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Client Name Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.customer_name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterUOMData',
    pure: false
})
export class FilterUOMDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'UOM') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.uom.toLowerCase().includes(searchText) ;
            });
        }
        else if (type == 'UOM Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.uom.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}


@Pipe({
    name: 'filteraccessoryData',
    pure: false
})
export class FilterAccessoriesPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Accessory') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.category.toLowerCase().includes(searchText) ;
            });
        }
        else if (type == 'Accessory Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.category.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterCategory',
    pure: false
})
export class FilterCategoryPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Category') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.toLowerCase().includes(searchText) ;
            });
        }
        else if (type == 'Category Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterPaymentTermData',
    pure: false
})
export class FilterCountryDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Country') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Country Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterDivisionData',
    pure: false
})
export class FilterDivisionDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Division') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.division.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Division Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.division.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterPestTypeData',
    pure: false
})
export class FilterPestTypeDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Pest Type') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.pestTypes.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Pest Type Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.pestTypes.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterJobTypeData',
    pure: false
})
export class FilterJobTypeDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Job Type') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.jobType.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Job Type Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.jobType.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterPaymentModeData',
    pure: false
})
export class FilterPaymentModeDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Payment Mode') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.paymentMode.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Payment Mode Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.paymentMode.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterBillingFrequencyData',
    pure: false
})
export class FilterBillingFrequencyDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Billing Frequency') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.billingFrequency.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Billing Frequency Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.billingFrequency.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterPaymentTermData',
    pure: false
})
export class FilterPaymentTermDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Payment Term') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.paymentterm.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Payment Term Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.paymentterm.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterProcessStageData',
    pure: false
})
export class FilterProcessStageDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Process Stage') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.processStage.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Process Stage Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.processStage.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterColorData',
    pure: false
})
export class FilterColorDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Color') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.color.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Color Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.color.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterStyleData',
    pure: false
})
export class FilterStyleDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Style') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.style.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Style Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.style.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterOrderNameData',
    pure: false
})
export class FilterOrderNameDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Order Name') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.orderName.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Order Name Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.orderName.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterFabricData',
    pure: false
})
export class FilterFabricDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Fabric') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.fabric.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Fabric Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.fabric.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterDiaData',
    pure: false
})
export class FilterDiaDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Dia') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.dia.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Dia Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.dia.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterGsmData',
    pure: false
})
export class FilterGsmDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Gsm') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.gsm.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Gsm Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.gsm.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterLotNoData',
    pure: false
})
export class FilterLotNoDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'LotNo') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.lotNo.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'LotNo Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.lotNo.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterLineNoData',
    pure: false
})
export class FilterLineNoDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Line') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.lineName.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Line Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.lineName.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterEnquiryNumberData',
    pure: false
})
export class FilterEnquiryNumberDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Enquiry Number') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Enquiry Number Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterCoverageAreaData',
    pure: false
})
export class FilterCoverageAreaDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Coverage Area') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.coverageArea.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Coverage Area Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.coverageArea.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterScheduleFrequencyData',
    pure: false
})
export class FilterScheduleFrequencyDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Schedule Frequency') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.scheduleFrequency.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Schedule Frequency Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.scheduleFrequency.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}



@Pipe({
    name: 'filterWorkOrderData',
    pure: false
})
export class FilterWorkOrderDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Work Order') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Work Order Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}
@Pipe({
    name: 'filterContractData',
    pure: false
})
export class FilterContractDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Contract') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Contract Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterWorkOrderReferenceData',
    pure: false
})
export class FilterWorkOrderReferenceDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Work Order') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Work Order Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.referenceNo.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterUnitData',
    pure: false
})
export class FilterUnitDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Unit') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.unit.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Unit Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.unit.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}
@Pipe({
    name: 'filterCategoryData',
    pure: false
})
export class FilterCategoryDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Category') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.category.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Category Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.category.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}
@Pipe({
    name: 'filterSupplierData',
    pure: false
})
export class FilterSupplierDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Supplier') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Supplier Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterStoreData',
    pure: false
})
export class FilterStoreDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Store') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Store') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterProductName',
    pure: false
})
export class FilterProductNameDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Product Name') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Product Name Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterPurposeData',
    pure: false
})
export class FilterPurposeDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Purpose') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.description.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Purpose Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.description.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterCurrencyData',
    pure: false
})
export class FilterCurrencyDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Currency') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.currency.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Currency Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.currency.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterManufacturerData',
    pure: false
})
export class FilterManufacturerDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Manufacturer') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Manufacturer Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterDepreciationData',
    pure: false
})
export class FilterDepreciationDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Depreciation') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.depreciationType.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Depreciation Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.depreciationType.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterMaintenanceTypeData',
    pure: false
})
export class FilterMaintenanceTypeDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Manitenance Type') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.maintenanceType.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Manitenance Type Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.maintenanceType.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterStatusData',
    pure: false
})
export class FilterStatusDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Status') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.status.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Status Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.status.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterAssetModelData',
    pure: false
})
export class FilterAssetModelDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Model') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Model Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.name.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}

@Pipe({
    name: 'filterTeamNameData',
    pure: false
})
export class FilterTeamNameDataPipe implements PipeTransform {
    transform(items: any[], searchText: string, type: string): any[] {
        if (!items) return [];
        if (type == 'Team Name') {
            if (!searchText) return items;
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.teamName.toLowerCase().includes(searchText);
            });
        }
        else if (type == 'Team Name Auto') {
            if (!searchText) return [];
            searchText = searchText.toLowerCase();
            return items.filter(item => {
                return item.teamName.toLowerCase().includes(searchText);
            });
        }
        else {
            return items;
        }
    }
}



//============Sample==============//
// @Pipe({
//     name: 'filter',
//     pure: false
// })
// export class FilterPipe implements PipeTransform {
//     transform(items: any[], filter: { [key: string]: any }): any {
//         try {
//             return items.filter(item => {
//                 let notMatchingField = Object.keys(filter)
//                     .find(key => item[key] !== filter[key]);
//                 return !notMatchingField;
//             });
//         }
//         catch (e) {
//             return items;
//         }
//     }
// }
// @Pipe({
//     name: 'sortBy'
// })
// export class SortByPipe implements PipeTransform {
//     transform(items: any[], sortedBy: string): any {
//         return items.sort((a, b) => { return b[sortedBy] - a[sortedBy] });
//     }
// }
