export interface ProductType {
  IdProduct: number
  Price: number
  Name: string
  Quantity: number
}


export interface Product {
  OperationType: number
  IdCombination: null | number
  Quantity: number
  Round: number
  StatusType: number
  Note: string
  IsOnHold: boolean
  IsComboProduct: boolean
  Id: number
  IdProduct: number
  DisplayOrder: number
  Name: string
  Price: number
  HasModifiers: boolean
  ShowModifiers: boolean
  OutOfStock: boolean
  ProductModifiers: ProductModifier[]
  CurrentCourse: CurrentCourse
  IsOpenPrice: boolean
  IdTaxType: number
  New: boolean
  ProductSubCategoryName: string
  DateCreated: string
}

// export interface CurrentCourse {
//   Id: number
//   DisplayOrder: number
//   Name: any
//   IsChangable: boolean
//   CourseTime: number
// }

//   export interface Product {
//     OperationType: number
//     ProductModifiers: ProductModifier[]
//     ProductAllergens: ProductAllergen[] | null
//     ProductSubCategoryName: string | null
//     Id: number
//     IdProduct: number,
//     IdOtherPos: null | number
//     DisplayOrder: number
//     Name: string
//     Price: number
//     HasModifiers: boolean
//     ShowModifiers: boolean
//     OutOfStock: boolean
//     CurrentCourse: CurrentCourse2
//     IsOpenPrice: boolean
//     IsPromotion: boolean
//     DateCreated: string
//     IdTransfer: number
//     CreatedBy: string
//     New: boolean
//   }
  
  export interface ProductModifier {
    IdProduct: number
    DisplayOrder: number
    IdProductModifier: number
    Title: string
    IsMandatory: boolean
    SelectionMin: number
    SelectionMax: number
    ProductModifierItems: ProductModifierItem[]
    Note: string | null
    ProductModifierType: number
  }
  
  export interface ProductModifierItem {
    IsDefaultSelection: boolean
    Description: string
    ProductSubCategoryName: string | null
    Id: number
    IdOtherPos: number | null
    DisplayOrder: number
    Name: string
    Price: number
    HasModifiers: boolean
    ShowModifiers: boolean
    OutOfStock: boolean
    CurrentCourse: CurrentCourse
    IsOpenPrice: boolean
    IsPromotion: boolean
    DateCreated: string
    IdTransfer: number
    CreatedBy: string | null
  }
  
  export interface CurrentCourse {
    Id: number
    DisplayOrder: number
    Name: string | null
    IsChangable: boolean
    CourseTime: number
  }
  
  export interface ProductAllergen {
    HasAllergens: boolean
    Id: number
    AllergenDetails: AllergenDetail[]
  }
  
  export interface AllergenDetail {
    IdAllergenType: number
  }
  
  export interface CurrentCourse2 {
    Id: number
    DisplayOrder: number
    Name: string | null
    IsChangable: boolean
    CourseTime: number
  }


// export interface Order {
//   OperationType: number;
//   Id: number;
//   OrderExtended: OrderExtended;
//   IdTable: number;
//   TableSufix: string;
//   Type: string;
//   AdditionalInfo: any;
//   IsParked: boolean;
//   SittingPersons: number;
//   TypeDiscount: string;
//   Discount: number;
//   CurrentCourse: CurrentCourse;
//   CustomerName: any;
//   Note: any;
//   TipAmount: number;
//   GratuityAmount: number;
//   CalculatedDiscountAmount: number;
//   OrderedProducts: OrderedProduct[];
//   AvailableTableSufixes: string[];
//   IsInARush: boolean;
//   IdCorrectionOption: any;
//   CreatedBy: any;
//   ModifiedBy: any;
//   GiftCards: any[];
// }

// export interface OrderExtended {
//   Customer: any;
//   Id: any;
//   OrderNumber: any;
//   OrderKey: any;
//   Data: any;
//   SourceTypeId: number;
//   IdCustomer: number;
//   PublicReference: any;
//   Platform: any;
//   OrderTypeId: number;
//   OrderDate: string;
//   RequestedTime: any;
//   PredictedTime: any;
//   ConfirmedTime: any;
//   CourierTypeId: any;
//   IdCourier: any;
//   DeliveryCosts: number;
//   TotalPrice: number;
//   Discount: any;
//   IsPaid: boolean;
//   PaymentMethodTypeId: any;
//   Remark: any;
//   IsSynced: boolean;
//   StatusTypeId: number;
//   Active: boolean;
//   CreatedBy: any;
//   ModifiedBy: any;
//   DateCreated: string;
//   LastModified: any;
// }

// export interface CurrentCourse {
//   Id: number;
//   DisplayOrder: number;
//   Name: any;
//   IsChangable: boolean;
//   CourseTime: number;
// }

// export interface OrderedProduct {
//   OperationType: number;
//   IdProduct: number;
//   IdTaxType: number;
//   IdCombination: any;
//   Quantity: number;
//   Round: number;
//   StatusType: number;
//   Note: string;
//   IsOnHold: boolean;
//   IsComboProduct: boolean;
//   ComboProductName: any;
//   ProductModifiers: any[];
//   IdPrinter: number;
//   IsStatusChange: boolean;
//   ProductSubCategoryName: string;
//   Id: number;
//   IdOtherPos: any;
//   DisplayOrder: number;
//   Name: string;
//   Price: number;
//   HasModifiers: boolean;
//   ShowModifiers: boolean;
//   OutOfStock: boolean;
//   CurrentCourse: CurrentCourse2;
//   IsOpenPrice: boolean;
//   IsPromotion: boolean;
//   DateCreated: string;
//   IdTransfer: number;
//   CreatedBy: any;
// }

// export interface CurrentCourse2 {
//   Id: number;
//   DisplayOrder: number;
//   Name: any;
//   IsChangable: boolean;
//   CourseTime: number;
// }

// export interface OrderExtended2 {
//   Customer: any;
//   Id: any;
//   OrderNumber: any;
//   OrderKey: any;
//   Data: any;
//   SourceTypeId: number;
//   IdCustomer: number;
//   PublicReference: any;
//   Platform: any;
//   OrderTypeId: number;
//   OrderDate: string;
//   RequestedTime: any;
//   PredictedTime: any;
//   ConfirmedTime: any;
//   CourierTypeId: any;
//   IdCourier: any;
//   DeliveryCosts: number;
//   TotalPrice: number;
//   Discount: any;
//   IsPaid: boolean;
//   PaymentMethodTypeId: any;
//   Remark: any;
//   IsSynced: boolean;
//   StatusTypeId: number;
//   Active: boolean;
//   CreatedBy: any;
//   ModifiedBy: any;
//   DateCreated: string;
//   LastModified: any;
// }

// export interface BillBalance {
//   LeftAmmout: number;
//   TotalAmmount: number;
//   DiscountAmmount: number;
//   PartialAmount: number;
//   IsDivideOnEqualParts: boolean;
//   ExcludedFromDiscount: number;
//   Taxes: Tax[];
// }

// export interface Tax {
//   IdTax: number;
//   Description: string;
//   Percent: number;
//   Amount: number;
// }

// export interface NewSuffixCreationPostBodyType {
//   IdTable: number;
//   OperationType: number;
//   SittingPersons: number;
// }

// [{"OperationType":1,"IdCombination":null,"Quantity":13,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":278262,"DisplayOrder":7,"Name":"TA29. Tonijn Handrol","Price":3.6,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:19.337Z"},{"OperationType":1,"IdCombination":null,"Quantity":1,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":239576,"DisplayOrder":3,"Name":"TA20. zeewier & tofu Gunkan","Price":2.3,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:19.032Z"},{"OperationType":1,"IdCombination":null,"Quantity":1,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":278261,"DisplayOrder":6,"Name":"TA28. Zalm Handrol","Price":3.4,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:18.595Z"},{"OperationType":1,"IdCombination":null,"Quantity":1,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":239575,"DisplayOrder":2,"Name":"TA19. tonijn & tofu Gunkan","Price":2.4,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:18.344Z"},{"OperationType":1,"IdCombination":null,"Quantity":1,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":278259,"DisplayOrder":4,"Name":"TA26. Zeewier Handrol","Price":3.4,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:17.798Z"},{"OperationType":1,"IdCombination":null,"Quantity":1,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":278260,"DisplayOrder":5,"Name":"TA27. California Handrol","Price":3.2,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:17.434Z"},{"OperationType":1,"IdCombination":null,"Quantity":4,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":239574,"DisplayOrder":1,"Name":"TA18. Zalm Gunkan","Price":2.3,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"GUNKAN","DateCreated":"2025-09-11T11:17:17.076Z"},{"OperationType":1,"IdCombination":null,"Quantity":8,"Round":1,"StatusType":0,"Note":"","IsOnHold":false,"IsComboProduct":false,"Id":0,"IdProduct":363108,"DisplayOrder":1,"Name":"2. Tonijn Nigiri","Price":0,"HasModifiers":false,"ShowModifiers":false,"OutOfStock":false,"ProductModifiers":[],"CurrentCourse":{"Id":0,"DisplayOrder":0,"Name":null,"IsChangable":false,"CourseTime":0},"IsOpenPrice":false,"IdTaxType":0,"New":true,"ProductSubCategoryName":"1-9","DateCreated":"2025-09-11T11:17:14.656Z"},{"OperationType":1,"IdCombination"}