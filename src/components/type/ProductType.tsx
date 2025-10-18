

  export interface Products {
    id: number;
    title: string;
    cost: string;
    review: string;
    img: string;
  }


  export interface ProductsType {
    id: number;
    title: string;
    cost: string;
    review: string;
    img: string;
    discount?: string;
    images:string[]
  }

    export interface BlogsType {
    id: number;
    title: string;
    dec: string;
    image: string;
    description: string;
  }