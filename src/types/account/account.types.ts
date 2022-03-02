import { ApprovalActionEnum, ApprovalStatusEnum, BaseDateTime } from '@type/common';

export type AccountOpeningInProgressTableDataSource = {
    id: string;
    chineseName?: string;
    englishName?: string;
    accountTypeEnum?: AccountTypeEnum;
    idDocumentType?: IdentityDocumentTypeEnum;
    idDocumentNumber?: string;
    callingCode?: string;
    phoneNumber?: string;
    applicationDateTime?: BaseDateTime;
};

export type AccountOpeningSubmittedTabTableDataSource = {
    requestFormId: string;
    chineseName?: string;
    englishName: string;
    accountTypeEnum: AccountTypeEnum;
    idDocumentType: IdentityDocumentTypeEnum;
    idDocumentNumber: string;
    callingCode?: string;
    phoneNumber?: string;
    applicationDateTime: BaseDateTime;
    isAEApproved: boolean;
    isROApproved: boolean;
    aeUserId: string;
    roUserId: string;
    aeApprovalAction?: ApprovalActionEnum;
    roApprovalAction?: ApprovalActionEnum;
};

export type AccountOpeningApprovedTabTableDataSource = {
    requestFormId: string;
    chineseName?: string;
    englishName: string;
    accountTypeEnum: AccountTypeEnum;
    idDocumentType: IdentityDocumentTypeEnum;
    idDocumentNumber: string;
    callingCode?: string;
    phoneNumber?: string;
    applicationDateTime: BaseDateTime;
    isAEApproved: boolean;
    isROApproved: boolean;
    aeUserId: string;
    roUserId: string;
    aeApprovalAction?: ApprovalActionEnum;
    roApprovalAction?: ApprovalActionEnum;
};

export enum AccountTypeEnum {
    'CASH' = 'CASH',
    'MARGIN' = 'MARGIN',
}

export enum StockMarketTypeEnum {
    'HK' = 'HK',
    'US' = 'US',
    'CN' = 'CN',
}

export enum TitleEnum {
    'MR' = 'MR',
    'MRS' = 'MRS',
    'MS' = 'MS',
}

export enum IdentityDocumentTypeEnum {
    'HK_ID' = 'HK_ID',
    'CHINESE_ID' = 'CHINESE_ID',
    'PASSPORT' = 'PASSPORT',
}

export enum BusinessNatureEnum {
    'ACCOUNTING' = 'ACCOUNTING',
    'ADMIN_AND_HR' = 'ADMIN_AND_HR',
    'BANKING_OR_FINANCE' = 'BANKING_OR_FINANCE',
    'BEAUTY_CARE_OR_HEALTH' = 'BEAUTY_CARE_OR_HEALTH',
    'BUILDING_AND_CONSTRUCTION' = 'BUILDING_AND_CONSTRUCTION',
    'DESIGN' = 'DESIGN',
    'ECOMMERCE' = 'ECOMMERCE',
    'EDUCATION' = 'EDUCATION',
    'ENGINEERING' = 'ENGINEERING',
    'HOSPITALITY_OR_F&B' = 'HOSPITALITY_OR_F&B',
    'INFORMATION_TECHNOLOGY' = 'INFORMATION_TECHNOLOGY',
    'LAW' = 'LAW',
    'INSURANCE' = 'INSURANCE',
    'MANAGEMENT' = 'MANAGEMENT',
    'MARKETING_OR_PUBLIC_RELATIONS' = 'MARKETING_OR_PUBLIC_RELATIONS',
    'MEDIA_AND_ADVERTISING' = 'MEDIA_AND_ADVERTISING',
    'MEDICAL_SERVICES' = 'MEDICAL_SERVICES',
    'MERCHANDISING_AND_PURCHASING' = 'MERCHANDISING_AND_PURCHASING',
    'PROFESSIONAL_SERVICES' = 'PROFESSIONAL_SERVICES',
    'PROPERTY_OR_REAL_ESTATE' = 'PROPERTY_OR_REAL_ESTATE',
    'PUBLIC_OR_CIVIL' = 'PUBLIC_OR_CIVIL',
    'SALES_AND_CS_AND_BUSINESS_DEVELOPMENT' = 'SALES_AND_CS_AND_BUSINESS_DEVELOPMENT',
    'SCIENCES_LAB_AND_R&D' = 'SCIENCES_LAB_AND_R&D',
    'TRANSPORTATION_AND_LOGISTICS' = 'TRANSPORTATION_AND_LOGISTICS',
    'OTHERS' = 'OTHERS',
}

export enum EducationLevelEnum {
    'PRIMARY' = 'PRIMARY',
    'SECONDARY' = 'SECONDARY',
    'HIGH_DIPLOMA_OR_ASSOCIATE_DEGREE' = 'HIGH_DIPLOMA_OR_ASSOCIATE_DEGREE',
    'BACHELOR_DEGREE_OR_ABOVE' = 'BACHELOR_DEGREE_OR_ABOVE',
}

export enum EmploymentInformationEnum {
    'EMPLOYED' = 'EMPLOYED',
    'SELF_EMPLOYED' = 'SELF_EMPLOYED',
    'STUDENT' = 'STUDENT',
    'RETIRED' = 'RETIRED',
    'HOUSEWIFE' = 'HOUSEWIFE',
    'UNEMPLOYED' = 'UNEMPLOYED',
    'OTHERS' = 'OTHERS',
}

export enum CorrespondenceAddressEnum {
    'RESIDENTIAL_ADDRESS' = 'RESIDENTIAL_ADDRESS',
    'OFFICE_ADDRESS' = 'OFFICE_ADDRESS',
}

export enum SourceOfWealthEnum {
    'SALARY' = 'SALARY',
    'BUSINESS_INCOME' = 'BUSINESS_INCOME',
    'PERSONAL_SAVING' = 'PERSONAL_SAVING',
    'INHERITANCE' = 'INHERITANCE',
    'RETURN_ON_INVESTMENT' = 'RETURN_ON_INVESTMENT',
    'OTHERS' = 'OTHERS',
}

export enum AnnualIncomeEnum {
    'BELOW_200K' = 'BELOW_200K',
    'BETWEEN_200K_AND_400K' = 'BETWEEN_200K_AND_400K',
    'BETWEEN_400K_AND_800K' = 'BETWEEN_400K_AND_800K',
    'BETWEEN_800K_AND_1M' = 'BETWEEN_800K_AND_1M',
    'ABOVE_1M' = 'ABOVE_1M',
}

export enum AssetTypeEnum {
    'PROPERTY' = 'PROPERTY',
    'DEPOSITS' = 'DEPOSITS',
    'VEHICLE' = 'VEHICLE',
    'LISTED_SECURITIES' = 'LISTED_SECURITIES',
    'BONDS' = 'BONDS',
    'FUND' = 'FUND',
    'OTHERS' = 'OTHERS',
}

export enum EstimatedTotalNetAssetEnum {
    'BELOW_1M' = 'BELOW_1M',
    'BETWEEN_1M_AND_3M' = 'BETWEEN_1M_AND_3M',
    'BETWEEN_3M_AND_5M' = 'BETWEEN_3M_AND_5M',
    'BETWEEN_5M_AND_8M' = 'BETWEEN_5M_AND_8M',
    'BETWEEN_8M_AND_12M' = 'BETWEEN_8M_AND_12M',
    'ABOVE_15M' = 'ABOVE_15M',
}

export enum NatureOfOccupancyEnum {
    'QUARTERS' = 'QUARTERS',
    'LIVING_WITH_PARENT' = 'LIVING_WITH_PARENT',
    'RENTED' = 'RENTED',
    'FAMILY_PROPERTY' = 'FAMILY_PROPERTY',
    'MORTGAGE_PROPERTY' = 'MORTGAGE_PROPERTY',
    'OWNED' = 'OWNED',
    'OTHERS' = 'OTHERS',
}

export enum YearsOfInvestmentExperienceEnum {
    'NIL' = 'NIL',
    'LESS_THAN_1Y' = 'LESS_THAN_1Y',
    'BETWEEN_1Y_AND_3Y' = 'BETWEEN_1Y_AND_3Y',
    'BETWEEN_3Y_AND_7Y' = 'BETWEEN_3Y_AND_7Y',
    'BETWEEN_7Y_AND_10Y' = 'BETWEEN_7Y_AND_10Y',
    'MORE_THAN_10_Y' = 'MORE_THAN_10_Y',
}

export enum YearlyAverageInvestmentAmountEnum {
    'LESS_THAN_1M' = 'LESS_THAN_1M',
    'BETWEEN_1M_AND_3M' = 'BETWEEN_1M_AND_3M',
    'BETWEEN_3M_AND_5M' = 'BETWEEN_3M_AND_5M',
    'BETWEEN_5M_AND_8M' = 'BETWEEN_5M_AND_8M',
    'BETWEEN_8M_AND_10M' = 'BETWEEN_8M_AND_10M',
    'ABOVE_10M' = 'ABOVE_10M',
}

export enum InvestmentObjectivesEnum {
    'CAPITAL_PRESERVATION' = 'CAPITAL_PRESERVATION',
    'CAPITAL_GROWTH' = 'CAPITAL_GROWTH',
    'DIVIDEND_YIELD' = 'DIVIDEND_YIELD',
    'HEDGING' = 'HEDGING',
    'ARBITRAGE' = 'ARBITRAGE',
    'SPECULATION' = 'SPECULATION',
    'OTHERS' = 'OTHERS',
}

export enum RiskToleranceEnum {
    'LOW' = 'LOW',
    'MEDIUM' = 'MEDIUM',
    'HIGH' = 'HIGH',
}

export enum TypeOfProductInvestedEnum {
    'STOCKS' = 'STOCKS',
    'FUTURES_OR_OPTIONS' = 'FUTURES_OR_OPTIONS',
    'FOREX_OR_BILLION' = 'FOREX_OR_BILLION',
    'DERIVATIVES' = 'DERIVATIVES',
    'BONDS_OR_CD' = 'BONDS_OR_CD',
    'UNIT_TRUSTS_OR_FUND' = 'UNIT_TRUSTS_OR_FUND',
    'OTHERS' = 'OTHERS',
}

export enum TypeOfDerivativesInvestedEnum {
    'CBBC' = 'CBBC',
    'DERIVATIVE_WARRANTS' = 'DERIVATIVE_WARRANTS',
    'ETF' = 'ETF',
    'OTHERS' = 'OTHERS',
}

export enum KnowledgeOfDerivativeProductsEnum {
    'WITH' = 'WITH',
    'WITHOUT' = 'WITHOUT',
    'FULLY' = 'FULLY',
}

export enum KnowledgeofDerivativesEnum {
    'HAVE_KNOWLEDGE' = 'HAVE_KNOWLEDGE',
    'DO_NOT_HAVE_KNOWLEDGE' = 'DO_NOT_HAVE_KNOWLEDGE',
}

export enum ClientInvestmentInterestEnum {
    'MAIN_BOARD' = 'a',
    'GEM' = 'b',
    'ETF' = 'c',
    'DERIVATIVE' = 'd',
    'NORTHBOUND_CHINA_CONNECT_ORDERS' = 'e',
    'US_STOCKS' = 'f',
}

export enum FundsDespoitMethodEnum {
    'EDDA' = 'EDDA',
    'FPS' = 'FPS',
    'E_BANKING' = 'E_BANKING',
    'ATM' = 'ATM',
}

export enum StatementLanguageEnum {
    'ENGLISH' = 'EN_US',
    'TRADITIONAL_CHINESE' = 'ZH_HK',
    'SIMPLIFIED_CHINESE' = 'ZH_CN',
}
