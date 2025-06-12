interface User{
id: number;
contact_info: Contact[];
Name: string;
Surname: string;
email: string;
phone: string; 
auth_id: string;
role: Role[];
status: Status;
}

type Contact = {
    id: number;
    type: ContactType;
    text: string;
};

type Role = {
    id: number;
    type: RoleType;
}

enum Status {
    active = 'active',
    pending = 'pending',
    blocked = 'blocked',
    deleted = 'deleted',
    paid = 'paid',
}

enum RoleType {
    admin = 'admin',
    user = 'user',
}

enum ContactType {
    phone = 'phone',
    email = 'email',
    other = 'other',
}


interface Settings {
Id: number;
user_id: number;
Settings: Setting[]; 
company_info: CompanyInfo;
}

type Setting = {
    id: number;
    type: SettingType;
    text: string;
}

enum SettingType {
    location = 'location',
    multilogin = 'multilogin'
}

interface CompanyInfo {
    id: number;
    business_name: string;
    address: string;
    country: string;
    zip: string;
    business_id: string;
}

interface Product {
id: number;
Title: string;
description: string;
media: Media[]; 
PriceRanges: PriceQuantity[];
// meta;
}

type Media = {
    id: number;
    src: string;
    type: MediaType;
}

enum MediaType {
    png = 'png',
    mp4 = 'mp4',
    jpeg = 'jpeg',
    svg = 'svg',
}

interface Order {
id: number;
product_id: number;
user_id: number;
quantity: number;
status: Status;
date: Date;
}

type PriceQuantity = {
    quantity_from: number;
    quantity_to: number;
    price: number;
}

interface Suggestion{
id: number;
comment: string;
price: number;
Quantity: number;
order_id: number;
status: Status;
}

