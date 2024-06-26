interface Brand {
  code: string;
  color: string;
  imagePath: string | null;
  id: number;
  name: string;
}

interface RowData {
  id: number;
  companyname: string;
  stores: number;
  agents: number;
  brands: string;
}


interface Partner {
  id: number;
  companyName: string;
  companyWebsite: string;
  ecommerce: boolean;
  hoAddressLine1: string;
  hoCity: string;
  hoState: string;
  hoZip: string;
}

interface PageProps {
  params: {
    details: string[];
  };
}

interface PartnerData {
  id: number;
  imageDetail: any; // Adjust the type as per your data structure
  companyName: string;
  companyWebsite: string;
  ecommerce: boolean;
  // Add other fields as necessary
}

interface userstate {
  ids: number | any;
  isLoading: boolean;
  isError: boolean;
}

interface FormValues {
  companyName: string;
  companyWebsite: string;
  ecommerce: string;
  brandIds: string;
  hoAddressLine1: string;
  hoAddressLine2: string;
  hoCity: string;
  hoCountryId: string;
  hoStateId: string;
  hoZip: string;
}


interface val {
  username: string;
  password: string;
}

interface countss{
  totalcount: number | null,
  isLoading: boolean,
  isError: boolean, 
}

